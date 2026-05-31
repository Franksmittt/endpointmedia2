'use client';

import React from 'react';

type AuditApiResponse = {
  tier: 'free' | 'unlock' | 'repository';
  unlocked: boolean;
  queuedJobId: string | null;
  reportId: string;
  report: {
    auditedUrl: string;
    competitorUrl?: string | null;
    competitorSummary?: {
      score: number;
      criticalIssues: number;
      warnings: number;
      estimatedLostLeadValueZar: number;
      advisory: string;
    };
    fingerprint: { platform: string; signals: string[] };
    summary: {
      score: number;
      criticalIssues: number;
      warnings: number;
      estimatedLostLeadValueZar: number;
      advisory: string;
    };
    quote: {
      tier2UnlockUsd: number;
      tier3RepoDiveUsd: number;
      tier4OverhaulMonthlyUsd: number;
    };
    rawTechnicalEvidence: Array<{ key: string; value: string }>;
  };
};

export default function AgencyHeroSection() {
  const [url, setUrl] = React.useState('');
  const [competitorUrl, setCompetitorUrl] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<AuditApiResponse | null>(null);
  const [checkoutLoading, setCheckoutLoading] = React.useState(false);

  async function handleRunAudit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/vicious-audit/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url, competitorUrl, tier: 'free' }),
      });
      const payload = (await response.json()) as AuditApiResponse & { error?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? `Audit failed (${response.status})`);
      }
      setResult(payload);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error while running audit.');
    } finally {
      setLoading(false);
    }
  }

  async function handleUnlockCheckout() {
    if (!result?.reportId) return;
    setCheckoutLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reportId: result.reportId }),
      });
      const payload = (await response.json()) as { checkoutUrl?: string; error?: string };
      if (!response.ok || !payload.checkoutUrl) {
        throw new Error(payload.error ?? `Checkout failed (${response.status})`);
      }
      window.location.href = payload.checkoutUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to start checkout.');
    } finally {
      setCheckoutLoading(false);
    }
  }

  return (
    <>
      <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-black px-[5%] pb-10 pt-28 text-[#F5F5F7] md:pb-12 md:pt-32">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />

        <div className="z-10 flex w-full max-w-5xl flex-col items-start text-left">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 mb-5">
          Elite Web Architecture + Revenue Systems
        </p>
        <h1
          id="hero-headline"
          className="mb-4 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl"
        >
          Is your website invisible to ChatGPT?
        </h1>

        <p
          id="hero-summary"
          className="mb-6 max-w-3xl text-lg tracking-[-0.3px] text-[#A1A1AA] md:text-xl"
        >
          Run a vicious, military-grade Answer Engine Optimization (AEO) and SEO audit on your
          live infrastructure. Discover the hidden edge traps destroying your visibility.
        </p>

        <form
          onSubmit={handleRunAudit}
          className="mb-2 flex w-full max-w-3xl flex-col items-stretch rounded-sm border border-[#333333] bg-[#111111] p-2 shadow-2xl transition-all duration-300 focus-within:border-zinc-500"
        >
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="url"
              placeholder="Your website URL (https://yourdomain.co.za)"
              className="flex-1 bg-transparent border border-zinc-800 outline-none px-4 py-3 text-base text-[#F5F5F7] placeholder-zinc-600 w-full rounded-sm"
              required
              autoComplete="off"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <input
              type="url"
              placeholder="Competitor URL (optional)"
              className="flex-1 bg-transparent border border-zinc-800 outline-none px-4 py-3 text-base text-[#F5F5F7] placeholder-zinc-600 w-full rounded-sm"
              autoComplete="off"
              value={competitorUrl}
              onChange={(e) => setCompetitorUrl(e.target.value)}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-[#F5F5F7] text-black font-semibold text-base px-8 py-4 rounded-sm w-full hover:bg-zinc-200 transition-colors disabled:opacity-60"
          >
            {loading ? 'Running Deep Audit...' : 'Run Deep Audit'}
          </button>
        </form>

        {error && (
          <div className="w-full max-w-4xl mt-8 rounded-xl border border-red-700/40 bg-red-900/20 p-5 text-left text-red-200">
            {error}
          </div>
        )}

        {result && (
          <div className="w-full max-w-4xl mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 text-left">
            <h2 className="text-2xl font-semibold mb-2">Free Scan Snapshot</h2>
            <p className="text-zinc-400 mb-5">
              Platform: <span className="text-zinc-200">{result.report.fingerprint.platform}</span>{' '}
              • Score: <span className="text-zinc-200">{result.report.summary.score}/100</span>
            </p>

            <div className="grid md:grid-cols-4 gap-4 mb-5">
              <div className="rounded-lg border border-zinc-800 p-4">
                <p className="text-sm text-zinc-400">Critical Issues</p>
                <p className="text-2xl font-semibold text-white">{result.report.summary.criticalIssues}</p>
              </div>
              <div className="rounded-lg border border-zinc-800 p-4">
                <p className="text-sm text-zinc-400">Warnings</p>
                <p className="text-2xl font-semibold text-white">{result.report.summary.warnings}</p>
              </div>
              <div className="rounded-lg border border-zinc-800 p-4">
                <p className="text-sm text-zinc-400">Unlock Price</p>
                <p className="text-2xl font-semibold text-white">${result.report.quote.tier2UnlockUsd}</p>
              </div>
              <div className="rounded-lg border border-zinc-800 p-4">
                <p className="text-sm text-zinc-400">Est. Revenue Leakage</p>
                <p className="text-2xl font-semibold text-emerald-400">
                  R{result.report.summary.estimatedLostLeadValueZar.toLocaleString('en-ZA')}
                </p>
              </div>
            </div>

            {result.report.competitorSummary && (
              <div className="mb-5 rounded-lg border border-zinc-800 bg-zinc-900/60 p-4">
                <p className="text-sm text-zinc-400 mb-1">Competitor Delta</p>
                <p className="text-zinc-200">
                  Your score: <strong>{result.report.summary.score}</strong> vs competitor:{' '}
                  <strong>{result.report.competitorSummary.score}</strong>
                </p>
              </div>
            )}

            <p className="mb-5 text-sm text-zinc-300">{result.report.summary.advisory}</p>

            <p className="text-sm uppercase tracking-wider text-zinc-500 mb-2">Raw Technical Evidence</p>
            <div className="space-y-2">
              {result.report.rawTechnicalEvidence.slice(0, 8).map((evidence) => (
                <div key={evidence.key} className="rounded border border-zinc-800 p-3 bg-zinc-900/60">
                  <p className="text-xs text-zinc-500">{evidence.key}</p>
                  <p className="text-zinc-200">{evidence.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`/report/${result.reportId}`}
                className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
              >
                Open Report Page
              </a>
              <button
                type="button"
                onClick={handleUnlockCheckout}
                disabled={checkoutLoading}
                className="inline-flex items-center justify-center rounded-sm bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200 disabled:opacity-60"
              >
                {checkoutLoading
                  ? 'Redirecting to Stripe...'
                  : `Unlock Full Report - $${result.report.quote.tier2UnlockUsd}`}
              </button>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
              >
                Book 15-Min Fix Call
              </a>
            </div>
          </div>
        )}
      </div>
      </section>
      <section className="bg-zinc-950/90 py-12 md:py-14">
        <div className="container mx-auto px-6">
          <p className="max-w-4xl text-sm leading-relaxed text-[#86868B] md:text-base">
            We engineered this deep diagnostics platform to protect our clients against modern
            crawler traps, platform-specific duplicate canonical paths, and edge network failures
            that completely sever brands from generative AI search spaces like OpenAI, Claude, and
            Gemini.
          </p>
        </div>
      </section>
    </>
  );
}

