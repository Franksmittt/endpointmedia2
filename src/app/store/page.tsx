import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL, ORG_ID, buildMetadata, secureJsonLD } from '@/lib/seo';

export const revalidate = 86400;

const PAGE_PATH = '/store';

const auditTiers = [
  {
    tier: 'Tier 1',
    product: 'Small Business Visibility Check',
    slug: 'small-business-visibility-check',
    price: 'R1,500',
    focus: 'Core Web Vitals, 404 links, and local map visibility.',
    outcome:
      'A concise visibility report showing where technical friction is suppressing discovery.',
  },
  {
    tier: 'Tier 2',
    product: 'Answer Engine Readiness Audit',
    slug: 'answer-engine-readiness-audit',
    price: 'R4,500',
    focus: 'Token envelopes, llms.txt compliance, and Vector-Ready DOM formatting.',
    outcome:
      'A machine-readability audit showing whether ChatGPT, Claude, and Perplexity can parse your business facts.',
  },
  {
    tier: 'Tier 3',
    product: '1000-Point Algorithmic QA Scorecard',
    slug: '1000-point-algorithmic-qa-scorecard',
    price: 'R7,500',
    focus:
      'Headless Playwright WRS emulation, 2MB HTML payload checks, 5-second async timeout checks, and Levenshtein DOM drift scoring.',
    outcome:
      'A zero-tolerance QA scorecard exposing invisible rendering, hydration, schema, and indexing failures.',
  },
  {
    tier: 'Tier 4',
    product: 'Enterprise Edge Diagnostic',
    slug: 'enterprise-edge-diagnostic',
    price: 'R15,000+',
    focus:
      'Server log analysis, factorial URL crawl traps, JA4 firewall mapping, HTTP 410 regex rules, and a 90-minute consulting call.',
    outcome:
      'A crawl-budget defense map for enterprise sites bleeding Googlebot capacity into infinite URL space.',
  },
];

const microServices = [
  {
    product: 'B2A Pipeline Setup',
    slug: 'b2a-pipeline-setup',
    price: 'R3,500',
    body:
      'We generate and host a fully compliant llms.txt and llms-full.txt file under the 128k BPE token ceiling, mapped to your core services and canonical URLs.',
  },
  {
    product: 'Schema Graph Flattening',
    slug: 'schema-graph-flattening',
    price: 'R4,500',
    body:
      'We rewrite messy, nested JSON-LD into a flawless interconnected @graph array using absolute #id fragments for every top-level entity.',
  },
  {
    product: 'Edge-Level Crawl Trap Fix',
    slug: 'edge-level-crawl-trap-fix',
    price: 'R6,000',
    body:
      'We deploy Edge/CDN regex rules that intercept infinite faceted navigation loops and return instant 410 Gone responses to reclaim crawl budget.',
  },
];

function checkoutHref(slug: string) {
  return `/api/checkout?product=${encodeURIComponent(slug)}`;
}

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Technical Diagnostics, Audits & Edge Micro-Services',
    description:
      'Buy Endpoint Media technical audits and micro-services: visibility checks, AEO readiness audits, 1000-point QA scorecards, edge diagnostics, llms.txt pipelines, schema graph flattening, and crawl trap fixes.',
    path: PAGE_PATH,
    keywords: [
      'technical SEO audit South Africa',
      'answer engine readiness audit',
      'Core Web Vitals audit',
      'llms.txt setup service',
      'schema graph audit',
      'crawl budget diagnostic',
    ],
  });
}

const storeSchema = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  '@id': `${BASE_URL}${PAGE_PATH}#catalog`,
  name: 'Endpoint Media Technical Diagnostics, Audits & Edge Micro-Services',
  url: `${BASE_URL}${PAGE_PATH}`,
  itemListElement: [...auditTiers, ...microServices].map((item) => ({
    '@type': 'Offer',
    name: item.product,
    priceCurrency: 'ZAR',
    price: item.price.replace(/[^0-9]/g, '') || '15000',
    url: `${BASE_URL}${checkoutHref(item.slug)}`,
    offeredBy: { '@id': ORG_ID },
  })),
};

export default function StorePage() {
  return (
    <article className="bg-black text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(storeSchema) }}
      />

      <section data-chunk-boundary="true" className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            Diagnostics - Audits - Edge Micro-Services
          </p>
          <h1 className="mb-5 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            Technical Diagnostics, Audits & Edge Micro-Services
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            We treat infrastructure as a mathematical science. Buy focused diagnostics, AEO audits,
            crawl-budget fixes, and machine-readable business architecture without waiting for a
            full retainer engagement.
          </p>
        </div>
      </section>

      <section data-chunk-boundary="true" className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              4-Tier Audit Ladder
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Start with the diagnostic depth your infrastructure deserves.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Each audit tier is scoped for a specific risk surface: local visibility, answer-engine
              extraction, Googlebot rendering, or enterprise crawl-budget defense.
            </p>
          </div>

          <div className="overflow-x-auto rounded-sm border border-zinc-800">
            <table className="w-full min-w-[920px] text-left text-sm">
              <thead className="bg-black">
                <tr>
                  <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Tier</th>
                  <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Audit</th>
                  <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Price</th>
                  <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Focus</th>
                  <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Outcome</th>
                  <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Checkout</th>
                </tr>
              </thead>
              <tbody>
                {auditTiers.map((tier) => (
                  <tr key={tier.slug} data-chunk-boundary="true" className="border-t border-zinc-800">
                    <td className="px-4 py-4 align-top font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
                      {tier.tier}
                    </td>
                    <th scope="row" className="px-4 py-4 align-top font-semibold text-zinc-100">
                      {tier.product}
                    </th>
                    <td className="px-4 py-4 align-top text-lg font-bold text-white">{tier.price}</td>
                    <td className="px-4 py-4 align-top leading-relaxed text-zinc-400">{tier.focus}</td>
                    <td className="px-4 py-4 align-top leading-relaxed text-zinc-400">{tier.outcome}</td>
                    <td className="px-4 py-4 align-top">
                      <Link
                        href={checkoutHref(tier.slug)}
                        className="inline-flex items-center justify-center rounded-sm bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-zinc-200"
                      >
                        Purchase Now
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section data-chunk-boundary="true" className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              Standalone Technical Fixes
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Micro-services for teams that already know the leak.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              If your team has already diagnosed the failure, buy the specific remediation module
              and let us ship the fix directly into your edge, schema, or B2A stack.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {microServices.map((service) => (
              <article
                key={service.slug}
                data-chunk-boundary="true"
                className="flex flex-col rounded-sm border border-zinc-800 bg-zinc-950/70 p-6"
              >
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
                  Micro-Service
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{service.product}</h3>
                <p className="mt-3 flex-grow leading-relaxed text-zinc-400">{service.body}</p>
                <p className="mt-6 text-3xl font-bold text-white">{service.price}</p>
                <Link
                  href={checkoutHref(service.slug)}
                  className="mt-6 inline-flex items-center justify-center rounded-sm bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
                >
                  Purchase Now
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-chunk-boundary="true" className="border-t border-zinc-800 bg-zinc-950 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Need a custom diagnostic scope?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            If your issue spans rendering, crawl budget, paid media tracking, and answer-engine
            extraction, book a custom architecture audit instead of buying a single product.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-sm border border-zinc-700 px-7 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900">
            Request Custom Scope
          </Link>
        </div>
      </section>
    </article>
  );
}
