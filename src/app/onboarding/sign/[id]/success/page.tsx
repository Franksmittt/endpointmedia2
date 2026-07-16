import Link from 'next/link';
import { getOnboardingSubmission } from '@/lib/onboarding/store';
import { isAlreadySigned } from '@/lib/onboarding/status';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?: string }>;
};

export default async function OnboardingSignSuccessPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { token } = await searchParams;
  const trimmedToken = (token ?? '').trim();
  const submission = trimmedToken ? await getOnboardingSubmission(id) : null;
  const valid =
    submission &&
    trimmedToken &&
    submission.previewToken === trimmedToken &&
    isAlreadySigned(submission.status);

  if (!valid || !submission) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-6 text-zinc-300">
        <div className="max-w-md rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-center">
          <h1 className="text-2xl font-semibold text-white">Confirmation unavailable</h1>
          <p className="mt-3 text-sm text-zinc-500">
            Invalid token or package not signed yet.
          </p>
        </div>
      </div>
    );
  }

  const pdfHref = `/api/onboarding/${id}/pdf?token=${trimmedToken}`;

  return (
    <div className="min-h-screen bg-black text-zinc-300">
      <main className="mx-auto max-w-xl px-6 py-20 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-400/90">
          Electronically signed
        </p>
        <h1 className="mt-4 text-4xl font-bold text-white">Awaiting first invoice payment</h1>
        <p className="mt-4 text-base text-zinc-400">
          Thanks, <span className="text-zinc-200">{submission.form.signatoryName}</span>. The draft
          package for <span className="text-zinc-200">{submission.entityName}</span> is signed. We
          will send invoice / banking details next. Work and access start only after payment
          clears.
        </p>
        <p className="mt-4 text-sm text-amber-500/90">
          DRAFT — REQUIRES SA ATTORNEY REVIEW. Your clickwrap signature records agreement to proceed
          on these commercial terms; templates are not described as attorney-approved.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={`/onboarding/status/${id}?token=${trimmedToken}`}
            className="rounded-sm bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
          >
            View payment instructions / status
          </Link>
          <a
            href={pdfHref}
            className="rounded-sm border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
          >
            Download signed draft PDF
          </a>
          <Link
            href="/contact"
            className="rounded-sm border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
          >
            Contact Frank
          </Link>
        </div>

        <p className="mt-8 font-mono text-xs text-zinc-600">
          Status: {submission.status} · ID: {submission.id}
        </p>
        <p className="mt-2 text-xs text-zinc-700">
          First invoice = first month retainer (setup fee stays waived unless early cancel). Check
          your email for EFT details, or open the status page above.
        </p>
      </main>
    </div>
  );
}
