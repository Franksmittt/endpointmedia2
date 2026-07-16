import 'server-only';

import { createHmac, timingSafeEqual } from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';
import { markOnboardingPaid } from '@/lib/onboarding/payment';
import { prisma } from '@/lib/prisma';
import { getStoreProduct } from '@/lib/store-products';

export const runtime = 'nodejs';

type PaystackWebhookPayload = {
  event?: string;
  data?: {
    reference?: string;
    status?: string;
    amount?: number;
    currency?: string;
    customer?: {
      email?: string;
    };
    metadata?: {
      productSlug?: string;
      productName?: string;
      type?: string;
      submissionId?: string;
      [key: string]: unknown;
    };
  };
};

function verifyPaystackSignature(rawBody: string, signature: string, secret: string): boolean {
  const expected = createHmac('sha512', secret).update(rawBody).digest('hex');
  const expectedBuffer = Buffer.from(expected, 'hex');
  const signatureBuffer = Buffer.from(signature, 'hex');

  if (expectedBuffer.length !== signatureBuffer.length) {
    return false;
  }

  return timingSafeEqual(expectedBuffer, signatureBuffer);
}

export async function POST(request: NextRequest) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) {
    return NextResponse.json({ error: 'Paystack secret is not configured.' }, { status: 500 });
  }

  const signature = request.headers.get('x-paystack-signature') ?? '';
  if (!signature) {
    return NextResponse.json({ error: 'Missing Paystack signature.' }, { status: 401 });
  }

  const rawBody = await request.text();
  if (!verifyPaystackSignature(rawBody, signature, secret)) {
    return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
  }

  let payload: PaystackWebhookPayload;
  try {
    payload = JSON.parse(rawBody) as PaystackWebhookPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  const reference = payload.data?.reference;
  if (!reference) {
    return NextResponse.json({ received: true, ignored: 'missing_reference' }, { status: 200 });
  }

  // Onboarding first-invoice payments (Phase 4 optional Paystack path)
  const metaType = payload.data?.metadata?.type;
  const submissionId =
    typeof payload.data?.metadata?.submissionId === 'string'
      ? payload.data.metadata.submissionId
      : undefined;

  if (metaType === 'onboarding' && submissionId) {
    if (payload.event && payload.event !== 'charge.success') {
      return NextResponse.json({ received: true, ignored: 'non_success_event' }, { status: 200 });
    }
    if (payload.data?.status && payload.data.status !== 'success') {
      return NextResponse.json({ received: true, ignored: 'not_success' }, { status: 200 });
    }

    const amountZar =
      typeof payload.data?.amount === 'number'
        ? Math.round(payload.data.amount / 100)
        : undefined;

    const result = await markOnboardingPaid(submissionId, {
      method: 'paystack',
      paystackReference: reference,
      amountZar,
      note: 'Paystack charge.success webhook',
    });

    return NextResponse.json({
      received: true,
      onboarding: true,
      ok: result.ok,
      alreadyActive: result.ok ? result.alreadyActive : false,
      error: result.ok ? undefined : result.error,
    });
  }

  const existing = await prisma.storePayment.findUnique({
    where: { reference },
    select: { id: true },
  });

  if (existing) {
    return NextResponse.json({ received: true, idempotent: true }, { status: 200 });
  }

  const productSlug =
    typeof payload.data?.metadata?.productSlug === 'string'
      ? payload.data.metadata.productSlug
      : undefined;
  const product = getStoreProduct(productSlug);

  await prisma.storePayment.create({
    data: {
      reference,
      event: payload.event ?? 'unknown',
      status: payload.data?.status,
      amount: payload.data?.amount,
      currency: payload.data?.currency,
      productSlug: product?.slug ?? productSlug,
      productName:
        product?.name ??
        (typeof payload.data?.metadata?.productName === 'string'
          ? payload.data.metadata.productName
          : undefined),
      customerEmail: payload.data?.customer?.email,
      rawPayload: payload as object,
    },
  });

  return NextResponse.json({ received: true }, { status: 200 });
}
