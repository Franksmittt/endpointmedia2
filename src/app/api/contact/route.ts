import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, honeypot, source } = body;

    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
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

    const leadSource = source ? String(source) : 'contact-form';
    const subject = `[${leadSource}] New inquiry from ${name}`;

    await resend.emails.send({
      from: 'Endpoint Media <contact@endpointmedia.co.za>',
      to: toEmail,
      replyTo: String(email),
      subject,
      text: [
        `Source: ${leadSource}`,
        `Name: ${name}`,
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
