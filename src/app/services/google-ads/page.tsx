import Link from 'next/link';
import type { Metadata } from 'next';
import InternalLinks from '@/components/seo/InternalLinks';
import {
  PageBulletGrid,
  PageCardGrid,
  PageCta,
  PageFaq,
  PageHero,
  PageIntro,
  PageMetrics,
  PageSection,
} from '@/components/layout/page-ui';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

const PAGE_PATH = '/services/google-ads';

const faqs = [
  {
    question: 'How quickly can we relaunch profitable Google Ads campaigns?',
    answer:
      'Most accounts see stabilized CPAs within the first 2 weeks. We audit historical data, rebuild conversion tracking, deploy new campaign structures, and go live with at least three tested offers in 10 business days.',
  },
  {
    question: 'Do you handle landing pages and conversion tracking too?',
    answer:
      'Yes. Every sprint includes Next.js landing pages (or CRO fixes), GA4 + server-side tracking, call tracking, and CRM hand-offs so every lead is attributed correctly.',
  },
  {
    question: 'Can you integrate with our CRM or internal sales team?',
    answer:
      'We wire leads into Pipedrive, HubSpot, Monday, or even WhatsApp/email workflows so your team gets instant alerts with the exact keyword and ad they came from.',
  },
  {
    question: 'What budgets do you work with?',
    answer:
      'Most Johannesburg service businesses spend between R8k–R60k per month on Google Ads. We build plays for both emergency-response services and high-ticket B2B leads.',
  },
];

const differentiators = [
  {
    title: 'Intent-first campaign architecture',
    body: 'We structure campaigns by service, suburb, and urgency so high-value keywords get priority bids and landing pages.',
  },
  {
    title: 'Full tracking & attribution',
    body: 'GA4, server-side events, call tracking, and CRM fields to show which suburb, keyword, and ad copy generated each deal.',
  },
  {
    title: 'Creative + CRO baked in',
    body: 'Ad copy, assets, and landing pages are part of the sprint so ads and pages evolve in sync.',
  },
  {
    title: 'Weekly operator-level reporting',
    body: 'Dashboards focused on cost per booked job, pipeline value, and margin. Not vanity metrics.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Forensics & rebuild',
    body: 'Audit keywords, search terms, negatives, assets, and tracking. Rebuild account structure with SKAG/SKAG-lite campaigns, add suburb modifiers, and fix conversion tracking.',
  },
  {
    step: '02',
    title: 'Creative & landing systems',
    body: 'Ship ad copy, responsive asset stacks, extensions, and dedicated landing pages with city-specific proof.',
  },
  {
    step: '03',
    title: 'Optimization & scale',
    body: 'Weekly bid adjustments, audience layering, budget reallocation, and CRO tests tied to actual lead quality feedback.',
  },
];

const metrics = [
  { stat: '38%', label: 'Average CPA reduction within 45 days' },
  { stat: '4.3x', label: 'Return on ad spend across service verticals' },
  { stat: '28', label: 'Leads captured per week after tracking fixes' },
  { stat: '12 hrs', label: 'Response time for campaign change requests' },
];

