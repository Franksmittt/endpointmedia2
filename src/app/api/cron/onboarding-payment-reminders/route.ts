import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { runPaymentReminders } from '@/lib/onboarding/reminders';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function isCronAuthorized(request: NextRequest): boolean {
  const cronSecret = (process.env.CRON_SECRET ?? '').trim();
  if (!cronSecret) return false;

  const authHeader = request.headers.get('authorization');
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.slice('Bearer '.length).trim();
    if (token === cronSecret) return true;
  }

  // Vercel Cron also accepts ?secret= when configured that way
  const querySecret = request.nextUrl.searchParams.get('secret');
  if (querySecret && querySecret === cronSecret) return true;

  return false;
}

/**
 * GET|POST /api/cron/onboarding-payment-reminders
 * Protected by CRON_SECRET. Runs the same logic as npm run onboarding:remind-payments.
 */
async function handle(request: NextRequest) {
  if (!isCronAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const dryRun = request.nextUrl.searchParams.get('dryRun') === '1';
  const result = await runPaymentReminders({ dryRun });

  return NextResponse.json(
    { ok: result.errors.length === 0, ...result },
    {
      status: 200,
      headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' },
    },
  );
}

export async function GET(request: NextRequest) {
  return handle(request);
}

export async function POST(request: NextRequest) {
  return handle(request);
}
