import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { listOnboardingSubmissions } from '@/lib/onboarding/store';

/**
 * GET /api/onboarding/leads
 * Authorization: Bearer <CONTACT_ADMIN_SECRET>
 */
export async function GET(request: NextRequest) {
  const secret = (process.env.CONTACT_ADMIN_SECRET ?? '').trim();
  if (!secret) {
    return NextResponse.json(
      { error: 'CONTACT_ADMIN_SECRET is not configured' },
      { status: 503 },
    );
  }

  const auth = request.headers.get('authorization') ?? '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
  if (!token || token !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const submissions = await listOnboardingSubmissions(50);
    return NextResponse.json({
      count: submissions.length,
      leads: submissions.map((s) => ({
        id: s.id,
        createdAt: s.createdAt,
        updatedAt: s.updatedAt,
        entityName: s.entityName,
        signatoryEmail: s.signatoryEmail,
        status: s.status,
        serviceSelection: s.serviceSelection,
        cpaProtected: s.cpaProtected,
        emailStatus: s.emailStatus,
        signedAt: s.signedAt ?? null,
        signatureMode: s.signatureMode ?? null,
        pdfUrl: s.pdfUrl ?? null,
        invoiceAmountZar: s.invoiceAmountZar ?? null,
        paymentReference: s.paymentReference ?? null,
        invoiceEmailedAt: s.invoiceEmailedAt ?? null,
        paidAt: s.paidAt ?? null,
        paymentMethod: s.paymentMethod ?? null,
      })),
    });
  } catch (error) {
    console.error('Onboarding leads fetch failed:', error);
    return NextResponse.json(
      {
        error:
          'Failed to load onboarding leads. Has OnboardingSubmission been migrated (prisma db push)?',
      },
      { status: 500 },
    );
  }
}