const deliverables = [
  'Campaign/AdGroup rebuild with suburb + intent targeting',
  'Ad copy + asset stacks for search and Performance Max',
  'Dedicated landing pages with CRO best practices',
  'GA4, server-side tracking, and call tracking numbers',
  'Negative keyword governance & search term mining',
  'Weekly reports focused on CPA, ROAS, and pipeline value',
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Google Ads & Paid Search Sprints',
  description:
    'High-intent Google Ads management for Johannesburg service businesses: campaign rebuilds, landing pages, tracking, and optimization.',
  provider: {
    '@id': `${BASE_URL}#organization`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Johannesburg',
  },
  serviceType: 'Google Ads Management',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'ZAR',
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}${PAGE_PATH}`,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BASE_URL}${PAGE_PATH}#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Google Ads Management Johannesburg | Paid Search Sprints',
    description:
      'Slash wasted ad spend and turn Google Ads into predictable lead flow. Endpoint Media rebuilds paid search for Johannesburg service businesses: campaigns, landing pages, tracking, and reporting.',
    path: PAGE_PATH,
    keywords: [
      'google ads johannesburg',
      'paid search agency joburg',
      'google ads management south africa',
      'ppc services johannesburg',
      'google ads for service businesses',
      'paid media sprint',
    ],
  });
}

const GoogleAdsPage = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }} />

      <PageHero
        kicker="Paid Search · CRO · Tracking"
        title="Turn wasted Google Ads spend into predictable booked work."
        description="We rebuild Google Ads for Johannesburg operators in one sprint: campaign architecture, landing pages, GA4 + call tracking, and relentless optimization tied to actual lead quality."
        note="Built for emergency services, legal, medical, home improvement, and B2B operators across Sandton, Midrand, and greater Johannesburg."
        primaryCta={{ href: '/contact', label: 'Request a paid search audit' }}
        secondaryCta={{ href: '/case-studies', label: 'See campaign results' }}
      />

      <PageSection tone="zinc">
        <PageMetrics items={metrics} />
      </PageSection>

      <PageSection tone="black">
        <PageIntro
          kicker="Why Endpoint Media"
          title="Paid search built for operators, not vanity dashboards."
          description="We obsess over booked jobs and pipeline value. That means fixing tracking, aligning landing pages, and iterating on real sales feedback — not just tweaking bids."
        />
        <PageCardGrid items={differentiators} />
      </PageSection>

      <PageSection tone="zinc">
        <PageIntro kicker="Execution playbook" title="One sprint. Three stages." />
        <PageCardGrid columns={3} items={processSteps} />
      </PageSection>

      <PageSection tone="black">
        <PageIntro
          kicker="Every sprint includes"
          title="All the pieces required for profitable Google Ads."
        />
        <PageBulletGrid items={deliverables} />
      </PageSection>

      <PageSection tone="zinc">
        <PageIntro
          kicker="Full Google Ads stack"
          title="Specialized paid search for every vertical and Gauteng node."
          description="Endpoint Media combines campaign management, Performance Max, dedicated landing pages, and transparent ZAR pricing. Built for manufacturers, automotive, finance, and local service operators."
        />
        <InternalLinks
          theme="dark"
          title="Explore Google Ads services"
          links={[
            { href: '/services/b2b-google-ads-management', title: 'B2B Google Ads management', description: 'Flat-fee enterprise PPC + Next.js infrastructure' },
            { href: '/services/performance-max-google-ads', title: 'Performance Max & Local Ads', description: 'PMax, Maps, and GBP-integrated campaigns' },
            { href: '/services/google-ads-landing-pages', title: 'Google Ads landing pages', description: 'CRO pages that lift Quality Score' },
            { href: '/services/google-ads-pricing', title: 'Google Ads pricing (ZAR)', description: 'Setup fees and monthly retainers' },
            { href: '/services/google-ads-manufacturing', title: 'Manufacturing & industrial PPC', description: 'Alrode, Wadeville, and B2B lead gen' },
            { href: '/services/google-ads-financial-services', title: 'Financial services PPC', description: 'Sandton & Bedfordview wealth keywords' },
            { href: '/services/google-ads-automotive', title: 'Automotive & panel beaters', description: 'Emergency-intent Search + Local' },
            { href: '/services/google-ads-sandton', title: 'Google Ads Sandton', description: 'Corporate and high-LTV campaigns' },
            { href: '/services/google-ads-alberton', title: 'Google Ads Alberton', description: 'East Rand local partner' },
            { href: '/services/google-ads-alrode', title: 'Google Ads Alrode', description: 'Industrial cluster targeting' },
            { href: '/services/google-ads-midrand', title: 'Google Ads Midrand', description: 'Logistics corridor & corporate' },
            { href: '/services/google-ads-wadeville', title: 'Google Ads Wadeville', description: 'East Rand industrial PPC' },
            { href: '/services/google-ads-bedfordview', title: 'Google Ads Bedfordview', description: 'Finance & professional services' },
            { href: '/insights/south-africa-google-ads-cpc-benchmarks', title: 'SA CPC benchmarks 2026', description: 'Budget planning by vertical' },
            { href: '/compare/google-ads-flat-fee-vs-percentage-spend', title: 'Flat-fee vs % of spend', description: 'Why pricing model matters' },
          ]}
        />
      </PageSection>

      <PageCta
        title="Ready to see every Rand in your Google Ads account produce qualified leads?"
        description="Book a free audit and we will map the keywords, budgets, landing pages, and tracking fixes required to hit your targets this quarter."
        cta={{ href: '/contact', label: 'Claim your Google Ads audit' }}
      />

      <PageFaq
        title="Questions Johannesburg teams ask before trusting us with their ad spend."
        items={faqs}
      />
    </>
  );
};

export default GoogleAdsPage;
