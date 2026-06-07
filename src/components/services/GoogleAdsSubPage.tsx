import Link from 'next/link';
import InternalLinks from '@/components/seo/InternalLinks';
import {
  PageCardGrid,
  PageCta,
  PageFaq,
  PageHero,
  PageIntro,
  PageMetrics,
  PageSection,
} from '@/components/layout/page-ui';
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
    <div className="bg-black text-zinc-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }} />
      {config.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }} />
      )}

      <PageHero
        kicker={config.hero.eyebrow}
        title={config.hero.headline}
        description={config.hero.subhead}
        primaryCta={{ href: '/contact', label: 'Request a Google Ads audit' }}
        secondaryCta={{ href: '/services/google-ads', label: 'All Google Ads services' }}
      />

      {config.metrics && config.metrics.length > 0 ? (
        <PageSection tone="zinc">
          <PageMetrics items={config.metrics} />
        </PageSection>
      ) : null}

      <PageSection tone="black">
        <PageIntro
          kicker="How we deliver"
          title="Built for Johannesburg operators who measure ROI in booked work."
        />
        <PageCardGrid items={config.pillars.map((item) => ({ title: item.title, body: item.body }))} />
      </PageSection>

      {config.processSteps && config.processSteps.length > 0 ? (
        <PageSection tone="zinc">
          <PageIntro kicker="Execution playbook" title="One sprint. Three stages." />
          <PageCardGrid
            columns={3}
            items={config.processSteps.map((step) => ({
              title: step.title,
              body: step.body,
              step: step.step,
            }))}
          />
        </PageSection>
      ) : null}

      {config.pricingTiers && config.pricingTiers.length > 0 ? (
        <PageSection tone="black">
          <PageIntro kicker="Pricing overview" title="Transparent ZAR pricing for paid search management." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {config.pricingTiers.map((tier) => (
              <article key={tier.name} className="flex flex-col rounded-sm border border-zinc-800 bg-zinc-950/60 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">{tier.name}</p>
                <p className="mt-3 text-2xl font-bold text-white">{tier.price}</p>
                <p className="mt-1 text-sm text-zinc-500">{tier.spend}</p>
                <ul className="mt-4 flex-grow space-y-2 text-sm text-zinc-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="text-zinc-600">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-zinc-500">
            Ad spend is paid directly to Google and is not included in management fees.{' '}
            <Link href="/services/google-ads-pricing" className="text-white underline-offset-4 hover:underline">
              Full pricing breakdown
            </Link>
          </p>
        </PageSection>
      ) : null}

      {config.faqs.length > 0 ? (
        <PageFaq title="Frequently asked questions" items={config.faqs} />
      ) : null}

      <PageSection tone="zinc">
        <InternalLinks theme="dark" title="Related Google Ads & services" links={config.relatedLinks} />
      </PageSection>

      <PageCta
        title="Ready to engineer profitable Google Ads?"
        description="Book a free audit. We map keywords, budgets, landing pages, and tracking before you scale spend."
        cta={{ href: '/contact', label: 'Claim your audit' }}
      />
    </div>
  );
}
