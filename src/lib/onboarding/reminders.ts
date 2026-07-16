/**
 * Phase 5 — payment reminders for awaiting_payment submissions.
 * Idempotent via lastReminderAt (at most once per N days).
 */

import 'server-only';

import { prisma } from '@/lib/prisma';
import { sendPaymentReminderEmail } from './email';
import { toOnboardingRecord } from './store';

export function getPaymentReminderDays(): number {
  const raw = (process.env.ONBOARDING_PAYMENT_REMINDER_DAYS ?? '').trim();
  const n = Number.parseInt(raw, 10);
  if (Number.isFinite(n) && n >= 1) return n;
  return 3;
}

export type ReminderRunResult = {
  days: number;
  checked: number;
  sent: number;
  skipped: number;
  errors: { id: string; error: string }[];
  sentIds: string[];
};

/**
 * Find awaiting_payment rows whose invoice was emailed ≥ N days ago,
 * and whose lastReminderAt is null or also ≥ N days ago.
 */
export async function runPaymentReminders(options?: {
  now?: Date;
  dryRun?: boolean;
}): Promise<ReminderRunResult> {
  const now = options?.now ?? new Date();
  const days = getPaymentReminderDays();
  const thresholdMs = days * 24 * 60 * 60 * 1000;
  const cutoff = new Date(now.getTime() - thresholdMs);

  const candidates = await prisma.onboardingSubmission.findMany({
    where: {
      status: 'awaiting_payment',
      invoiceEmailedAt: { not: null, lte: cutoff },
      OR: [{ lastReminderAt: null }, { lastReminderAt: { lte: cutoff } }],
    },
    orderBy: { invoiceEmailedAt: 'asc' },
    take: 100,
  });

  const result: ReminderRunResult = {
    days,
    checked: candidates.length,
    sent: 0,
    skipped: 0,
    errors: [],
    sentIds: [],
  };

  for (const row of candidates) {
    if (options?.dryRun) {
      result.skipped += 1;
      result.sentIds.push(row.id);
      continue;
    }

    const record = toOnboardingRecord(row);
    const mail = await sendPaymentReminderEmail(record);
    if (!mail.ok) {
      result.errors.push({ id: row.id, error: mail.error || 'Send failed' });
      continue;
    }

    await prisma.onboardingSubmission.update({
      where: { id: row.id },
      data: { lastReminderAt: now },
    });
    result.sent += 1;
    result.sentIds.push(row.id);
  }

  return result;
}
