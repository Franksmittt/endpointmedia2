import 'server-only';

import { Resend } from 'resend';
import {
  formatInvoiceSummary,
  NON_VAT_AMOUNT_DUE_LINE,
} from './invoice';
import type { OnboardingSubmissionRecord } from './types';

function getResendClient(): Resend | null {
  const apiKey = (process.env.RESEND_API_KEY ?? '').trim();
  if (!apiKey) return null;
  try {
    return new Resend(apiKey);
  } catch {
    return null;
  }
}

export function getNotifyRecipients(): string[] {
  const primary = (process.env.CONTACT_TO_EMAIL || 'hello@endpointmedia.co.za').trim();
  const extras = [process.env.CONTACT_CC_EMAIL, process.env.CONTACT_NOTIFY_EMAILS]
    .flatMap((value) => (value ?? '').split(/[,;\s]+/))
    .map((value) => value.trim())
    .filter(Boolean);
  return Array.from(new Set([primary, ...extras].filter(Boolean)));
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === 'object' && error !== null) {
    const maybeMessage = (error as { message?: unknown }).message;
    if (typeof maybeMessage === 'string') return maybeMessage;
  }
  return 'Unknown email provider error';
}

function baseUrl(): string {
  return (process.env.NEXT_PUBLIC_BASE_URL || 'https://www.endpointmedia.co.za').replace(
    /\/$/,
    '',
  );
}

