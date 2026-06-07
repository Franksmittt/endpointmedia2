import 'server-only';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import ReportActions from './ReportActions';

type ReportPageProps = {
  params: Promise<{ id: string }>;
};

type StoredAuditData = {
  auditedUrl?: string;
  fingerprint?: { platform?: string; signals?: string[] };
  summary?: { score?: number; criticalIssues?: number; warnings?: number };
  quote?: {
    tier2UnlockUsd?: number;
    tier3RepoDiveUsd?: number;
    tier4OverhaulMonthlyUsd?: number;
  };
  rawTechnicalEvidence?: Array<{ key: string; value: string }>;
};

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Audit Report',
  description: 'Private Endpoint Media audit report.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noarchive: true,
      nosnippet: true,
    },
  },
};

function isLikelyAuditReportId(id: string): boolean {
  return /^[a-z0-9]{20,32}$/i.test(id);
}

export default async function ReportPage({ params }: ReportPageProps) {
  const { id } = await params;

  if (!isLikelyAuditReportId(id)) {
    notFound();
  }

  const report = await prisma.auditReport.findUnique({
    where: { id },
  });
  if (!report) {
    notFound();
  }

  const data = (report.rawAuditData ?? {}) as StoredAuditData;
  const evidence = Array.isArray(data.rawTechnicalEvidence) ? data.rawTechnicalEvidence : [];

  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-20">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Vicious Web Auditor Report
        </h1>
        <p className="mt-2 text-zinc-400 break-all">
          Target: {data.auditedUrl ?? report.targetUrl}
        </p>
        <p className="mt-1 text-zinc-500 text-sm">
          Report ID: {report.id} • Created: {report.createdAt.toISOString()}
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
            <p className="text-sm text-zinc-400">Platform</p>
            <p className="text-xl font-semibold">{data.fingerprint?.platform ?? 'unknown'}</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
            <p className="text-sm text-zinc-400">Score</p>
            <p className="text-xl font-semibold">{data.summary?.score ?? '-'}/100</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
            <p className="text-sm text-zinc-400">Unlock Price</p>
            <p className="text-xl font-semibold">${data.quote?.tier2UnlockUsd ?? '-'}</p>
          </div>
        </div>

        <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-6">
          <h2 className="text-xl font-semibold mb-4">Raw Technical Evidence</h2>
          <div className={`space-y-3 ${report.blurState ? 'select-none' : ''}`}>
            {evidence.length === 0 && (
              <p className="text-zinc-400">No technical evidence available for this report.</p>
            )}
            {evidence.map((item) => (
              <div
                key={`${item.key}-${item.value}`}
                className={`rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 ${
                  report.blurState ? 'blur-[5px]' : ''
                }`}
              >
                <p className="text-xs text-zinc-500">{item.key}</p>
                <p className="text-zinc-100 break-all">{item.value}</p>
              </div>
            ))}
          </div>
          {report.blurState && (
            <p className="mt-4 text-sm text-zinc-400">
              This report is locked. Unlock to reveal full diagnostics and export PDF.
            </p>
          )}
          <ReportActions reportId={report.id} blurState={report.blurState} />
        </section>
      </div>
    </main>
  );
}

