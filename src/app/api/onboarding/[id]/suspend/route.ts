import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { getBearerFromRequest } from '@/lib/onboarding/auth';
import { suspendOnboarding } from '@/lib/onboarding/payment';

/**
 * POST /api/onboarding/[id]/suspend
 * Authorization: Bearer CONTACT_ADMIN_SECRET
 * Body: { reason?: string }
 */
export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const secret = (process.env.CONTACT_ADMIN_SECRET ?? '').trim();
  const bearer = (getBearerFromRequest(request) ?? '').replace(/^Bearer\s+/i, '').trim();
  if (!secret || !bearer || bearer !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { id } = await context.params;
  let reason = 'Suspended by admin';
  try {
    const body = (await request.json()) as { reason?: string };
    if (body.reason?.trim()) reason = body.reason.trim();
  } catch {
    // optional body
  }

  const result = await suspendOnboarding(id, reason);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 409 });
  }

  return NextResponse.json({
    success: true,
    submission: {
      id: result.submission.id,
      status: result.submission.status,
      suspendedAt: result.submission.suspendedAt,
      suspendReason: result.submission.suspendReason,
    },
  });
}
