/**
 * Phase 3 Option A — local clickwrap e-sign.
 * Leaves ESignProvider free for future PandaDoc adapter (Option B).
 */

import 'server-only';

import { prisma } from '@/lib/prisma';
import { buildPackageHtml } from './package-html';
import { htmlToPdfBuffer, sha256Hex, storeOnboardingPdf } from './pdf';
import type { ClickwrapFallback, SignatureAuditEvent } from './signature';
import { canAcceptClickwrap, isAlreadySigned } from './status';
import type { OnboardingFormData, OnboardingSubmissionRecord } from './types';

export type ClickwrapCheckboxFlags = {
  readKeyTerms: boolean;
  agreeMsaSowPopia: boolean;
  authorityToBind: boolean;
  commercialRulesAck: boolean;
};

export type ClickwrapSignInput = {
  submission: OnboardingSubmissionRecord;
  typedName: string;
  checkboxes: ClickwrapCheckboxFlags;
  token: string;
  ipAddress?: string | null;
  userAgent?: string | null;
};

export type ClickwrapSignResult =
  | {
      ok: true;
      alreadySigned: boolean;
      submission: OnboardingSubmissionRecord;
      auditId?: string;
      pdfUrl: string | null;
      downloadPath: string;
    }
  | { ok: false; error: string; fieldErrors?: Record<string, string> };

function normalizeName(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Typed name must reasonably match the recorded signatory name. */
export function namesReasonablyMatch(typed: string, expected: string): boolean {
  const a = normalizeName(typed);
  const b = normalizeName(expected);
  if (!a || !b) return false;
  if (a === b) return true;
  // Allow typed to contain expected or vice versa when one has an extra middle name.
  if (a.includes(b) || b.includes(a)) return true;
  const aParts = a.split(' ').filter(Boolean);
  const bParts = b.split(' ').filter(Boolean);
  if (aParts.length >= 2 && bParts.length >= 2) {
    return aParts[0] === bParts[0] && aParts[aParts.length - 1] === bParts[bParts.length - 1];
  }
  return false;
}

export function validateClickwrapInput(
  form: OnboardingFormData,
  typedName: string,
  checkboxes: ClickwrapCheckboxFlags,
): Record<string, string> | null {
  const errors: Record<string, string> = {};
  if (!checkboxes.readKeyTerms) {
    errors.readKeyTerms = 'Required: confirm you have read the Key Commercial Terms';
  }
  if (!checkboxes.agreeMsaSowPopia) {
    errors.agreeMsaSowPopia = 'Required: agree to MSA + selected SoW(s) + POPIA annex (DRAFT)';
  }
  if (!checkboxes.authorityToBind) {
    errors.authorityToBind = 'Required: confirm authority to bind the entity';
  }
  if (!checkboxes.commercialRulesAck) {
    errors.commercialRulesAck =
      'Required: acknowledge no ROI guarantee, non-VAT pricing, 3+6 terms, and clawback+notice cancellation';
  }
  if (!typedName.trim()) {
    errors.typedName = 'Typed legal name is required';
  } else if (!namesReasonablyMatch(typedName, form.signatoryName)) {
    errors.typedName = `Typed name must reasonably match signatory “${form.signatoryName}”`;
  }
  return Object.keys(errors).length ? errors : null;
}

export class LocalClickwrapProvider implements ClickwrapFallback {
  id = 'clickwrap_fallback' as const;

  async recordAcceptance(
    submission: OnboardingSubmissionRecord,
    audit: Omit<SignatureAuditEvent, 'submissionId'>,
  ): Promise<SignatureAuditEvent> {
    const row = await prisma.signatureAuditEvent.create({
      data: {
        submissionId: submission.id,
        typedName: audit.typedName || '',
        documentSha256: audit.documentSha256 || '',
        checkboxFlags: {},
        tokenUsed: '',
        ipAddress: audit.ip,
        userAgent: audit.userAgent,
        event: audit.event,
        provider: 'clickwrap_fallback',
        signedAt: audit.at ? new Date(audit.at) : new Date(),
      },
    });
    return {
      submissionId: submission.id,
      at: row.signedAt.toISOString(),
      ip: row.ipAddress ?? undefined,
      userAgent: row.userAgent ?? undefined,
      documentSha256: row.documentSha256,
      typedName: row.typedName,
      event: row.event as SignatureAuditEvent['event'],
    };
  }
}

/**
 * Execute clickwrap sign:
 * hash HTML → PDF → store → audit → status awaiting_payment (atomic collapse from signed).
 */
export async function executeClickwrapSign(
  input: ClickwrapSignInput,
): Promise<ClickwrapSignResult> {
  const { submission } = input;

  if (isAlreadySigned(submission.status)) {
    const { getOnboardingSubmission } = await import('./store');
    const fresh = await getOnboardingSubmission(submission.id);
    return {
      ok: true,
      alreadySigned: true,
      submission: fresh ?? submission,
      pdfUrl: fresh?.pdfUrl ?? null,
      downloadPath: `/api/onboarding/${submission.id}/pdf?token=${submission.previewToken}`,
    };
  }

  if (!canAcceptClickwrap(submission.status)) {
    return {
      ok: false,
      error: `Package cannot be signed in status “${submission.status}”.`,
    };
  }

  if (input.token !== submission.previewToken) {
    return { ok: false, error: 'Invalid or expired signing token.' };
  }

  const fieldErrors = validateClickwrapInput(
    submission.form,
    input.typedName,
    input.checkboxes,
  );
  if (fieldErrors) {
    return { ok: false, error: 'Validation failed', fieldErrors };
  }

  const html =
    (await prisma.onboardingSubmission
      .findUnique({ where: { id: submission.id }, select: { packageHtmlSnapshot: true } })
      .then((r) => r?.packageHtmlSnapshot)) || (await buildPackageHtml(submission.form));

  const documentSha256 = sha256Hex(html);

  let pdfBuffer: Buffer;
  try {
    pdfBuffer = await htmlToPdfBuffer(html);
  } catch (error) {
    console.error('Onboarding PDF generation failed:', error);
    return {
      ok: false,
      error:
        'PDF generation failed in this runtime. Ensure Chromium support (playwright / @sparticuz/chromium-min).',
    };
  }

  const stored = await storeOnboardingPdf(submission.id, pdfBuffer);
  const signedAt = new Date();

  const audit = await prisma.signatureAuditEvent.create({
    data: {
      submissionId: submission.id,
      typedName: input.typedName.trim(),
      documentSha256,
      checkboxFlags: input.checkboxes,
      tokenUsed: input.token,
      ipAddress: input.ipAddress || null,
      userAgent: input.userAgent || null,
      event: 'signed',
      provider: 'clickwrap_fallback',
      signedAt,
    },
  });

  // Collapse signed → awaiting_payment in one step (invoice/payment is Phase 4).
  const updated = await prisma.onboardingSubmission.update({
    where: { id: submission.id },
    data: {
      status: 'awaiting_payment',
      signatureMode: 'clickwrap_fallback',
      signedAt,
      pdfUrl: stored.pdfUrl,
      pdfStorageKey: stored.pdfStorageKey,
      packageHtmlSnapshot: html,
    },
  });

  return {
    ok: true,
    alreadySigned: false,
    auditId: audit.id,
    pdfUrl: stored.pdfUrl,
    downloadPath: `/api/onboarding/${submission.id}/pdf?token=${submission.previewToken}`,
    submission: {
      ...submission,
      status: 'awaiting_payment',
      emailStatus: updated.emailStatus,
      createdAt: updated.createdAt.toISOString(),
      updatedAt: updated.updatedAt.toISOString(),
    },
  };
}
