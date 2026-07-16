import Link from 'next/link';
import { buildPackageHtml } from '@/lib/onboarding/package-html';
import { isAlreadySigned } from '@/lib/onboarding/status';
import { getOnboardingSubmission } from '@/lib/onboarding/store';
import SignForm from './SignForm';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?: string }>;
};

export default async function OnboardingSignPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { token } = await searchParams;
  const trimmedToken = (token ?? '').trim();

  if (!trimmedToken) {
    return (
      <ErrorShell title="Missing token">
        Open the sign link that includes <code>?token=…</code>. If you lost it, ask Endpoint Media
        to resend your onboarding email.
      </ErrorShell>
    );
  }

  const submission = await getOnboardingSubmission(id);
  if (!submission || submission.previewToken !== trimmedToken) {
    return (
      <ErrorShell title="Invalid or expired link">
        This signing link is not valid. Check the URL or request a new invite from Endpoint Media.
      </ErrorShell>
    );
  }

  const html = await buildPackageHtml(submission.form);
  const alreadySigned = isAlreadySigned(submission.status);

  return (
    <div className="min-h-screen bg-black text-zinc-300">
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-semibold text-white">
            Endpoint<span className="text-zinc-500">.</span>
            <span className="ml-1 font-normal text-zinc-400">Media</span>
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-500/90">
            DRAFT — Requires SA attorney review
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-5xl gap-10 px-6 py-10 lg:grid-cols-[1.2fr_0.8fr]">
        <section>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            Package preview
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white">{submission.entityName}</h1>
          <p className="mt-2 text-sm text-zinc-500">
            Status: <span className="text-zinc-300">{submission.status}</span>
            {' · '}
            Services: <span className="text-zinc-300">{submission.serviceSelection || '—'}</span>
          </p>
          <div className="mt-6 overflow-hidden rounded-sm border border-zinc-800 bg-white">
            <iframe
              title="Draft contract package"
              className="h-[70vh] w-full bg-white"
              srcDoc={html}
              sandbox=""
            />
          </div>
        </section>

        <section className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 lg:sticky lg:top-8 lg:self-start">
          <SignForm
            submissionId={submission.id}
            token={trimmedToken}
            expectedSignatoryName={submission.form.signatoryName}
            alreadySigned={alreadySigned}
          />
        </section>
      </main>
    </div>
  );
}

function ErrorShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 text-zinc-300">
      <div className="max-w-md rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-red-400/90">Sign error</p>
        <h1 className="mt-3 text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-3 text-sm text-zinc-500">{children}</p>
        <Link href="/contact" className="mt-6 inline-block text-sm text-zinc-300 underline">
          Contact Endpoint Media
        </Link>
      </div>
    </div>
  );
}
