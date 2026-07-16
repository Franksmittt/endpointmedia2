import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { getBearerFromRequest } from '@/lib/onboarding/auth';
import {
  markOnboardingPaid,
  type MarkPaidInput,
} from '@/lib/onboarding/payment';

/**
 * Mark first invoice paid → status active.
 * POST /api/onboarding/[id]/activate
 * Authorization: Bearer CONTACT_ADMIN_SECRET
 *
 * Body (optional):
 * { paidAt?, amountZar?, note?, method?: "eft" | "paystack", paystackReference? }
 */
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const secret = (process.env.CONTACT_ADMIN_SECRET ?? '').trim();
  const bearer = (getBearerFromRequest(request) ?? '').replace(/^Bearer\s+/i, '').trim();
  if (!secret || !bearer || bearer !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await context.params;
  let body: MarkPaidInput = {};
  try {
    const text = await request.text();
    if (text.trim()) body = JSON.parse(text) as MarkPaidInput;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const result = await markOnboardingPaid(id, body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 409 });
  }

  return NextResponse.json({
    success: true,
    alreadyActive: result.alreadyActive,
    message: result.alreadyActive
      ? 'Already active.'
      : 'Payment recorded. Status is active — work may begin.',
    submission: {
      id: result.submission.id,
      status: result.submission.status,
      paidAt: result.submission.paidAt,
      paymentMethod: result.submission.paymentMethod,
      paymentAmountZar: result.submission.paymentAmountZar,
      paymentReference: result.submission.paymentReference,
    },
  });
}
