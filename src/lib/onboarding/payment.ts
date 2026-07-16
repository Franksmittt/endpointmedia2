/**
 * Phase 4 — mark paid / suspend / invoice send orchestration.
 */

import 'server-only';

import { prisma } from '@/lib/prisma';
import { sendFirstInvoiceEmail } from './email';
import { buildPaymentReference, getFirstInvoiceAmountZar } from './invoice';
import { canTransition } from './status';
import { getOnboardingSubmission, toOnboardingRecord } from './store';
import type { OnboardingSubmissionRecord } from './types';

export async function ensureInvoicePrepared(
  submissionId: string,
): Promise<OnboardingSubmissionRecord | null> {
  const row = await prisma.onboardingSubmission.findUnique({ where: { id: submissionId } });
  if (!row) return null;

  const amountZar = row.invoiceAmountZar ?? getFirstInvoiceAmountZar();
  const reference = row.paymentReference ?? buildPaymentReference(row.id);

  if (row.invoiceAmountZar != null && row.paymentReference) {
    return toOnboardingRecord(row);
  }

  const updated = await prisma.onboardingSubmission.update({
    where: { id: submissionId },
    data: {
      invoiceAmountZar: amountZar,
      paymentReference: reference,
    },
  });
  return toOnboardingRecord(updated);
}

/** Idempotent: send first invoice email once when awaiting_payment. */
export async function sendInvoiceIfNeeded(
  submissionId: string,
): Promise<{ sent: boolean; skipped: boolean; error?: string }> {
  const prepared = await ensureInvoicePrepared(submissionId);
  if (!prepared) return { sent: false, skipped: true, error: 'Not found' };

  if (prepared.status !== 'awaiting_payment' && prepared.status !== 'signed') {
    return { sent: false, skipped: true, error: `Status is ${prepared.status}` };
  }

  const row = await prisma.onboardingSubmission.findUnique({ where: { id: submissionId } });
  if (!row) return { sent: false, skipped: true, error: 'Not found' };
  if (row.invoiceEmailedAt) {
    return { sent: false, skipped: true };
  }

  const record = toOnboardingRecord(row);
  const mail = await sendFirstInvoiceEmail(record);
  if (!mail.ok) {
    return { sent: false, skipped: false, error: mail.error };
  }

  await prisma.onboardingSubmission.update({
    where: { id: submissionId },
    data: { invoiceEmailedAt: new Date() },
  });

  return { sent: true, skipped: false };
}

export type MarkPaidInput = {
  paidAt?: string;
  amountZar?: number;
  note?: string;
  method?: 'eft' | 'paystack';
  paystackReference?: string;
};

export async function markOnboardingPaid(
  submissionId: string,
  input: MarkPaidInput = {},
): Promise<
  | { ok: true; submission: OnboardingSubmissionRecord; alreadyActive: boolean }
  | { ok: false; error: string }
> {
  const current = await getOnboardingSubmission(submissionId);
  if (!current) return { ok: false, error: 'Not found' };

  if (current.status === 'active') {
    return { ok: true, submission: current, alreadyActive: true };
  }

  if (current.status !== 'awaiting_payment' && current.status !== 'signed') {
    return {
      ok: false,
      error: `Cannot mark paid from status “${current.status}”. Expected awaiting_payment.`,
    };
  }

  if (!canTransition(current.status, 'active') && current.status === 'awaiting_payment') {
    // awaiting_payment → active is allowed
  }

  const paidAt = input.paidAt ? new Date(input.paidAt) : new Date();
  if (Number.isNaN(paidAt.getTime())) {
    return { ok: false, error: 'Invalid paidAt' };
  }

  const amountZar =
    input.amountZar ?? current.invoiceAmountZar ?? getFirstInvoiceAmountZar();

  const updated = await prisma.onboardingSubmission.update({
    where: { id: submissionId },
    data: {
      status: 'active',
      paidAt,
      paymentMethod: input.method ?? 'eft',
      paymentAmountZar: amountZar,
      paymentNote: input.note?.trim() || null,
      ...(input.paystackReference?.trim()
        ? { paystackReference: input.paystackReference.trim() }
        : {}),
      suspendedAt: null,
      suspendReason: null,
    },
  });

  return { ok: true, submission: toOnboardingRecord(updated), alreadyActive: false };
}

export async function suspendOnboarding(
  submissionId: string,
  reason: string,
): Promise<
  | { ok: true; submission: OnboardingSubmissionRecord }
  | { ok: false; error: string }
> {
  const current = await getOnboardingSubmission(submissionId);
  if (!current) return { ok: false, error: 'Not found' };

  if (
    current.status !== 'active' &&
    current.status !== 'awaiting_payment' &&
    current.status !== 'signed'
  ) {
    return { ok: false, error: `Cannot suspend from status “${current.status}”.` };
  }

  const updated = await prisma.onboardingSubmission.update({
    where: { id: submissionId },
    data: {
      status: 'suspended',
      suspendedAt: new Date(),
      suspendReason: reason.trim() || 'Suspended by admin',
    },
  });

  return { ok: true, submission: toOnboardingRecord(updated) };
}
