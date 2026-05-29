import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import InternalLinks from '@/components/seo/InternalLinks';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

const PAGE_PATH = '/compare/google-ads-flat-fee-vs-percentage-spend';

export const metadata: Metadata = buildMetadata({
  title: 'Flat-Fee vs % of Ad Spend Google Ads Pricing | Endpoint Media',
  description:
    'Why percentage-of-spend PPC pricing misaligns incentives—and how flat-fee Google Ads management plus fast landing pages lowers CPA for Johannesburg businesses.',
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
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(articleSchema) }} />

      <section className="bg-gradient-to-br from-gray-900 to-slate-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading mb-6">
            Flat-fee Google Ads vs % of ad spend
          </h1>
          <p className="text-xl text-gray-300">
            When your agency earns more every time you increase budget, who is really incentivized to
            lower your cost per lead?
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-6 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-red-200 bg-red-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">% of spend model</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Fee rises when you scale budget—even if CPA worsens</li>
              <li>Agency rewarded for recommending higher spend</li>
              <li>Often paired with slow WordPress landing pages</li>
              <li>Typical in legacy Randburg / Sandton agencies</li>
            </ul>
          </div>
          <div className="border border-teal-200 bg-teal-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Endpoint Media model</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Flat monthly tiers from R6,500 (ad spend separate)</li>
              <li>One-time infrastructure build R14,500–R20,000</li>
              <li>Next.js landing pages improve Quality Score</li>
              <li>Month-to-month after setup—no lock-in</li>
            </ul>
          </div>
        </div>

        <p className="text-lg text-gray-600 mb-8">
          We engineer post-click infrastructure so the same budget buys more leads. Explore{' '}
          <Link href="/services/b2b-google-ads-management" className="text-teal-600 font-semibold">
            B2B Google Ads management
          </Link>{' '}
          and{' '}
          <Link href="/insights/south-africa-google-ads-cpc-benchmarks" className="text-teal-600 font-semibold">
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

      <section className="py-12 bg-gray-50">
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
