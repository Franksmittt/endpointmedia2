import Link from 'next/link';
import { LEGAL_DRAFT_PATHS } from '@/lib/onboarding';

const docs = [
  {
    title: 'Master Services Agreement (MSA)',
    path: LEGAL_DRAFT_PATHS.msa,
    summary: 'Non-VAT fees, 3+6 term, cancellation clawback model, ROI disclaimer, POPIA, Gauteng law.',
  },
  {
    title: 'Key Commercial Terms',
    path: LEGAL_DRAFT_PATHS.keyTerms,
    summary: 'One-pager for initialling — term, fees, cancellation, no guarantees, start-after-sign-and-pay.',
  },
  {
    title: 'SoW — Google Ads retainer',
    path: LEGAL_DRAFT_PATHS.sowAds,
    summary: 'Retainer scope, client-paid ad spend, access checklist, competitor bidding flag.',
  },
  {
    title: 'SoW — Website build',
    path: LEGAL_DRAFT_PATHS.sowWeb,
    summary: 'Project milestones, flat ZAR fees, IP until paid, DNS/hosting access.',
  },
  {
    title: 'POPIA Operator Annex',
    path: LEGAL_DRAFT_PATHS.popia,
    summary: 'Operator vs Responsible Party, purposes, security, cross-border platform processing.',
  },
];

export default function OnboardingDocumentsPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-300">
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
          <Link href="/onboarding" className="text-sm text-zinc-400 transition-colors hover:text-white">
            ← Back to onboarding
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber-500/90">
            Draft · Attorney review required
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-bold text-white">Draft legal package index</h1>
        <p className="mt-3 text-sm text-zinc-500">
          Markdown sources live in the repo. Phase 1 does not render full contract HTML to clients —
          these paths are for founders / counsel. Do not present as attorney-approved.
        </p>

        <ul className="mt-10 space-y-4">
          {docs.map((doc) => (
            <li
              key={doc.path}
              className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-5"
            >
              <h2 className="text-lg font-semibold text-white">{doc.title}</h2>
              <p className="mt-2 text-sm text-zinc-400">{doc.summary}</p>
              <p className="mt-3 font-mono text-xs text-zinc-600">{doc.path}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
