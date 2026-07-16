import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import {
  authorizeOnboardingAccess,
  getBearerFromRequest,
} from '@/lib/onboarding/auth';
import {
  buildPaymentReference,
  getFirstInvoiceAmountZar,
  isPaystackEnabled,
} from '@/lib/onboarding/invoice';
import { ensureInvoicePrepared } from '@/lib/onboarding/payment';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

/**
 * Initialize Paystack transaction for first invoice (only if Paystack env is set).
 * POST /api/onboarding/[id]/paystack/initialize
 * Body: { token: previewToken }
 */
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  if (!isPaystackEnabled()) {
    return NextResponse.json(
      { error: 'Paystack is not configured. Use EFT banking details instead.' },
      { status: 503 },
    );
  }

  const { id } = await context.params;
  let token = '';
  try {
    const body = (await request.json()) as { token?: string };
    token = (body.token ?? '').trim();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const auth = await authorizeOnboardingAccess(id, {
    bearer: getBearerFromRequest(request),
    token,
  });
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  if (auth.submission.status === 'active') {
    return NextResponse.json({ error: 'Already active / paid.' }, { status: 409 });
  }
  if (auth.submission.status !== 'awaiting_payment' && auth.submission.status !== 'signed') {
    return NextResponse.json(
      { error: `Cannot pay from status “${auth.submission.status}”.` },
      { status: 409 },
    );
  }

  await ensureInvoicePrepared(id);
  const amountZar = auth.submission.invoiceAmountZar ?? getFirstInvoiceAmountZar();
  const reference =
    auth.submission.paymentReference ?? buildPaymentReference(id);
  const base = (process.env.NEXT_PUBLIC_BASE_URL || 'https://www.endpointmedia.co.za').replace(
    /\/$/,
    '',
  );
  const callbackUrl = `${base}/onboarding/status/${id}?token=${auth.submission.previewToken}&paystack=1`;

  const secret = (process.env.PAYSTACK_SECRET_KEY ?? '').trim();
  const initRes = await fetch('https://api.paystack.co/transaction/initialize', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secret}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: auth.submission.signatoryEmail,
      amount: amountZar * 100,
      currency: 'ZAR',
      reference: `onb_${reference}_${Date.now().toString(36)}`,
      callback_url: callbackUrl,
      metadata: {
        type: 'onboarding',
        submissionId: id,
        paymentReference: reference,
        custom_fields: [
          {
            display_name: 'Entity',
            variable_name: 'entity',
            value: auth.submission.entityName,
          },
        ],
      },
    }),
  });

  const payload = (await initRes.json()) as {
    status?: boolean;
    message?: string;
    data?: { authorization_url?: string; access_code?: string; reference?: string };
  };

  if (!initRes.ok || !payload.status || !payload.data?.authorization_url) {
    return NextResponse.json(
      { error: payload.message || 'Paystack initialize failed' },
      { status: 502 },
    );
  }

  await prisma.onboardingSubmission.update({
    where: { id },
    data: { paystackReference: payload.data.reference || null },
  });

  return NextResponse.json({
    success: true,
    authorizationUrl: payload.data.authorization_url,
    accessCode: payload.data.access_code,
    reference: payload.data.reference,
    amountZar,
    nonVatLine: 'Amount Due (VAT not applicable – vendor not registered)',
  });
}
