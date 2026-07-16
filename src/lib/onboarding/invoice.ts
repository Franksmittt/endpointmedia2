/**
 * Phase 4 — first invoice helpers (manual EFT primary).
 *
 * Commercial default: first invoice = first month retainer only.
 * Setup fee remains waived unless early cancel (clawback in MSA drafts).
 * Never VAT / never “Tax Invoice”.
 */

import 'server-only';

import { FEE_DEFAULTS } from './fees';
import type { OnboardingSubmissionRecord } from './types';

export const NON_VAT_AMOUNT_DUE_LINE =
  'Amount Due (VAT not applicable – vendor not registered)';

export type BankDetails = {
  bankName: string;
  accountName: string;
  accountNumber: string;
  branchCode: string;
  referencePrefix: string;
};

export function getBankDetails(): BankDetails {
  return {
    bankName: (process.env.ONBOARDING_BANK_NAME ?? '').trim() || 'Configure ONBOARDING_BANK_NAME',
    accountName:
      (process.env.ONBOARDING_BANK_ACCOUNT_NAME ?? '').trim() ||
      'Configure ONBOARDING_BANK_ACCOUNT_NAME',
    accountNumber:
      (process.env.ONBOARDING_BANK_ACCOUNT_NUMBER ?? '').trim() ||
      'Configure ONBOARDING_BANK_ACCOUNT_NUMBER',
    branchCode:
      (process.env.ONBOARDING_BANK_BRANCH_CODE ?? '').trim() ||
      'Configure ONBOARDING_BANK_BRANCH_CODE',
    referencePrefix:
      (process.env.ONBOARDING_PAYMENT_REFERENCE_PREFIX ?? '').trim() || 'EM',
  };
}

/** Short reference: PREFIX + last 8 of id (uppercase, alphanumeric). */
export function buildPaymentReference(submissionId: string): string {
  const prefix = getBankDetails().referencePrefix.replace(/[^A-Za-z0-9]/g, '') || 'EM';
  const short = submissionId.replace(/[^A-Za-z0-9]/g, '').slice(-8).toUpperCase();
  return `${prefix}${short}`;
}

/**
 * First invoice amount = monthly retainer (default R5000).
 * Setup clawback is NOT billed upfront.
 */
export function getFirstInvoiceAmountZar(): number {
  // Future: accept form/proposal overrides for per-client retainers.
  const raw = FEE_DEFAULTS.monthly_retainer_zar;
  const parsed = Number.parseInt(raw, 10);
  if (Number.isFinite(parsed) && parsed > 0) return parsed;
  return 5000;
}

export function isPaystackEnabled(): boolean {
  return Boolean(
    (process.env.PAYSTACK_SECRET_KEY ?? '').trim() &&
      (process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? '').trim(),
  );
}

export function formatInvoiceSummary(submission: OnboardingSubmissionRecord): {
  amountZar: number;
  reference: string;
  bank: BankDetails;
  servicesLabel: string;
} {
  const amountZar = submission.invoiceAmountZar ?? getFirstInvoiceAmountZar();
  const reference = submission.paymentReference ?? buildPaymentReference(submission.id);
  return {
    amountZar,
    reference,
    bank: getBankDetails(),
    servicesLabel: submission.serviceSelection || '—',
  };
}
