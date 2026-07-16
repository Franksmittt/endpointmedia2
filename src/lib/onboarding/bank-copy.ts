/** Shared bank / invoice display strings (safe for server components). */

import {
  formatInvoiceSummary,
  isPaystackEnabled,
  NON_VAT_AMOUNT_DUE_LINE,
} from './invoice';
import type { OnboardingSubmissionRecord } from './types';

export function buildPaymentInstructions(submission: OnboardingSubmissionRecord) {
  const summary = formatInvoiceSummary(submission);
  return {
    ...summary,
    nonVatLine: NON_VAT_AMOUNT_DUE_LINE,
    paystackEnabled: isPaystackEnabled(),
    setupNote:
      'First invoice = first month retainer only. Setup/strategy fee stays waived unless early cancellation triggers clawback.',
  };
}
