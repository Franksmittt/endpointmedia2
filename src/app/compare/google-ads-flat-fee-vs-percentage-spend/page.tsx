import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import InternalLinks from '@/components/seo/InternalLinks';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

const PAGE_PATH = '/compare/google-ads-flat-fee-vs-percentage-spend';

export const metadata: Metadata = buildMetadata({
  title: 'Flat-Fee vs % of Ad Spend Google Ads Pricing',
  description:
    'Why percentage-of-spend PPC pricing misaligns incentives. And how flat-fee Google Ads management plus fast landing pages lowers CPA for Johannesburg businesses.',
  path: PAGE_PATH,
  keywords: [
    'google ads agency pricing model',
    'flat fee ppc management',
    'percentage ad spend agency',
    'ppc management south africa',
  ],
});

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${BASE_URL}${PAGE_PATH}#article`,
  headline: 'Flat-Fee vs Percentage of Ad Spend: Google Ads Pricing Compared',
  publisher: { '@id': `${BASE_URL}#organization` },
  datePublished: '2026-05-29',
};

export default function ComparePricingPage() {
  return (
    <article className="bg-black text-zinc-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(articleSchema) }} />

      <section className="relative overflow-hidden bg-black text-white py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Flat-fee Google Ads vs % of ad spend
          </h1>
          <p className="text-xl text-zinc-400">
            When your agency earns more every time you increase budget, who is really incentivized to
            lower your cost per lead?
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-red-500/60">
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">% of spend model</h2>
            <ul className="space-y-3 text-zinc-400">
              <li>Fee rises when you scale budget. Even if CPA worsens</li>
              <li>Agency rewarded for recommending higher spend</li>
              <li>Often paired with slow WordPress landing pages</li>
              <li>Typical in legacy Randburg / Sandton agencies</li>
            </ul>
          </div>
          <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">Endpoint Media model</h2>
            <ul className="space-y-3 text-zinc-400">
              <li>Flat monthly tiers from R6,500 (ad spend separate)</li>
              <li>One-time infrastructure build R14,500–R20,000</li>
              <li>Next.js landing pages improve Quality Score</li>
              <li>Month-to-month after setup. No lock-in</li>
            </ul>
          </div>
        </div>

        <p className="text-lg text-zinc-500 mb-8">
          We engineer post-click infrastructure so the same budget buys more leads. Explore{' '}
          <Link href="/services/b2b-google-ads-management" className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            B2B Google Ads management
          </Link>{' '}
          and{' '}
          <Link href="/insights/south-africa-google-ads-cpc-benchmarks" className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            SA CPC benchmarks
          </Link>
          .
        </p>

        <Link
          href="/contact"
          className="inline-flex px-10 py-3 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 transition"
        >
          Get a pricing-aligned audit
        </Link>
      </section>

      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <InternalLinks
            title="Next steps"
            links={[
              { href: '/services/google-ads-pricing', title: 'Google Ads pricing' },
              { href: '/services/google-ads', title: 'All Google Ads services' },
            ]}
          />
        </div>
      </section>
    </article>
  );
}
