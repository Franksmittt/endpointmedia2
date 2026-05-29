import React from 'react';
import Link from 'next/link';
import InternalLinks from '@/components/seo/InternalLinks';
import { buildGoogleAdsServiceSchema, type GoogleAdsPageConfig } from '@/lib/google-ads-services';
import { secureJsonLD, BASE_URL } from '@/lib/seo';

type Props = {
  config: GoogleAdsPageConfig;
};

export default function GoogleAdsSubPage({ config }: Props) {
  const serviceSchema = buildGoogleAdsServiceSchema(config);
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${BASE_URL}${config.path}#faq`,
    mainEntity: config.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }} />
      {config.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }} />
      )}

      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <p className="text-teal-300 text-xs md:text-sm uppercase tracking-[0.35em] mb-4">{config.hero.eyebrow}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 font-heading">
            {config.hero.headline}
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200">{config.hero.subhead}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-teal-500 text-white shadow-lg shadow-teal-500/30 hover:bg-teal-400 transition"
            >
              Request a Google Ads audit
            </Link>
            <Link
              href="/services/google-ads"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              All Google Ads services
            </Link>
          </div>
        </div>
      </section>

      {config.metrics && config.metrics.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {config.metrics.map((m) => (
                <div key={m.label} className="text-center border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <p className="text-3xl font-bold text-gray-900">{m.stat}</p>
                  <p className="text-sm text-gray-600 mt-2">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">How we deliver</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3 font-heading">
              Built for Johannesburg operators who measure ROI in booked work.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {config.pillars.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {config.processSteps && config.processSteps.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-10 font-heading">Execution playbook</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {config.processSteps.map((step) => (
                <div key={step.step} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                  <p className="text-teal-500 text-sm font-semibold">Step {step.step}</p>
                  <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {config.pricingTiers && config.pricingTiers.length > 0 && (
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 font-heading">Pricing overview (ZAR)</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {config.pricingTiers.map((tier) => (
                <div key={tier.name} className="bg-gray-800 rounded-2xl p-6 border border-white/10 flex flex-col">
                  <h3 className="text-xl font-bold text-teal-300">{tier.name}</h3>
                  <p className="text-2xl font-extrabold mt-2">{tier.price}</p>
                  <p className="text-sm text-gray-400 mt-1">{tier.spend}</p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-200 flex-grow">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-teal-400">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-8">
              Ad spend is paid directly to Google and is not included in management fees.{' '}
              <Link href="/services/google-ads-pricing" className="text-teal-300 underline hover:text-teal-200">
                Full pricing breakdown
              </Link>
            </p>
          </div>
        </section>
      )}

      {config.faqs.length > 0 && (
        <section className="py-20 bg-white" id="faq">
          <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 font-heading">Frequently asked questions</h2>
            <div className="space-y-4">
              {config.faqs.map((faq) => (
                <details key={faq.question} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 group">
                  <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex justify-between gap-4">
                    {faq.question}
                    <span className="text-teal-500 group-open:rotate-45 transition-transform shrink-0">+</span>
                  </summary>
                  <p className="text-gray-600 mt-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <InternalLinks title="Related Google Ads & services" links={config.relatedLinks} />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-heading">Ready to engineer profitable Google Ads?</h2>
          <p className="text-lg text-teal-50 max-w-2xl mx-auto mb-8">
            Book a free audit—we map keywords, budgets, landing pages, and tracking before you scale spend.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-white text-teal-700 hover:bg-teal-50 transition"
          >
            Claim your audit
          </Link>
        </div>
      </section>
    </>
  );
}
