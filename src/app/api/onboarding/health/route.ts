import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { getBearerFromRequest } from '@/lib/onboarding/auth';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * GET /api/onboarding/health
 * Admin-only. Returns { ok, missingEnv } — never leaks secret values.
 */
export async function GET(request: NextRequest) {
  const secret = (process.env.CONTACT_ADMIN_SECRET ?? '').trim();
  const bearer = (getBearerFromRequest(request) ?? '')
    .replace(/^Bearer\s+/i, '')
    .trim();

  if (!secret || !bearer || bearer !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const required: { key: string; present: boolean }[] = [
    { key: 'DATABASE_URL', present: Boolean((process.env.DATABASE_URL ?? '').trim()) },
    { key: 'RESEND_API_KEY', present: Boolean((process.env.RESEND_API_KEY ?? '').trim()) },
    {
      key: 'RESEND_FROM_EMAIL',
      present: Boolean((process.env.RESEND_FROM_EMAIL ?? '').trim()),
    },
    {
      key: 'CONTACT_TO_EMAIL',
      present: Boolean((process.env.CONTACT_TO_EMAIL ?? '').trim()),
    },
    { key: 'CONTACT_ADMIN_SECRET', present: Boolean(secret) },
    {
      key: 'NEXT_PUBLIC_BASE_URL',
      present: Boolean((process.env.NEXT_PUBLIC_BASE_URL ?? '').trim()),
    },
    {
      key: 'ONBOARDING_BANK_NAME',
      present: Boolean((process.env.ONBOARDING_BANK_NAME ?? '').trim()),
    },
    {
      key: 'ONBOARDING_BANK_ACCOUNT_NAME',
      present: Boolean((process.env.ONBOARDING_BANK_ACCOUNT_NAME ?? '').trim()),
    },
    {
      key: 'ONBOARDING_BANK_ACCOUNT_NUMBER',
      present: Boolean((process.env.ONBOARDING_BANK_ACCOUNT_NUMBER ?? '').trim()),
    },
    {
      key: 'ONBOARDING_BANK_BRANCH_CODE',
      present: Boolean((process.env.ONBOARDING_BANK_BRANCH_CODE ?? '').trim()),
    },
  ];

  const optional: { key: string; present: boolean; note: string }[] = [
    {
      key: 'BLOB_READ_WRITE_TOKEN',
      present: Boolean((process.env.BLOB_READ_WRITE_TOKEN ?? '').trim()),
      note: 'Recommended in production for durable signed PDFs',
    },
    {
      key: 'CRON_SECRET',
      present: Boolean((process.env.CRON_SECRET ?? '').trim()),
      note: 'Needed for Vercel cron payment reminders',
    },
    {
      key: 'ONBOARDING_PAYMENT_REMINDER_DAYS',
      present: Boolean((process.env.ONBOARDING_PAYMENT_REMINDER_DAYS ?? '').trim()),
      note: 'Defaults to 3 when unset',
    },
    {
      key: 'ONBOARDING_ATTORNEY_CLEARED',
      present: Boolean((process.env.ONBOARDING_ATTORNEY_CLEARED ?? '').trim()),
      note: 'Default OFF — keep DRAFT banners until counsel clears',
    },
  ];

  const missingEnv = required.filter((c) => !c.present).map((c) => c.key);
  const missingOptional = optional.filter((c) => !c.present).map((c) => c.key);

  let dbOk = false;
  let dbError: string | undefined;
  try {
    await prisma.$queryRaw`SELECT 1`;
    dbOk = true;
  } catch (error) {
    dbError = error instanceof Error ? error.message : 'Database unreachable';
  }

  const ok = missingEnv.length === 0 && dbOk;

  return NextResponse.json(
    {
      ok,
      dbOk,
      ...(dbError ? { dbError } : {}),
      missingEnv,
      missingOptional,
      optionalNotes: Object.fromEntries(optional.map((o) => [o.key, o.note])),
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    },
  );
}
