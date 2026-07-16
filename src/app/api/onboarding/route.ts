import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { sendOnboardingNotifications } from '@/lib/onboarding/email';
import { buildPackageHtml } from '@/lib/onboarding/package-html';
import { parseOnboardingForm } from '@/lib/onboarding/schema';
import {
  createOnboardingSubmission,
  getOnboardingSubmission,
  updateOnboardingEmailMeta,
} from '@/lib/onboarding/store';
import type { OnboardingFormData } from '@/lib/onboarding/types';
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Unsupported Media Type' }, { status: 415 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  try {
    const body = (await request.json()) as { form?: OnboardingFormData };
    if (!body.form) {
      return NextResponse.json({ error: 'Missing form payload' }, { status: 400 });
    }

    const parsed = parseOnboardingForm(body.form);
    if (!parsed.ok) {
      return NextResponse.json(
        { error: 'Validation failed', fieldErrors: parsed.errors },
        { status: 400 },
      );
    }

    const form = parsed.data as OnboardingFormData;
    const submission = await createOnboardingSubmission(form);

    let packageHtml: string | undefined;
    try {
      packageHtml = await buildPackageHtml(form);
    } catch (htmlError) {
      console.error('Package HTML build failed:', htmlError);
    }

    const mail = await sendOnboardingNotifications(submission);
    await updateOnboardingEmailMeta(submission.id, {
      emailStatus: mail.ok ? 'sent' : 'failed',
      emailError: mail.error ?? null,
      packageHtmlSnapshot: packageHtml,
    });

    const signPath = `/onboarding/sign/${submission.id}?token=${submission.previewToken}`;

    return NextResponse.json(
      {
        success: true,
        message:
          'Draft onboarding package saved and marked awaiting_signature. Use the sign link to complete clickwrap. Work still starts only after first invoice payment. DRAFT — REQUIRES SA ATTORNEY REVIEW.',
        submission: {
          id: submission.id,
          status: submission.status,
          cpaProtected: submission.cpaProtected,
          previewToken: submission.previewToken,
          createdAt: submission.createdAt,
          emailStatus: mail.ok ? 'sent' : 'failed',
          signPath,
        },
        emailWarning: mail.ok ? undefined : mail.error,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error('Onboarding POST failed:', error);
    return NextResponse.json(
      {
        error:
          'Failed to save onboarding draft. Confirm DATABASE_URL and that OnboardingSubmission table exists (prisma db push).',
      },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  if (!id) {
    return NextResponse.json(
      { error: 'Use GET /api/onboarding/leads for the admin list, or ?id=' },
      { status: 400 },
    );
  }

  const submission = await getOnboardingSubmission(id);
  if (!submission) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json({
    submission: {
      id: submission.id,
      status: submission.status,
      entityName: submission.entityName,
      signatoryEmail: submission.signatoryEmail,
      serviceSelection: submission.serviceSelection,
      cpaProtected: submission.cpaProtected,
      createdAt: submission.createdAt,
      updatedAt: submission.updatedAt,
    },
  });
}
