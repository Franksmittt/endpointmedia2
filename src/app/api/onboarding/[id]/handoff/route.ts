import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { getBearerFromRequest } from '@/lib/onboarding/auth';
import { buildHandoffZip } from '@/lib/onboarding/handoff';

export const runtime = 'nodejs';

/**
 * GET /api/onboarding/[id]/handoff
 * Admin-only (Bearer CONTACT_ADMIN_SECRET). Returns attorney handoff ZIP.
 */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const secret = (process.env.CONTACT_ADMIN_SECRET ?? '').trim();
  const bearer = (getBearerFromRequest(request) ?? '')
    .replace(/^Bearer\s+/i, '')
    .trim();

  if (!secret || !bearer || bearer !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const pack = await buildHandoffZip(id);
  if (!pack.ok) {
    return NextResponse.json({ error: pack.error }, { status: pack.status });
  }

  return new NextResponse(new Uint8Array(pack.buffer), {
    status: 200,
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${pack.filename}"`,
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
