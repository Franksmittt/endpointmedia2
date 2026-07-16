import Link from 'next/link';
import { buildPaymentInstructions } from '@/lib/onboarding/bank-copy';
import { getOnboardingSubmission } from '@/lib/onboarding/store';
import PaystackPayButton from './PaystackPayButton';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?: string; paystack?: string }>;
};

export default async function OnboardingStatusPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const { token, paystack } = await searchParams;
  const trimmedToken = (token ?? '').trim();

  if (!trimmedToken) {
    return <StatusError title="Missing token" body="Open the status link that includes ?token=…" />;
  }

  const submission = await getOnboardingSubmission(id);
  if (!submission || submission.previewToken !== trimmedToken) {
    return (
      <StatusError
        title="Invalid or expired link"
        body="This status link is not valid. Request a new link from Endpoint Media."
      />
    );
  }

  const pay = buildPaymentInstructions(submission);
  const signed = Boolean(submission.signedAt);
  const isAwaiting = submission.status === 'awaiting_payment' || submission.status === 'signed';
  const isActive = submission.status === 'active';
  const isSuspended = submission.status === 'suspended';

  return (
    <div className="min-h-screen bg-black text-zinc-300">
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-semibold text-white">
            Endpoint<span className="text-zinc-500">.</span>
            <span className="ml-1 font-normal text-zinc-400">Media</span>
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-500/90">
            DRAFT package · Attorney review required
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 py-12">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">Engagement status</p>
        <h1 className="mt-2 text-3xl font-bold text-white">{submission.entityName}</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Status:{' '}
          <span className="font-mono text-zinc-200">{submission.status}</span>
          {' · '}
          Signed: <span className="text-zinc-200">{signed ? 'yes' : 'no'}</span>
        </p>
        {paystack === '1' && isAwaiting && (
          <p className="mt-3 text-sm text-amber-400/90">
            If you just paid with Paystack, allow a moment for the webhook — refresh shortly, or we
            will email you when status is active.
          </p>
        )}

        {isActive && (
          <div className="mt-8 rounded-sm border border-emerald-800/40 bg-emerald-950/20 p-5 text-sm text-emerald-200">
            Payment confirmed. Your engagement is <strong>active</strong>. Endpoint Media may begin
            work and grant access.
          </div>
        )}

        {isSuspended && (
          <div className="mt-8 rounded-sm border border-red-800/40 bg-red-950/20 p-5 text-sm text-red-200">
            This engagement is suspended
            {submission.suspendReason ? `: ${submission.suspendReason}` : '.'}
          </div>
        )}

        {isAwaiting && (
          <section className="mt-8 space-y-4 rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
            <h2 className="text-lg font-semibold text-white">First invoice — pay by EFT</h2>
            <p className="text-sm text-zinc-400">{pay.nonVatLine}</p>
            <p className="text-sm text-zinc-400">
              Amount due:{' '}
              <span className="text-xl font-semibold text-white">
                R{pay.amountZar.toLocaleString('en-ZA')}
              </span>
            </p>
            <p className="text-xs text-zinc-600">{pay.setupNote}</p>
            <dl className="space-y-2 text-sm text-zinc-400">
              <div>
                <dt className="text-zinc-600">Bank</dt>
                <dd className="text-zinc-200">{pay.bank.bankName}</dd>
              </div>
              <div>
                <dt className="text-zinc-600">Account name</dt>
                <dd className="text-zinc-200">{pay.bank.accountName}</dd>
              </div>
              <div>
                <dt className="text-zinc-600">Account number</dt>
                <dd className="font-mono text-zinc-200">{pay.bank.accountNumber}</dd>
              </div>
              <div>
                <dt className="text-zinc-600">Branch code</dt>
                <dd className="font-mono text-zinc-200">{pay.bank.branchCode}</dd>
              </div>
              <div>
                <dt className="text-zinc-600">Payment reference (required)</dt>
                <dd className="font-mono text-lg text-white">{pay.reference}</dd>
              </div>
            </dl>
            <p className="text-sm text-zinc-500">
              Work starts only after payment clears. Never titled “Tax Invoice” — Endpoint Media is
              not VAT-registered.
            </p>

            {pay.paystackEnabled && (
              <div className="border-t border-zinc-800 pt-4">
                <p className="mb-3 text-sm text-zinc-500">Optional card payment via Paystack:</p>
                <PaystackPayButton submissionId={id} token={trimmedToken} />
              </div>
            )}
          </section>
        )}

        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          {signed && (
            <a
              href={`/api/onboarding/${id}/pdf?token=${trimmedToken}`}
              className="rounded-sm border border-zinc-700 px-4 py-2 text-zinc-200 hover:bg-zinc-900"
            >
              Download signed draft PDF
            </a>
          )}
          {!signed && submission.status === 'awaiting_signature' && (
            <Link
              href={`/onboarding/sign/${id}?token=${trimmedToken}`}
              className="rounded-sm bg-white px-4 py-2 font-semibold text-black hover:bg-zinc-200"
            >
              Sign package
            </Link>
          )}
          <Link href="/contact" className="rounded-sm border border-zinc-700 px-4 py-2 hover:bg-zinc-900">
            Contact Frank
          </Link>
        </div>
      </main>
    </div>
  );
}

function StatusError({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 text-zinc-300">
      <div className="max-w-md rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-center">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-3 text-sm text-zinc-500">{body}</p>
      </div>
    </div>
  );
}
