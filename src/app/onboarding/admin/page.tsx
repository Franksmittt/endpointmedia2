import type { Metadata } from 'next';
import Link from 'next/link';
import AdminClient from './AdminClient';

export const metadata: Metadata = {
  title: { absolute: 'Onboarding Admin | Endpoint Media' },
  robots: { index: false, follow: false },
};

export default function OnboardingAdminPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-300">
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-sm font-semibold text-white">
            Endpoint<span className="text-zinc-500">.</span>
            <span className="ml-1 font-normal text-zinc-400">Media</span>
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">
            Phase 5 · Admin · noindex
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="text-3xl font-bold text-white">Onboarding admin</h1>
        <p className="mt-2 text-sm text-zinc-500">
          Confirm EFT payments (→ active) or suspend engagements. Secret is validated in server
          actions only.
        </p>
        <div className="mt-8">
          <AdminClient />
        </div>
      </main>
    </div>
  );
}
