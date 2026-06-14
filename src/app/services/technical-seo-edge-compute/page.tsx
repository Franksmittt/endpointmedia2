import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL, ORG_ID, buildMetadata, secureJsonLD } from '@/lib/seo';

const PAGE_PATH = '/services/technical-seo-edge-compute';

const crawlBudgetRows = [
  {
    trap: 'Recursive path loops',
    example: '/shop/shop/shop/shop',
    response: 'HTTP 410 Gone before the origin server boots.',
  },
  {
    trap: 'Recursive query strings',
    example: '/products?a=1?b=2',
    response: 'Hard 410 trap for malformed infinite URL variants.',
  },
  {
    trap: 'Tracking parameter duplication',
    example: '?utm_source=x&fbclid=y&gclid=z',
    response: 'Clean 301 redirect to consolidate canonical equity.',
  },
  {
    trap: 'Verified bot asset requests',
    example: '/_next/static/chunks/app.js',
    response: 'Immutable cache headers so WRS reuses its internal cache.',
  },
];

const engineeringLayers = [
  {
    title: 'Regex crawl traps',
    body:
      'We terminate recursive URL patterns with 410 responses at the edge so Googlebot spends budget on real money pages.',
  },
  {
    title: 'Canonical ingress normalization',
    body:
      'We strip benign tracking parameters with 301 redirects to collapse duplicate URLs into one canonical destination.',
  },
  {
    title: 'PPR bot branching',
    body:
      'Human users can receive streamed UI, while verified bots receive blocking HTML shells to avoid WRS timeout loss.',
  },
  {
    title: 'Crawl telemetry',
    body:
      'We combine edge response headers, GSC URL Inspection checks, and canonical parity alerts for CI/CD enforcement.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Edge-Level Crawl Budget Optimization',
    description:
      'Technical SEO edge compute for crawl-budget protection, recursive URL traps, tracking parameter normalization, and Googlebot-safe PPR bot branching.',
    path: PAGE_PATH,
    keywords: [
      'crawl budget optimization',
      'technical SEO edge compute',
      'PPR bot branching',
      'Googlebot WRS timeout',
      'edge middleware SEO',
      'HTTP 410 crawl traps',
    ],
  });
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Edge-Level Crawl Budget Optimization',
  serviceType: 'Technical SEO',
  description:
    'Edge middleware for crawl-budget protection, URL normalization, crawl traps, and Googlebot-safe rendering branches.',
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'South Africa' },
  url: `${BASE_URL}${PAGE_PATH}`,
};

export default function TechnicalSeoEdgeComputePage() {
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
            Edge Compute - Crawl Budget - WRS Control
          </p>
          <h1 className="mb-5 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            Edge-Level Crawl Budget Optimization
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Large sites waste Googlebot crawl budget on infinite faceted navigation, tracking
            parameters, broken backlinks, and JavaScript shells that time out in Web Rendering
            Service. We move technical SEO to the edge: regex traps, clean redirects, immutable
            bot asset caching, and PPR bot branching for fully compiled blocking HTML.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-zinc-200">
              Request Crawl Budget Audit
            </Link>
            <Link href="/services/ai-crawler-firewall" className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-7 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900">
              View AI Firewall
            </Link>
          </div>
        </div>
      </section>

      <section data-chunk-boundary="true" className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              Crawl Trap Matrix
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Stop Googlebot from wasting time on URLs that should not exist.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Origin-level 404s are too late. By the time your app renders a not-found page, the
              crawler has already spent budget. Edge traps terminate dead patterns in milliseconds
              and preserve bandwidth for revenue pages.
            </p>
          </div>

          <table className="w-full border border-zinc-800 text-left text-sm">
            <thead className="bg-black">
              <tr>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Pattern</th>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Example</th>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Edge Response</th>
              </tr>
            </thead>
            <tbody>
              {crawlBudgetRows.map((row) => (
                <tr key={row.trap} data-chunk-boundary="true" className="border-t border-zinc-800">
                  <th scope="row" className="px-4 py-4 align-top font-semibold text-zinc-100">
                    {row.trap}
                  </th>
                  <td className="px-4 py-4 align-top font-mono text-zinc-400">{row.example}</td>
                  <td className="px-4 py-4 align-top text-zinc-400">{row.response}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section data-chunk-boundary="true" className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-5 md:grid-cols-2">
            {engineeringLayers.map((item) => (
              <article key={item.title} data-chunk-boundary="true" className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-chunk-boundary="true" className="border-t border-zinc-800 bg-zinc-950 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Move technical SEO decisions before the origin.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            We design edge-level crawl controls that make Googlebot faster, cheaper, and more
            focused on pages that can actually generate revenue.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-sm bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-zinc-200">
            Build Edge Crawl Controls
          </Link>
        </div>
      </section>
    </article>
  );
}
