import Link from 'next/link';
import OnboardingForm from '@/app/onboarding/OnboardingForm';

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-300">
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-semibold text-white">
            Endpoint<span className="text-zinc-500">.</span>
            <span className="ml-1 font-normal text-zinc-400">Media</span>
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
            Phase 1 · Foundations
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
          Contracts · Onboarding · POPIA
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-[-1.5px] text-white md:text-5xl">
          Start your engagement package.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-500">
          This flow prepares a draft MSA, Key Commercial Terms, applicable SoW(s), and POPIA annex.
          Endpoint Media is not VAT-registered. Work starts only after digital signature and first
          payment — those steps are designed for later phases.
        </p>
        <p className="mt-3 text-sm text-amber-500/90">
          DRAFT — REQUIRES SA ATTORNEY REVIEW. Not live e-sign. Not a public launch.
        </p>

        <div className="mt-10">
          <OnboardingForm />
        </div>

        <p className="mt-8 text-center text-xs text-zinc-600">
          <Link href="/onboarding/documents" className="underline-offset-2 hover:text-zinc-400 hover:underline">
            View draft document index
          </Link>
          {' · '}
          <Link href="/contact" className="underline-offset-2 hover:text-zinc-400 hover:underline">
            Contact Frank
          </Link>
        </p>
      </main>
    </div>
  );
}
