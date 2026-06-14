import type { Metadata } from 'next';
import Link from 'next/link';
import { PaystackCheckout } from '@/components/store/PaystackCheckout';
import { BASE_URL, ORG_ID, buildMetadata, secureJsonLD } from '@/lib/seo';
import { auditProducts, microServiceProducts, storeProducts } from '@/lib/store-products';

export const revalidate = 86400;

const PAGE_PATH = '/store';

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
  itemListElement: storeProducts.map((item) => ({
    '@type': 'Offer',
    name: item.name,
    priceCurrency: 'ZAR',
    price: item.amountZar,
    url: `${BASE_URL}${PAGE_PATH}#${item.slug}`,
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
                {auditProducts.map((tier) => (
                  <tr key={tier.slug} data-chunk-boundary="true" className="border-t border-zinc-800">
                    <td className="px-4 py-4 align-top font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
                      {tier.tier}
                    </td>
                    <th scope="row" className="px-4 py-4 align-top font-semibold text-zinc-100">
                      {tier.name}
                    </th>
                    <td className="px-4 py-4 align-top text-lg font-bold text-white">{tier.priceLabel}</td>
                    <td className="px-4 py-4 align-top leading-relaxed text-zinc-400">{tier.focus}</td>
                    <td className="px-4 py-4 align-top leading-relaxed text-zinc-400">{tier.outcome}</td>
                    <td className="px-4 py-4 align-top">
                      <PaystackCheckout
                        productSlug={tier.slug}
                        productName={tier.name}
                        amountZar={tier.amountZar}
                      />
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
            {microServiceProducts.map((service) => (
              <article
                key={service.slug}
                id={service.slug}
                data-chunk-boundary="true"
                className="flex flex-col rounded-sm border border-zinc-800 bg-zinc-950/70 p-6"
              >
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
                  Micro-Service
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{service.name}</h3>
                <p className="mt-3 flex-grow leading-relaxed text-zinc-400">{service.body}</p>
                <p className="mt-6 text-3xl font-bold text-white">{service.priceLabel}</p>
                <PaystackCheckout
                  productSlug={service.slug}
                  productName={service.name}
                  amountZar={service.amountZar}
                  className="mt-6"
                />
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
