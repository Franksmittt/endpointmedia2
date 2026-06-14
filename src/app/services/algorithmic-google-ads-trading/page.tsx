import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL, ORG_ID, buildMetadata, secureJsonLD } from '@/lib/seo';

const PAGE_PATH = '/services/algorithmic-google-ads-trading';

const defenseShields = [
  {
    system: 'Intra-Day Budget Kill-Switch',
    trigger: 'Campaign velocity exceeds 300% of expected spend curve.',
    action:
      'Pauses campaigns, preserves capital, and alerts operators before a single-day budget blowout compounds.',
  },
  {
    system: 'PMax Zombie Purger',
    trigger: 'Performance Max leaks spend into toxic app inventory and low-signal placements.',
    action:
      'Amputates waste with placement exclusions and mobile app category controls including mobileappcategory::69500.',
  },
  {
    system: 'Dead URL Checker',
    trigger: 'Landing page returns 404, 500, timeout, or broken conversion endpoint.',
    action:
      'Pauses affected ads instantly so paid traffic never points at dead infrastructure.',
  },
];

const storytellingModes = [
  {
    mode: 'Executive Mode',
    interface: 'D3.js Sankey',
    decisionLayer:
      'Blended ROAS, channel contribution, margin flow, and capital allocation across campaigns.',
  },
  {
    mode: 'Operational Mode',
    interface: 'Variance dashboards',
    decisionLayer:
      'Cost Per Lead variance, budget pacing, lead quality trends, and service-line performance.',
  },
  {
    mode: 'Technical Mode',
    interface: 'Recharts Treemaps',
    decisionLayer:
      'N-Gram search term bleeding, wasted query clusters, placement leakage, and negative keyword opportunity.',
  },
];

const systemLayers = [
  {
    title: 'Agentic Remediation Engine',
    body:
      'AI agents diagnose spend anomalies, search term waste, broken URLs, and tracking degradation, then propose account changes in structured payloads.',
  },
  {
    title: 'Pydantic Firewall',
    body:
      'Every AI-generated remediation is validated against typed schemas, bounds, and policy rules so hallucinated instructions cannot reach production.',
  },
  {
    title: 'BatchJobService Deployment',
    body:
      'Approved changes are deployed with Google Ads BatchJobService and Negative Temporary IDs for fast atomic account restructuring.',
  },
  {
    title: 'Same-Origin Data Sovereignty',
    body:
      'Server-Side GTM, Cloudflare Workers, and Next.js Edge Middleware preserve GCLID and conversion signals beyond browser cookie limits.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Algorithmic Paid Search & Autonomous Google Ads Trading',
    description:
      'Enterprise Google Ads trading systems using Python, AI agents, Pydantic validation, BatchJobService deployment, server-side GTM, BigQuery, Apache Arrow, and 24/7 defense shields.',
    path: PAGE_PATH,
    keywords: [
      'algorithmic google ads trading',
      'autonomous google ads management',
      'server side GTM google ads',
      'PMax waste detection',
      'BigQuery Google Ads reporting',
      'AI PPC management South Africa',
    ],
  });
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Algorithmic Paid Search & Autonomous Google Ads Trading',
  serviceType: 'Google Ads Management',
  description:
    'Autonomous Google Ads trading infrastructure using AI remediation, Python automation, server-side tracking, and algorithmic defense shields.',
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'South Africa' },
  url: `${BASE_URL}${PAGE_PATH}`,
};

