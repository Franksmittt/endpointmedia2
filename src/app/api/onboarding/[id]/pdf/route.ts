import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import {
  authorizeOnboardingAccess,
  getBearerFromRequest,
} from '@/lib/onboarding/auth';
import { buildPackageHtml } from '@/lib/onboarding/package-html';
import { htmlToPdfBuffer, readStoredPdf } from '@/lib/onboarding/pdf';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

/**
 * GET /api/onboarding/[id]/pdf?token=
 * Auth: previewToken or CONTACT_ADMIN_SECRET.
 */
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const token = request.nextUrl.searchParams.get('token');
  const auth = await authorizeOnboardingAccess(id, {
    bearer: getBearerFromRequest(request),
    token,
  });
  if (!auth.ok) {
    return NextResponse.json({ error: auth.error }, { status: auth.status });
  }

  try {
    if (auth.submission.pdfUrl && auth.via === 'admin') {
      // Optional redirect for admin convenience when blob URL exists.
      // Token users get streamed bytes below for consistent auth.
    }

    if (auth.submission.pdfStorageKey) {
      const stored = await readStoredPdf(auth.submission.pdfStorageKey);
      if (stored) {
        return new NextResponse(new Uint8Array(stored), {
          status: 200,
          headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="endpoint-media-draft-${id}.pdf"`,
            'Cache-Control': 'no-store',
            'X-Robots-Tag': 'noindex, nofollow',
          },
        });
      }
    }

    if (auth.submission.pdfUrl) {
      return NextResponse.redirect(auth.submission.pdfUrl, 302);
    }

    // Fallback: regenerate from snapshot / form.
    const row = await prisma.onboardingSubmission.findUnique({
      where: { id },
      select: { packageHtmlSnapshot: true, form: true },
    });
    const html =
      row?.packageHtmlSnapshot ||
      (await buildPackageHtml(auth.submission.form));
    const pdf = await htmlToPdfBuffer(html);

    return new NextResponse(new Uint8Array(pdf), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="endpoint-media-draft-${id}.pdf"`,
        'Cache-Control': 'no-store',
        'X-Robots-Tag': 'noindex, nofollow',
      },
    });
  } catch (error) {
    console.error('Onboarding PDF download failed:', error);
    return NextResponse.json(
      { error: 'PDF unavailable in this runtime.' },
      { status: 501 },
    );
  }
}
