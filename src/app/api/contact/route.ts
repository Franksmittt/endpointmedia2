import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { prisma } from '@/lib/prisma';
import { rateLimit } from '@/lib/rate-limit';

const MAX = { name: 120, email: 254, phone: 32, message: 5000, source: 64 };

function sanitizeHeader(value: unknown, max = 120): string {
  return String(value ?? '')
    .replace(/[\r\n\t]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

function getResendClient(): Resend | null {
  const apiKey = (process.env.RESEND_API_KEY ?? '').trim();
  if (!apiKey) return null;

  try {
    return new Resend(apiKey);
  } catch (error) {
    console.error('Invalid RESEND_API_KEY:', error);
    return null;
  }
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === 'object' && error !== null) {
    const maybeMessage = (error as { message?: unknown }).message;
    if (typeof maybeMessage === 'string') return maybeMessage;
  }
  return 'Unknown email provider error';
}

/** Primary + optional CC/notify addresses from env. */
function getNotifyRecipients(): string[] {
  const primary = (process.env.CONTACT_TO_EMAIL || 'hello@endpointmedia.co.za').trim();
  const extras = [
    process.env.CONTACT_CC_EMAIL,
    process.env.CONTACT_NOTIFY_EMAILS,
  ]
    .flatMap((value) => (value ?? '').split(/[,;\s]+/))
    .map((value) => value.trim())
    .filter(Boolean);

  return Array.from(new Set([primary, ...extras].filter(Boolean)));
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Unsupported Media Type' }, { status: 415 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests. Try again shortly.' }, { status: 429 });
  }

  try {
    const resend = getResendClient();
    const body = await request.json();
    const { name, email, phone, message, honeypot, website, source } = body;

    const trap = website ?? honeypot;
    if (trap) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    if (
      String(name).length > MAX.name ||
      String(email).length > MAX.email ||
      String(message).length > MAX.message ||
      (phone && String(phone).length > MAX.phone)
    ) {
      return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email))) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const safeName = sanitizeHeader(name);
    const safeEmail = String(email).trim().toLowerCase();
    const safePhone = phone ? sanitizeHeader(phone, MAX.phone) : '';
    const safeMessage = String(message).trim().slice(0, MAX.message);
    const safeSource = sanitizeHeader(source, MAX.source);
    const leadSource = safeSource || 'contact-form';
    const userAgent = sanitizeHeader(request.headers.get('user-agent'), 300);
    const recipients = getNotifyRecipients();
    const fromEmail = (process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev').trim();
    const subject = `[${leadSource}] New inquiry from ${safeName}`;

    // Persist first so a Resend outage never loses the lead.
    let leadId: string | null = null;
    try {
      const lead = await prisma.contactLead.create({
        data: {
          name: safeName,
          email: safeEmail,
          phone: safePhone || null,
          message: safeMessage,
          source: leadSource,
          ip: ip === 'unknown' ? null : ip,
          userAgent: userAgent || null,
          emailStatus: resend ? 'pending' : 'skipped',
        },
      });
      leadId = lead.id;
    } catch (dbError) {
      console.error('ContactLead persist failed:', dbError);
      // Continue — email may still succeed; do not hard-fail the visitor.
    }

    if (!resend) {
      console.error('RESEND_API_KEY is not configured');
      if (leadId) {
        // Lead is safe in DB even without email.
        return NextResponse.json(
          {
            success: true,
            message: 'Your inquiry has been received. We will be in touch within 24 hours.',
            leadId,
          },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly.' },
        { status: 503 }
      );
    }

    const textBody = [
      `Source: ${leadSource}`,
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      `Phone: ${safePhone || 'Not provided'}`,
      leadId ? `Lead ID: ${leadId}` : null,
      '',
      safeMessage,
    ]
      .filter(Boolean)
      .join('\n');

    const htmlBody = `
      <div style="font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.5;color:#18181b">
        <p style="margin:0 0 12px"><strong>Source:</strong> ${leadSource}</p>
        <p style="margin:0 0 12px"><strong>Name:</strong> ${safeName}</p>
        <p style="margin:0 0 12px"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p style="margin:0 0 12px"><strong>Phone:</strong> ${safePhone || 'Not provided'}</p>
        ${leadId ? `<p style="margin:0 0 12px"><strong>Lead ID:</strong> ${leadId}</p>` : ''}
        <hr style="border:none;border-top:1px solid #e4e4e7;margin:16px 0" />
        <p style="white-space:pre-wrap;margin:0">${safeMessage.replace(/</g, '&lt;')}</p>
      </div>
    `;

    let resendId: string | undefined;
    let emailError: string | undefined;

    try {
      const sendResult = await resend.emails.send({
        from: `Endpoint Media <${fromEmail}>`,
        to: recipients,
        replyTo: safeEmail,
        subject,
        text: textBody,
        html: htmlBody,
      });

      if (sendResult.error) {
        emailError = getErrorMessage(sendResult.error);
        console.error('Resend API error:', sendResult.error);
      } else {
        resendId =
          typeof sendResult.data?.id === 'string' ? sendResult.data.id : undefined;
      }
    } catch (providerError) {
      emailError = getErrorMessage(providerError);
      console.error('Resend provider exception:', providerError);
    }

    // Best-effort auto-reply so the visitor (and you) can confirm delivery.
    if (!emailError) {
      try {
        await resend.emails.send({
          from: `Endpoint Media <${fromEmail}>`,
          to: safeEmail,
          replyTo: recipients[0],
          subject: 'We received your inquiry — Endpoint Media',
          text: [
            `Hi ${safeName},`,
            '',
            'Thanks for reaching out to Endpoint Media. Your message is in our queue and Frank will reply within 24 hours.',
            '',
            'If this was urgent, WhatsApp or call 076 972 4559.',
            '',
            '— Endpoint Media',
          ].join('\n'),
        });
      } catch (autoReplyError) {
        console.error('Contact auto-reply failed:', autoReplyError);
      }
    }

    if (leadId) {
      try {
        await prisma.contactLead.update({
          where: { id: leadId },
          data: {
            emailStatus: emailError ? 'failed' : 'sent',
            resendId: resendId ?? null,
            emailError: emailError ?? null,
          },
        });
      } catch (updateError) {
        console.error('ContactLead email status update failed:', updateError);
      }
    }

    // Prefer not losing the lead: if DB saved, treat as success even when email fails.
    if (emailError && !leadId) {
      return NextResponse.json(
        {
          error:
            'Email provider rejected the request. Check RESEND_FROM_EMAIL/domain verification and try again.',
          details: emailError,
        },
        { status: 502 }
      );
    }

    if (emailError && leadId) {
      console.error(
        `Contact email failed but lead ${leadId} was saved. details=${emailError}`
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. We will be in touch within 24 hours.',
        leadId: leadId ?? undefined,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your inquiry. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
