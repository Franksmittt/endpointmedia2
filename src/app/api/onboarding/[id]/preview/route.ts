import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import {
  authorizeOnboardingAccess,
  getBearerFromRequest,
} from '@/lib/onboarding/auth';
import { buildPackageHtml } from '@/lib/onboarding/package-html';

/**
 * GET /api/onboarding/[id]/preview
 * Auth: Bearer CONTACT_ADMIN_SECRET OR ?token=<previewToken>
 */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const auth = await authorizeOnboardingAccess(id, {
    bearer: getBearerFromRequest(request),
    token: request.nextUrl.searchParams.get('token'),
  });
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    const html = await buildPackageHtml(auth.submission.form);
    return new NextResponse(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  } catch (error) {
    console.error('Onboarding preview failed:', error);
    return NextResponse.json({ error: 'Failed to render draft package' }, { status: 500 });
  }
}
