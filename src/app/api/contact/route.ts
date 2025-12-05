// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // For now, log the submission and return success
    // TODO: Integrate with email service (SendGrid, Resend, etc.)
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone || 'Not provided');
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('================================');

    // In production, you would send an email here using a service like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - Nodemailer with SMTP
    // 
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@endpointmedia.co.za',
    //   to: 'hello@endpointmedia.co.za',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone || 'N/A'}</p><p>Message: ${message}</p>`
    // });

    return NextResponse.json(
      { 
        success: true,
        message: 'Your inquiry has been received. We will be in touch within 24 hours.'
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

