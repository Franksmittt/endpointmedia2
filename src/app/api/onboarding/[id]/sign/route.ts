import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import {
  authorizeOnboardingAccess,
  getBearerFromRequest,
} from '@/lib/onboarding/auth';
import {
  executeClickwrapSign,
  type ClickwrapCheckboxFlags,
} from '@/lib/onboarding/clickwrap';
import { sendSignedPackageEmails } from '@/lib/onboarding/email';
import { sendInvoiceIfNeeded } from '@/lib/onboarding/payment';
import { readStoredPdf } from '@/lib/onboarding/pdf';
import { getLatestSignatureAudit, getOnboardingSubmission } from '@/lib/onboarding/store';
import { rateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';

type SignBody = {
  token?: string;
  typedName?: string;
  checkboxes?: Partial<ClickwrapCheckboxFlags>;
};

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  let body: SignBody;
  try {
    body = (await request.json()) as SignBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const auth = await authorizeOnboardingAccess(id, {
    bearer: getBearerFromRequest(request),
    token: body.token,
  });
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  // Signing always requires the preview token (not admin-only), so the audit trail
  // records the client token. Admins may pass the submission's token explicitly.
  const token = (body.token ?? '').trim() || auth.submission.previewToken;
  if (token !== auth.submission.previewToken) {
    return NextResponse.json({ error: 'Invalid or expired signing token.' }, { status: 401 });
  }

  const checkboxes: ClickwrapCheckboxFlags = {
    readKeyTerms: Boolean(body.checkboxes?.readKeyTerms),
    agreeMsaSowPopia: Boolean(body.checkboxes?.agreeMsaSowPopia),
    authorityToBind: Boolean(body.checkboxes?.authorityToBind),
    commercialRulesAck: Boolean(body.checkboxes?.commercialRulesAck),
  };

  const result = await executeClickwrapSign({
    submission: auth.submission,
    typedName: body.typedName ?? '',
    checkboxes,
    token,
    ipAddress: ip === 'unknown' ? null : ip,
    userAgent: request.headers.get('user-agent'),
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error, fieldErrors: result.fieldErrors },
      { status: result.fieldErrors ? 400 : 500 },
    );
  }

  if (!result.alreadySigned) {
    const fresh = await getOnboardingSubmission(id);
    const audit = await getLatestSignatureAudit(id);
    let pdfBuffer: Buffer | null = null;
    if (fresh?.pdfStorageKey) {
      pdfBuffer = await readStoredPdf(fresh.pdfStorageKey);
    }
    await sendSignedPackageEmails({
      submission: fresh ?? result.submission,
      typedName: body.typedName?.trim() || '',
      documentSha256: audit?.documentSha256 || '',
      pdfBuffer,
      downloadPath: result.downloadPath,
    });
  }

  // Phase 4: first invoice email (idempotent via invoiceEmailedAt)
  const invoice = await sendInvoiceIfNeeded(id);

  return NextResponse.json({
    success: true,
    alreadySigned: result.alreadySigned,
    status: result.submission.status,
    message: result.alreadySigned
      ? 'This package was already signed. Status remains awaiting first invoice payment.'
      : 'Package signed electronically. Status is awaiting_payment — first invoice emailed (EFT). Work starts after payment clears.',
    redirectTo: `/onboarding/sign/${id}/success?token=${token}`,
    downloadPath: result.downloadPath,
    pdfUrl: result.pdfUrl,
    auditId: result.auditId,
    invoice: {
      sent: invoice.sent,
      skipped: invoice.skipped,
      error: invoice.error,
    },
  });
}
