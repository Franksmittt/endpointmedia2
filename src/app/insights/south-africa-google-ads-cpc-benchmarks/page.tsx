import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import InternalLinks from '@/components/seo/InternalLinks';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

const PAGE_PATH = '/insights/south-africa-google-ads-cpc-benchmarks';

export const metadata: Metadata = buildMetadata({
  title: 'South Africa Google Ads CPC Benchmarks 2026',
  description:
    'Johannesburg and South Africa Google Ads CPC benchmarks by vertical: manufacturing, automotive, finance, and home services. Plan budgets with real ZAR ranges.',
  path: PAGE_PATH,
  keywords: [
    'google ads cpc south africa',
    'ppc benchmarks johannesburg 2026',
    'cost per click south africa',
    'google ads pricing benchmarks',
  ],
  openGraph: { type: 'article' },
});

const benchmarks = [
  { vertical: 'Broad consumer / mixed', cpc: 'R4 – R9', ctr: '~9.1% national avg' },
  { vertical: 'B2B services (JHB)', cpc: 'R9 – R28', ctr: 'High intent' },
  { vertical: 'Manufacturing / industrial', cpc: 'R6.70 – R15', ctr: '~9.7%' },
  { vertical: 'Automotive repair', cpc: 'R17 – R25', ctr: '~11.6%' },
  { vertical: 'Home services', cpc: 'R10 – R30', ctr: 'Urgent local' },
  { vertical: 'Financial / wealth', cpc: 'R35 – R60+', ctr: '~11.3%' },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${BASE_URL}${PAGE_PATH}#article`,
  headline: 'South Africa Google Ads CPC Benchmarks 2026',
  description:
    'Click cost benchmarks for South African Google Ads advertisers by industry vertical.',
  author: { '@type': 'Person', name: 'Frank Smit' },
  publisher: { '@id': `${BASE_URL}#organization` },
  datePublished: '2026-05-29',
  dateModified: '2026-05-29',
};

export default function CpcBenchmarksPage() {
  return (
    <article className="bg-black text-zinc-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(articleSchema) }} />

      <section className="relative overflow-hidden bg-black text-white py-20 md:py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container relative z-10 mx-auto px-6 max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 mb-4">Insights • Paid search</p>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            South Africa Google Ads CPC benchmarks (2026)
          </h1>
          <p className="text-xl text-zinc-400">
            Use these ZAR ranges to model budgets, forecast CPA, and spot when your agency should be
            lowering CPC via Quality Score. Not asking you to spend more.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl prose prose-lg prose-invert">
          <p>
            South Africa benefits from lower average CPCs than the US or UK, but vertical and intent matter
            enormously. A campaign buying &quot;financial broker Johannesburg&quot; lives in a different economy than
            one buying &quot;plumber near me.&quot;
          </p>

          <div className="not-prose overflow-x-auto my-10">
            <table className="min-w-full border border-zinc-800 rounded-lg text-left text-sm">
              <thead className="bg-zinc-950/70">
                <tr>
                  <th className="px-4 py-3 font-semibold">Vertical</th>
                  <th className="px-4 py-3 font-semibold">Typical CPC (ZAR)</th>
                  <th className="px-4 py-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map((row) => (
                  <tr key={row.vertical} className="border-t border-zinc-800">
                    <td className="px-4 py-3 font-medium">{row.vertical}</td>
                    <td className="px-4 py-3">{row.cpc}</td>
                    <td className="px-4 py-3 text-zinc-500">{row.ctr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold font-heading">The Quality Score tax</h2>
          <p>
            Poor landing page experience can inflate CPC by up to 400% and crush impression share. Moving
            Quality Score from 4→8 often cuts CPC ~35% without increasing budget. This is why Endpoint Media
            pairs Google Ads with{' '}
            <Link href="/services/google-ads-landing-pages" className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              Next.js landing pages
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold font-heading">What to budget monthly</h2>
          <ul>
            <li>Growth local services: R8,000 – R20,000 ad spend + management</li>
            <li>Regional B2B: R20,001 – R50,000</li>
            <li>Elite finance / industrial: R50,001+</li>
          </ul>
          <p>
            See our{' '}
            <Link href="/services/google-ads-pricing" className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              Google Ads pricing page
            </Link>{' '}
            for setup and retainer tiers (separate from ad spend).
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <InternalLinks
            title="Google Ads services"
            links={[
              { href: '/services/b2b-google-ads-management', title: 'B2B Google Ads management' },
              { href: '/services/google-ads', title: 'Google Ads hub' },
              { href: '/contact', title: 'Request an audit' },
            ]}
          />
        </div>
      </section>
    </article>
  );
}
