import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { rateLimit } from '@/lib/rate-limit';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const MAX = { name: 120, email: 254, phone: 32, message: 5000, source: 64 };

function sanitizeHeader(value: unknown, max = 120): string {
  return String(value ?? '')
    .replace(/[\r\n\t]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
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

    const toEmail = process.env.CONTACT_TO_EMAIL || 'hello@endpointmedia.co.za';

    if (!resend) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact us directly.' },
        { status: 503 }
      );
    }

    const safeName = sanitizeHeader(name);
    const safeSource = sanitizeHeader(source, MAX.source);
    const leadSource = safeSource || 'contact-form';
    const subject = `[${leadSource}] New inquiry from ${safeName}`;

    await resend.emails.send({
      from: 'Endpoint Media <contact@endpointmedia.co.za>',
      to: toEmail,
      replyTo: String(email),
      subject,
      text: [
        `Source: ${leadSource}`,
        `Name: ${safeName}`,
        `Email: ${email}`,
        `Phone: ${phone || 'Not provided'}`,
        '',
        String(message),
      ].join('\n'),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been received. We will be in touch within 24 hours.',
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
