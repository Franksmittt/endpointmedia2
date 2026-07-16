'use server';

import { markOnboardingPaid, suspendOnboarding } from '@/lib/onboarding/payment';
import { listOnboardingSubmissions } from '@/lib/onboarding/store';

function assertAdminSecret(secret: string): boolean {
  const expected = (process.env.CONTACT_ADMIN_SECRET ?? '').trim();
  return Boolean(expected && secret.trim() === expected);
}

export async function adminListAction(secret: string) {
  if (!assertAdminSecret(secret)) {
    return { ok: false as const, error: 'Unauthorized' };
  }
  const leads = await listOnboardingSubmissions(50);
  return {
    ok: true as const,
    leads: leads.map((s) => ({
      id: s.id,
      entityName: s.entityName,
      signatoryEmail: s.signatoryEmail,
      status: s.status,
      serviceSelection: s.serviceSelection,
      invoiceAmountZar: s.invoiceAmountZar,
      paymentReference: s.paymentReference,
      signedAt: s.signedAt,
      paidAt: s.paidAt,
      previewToken: s.previewToken,
    })),
  };
}

export async function adminMarkPaidAction(formData: FormData) {
  const secret = String(formData.get('secret') ?? '');
  if (!assertAdminSecret(secret)) {
    return { ok: false as const, error: 'Unauthorized' };
  }
  const id = String(formData.get('id') ?? '');
  const note = String(formData.get('note') ?? '');
  const amountRaw = String(formData.get('amountZar') ?? '');
  const amountZar = amountRaw ? Number.parseInt(amountRaw, 10) : undefined;

  const result = await markOnboardingPaid(id, {
    method: 'eft',
    note: note || 'Marked paid via /onboarding/admin',
    amountZar: Number.isFinite(amountZar) ? amountZar : undefined,
  });
  if (!result.ok) return { ok: false as const, error: result.error };
  return {
    ok: true as const,
    status: result.submission.status,
    alreadyActive: result.alreadyActive,
  };
}

export async function adminSuspendAction(formData: FormData) {
  const secret = String(formData.get('secret') ?? '');
  if (!assertAdminSecret(secret)) {
    return { ok: false as const, error: 'Unauthorized' };
  }
  const id = String(formData.get('id') ?? '');
  const reason = String(formData.get('reason') ?? 'Suspended via admin');
  const result = await suspendOnboarding(id, reason);
  if (!result.ok) return { ok: false as const, error: result.error };
  return { ok: true as const, status: result.submission.status };
}
