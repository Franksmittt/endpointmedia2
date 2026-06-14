import type { Metadata } from 'next';
import Link from 'next/link';
import { BASE_URL, ORG_ID, buildMetadata, secureJsonLD } from '@/lib/seo';

const PAGE_PATH = '/services/answer-engine-optimization-aeo';

const extractionRisks = [
  {
    failure: 'Fragmented DOM chunks',
    impact: 'Answer engines lift isolated phrases without pricing, service context, or proof.',
    fix: 'Atomic section envelopes using data-chunk-boundary="true" and coherent 200-300 token blocks.',
  },
  {
    failure: 'Missing B2A files',
    impact: 'ChatGPT, Perplexity, and Claude must infer business context from noisy page crawls.',
    fix: 'Generated llms.txt and llms-full.txt files with canonical service descriptions and URL maps.',
  },
  {
    failure: 'Weak relational markup',
    impact: 'Pricing, service tiers, and comparisons lose structure when scraped into embeddings.',
    fix: 'Strict table markup for relational data: table, thead, tbody, tr, th, and td.',
  },
];

const deliveryLayers = [
  {
    layer: 'Vector-Ready DOM',
    detail:
      'We restructure service, pricing, and proof content into clean semantic chunks that survive AI extraction.',
  },
  {
    layer: 'Business-to-Agent Pipeline',
    detail:
      'We compile llms.txt and llms-full.txt at build time so agents get a canonical machine-readable business brief.',
  },
  {
    layer: 'Structured Entity Graph',
    detail:
      'We flatten Organization, WebSite, WebPage, FAQ, Person, and Service entities into stable @id graphs.',
  },
  {
    layer: 'Citation QA',
    detail:
      'We validate that answer engines can extract service names, prices, locations, and proof without hallucination.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Answer Engine Optimization AEO & B2A Architecture',
    description:
      'Enterprise Answer Engine Optimization for ChatGPT, Claude, Perplexity, and Gemini. Endpoint Media builds Vector-Ready DOMs, llms.txt pipelines, and citation-safe structured data.',
    path: PAGE_PATH,
    keywords: [
      'answer engine optimization',
      'AEO services South Africa',
      'llms.txt implementation',
      'Business to Agent architecture',
      'HtmlRAG semantic chunking',
      'ChatGPT SEO optimization',
    ],
  });
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Answer Engine Optimization (AEO) & B2A Architecture',
  serviceType: 'Technical SEO',
  description:
    'Vector-ready DOM architecture, llms.txt compilation, and structured entity engineering for answer engine citation accuracy.',
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'South Africa' },
  url: `${BASE_URL}${PAGE_PATH}`,
};

export default function AnswerEngineOptimizationPage() {
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
            Answer Engine Optimization - B2A Architecture
          </p>
          <h1 className="mb-5 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            Answer Engine Optimization (AEO) & B2A Architecture
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            Standard websites collapse when ChatGPT, Claude, Perplexity, or Gemini scrape them.
            Pricing loses context, service lists fragment, and models hallucinate business data.
            We engineer Vector-Ready DOMs and Business-to-Agent pipelines so answer engines extract
            and cite your company data with mathematical precision.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-sm bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-zinc-200">
              Request AEO Architecture Audit
            </Link>
            <Link href="/blog/answer-engine-optimization-aeo" className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-7 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900">
              Read the AEO Blueprint
            </Link>
          </div>
        </div>
      </section>

      <section data-chunk-boundary="true" className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              Why AI Misquotes Businesses
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              A beautiful page is useless if retrieval systems cannot parse it.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Most sites are built for screens, not embedding models. When layout, pricing, proof,
              and schema are disconnected, answer engines fill gaps with guesses. Our AEO work makes
              every critical fact crawlable, chunked, typed, and repeated in machine-readable formats.
            </p>
          </div>

          <table className="w-full border border-zinc-800 text-left text-sm">
            <thead className="bg-black">
              <tr>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Failure</th>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Business Risk</th>
                <th className="border-b border-zinc-800 px-4 py-3 font-semibold text-white">Endpoint Fix</th>
              </tr>
            </thead>
            <tbody>
              {extractionRisks.map((item) => (
                <tr key={item.failure} data-chunk-boundary="true" className="border-t border-zinc-800">
                  <th scope="row" className="px-4 py-4 align-top font-semibold text-zinc-100">
                    {item.failure}
                  </th>
                  <td className="px-4 py-4 align-top text-zinc-400">{item.impact}</td>
                  <td className="px-4 py-4 align-top text-zinc-400">{item.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section data-chunk-boundary="true" className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-5 md:grid-cols-2">
            {deliveryLayers.map((item) => (
              <article key={item.layer} data-chunk-boundary="true" className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-semibold text-white">{item.layer}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-chunk-boundary="true" className="border-t border-zinc-800 bg-zinc-950 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Make your business answer-engine legible.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            We convert your site from human-only marketing pages into a machine-readable business
            data source that AI systems can cite accurately.
          </p>
          <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-sm bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-zinc-200">
            Book the AEO Audit
          </Link>
        </div>
      </section>
    </article>
  );
}
