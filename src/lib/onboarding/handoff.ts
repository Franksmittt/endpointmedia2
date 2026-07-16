/**
 * Phase 5 — attorney handoff pack (ZIP).
 */

import 'server-only';

import JSZip from 'jszip';
import { prisma } from '@/lib/prisma';
import { FEE_DEFAULTS } from './fees';
import { draftBannerText, isAttorneyCleared, shouldShowDraftBanner } from './flags';
import { NON_VAT_AMOUNT_DUE_LINE } from './invoice';
import { buildPackageHtml } from './package-html';
import { readStoredPdf } from './pdf';
import { getOnboardingSubmission } from './store';
import type { OnboardingFormData, OnboardingSubmissionRecord } from './types';

const SENSITIVE_KEY = /password|passwd|secret|token|api[_-]?key/i;

/** Deep-clone form JSON and redact password-like keys (none expected). */
export function redactFormForHandoff(form: OnboardingFormData): unknown {
  return redactUnknown(form);
}

function redactUnknown(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(redactUnknown);
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [key, nested] of Object.entries(value as Record<string, unknown>)) {
      if (SENSITIVE_KEY.test(key)) {
        out[key] = '[REDACTED]';
      } else {
        out[key] = redactUnknown(nested);
      }
    }
    return out;
  }
  return value;
}

async function loadPdfBytes(
  submission: OnboardingSubmissionRecord,
): Promise<Buffer | null> {
  if (submission.pdfStorageKey) {
    const local = await readStoredPdf(submission.pdfStorageKey);
    if (local) return local;
  }
  if (submission.pdfUrl) {
    try {
      const res = await fetch(submission.pdfUrl);
      if (res.ok) {
        return Buffer.from(await res.arrayBuffer());
      }
    } catch {
      // fall through
    }
  }
  return null;
}

function buildReadme(submission: OnboardingSubmissionRecord, auditCount: number): string {
  const draftStatus = shouldShowDraftBanner()
    ? `DRAFT banners ON (${draftBannerText()}). Set ONBOARDING_ATTORNEY_CLEARED=true only after SA attorney clearance.`
    : 'ONBOARDING_ATTORNEY_CLEARED is set — package HTML banners suppressed. Confirm attorney sign-off before relying on this.';

  return [
    'Endpoint Media — Attorney Handoff Pack',
    '=====================================',
    '',
    `Generated (UTC): ${new Date().toISOString()}`,
    `Submission ID: ${submission.id}`,
    `Entity: ${submission.entityName}`,
    `Signatory email: ${submission.signatoryEmail}`,
    `Status: ${submission.status}`,
    `Created: ${submission.createdAt}`,
    `Signed at: ${submission.signedAt || '—'}`,
    `Invoice emailed at: ${submission.invoiceEmailedAt || '—'}`,
    `Last payment reminder: ${submission.lastReminderAt || '—'}`,
    `Paid at: ${submission.paidAt || '—'}`,
    `Payment reference: ${submission.paymentReference || '—'}`,
    `Invoice amount (ZAR): ${submission.invoiceAmountZar ?? '—'}`,
    `CPA protected treatment: ${submission.cpaProtected ? 'yes' : 'no'}`,
    `Services: ${submission.serviceSelection || '—'}`,
    `Signature mode: ${submission.signatureMode || '—'}`,
    `Signature audit rows included: ${auditCount}`,
    '',
    'Fee defaults used in package drafts',
    `  Setup / early-cancel clawback: R${FEE_DEFAULTS.setup_clawback_zar}`,
    `  Monthly retainer: R${FEE_DEFAULTS.monthly_retainer_zar}`,
    `  Notice period: ${FEE_DEFAULTS.notice_business_days} business days`,
    '  Initial term: 3 months; renewals: 6 months',
    '',
    'Non-VAT',
    `  ${NON_VAT_AMOUNT_DUE_LINE}`,
    '  Never label documents “Tax Invoice”. Vendor is not VAT-registered.',
    '  First invoice = month-1 retainer only; setup stays waived unless early-cancel clawback.',
    '',
    'Draft / attorney status',
    `  ${draftStatus}`,
    `  isAttorneyCleared(): ${isAttorneyCleared()}`,
    '',
    'Contents',
    '  README.txt                 — this file',
    '  package.html               — HTML snapshot (or regenerated)',
    '  signed.pdf                 — signed PDF if stored (may be absent)',
    '  signature-audit.json       — SignatureAuditEvent row(s)',
    '  submission-form.json       — form payload (sensitive keys redacted)',
    '',
    'Condition precedent: work starts only after digitally signed AND first invoice paid (status → active).',
    '',
  ].join('\n');
}

export async function buildHandoffZip(
  submissionId: string,
): Promise<
  | { ok: true; buffer: Buffer; filename: string; submission: OnboardingSubmissionRecord }
  | { ok: false; error: string; status: 404 }
> {
  const submission = await getOnboardingSubmission(submissionId);
  if (!submission) {
    return { ok: false, error: 'Submission not found', status: 404 };
  }

  const row = await prisma.onboardingSubmission.findUnique({
    where: { id: submissionId },
    select: { packageHtmlSnapshot: true },
  });

  const audits = await prisma.signatureAuditEvent.findMany({
    where: { submissionId },
    orderBy: { signedAt: 'asc' },
  });

  const html =
    row?.packageHtmlSnapshot || (await buildPackageHtml(submission.form));
  const pdf = await loadPdfBytes(submission);

  const zip = new JSZip();
  zip.file('README.txt', buildReadme(submission, audits.length));
  zip.file('package.html', html);
  zip.file(
    'submission-form.json',
    JSON.stringify(redactFormForHandoff(submission.form), null, 2),
  );
  zip.file(
    'signature-audit.json',
    JSON.stringify(
      audits.map((a) => ({
        id: a.id,
        submissionId: a.submissionId,
        signedAt: a.signedAt.toISOString(),
        ipAddress: a.ipAddress,
        userAgent: a.userAgent,
        typedName: a.typedName,
        documentSha256: a.documentSha256,
        checkboxFlags: a.checkboxFlags,
        tokenUsed: a.tokenUsed,
        event: a.event,
        provider: a.provider,
      })),
      null,
      2,
    ),
  );
  if (pdf) {
    zip.file('signed.pdf', pdf);
  } else {
    zip.file(
      'signed.pdf.MISSING.txt',
      'No stored PDF was available for this submission (generate via sign flow or /pdf route).',
    );
  }

  const buffer = Buffer.from(await zip.generateAsync({ type: 'nodebuffer' }));
  const safeEntity = submission.entityName
    .replace(/[^a-zA-Z0-9_-]+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 40);
  const filename = `endpoint-handoff-${safeEntity || 'client'}-${submission.id.slice(-8)}.zip`;

  return { ok: true, buffer, filename, submission };
}
