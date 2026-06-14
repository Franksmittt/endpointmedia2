import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getStripe } from '@/lib/stripe';

export const runtime = 'nodejs';

type CheckoutRequest = {
  reportId: string;
};

function getBaseUrl(request: NextRequest): string {
  const configured = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  if (configured) return configured.replace(/\/$/, '');
  return new URL(request.url).origin;
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Unsupported Media Type' }, { status: 415 });
  }

  let body: CheckoutRequest;
  try {
    body = (await request.json()) as CheckoutRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  if (!body.reportId) {
    return NextResponse.json({ error: 'reportId is required.' }, { status: 400 });
  }

  const report = await prisma.auditReport.findUnique({
    where: { id: body.reportId },
    select: { id: true, targetUrl: true, blurState: true },
  });
  if (!report) {
    return NextResponse.json({ error: 'Audit report not found.' }, { status: 404 });
  }

  if (!report.blurState) {
    return NextResponse.json(
      { error: 'Report already unlocked.', reportUrl: `/report/${report.id}` },
      { status: 409 }
    );
  }

  try {
    const stripe = getStripe();
    const baseUrl = getBaseUrl(request);
    const amount = Number(process.env.AUDITOR_UNLOCK_AMOUNT_CENTS ?? 4900);
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
      success_url: `${baseUrl}/report/${report.id}?checkout=success`,
      cancel_url: `${baseUrl}/report/${report.id}?checkout=cancel`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: amount,
            product_data: {
              name: 'Vicious Web Auditor - Full Diagnostics Unlock',
              description: `Unblur full technical report for ${report.targetUrl}`,
            },
          },
        },
      ],
      metadata: {
        reportId: report.id,
      },
    });

    await prisma.auditReport.update({
      where: { id: report.id },
      data: { stripeSessionId: session.id },
    });

    return NextResponse.json(
      {
        checkoutUrl: session.url,
        sessionId: session.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Stripe checkout creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create Stripe checkout session.' },
      { status: 500 }
    );
  }
}