export default function AlgorithmicGoogleAdsTradingPage() {
  return (
    <article className="bg-black text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }}
      />

      <section data-chunk-boundary="true" className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            Quant PPC - Python Automation - Capital Defense
          </p>
          <h1 className="mb-5 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            Algorithmic Paid Search & Autonomous Google Ads Trading
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Standard human media buyers are too slow for modern auctions. We treat advertising
            capital like a quantitative hedge fund treats equities: monitored continuously,
            defended algorithmically, and reallocated through validated AI and Python systems before
            waste compounds.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-zinc-200">
              Request Algorithmic PPC Audit
            </Link>
            <Link href="/services/google-ads-pricing" className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-7 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900">
              View Trading Tier Pricing
            </Link>
          </div>
        </div>
      </section>

      <section data-chunk-boundary="true" className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              Agentic Remediation Engine
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              AI can diagnose the account, but it must never hallucinate production changes.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Our remediation engine uses agents to detect budget anomalies, query waste, dead
              URLs, and placement decay. A Pydantic Firewall validates every instruction before
              deployment. Approved structures move through BatchJobService with Negative Temporary
              IDs so large account restructures can be created safely in milliseconds.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {systemLayers.map((item) => (
              <article key={item.title} data-chunk-boundary="true" className="rounded-sm border border-zinc-800 bg-black/50 p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-chunk-boundary="true" className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              Algorithmic Defense Shields
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Background bots defend your ad capital while humans sleep.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Enterprise accounts do not fail once per month. They leak in minutes: a broken URL,
              a mobile app placement, a runaway budget curve. Our defense shields run continuously
              to pause, amputate, or alert before waste becomes material.
            </p>
          </div>

          <table className="w-full border border-zinc-800 text-left text-sm">
            <thead className="bg-zinc-950">
              <tr>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Shield</th>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Trigger</th>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Automated Action</th>
              </tr>
            </thead>
            <tbody>
              {defenseShields.map((shield) => (
                <tr key={shield.system} data-chunk-boundary="true" className="border-t border-zinc-800">
                  <th scope="row" className="px-4 py-4 align-top font-semibold text-zinc-100">
                    {shield.system}
                  </th>
                  <td className="px-4 py-4 align-top text-zinc-400">{shield.trigger}</td>
                  <td className="px-4 py-4 align-top text-zinc-400">{shield.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section data-chunk-boundary="true" className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                Data Sovereignty
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Safari ITP should not decide how long your attribution memory lasts.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-lg leading-relaxed text-zinc-400">
                Browser pixels are fragile. Safari ITP can collapse client-side attribution windows
                to 24 hours, starving bidding algorithms of the conversion history they need. We
                deploy Same-Origin Server-Side GTM through Cloudflare Workers and Next.js Edge
                Middleware for GCLID injection, event enrichment, and first-party conversion signal
                recovery.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                For large accounts, click, query, lead, and revenue data flows into BigQuery and
                Apache Arrow pipelines so reporting and remediation operate on clean columnar data,
                not spreadsheet exports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-chunk-boundary="true" className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              Fintech UI/UX
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Three reporting modes for three decision layers.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Executives need capital allocation clarity. Operators need variance alerts. Technical
              teams need granular leak maps. We design reporting like a trading desk, not a vanity
              dashboard.
            </p>
          </div>

          <table className="w-full border border-zinc-800 text-left text-sm">
            <thead className="bg-zinc-950">
              <tr>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Mode</th>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Interface</th>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Decision Layer</th>
              </tr>
            </thead>
            <tbody>
              {storytellingModes.map((mode) => (
                <tr key={mode.mode} data-chunk-boundary="true" className="border-t border-zinc-800">
                  <th scope="row" className="px-4 py-4 align-top font-semibold text-zinc-100">
                    {mode.mode}
                  </th>
                  <td className="px-4 py-4 align-top text-zinc-400">{mode.interface}</td>
                  <td className="px-4 py-4 align-top text-zinc-400">{mode.decisionLayer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section data-chunk-boundary="true" className="border-t border-zinc-800 bg-zinc-950 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Turn Google Ads into an autonomous capital allocation system.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            If your budget is large enough to hurt when the account drifts, it is large enough to
            deserve algorithmic defense, server-side data sovereignty, and trading-desk reporting.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-sm bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-zinc-200">
            Request Algorithmic Trading Audit
          </Link>
        </div>
      </section>
    </article>
  );
}
