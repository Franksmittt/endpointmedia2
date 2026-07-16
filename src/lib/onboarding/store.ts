/**
 * Onboarding persistence — Prisma OnboardingSubmission.
 */

import 'server-only';

import type {
  ContractStatus as PrismaContractStatus,
  OnboardingSubmission as Row,
} from '@prisma/client';
import { prisma } from '@/lib/prisma';
import type { ContractStatus } from './status';
import type { OnboardingFormData, OnboardingSubmissionRecord } from './types';

function treatAsCpaProtected(band: OnboardingFormData['cpaTurnoverBand']): boolean {
  return band !== 'above_r2m';
}

export function toOnboardingRecord(row: Row): OnboardingSubmissionRecord {
  return {
    id: row.id,
    createdAt: row.createdAt.toISOString(),
    updatedAt: row.updatedAt.toISOString(),
    status: row.status as ContractStatus,
    form: row.form as unknown as OnboardingFormData,
    entityName: row.entityName,
    signatoryEmail: row.signatoryEmail,
    cpaProtected: row.cpaProtected,
    serviceSelection: row.serviceSelection,
    previewToken: row.previewToken,
    emailStatus: row.emailStatus,
    signatureMode: row.signatureMode,
    signedAt: row.signedAt?.toISOString() ?? null,
    pdfUrl: row.pdfUrl,
    pdfStorageKey: row.pdfStorageKey,
    invoiceAmountZar: row.invoiceAmountZar,
    paymentReference: row.paymentReference,
    invoiceEmailedAt: row.invoiceEmailedAt?.toISOString() ?? null,
    lastReminderAt: row.lastReminderAt?.toISOString() ?? null,
    paidAt: row.paidAt?.toISOString() ?? null,
    paymentMethod: row.paymentMethod,
    paymentAmountZar: row.paymentAmountZar,
    paymentNote: row.paymentNote,
    paystackReference: row.paystackReference,
    suspendedAt: row.suspendedAt?.toISOString() ?? null,
    suspendReason: row.suspendReason,
  };
}

export async function createOnboardingSubmission(
  form: OnboardingFormData,
): Promise<OnboardingSubmissionRecord> {
  const row = await prisma.onboardingSubmission.create({
    data: {
      // Ready for clickwrap after draft pack is created.
      status: 'awaiting_signature',
      form: form as object,
      entityName: form.legalEntityName.trim(),
      signatoryEmail: form.signatoryEmail.trim().toLowerCase(),
      cpaProtected: treatAsCpaProtected(form.cpaTurnoverBand),
      serviceSelection: form.serviceSelection || '',
      emailStatus: 'pending',
    },
  });
  return toOnboardingRecord(row);
}

export async function getOnboardingSubmission(
  id: string,
): Promise<OnboardingSubmissionRecord | null> {
  const row = await prisma.onboardingSubmission.findUnique({ where: { id } });
  return row ? toOnboardingRecord(row) : null;
}

export async function getOnboardingByPreviewToken(
  token: string,
): Promise<OnboardingSubmissionRecord | null> {
  const row = await prisma.onboardingSubmission.findUnique({
    where: { previewToken: token },
  });
  return row ? toOnboardingRecord(row) : null;
}

export async function listOnboardingSubmissions(take = 50): Promise<OnboardingSubmissionRecord[]> {
  const rows = await prisma.onboardingSubmission.findMany({
    orderBy: { createdAt: 'desc' },
    take,
  });
  return rows.map(toOnboardingRecord);
}

export async function updateOnboardingStatus(
  id: string,
  status: ContractStatus,
): Promise<OnboardingSubmissionRecord | null> {
  try {
    const row = await prisma.onboardingSubmission.update({
      where: { id },
      data: { status: status as PrismaContractStatus },
    });
    return toOnboardingRecord(row);
  } catch {
    return null;
  }
}

export async function updateOnboardingEmailMeta(
  id: string,
  meta: { emailStatus: string; emailError?: string | null; packageHtmlSnapshot?: string },
): Promise<void> {
  await prisma.onboardingSubmission.update({
    where: { id },
    data: {
      emailStatus: meta.emailStatus,
      emailError: meta.emailError ?? null,
      ...(meta.packageHtmlSnapshot !== undefined
        ? { packageHtmlSnapshot: meta.packageHtmlSnapshot }
        : {}),
    },
  });
}

export async function getLatestSignatureAudit(submissionId: string) {
  return prisma.signatureAuditEvent.findFirst({
    where: { submissionId, event: 'signed' },
    orderBy: { signedAt: 'desc' },
  });
}