export async function sendOnboardingNotifications(
  submission: OnboardingSubmissionRecord,
): Promise<{ ok: boolean; error?: string }> {
  const resend = getResendClient();
  if (!resend) {
    return { ok: false, error: 'RESEND_API_KEY is not configured' };
  }

  const fromEmail = (process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev').trim();
  const recipients = getNotifyRecipients();
  const root = baseUrl();
  const previewPath = `${root}/api/onboarding/${submission.id}/preview?token=${submission.previewToken}`;
  const signPath = `${root}/onboarding/sign/${submission.id}?token=${submission.previewToken}`;

  const adminText = [
    'New DRAFT onboarding package (not binding until digitally signed).',
    '',
    `Entity: ${submission.entityName}`,
    `Signatory email: ${submission.signatoryEmail}`,
    `Services: ${submission.serviceSelection || '—'}`,
    `CPA protected treatment: ${submission.cpaProtected ? 'yes' : 'no'}`,
    `Status: ${submission.status}`,
    `Submission ID: ${submission.id}`,
    '',
    `Sign link: ${signPath}`,
    `HTML preview: ${previewPath}`,
    '',
    'DRAFT — REQUIRES SA ATTORNEY REVIEW',
  ].join('\n');

  try {
    const adminResult = await resend.emails.send({
      from: `Endpoint Media <${fromEmail}>`,
      to: recipients,
      subject: `[onboarding-draft] ${submission.entityName}`,
      text: adminText,
    });

    if (adminResult.error) {
      return { ok: false, error: getErrorMessage(adminResult.error) };
    }

    await resend.emails.send({
      from: `Endpoint Media <${fromEmail}>`,
      to: submission.signatoryEmail,
      replyTo: recipients[0],
      subject: 'Your draft onboarding pack is ready to sign — Endpoint Media',
      text: [
        `Hi ${submission.form.signatoryName || 'there'},`,
        '',
        `Endpoint Media has prepared a DRAFT engagement package for ${submission.entityName}.`,
        '',
        `Review and sign electronically (clickwrap): ${signPath}`,
        '',
        'Signing records your agreement to the draft package. Work still starts only after the first invoice is paid. Package wording remains DRAFT — REQUIRES SA ATTORNEY REVIEW (not “attorney approved”).',
        '',
        'Questions? Reply to this email or WhatsApp 076 972 4559.',
        '',
        '— Endpoint Media',
      ].join('\n'),
    });

    return { ok: true };
  } catch (error) {
    return { ok: false, error: getErrorMessage(error) };
  }
}

export async function sendSignedPackageEmails(options: {
  submission: OnboardingSubmissionRecord;
  typedName: string;
  documentSha256: string;
  pdfBuffer?: Buffer | null;
  downloadPath: string;
}): Promise<{ ok: boolean; error?: string }> {
  const resend = getResendClient();
  if (!resend) {
    return { ok: false, error: 'RESEND_API_KEY is not configured' };
  }

  const { submission, typedName, documentSha256, pdfBuffer, downloadPath } = options;
  const fromEmail = (process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev').trim();
  const recipients = getNotifyRecipients();
  const root = baseUrl();
  const absoluteDownload = downloadPath.startsWith('http')
    ? downloadPath
    : `${root}${downloadPath}`;

  const attachments =
    pdfBuffer && pdfBuffer.length > 0
      ? [
          {
            filename: `endpoint-media-draft-pack-${submission.id}.pdf`,
            content: pdfBuffer,
          },
        ]
      : undefined;

  const adminText = [
    'Onboarding package electronically signed (clickwrap).',
    '',
    `Entity: ${submission.entityName}`,
    `Signatory email: ${submission.signatoryEmail}`,
    `Typed name: ${typedName}`,
    `Status: awaiting_payment (work starts after first invoice clears)`,
    `Document SHA-256: ${documentSha256}`,
    `PDF: ${submission.pdfUrl || absoluteDownload}`,
    `Submission ID: ${submission.id}`,
    '',
    'Signer acknowledged binding intent for this draft package. Wording remains DRAFT — REQUIRES SA ATTORNEY REVIEW (not attorney-approved / not “legally final” counsel sign-off).',
  ].join('\n');

  try {
    const adminResult = await resend.emails.send({
      from: `Endpoint Media <${fromEmail}>`,
      to: recipients,
      subject: `[onboarding-signed] ${submission.entityName}`,
      text: adminText,
      attachments,
    });
    if (adminResult.error) {
      return { ok: false, error: getErrorMessage(adminResult.error) };
    }

    await resend.emails.send({
      from: `Endpoint Media <${fromEmail}>`,
      to: submission.signatoryEmail,
      replyTo: recipients[0],
      subject: 'Package signed — awaiting first invoice — Endpoint Media',
      text: [
        `Hi ${submission.form.signatoryName || typedName},`,
        '',
        `We recorded your electronic signature on the DRAFT engagement package for ${submission.entityName}.`,
        '',
        'Status: awaiting first invoice payment. You will receive EFT banking details in a separate invoice email. Work and access start only after payment clears.',
        '',
        `Download your signed draft PDF: ${absoluteDownload}`,
        '',
        'This confirms you electronically signed the draft package. It is not described as attorney-approved or counsel-finalised; templates remain DRAFT — REQUIRES SA ATTORNEY REVIEW while still reflecting your acknowledged agreement to proceed on those commercial terms.',
        '',
        '— Endpoint Media',
      ].join('\n'),
      attachments,
    });

    return { ok: true };
  } catch (error) {
    return { ok: false, error: getErrorMessage(error) };
  }
}

/** Payment reminder — polite nudge; repeats bank details + non-VAT + status link. */
export async function sendPaymentReminderEmail(
  submission: OnboardingSubmissionRecord,
): Promise<{ ok: boolean; error?: string }> {
  const resend = getResendClient();
  if (!resend) {
    return { ok: false, error: 'RESEND_API_KEY is not configured' };
  }

  const fromEmail = (process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev').trim();
  const recipients = getNotifyRecipients();
  const root = baseUrl();
  const { amountZar, reference, bank, servicesLabel } = formatInvoiceSummary(submission);
  const statusUrl = `${root}/onboarding/status/${submission.id}?token=${submission.previewToken}`;

  const signatoryText = [
    `Hi ${submission.form.signatoryName || 'there'},`,
    '',
    `Friendly reminder: we are still awaiting payment of the first month retainer for ${submission.entityName}.`,
    '',
    'PAYMENT REMINDER (flat ZAR — not a Tax Invoice)',
    NON_VAT_AMOUNT_DUE_LINE,
    `Services: ${servicesLabel}`,
    `Amount due: R${amountZar.toLocaleString('en-ZA')}`,
    'This is the first month retainer only. The setup/strategy fee remains waived unless early cancellation triggers clawback.',
    '',
    'EFT / BANK TRANSFER',
    `Bank: ${bank.bankName}`,
    `Account name: ${bank.accountName}`,
    `Account number: ${bank.accountNumber}`,
    `Branch code: ${bank.branchCode}`,
    `Payment reference (required): ${reference}`,
    '',
    'Work and access start only after payment clears.',
    `Track status: ${statusUrl}`,
    '',
    'If you have already paid, thank you — please reply with proof of payment and we will activate promptly.',
    '',
    '— Endpoint Media',
  ].join('\n');

  const adminText = [
    'Onboarding payment reminder sent.',
    '',
    `Entity: ${submission.entityName}`,
    `Signatory: ${submission.signatoryEmail}`,
    `Status: ${submission.status}`,
    `Amount: R${amountZar}`,
    `Reference: ${reference}`,
    `Status link: ${statusUrl}`,
    `Submission ID: ${submission.id}`,
    '',
    NON_VAT_AMOUNT_DUE_LINE,
  ].join('\n');

  try {
    const toSignatory = await resend.emails.send({
      from: `Endpoint Media <${fromEmail}>`,
      to: submission.signatoryEmail,
      replyTo: recipients[0],
      subject: `[reminder] First month retainer R${amountZar} — ${submission.entityName}`,
      text: signatoryText,
    });
    if (toSignatory.error) {
      return { ok: false, error: getErrorMessage(toSignatory.error) };
    }

    await resend.emails.send({
      from: `Endpoint Media <${fromEmail}>`,
      to: recipients,
      subject: `[onboarding-reminder] ${submission.entityName}`,
      text: adminText,
    });

    return { ok: true };
  } catch (error) {
    return { ok: false, error: getErrorMessage(error) };
  }
}

/** First invoice — EFT instructions. Setup fee NOT billed upfront (waived unless early cancel). */
export async function sendFirstInvoiceEmail(
  submission: OnboardingSubmissionRecord,
): Promise<{ ok: boolean; error?: string }> {
  const resend = getResendClient();
  if (!resend) {
    return { ok: false, error: 'RESEND_API_KEY is not configured' };
  }

  const fromEmail = (process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev').trim();
  const recipients = getNotifyRecipients();
  const root = baseUrl();
  const { amountZar, reference, bank, servicesLabel } = formatInvoiceSummary(submission);
  const statusUrl = `${root}/onboarding/status/${submission.id}?token=${submission.previewToken}`;

  const bodyLines = [
    `Hi ${submission.form.signatoryName || 'there'},`,
    '',
    `Thank you for electronically signing the DRAFT engagement package for ${submission.entityName}.`,
    '',
    'FIRST INVOICE (flat ZAR — not a Tax Invoice)',
    NON_VAT_AMOUNT_DUE_LINE,
    `Services: ${servicesLabel}`,
    `Amount due: R${amountZar.toLocaleString('en-ZA')}`,
    'This invoice is the first month retainer only. The setup/strategy fee remains waived unless early cancellation triggers clawback (see Key Commercial Terms / MSA drafts).',
    '',
    'EFT / BANK TRANSFER',
    `Bank: ${bank.bankName}`,
    `Account name: ${bank.accountName}`,
    `Account number: ${bank.accountNumber}`,
    `Branch code: ${bank.branchCode}`,
    `Payment reference (required): ${reference}`,
    '',
    'Work and access start only after payment clears.',
    `Track status: ${statusUrl}`,
    '',
    'Package wording remains DRAFT — REQUIRES SA ATTORNEY REVIEW.',
    '',
    '— Endpoint Media',
  ];

  try {
    const toSignatory = await resend.emails.send({
      from: `Endpoint Media <${fromEmail}>`,
      to: submission.signatoryEmail,
      bcc: recipients,
      replyTo: recipients[0],
      subject: `[invoice] First month retainer R${amountZar} — ${submission.entityName}`,
      text: bodyLines.join('\n'),
    });
    if (toSignatory.error) {
      return { ok: false, error: getErrorMessage(toSignatory.error) };
    }
    return { ok: true };
  } catch (error) {
    return { ok: false, error: getErrorMessage(error) };
  }
}

