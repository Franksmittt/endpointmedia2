import { BASE_URL } from '@/lib/seo';

export type GoogleAdsPageConfig = {
  slug: string;
  path: string;
  metadata: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
  };
  metrics?: { stat: string; label: string }[];
  pillars: { title: string; body: string }[];
  processSteps?: { step: string; title: string; body: string }[];
  pricingTiers?: { name: string; price: string; spend: string; features: string[] }[];
  faqs: { question: string; answer: string }[];
  serviceName: string;
  serviceType: string;
  relatedLinks: { href: string; title: string; description?: string }[];
};

const defaultRelated = [
  { href: '/services/google-ads', title: 'Google Ads Hub', description: 'All paid search services' },
  { href: '/services/google-ads-pricing', title: 'Google Ads Pricing', description: 'Setup fees and retainers' },
  { href: '/contact', title: 'Request an audit', description: 'Speak with Frank Smit' },
];

export const googleAdsHubPaths = [
  '/services/google-ads',
  '/services/b2b-google-ads-management',
  '/services/performance-max-google-ads',
  '/services/google-ads-landing-pages',
  '/services/google-ads-pricing',
  '/services/google-ads-manufacturing',
  '/services/google-ads-financial-services',
  '/services/google-ads-automotive',
  '/services/google-ads-sandton',
  '/services/google-ads-alberton',
  '/services/google-ads-midrand',
  '/services/google-ads-alrode',
  '/services/google-ads-wadeville',
  '/services/google-ads-bedfordview',
  '/insights/south-africa-google-ads-cpc-benchmarks',
  '/compare/google-ads-flat-fee-vs-percentage-spend',
] as const;

function cfg(
  slug: string,
  partial: Omit<GoogleAdsPageConfig, 'slug' | 'path' | 'relatedLinks'> & {
    path?: string;
    relatedLinks?: GoogleAdsPageConfig['relatedLinks'];
  },
): GoogleAdsPageConfig {
  return {
    slug,
    path: partial.path ?? `/services/${slug}`,
    ...partial,
    relatedLinks: partial.relatedLinks ?? defaultRelated,
  };
}

export const googleAdsPages: Record<string, GoogleAdsPageConfig> = {
  'b2b-google-ads-management': cfg('b2b-google-ads-management', {
    metadata: {
      title: 'B2B Google Ads Management Johannesburg | Flat-Fee PPC',
      description:
        'Enterprise B2B Google Ads management for Johannesburg. Flat-fee retainers, Next.js landing pages, Quality Score optimization, and ROI reporting—not percentage-of-spend traps.',
      keywords: [
        'b2b google ads agency johannesburg',
        'ppc management manufacturing',
        'performance marketing agency sandton',
        'google ads management south africa',
      ],
    },
    hero: {
      eyebrow: 'B2B • Performance • Infrastructure',
      headline: 'Engineering B2B revenue with flat-fee Google Ads and sub-second landing pages.',
      subhead:
        'We align paid search with Next.js post-click infrastructure so your Quality Score drops CPC while your pipeline fills with qualified B2B leads across Gauteng.',
    },
    metrics: [
      { stat: '35%', label: 'Typical CPC reduction when QS moves from 4→8' },
      { stat: 'R6.5k+', label: 'Monthly management from Growth tier' },
      { stat: '10 days', label: 'Average go-live after infrastructure build' },
      { stat: 'No lock-in', label: 'Month-to-month after setup' },
    ],
    pillars: [
      {
        title: 'Anti-vanity reporting',
        body: 'Dashboards focus on CPA, ROAS, and pipeline value—not impressions or CTR alone.',
      },
      {
        title: 'Flat-fee alignment',
        body: 'Management fees are separate from ad spend so we are rewarded for efficiency, not bigger budgets.',
      },
      {
        title: 'Quality Score engineering',
        body: 'Next.js landing pages cut load time, improve landing page experience, and lower your auction costs.',
      },
      {
        title: 'Senior operator access',
        body: 'No junior-only account management—strategy and execution stay with experienced operators.',
      },
    ],
    processSteps: [
      { step: '01', title: 'Infrastructure build', body: 'GA4, GTM, conversion actions, and 1–3 modular landing pages.' },
      { step: '02', title: 'Campaign architecture', body: 'Search + PMax structures, negatives, and suburb/intent segmentation.' },
      { step: '03', title: 'Optimize & scale', body: 'Weekly search term mining, bid strategy tuning, and CRO tests.' },
    ],
    pricingTiers: [
      {
        name: 'Growth',
        price: 'R6,500 / month',
        spend: 'Up to R30,000 ad spend',
        features: ['2 Search campaigns', '1 landing page', 'Monthly reporting', 'Negative keyword governance'],
      },
      {
        name: 'Premium',
        price: 'R12,500 / month',
        spend: 'R30,001 – R75,000 ad spend',
        features: ['Search + PMax + Local', '3 landing pages + A/B tests', 'Call tracking', 'Active bid management'],
      },
      {
        name: 'Elite',
        price: 'R22,000+ / month',
        spend: 'R75,000+ ad spend',
        features: ['Full Google Ads stack', 'Continuous CRO', 'Weekly strategy calls', 'Dedicated account lead'],
      },
    ],
    faqs: [
      {
        question: 'Why flat-fee instead of % of ad spend?',
        answer:
          'Percentage models reward agencies when your budget grows, even if performance does not. Flat fees align our incentive with lowering CPA and improving ROAS.',
      },
      {
        question: 'Do you require long-term contracts?',
        answer: 'No. After the one-time infrastructure setup, management is month-to-month—we earn retention with results.',
      },
      {
        question: 'What is included in the setup fee?',
        answer:
          'Tracking (GA4/GTM), campaign architecture, keyword/negative research, and 1–3 dedicated Next.js landing pages—typically R14,500–R20,000 once-off.',
      },
    ],
    serviceName: 'B2B Google Ads Management',
    serviceType: 'Google Ads Management',
  }),

  'performance-max-google-ads': cfg('performance-max-google-ads', {
    metadata: {
      title: 'Performance Max & Local Ads Johannesburg',
      description:
        'Performance Max and Google Local Ads management tied to your GBP. Creative assets, Maps visibility, and conversion tracking for Johannesburg businesses.',
      keywords: ['performance max agency johannesburg', 'google local ads', 'pmax management south africa'],
    },
    hero: {
      eyebrow: 'PMax • Maps • Multi-channel',
      headline: 'Performance Max fueled by creative your algorithm can actually learn from.',
      subhead:
        'We pair PMax with Local Ads and Google Business Profile signals—plus the image and copy assets your web and social teams already produce.',
    },
    pillars: [
      {
        title: 'Asset group discipline',
        body: 'Structured headlines, descriptions, images, and video so Google’s ML has clean signals.',
      },
      {
        title: 'Local Ads + GBP',
        body: 'Map pack visibility, calls, and direction requests for businesses with physical or service-area presence.',
      },
      {
        title: 'Audience & geo signals',
        body: 'Suburb and radius targeting so budget stays in high-intent Gauteng corridors.',
      },
      {
        title: 'Feed the funnel',
        body: 'Dedicated landing pages per offer—not homepage traffic that bleeds budget.',
      },
    ],
    faqs: [
      {
        question: 'Is Performance Max right for every business?',
        answer:
          'Best for businesses with solid creative, clear offers, and conversion tracking. We still run Search for high-intent exact queries alongside PMax.',
      },
      {
        question: 'Can you manage Local Services Ads (LSA)?',
        answer:
          'Where eligible in South Africa we guide verification and setup; otherwise we maximize Local Ads on Maps and high-intent Search.',
      },
    ],
    serviceName: 'Performance Max & Local Ads Management',
    serviceType: 'Performance Max Advertising',
  }),

  'google-ads-landing-pages': cfg('google-ads-landing-pages', {
    metadata: {
      title: 'Google Ads Landing Pages | Next.js CRO Pages',
      description:
        'Dedicated Next.js landing pages for Google Ads traffic. Message match, no nav leaks, sub-2s LCP, and forms wired to GA4 and your CRM.',
      keywords: ['google ads landing pages', 'ppc landing page design johannesburg', 'nextjs landing pages'],
    },
    hero: {
      eyebrow: 'Post-click • CRO • Speed',
      headline: 'Stop sending R50 clicks to a homepage that was never built to convert.',
      subhead:
        'We deploy frictionless, navigation-free landing pages with perfect message match—engineered to lift Quality Score and slash cost per lead.',
    },
    pillars: [
      { title: 'Message match', body: 'H1 mirrors the exact keyword and ad copy the user searched.' },
      { title: 'Zero leak layout', body: 'No main nav, footer clutter, or social exits—convert or exit.' },
      { title: 'Core Web Vitals', body: 'Static Next.js pages targeting LCP under 2.5s on mobile.' },
      { title: 'Trust stack', body: 'Local proof, reviews, real team photos, and compliant lead capture.' },
    ],
    faqs: [
      {
        question: 'Can you rebuild pages without redoing my whole website?',
        answer: 'Yes. Landing pages live on your domain or a subdomain and plug into existing brand assets.',
      },
      {
        question: 'Do you include tracking setup?',
        answer: 'Every page ships with GA4 events, call tracking hooks, and CRM-ready form endpoints.',
      },
    ],
    serviceName: 'Google Ads Landing Page Development',
    serviceType: 'Landing Page Design',
  }),

  'google-ads-pricing': cfg('google-ads-pricing', {
    metadata: {
      title: 'Google Ads Pricing South Africa | Setup & Retainers',
      description:
        'Transparent Google Ads pricing for South Africa: infrastructure setup R14,500–R20,000, management from R6,500/month. Ad spend billed separately.',
      keywords: ['google ads pricing south africa', 'ppc management cost johannesburg', 'google ads setup fee'],
    },
    hero: {
      eyebrow: 'Transparent • ZAR • No % trap',
      headline: 'Google Ads pricing that separates your ad budget from agency fees.',
      subhead:
        'One-time infrastructure build, then tiered monthly management. You always know what goes to Google versus what pays for strategy and landing pages.',
    },
    pricingTiers: [
      {
        name: 'Infrastructure setup (once-off)',
        price: 'R14,500 – R20,000',
        spend: 'Before first campaign launch',
        features: [
          'GA4 + GTM + conversion actions',
          'Campaign architecture & negatives',
          '1–3 Next.js landing pages',
          'Call tracking configuration',
        ],
      },
      {
        name: 'Growth management',
        price: 'R6,500 / month',
        spend: 'Up to R30,000 ad spend',
        features: ['2 Search campaigns', 'Monthly reporting', '1 landing page maintained'],
      },
      {
        name: 'Premium management',
        price: 'R12,500 / month',
        spend: 'R30k – R75k ad spend',
        features: ['Search + PMax + Local', 'A/B testing', '3 landing pages'],
      },
      {
        name: 'Elite management',
        price: 'R22,000+ / month',
        spend: 'R75,000+ ad spend',
        features: ['Full stack', 'Weekly calls', 'Continuous CRO'],
      },
    ],
    pillars: [
      { title: 'Ad spend is yours', body: 'Paid directly to Google—we never markup media.' },
      { title: 'Setup reflects real work', body: 'Tracking, pages, and account build are intensive in month one.' },
      { title: 'Scales with complexity', body: 'Higher tiers for multi-location and high-spend accounts.' },
    ],
    faqs: [
      {
        question: 'What is a realistic ad budget in South Africa?',
        answer:
          'Many service businesses start at R8,000–R30,000/month; competitive finance and legal verticals often need R40,000+.',
      },
      {
        question: 'Do you charge a percentage of spend?',
        answer: 'No. We use flat monthly tiers so efficiency gains benefit you, not our fee.',
      },
    ],
    serviceName: 'Google Ads Pricing & Packages',
    serviceType: 'Google Ads Management',
  }),

  'google-ads-manufacturing': cfg('google-ads-manufacturing', {
    metadata: {
      title: 'Google Ads for Manufacturing & Industrial | Alrode & Gauteng',
      description:
        'Google Ads for manufacturing, logistics, and industrial firms in Alrode, Wadeville, and Johannesburg. B2B lead gen with technical landing pages.',
      keywords: ['ppc manufacturing companies', 'industrial lead generation alrode', 'google ads factory gauteng'],
    },
    hero: {
      eyebrow: 'Industrial • B2B • Gauteng',
      headline: 'Google Ads for manufacturers who sell on specification—not impulse.',
      subhead:
        'High-intent search, strict negatives, and landing pages that speak procurement, engineering, and plant managers in their language.',
    },
    pillars: [
      { title: 'B2B intent filters', body: 'Block job-seeker and DIY queries that waste industrial CPCs.' },
      { title: 'Capability-led pages', body: 'Specs, certifications, MOQ, and RFQ flows—not consumer fluff.' },
      { title: 'Geo nodes', body: 'Alrode, Wadeville, Isando, and East Rand industrial corridors.' },
    ],
    faqs: [
      {
        question: 'What CPC should manufacturers expect?',
        answer: 'Industrial B2B terms often run R6.70–R15+ per click—efficiency comes from QS and landing page fit.',
      },
    ],
    serviceName: 'Google Ads for Manufacturing & Industrial',
    serviceType: 'Industrial PPC',
    relatedLinks: [
      { href: '/industries/manufacturing-logistics', title: 'Manufacturing marketing hub' },
      { href: '/services/google-ads-alrode', title: 'Google Ads Alrode' },
      ...defaultRelated,
    ],
  }),

  'google-ads-financial-services': cfg('google-ads-financial-services', {
    metadata: {
      title: 'Google Ads for Financial Services & Brokers | Sandton',
      description:
        'Compliant-focused Google Ads for financial advisors, brokerages, and wealth firms in Sandton and Bedfordview. High-intent keywords and trust-heavy landing pages.',
      keywords: ['financial advisor marketing sandton', 'google ads brokerage', 'wealth management leads'],
    },
    hero: {
      eyebrow: 'Finance • FAIS-aware • High LTV',
      headline: 'Paid search for financial brands that cannot afford a compliance misstep.',
      subhead:
        'Tight keyword governance, transparent copy, and landing experiences built for trust—targeting Sandton, Bedfordview, and corporate Gauteng.',
    },
    pillars: [
      { title: 'Keyword discipline', body: 'Exclude career, training, and low-intent finance queries.' },
      { title: 'Trust architecture', body: 'Disclosures, credentials, and E-E-A-T signals on every page.' },
      { title: 'High-LTV tracking', body: 'CRM integration for qualified appointment—not form spam.' },
    ],
    faqs: [
      {
        question: 'What CPC do finance keywords see in SA?',
        answer: 'Competitive wealth and advisory terms often land R35–R60+ per click—QS and CRO are critical.',
      },
    ],
    serviceName: 'Google Ads for Financial Services',
    serviceType: 'Financial Services PPC',
    relatedLinks: [
      { href: '/industries/finance', title: 'Finance industry hub' },
      { href: '/services/google-ads-sandton', title: 'Google Ads Sandton' },
      ...defaultRelated,
    ],
  }),

  'google-ads-automotive': cfg('google-ads-automotive', {
    metadata: {
      title: 'Google Ads for Automotive & Panel Beaters | Johannesburg',
      description:
        'Google Ads for auto repair, panel beaters, tyre clinics, and premium workshops. Emergency-intent Search and Local Ads across Johannesburg.',
      keywords: ['auto repair marketing johannesburg', 'panel beater google ads', 'automotive ppc south africa'],
    },
    hero: {
      eyebrow: 'Automotive • Local • Urgent intent',
      headline: 'Turn emergency searches into booked bays and approved quotes.',
      subhead:
        'Suburb-level campaigns, click-to-call, and landing pages built for automotive trust—aligned with how Joburg drivers actually search.',
    },
    pillars: [
      { title: 'Urgent Search', body: 'Near-me and suburb modifiers for breakdown and repair intent.' },
      { title: 'Local Ads', body: 'Maps prominence, calls, and directions for multi-bay centres.' },
      { title: 'Proof that converts', body: 'Before/after, insurer partnerships, and review velocity.' },
    ],
    faqs: [
      {
        question: 'What is typical automotive CPC in SA?',
        answer: 'Automotive service averages around R17+ CPC nationally—local intent can be higher in affluent nodes.',
      },
    ],
    serviceName: 'Google Ads for Automotive Services',
    serviceType: 'Automotive PPC',
    relatedLinks: [
      { href: '/case-studies/alberton-tyre-clinic', title: 'Tyre clinic case study' },
      { href: '/case-studies/rhino-panel-beaters', title: 'Panel beaters case study' },
      ...defaultRelated,
    ],
  }),

  'google-ads-sandton': cfg('google-ads-sandton', {
    metadata: {
      title: 'Google Ads Agency Sandton | PPC Management',
      description:
        'Google Ads management for Sandton businesses. Corporate B2B, professional services, and high-LTV local campaigns with Next.js landing pages.',
      keywords: ['google ads sandton', 'ppc agency sandton', 'paid search sandton'],
    },
    hero: {
      eyebrow: 'Sandton • Corporate • High LTV',
      headline: 'Google Ads built for Sandton’s cost-per-lead reality.',
      subhead: 'Competitive auctions demand Quality Score discipline—we deliver speed, message match, and reporting your CFO respects.',
    },
    pillars: [
      { title: 'Corporate keywords', body: 'B2B and professional service campaign structures.' },
      { title: 'Suburb precision', body: 'Radius and location targeting for northern suburbs.' },
    ],
    faqs: [{ question: 'Do you meet Sandton clients on-site?', answer: 'We are Alberton-based with remote-first delivery and on-site strategy sessions by appointment.' }],
    serviceName: 'Google Ads Management Sandton',
    serviceType: 'Local PPC',
    relatedLinks: [{ href: '/locations/sandton', title: 'Web design Sandton' }, ...defaultRelated],
  }),

  'google-ads-alberton': cfg('google-ads-alberton', {
    metadata: {
      title: 'Google Ads Alberton | Local PPC & Landing Pages',
      description:
        'Google Ads for Alberton and south Johannesburg service businesses. Local agency proximity, fast setup, and industrial corridor expertise.',
      keywords: ['google ads alberton', 'ppc alberton', 'digital marketing alberton'],
    },
    hero: {
      eyebrow: 'Alberton • Local partner',
      headline: 'Your Alberton-based Google Ads and web infrastructure partner.',
      subhead: 'We understand the East Rand market—from Meyersdal professionals to Alrode industrial buyers.',
    },
    pillars: [
      { title: 'Local proximity', body: 'Same timezone, same market—no offshore account drift.' },
      { title: 'East Rand targeting', body: 'Alberton, New Redruth, Meyersdal, and south JHB corridors.' },
    ],
    faqs: [],
    serviceName: 'Google Ads Management Alberton',
    serviceType: 'Local PPC',
    relatedLinks: [{ href: '/locations/meyersdal', title: 'Meyersdal web design' }, ...defaultRelated],
  }),

  'google-ads-midrand': cfg('google-ads-midrand', {
    metadata: {
      title: 'Google Ads Midrand | PPC & Lead Generation',
      description: 'Google Ads management for Midrand and Kempton Park service businesses. Search, PMax, and conversion-focused landing pages.',
      keywords: ['google ads midrand', 'ppc midrand', 'lead generation midrand'],
    },
    hero: {
      eyebrow: 'Midrand • Logistics corridor',
      headline: 'Capture Midrand search demand before Randburg agencies outbid you.',
      subhead: 'Structured campaigns for logistics, services, and B2B operators along the N1 belt.',
    },
    pillars: [{ title: 'Corridor targeting', body: 'Midrand, Halfway House, and Kempton Park geo layers.' }],
    faqs: [],
    serviceName: 'Google Ads Management Midrand',
    serviceType: 'Local PPC',
    relatedLinks: [{ href: '/locations/midrand', title: 'Midrand web design' }, ...defaultRelated],
  }),

  'google-ads-alrode': cfg('google-ads-alrode', {
    metadata: {
      title: 'Google Ads Alrode | Industrial PPC & Lead Gen',
      description: 'Google Ads for Alrode manufacturing and industrial operators. B2B search, strict negatives, and RFQ-focused landing pages.',
      keywords: ['google ads alrode', 'industrial lead generation alrode', 'manufacturing ppc alrode'],
    },
    hero: {
      eyebrow: 'Alrode • Industrial node',
      headline: 'Industrial Google Ads for the Alrode manufacturing cluster.',
      subhead: 'Reach plant managers and procurement teams searching for suppliers, logistics, and fabrication partners.',
    },
    pillars: [{ title: 'Industrial negatives', body: 'Filter recruitment and consumer noise from B2B terms.' }],
    faqs: [],
    serviceName: 'Google Ads Alrode Industrial',
    serviceType: 'Industrial PPC',
    relatedLinks: [
      { href: '/services/google-ads-manufacturing', title: 'Manufacturing Google Ads' },
      { href: '/industries/manufacturing-logistics', title: 'Manufacturing hub' },
      ...defaultRelated,
    ],
  }),

  'google-ads-wadeville': cfg('google-ads-wadeville', {
    metadata: {
      title: 'Google Ads Wadeville | Engineering & Industrial PPC',
      description: 'Google Ads for Wadeville engineering, steel, and industrial firms. Localized campaigns and technical landing pages.',
      keywords: ['google ads wadeville', 'engineering marketing wadeville', 'industrial ppc wadeville'],
    },
    hero: {
      eyebrow: 'Wadeville • Engineering',
      headline: 'PPC for Wadeville’s engineering and fabrication market.',
      subhead: 'Hyper-local B2B campaigns with landing pages that speak to spec-driven buyers.',
    },
    pillars: [{ title: 'Engineering intent', body: 'Keywords aligned to fabrication, steel, and industrial services.' }],
    faqs: [],
    serviceName: 'Google Ads Wadeville',
    serviceType: 'Industrial PPC',
    relatedLinks: [{ href: '/services/google-ads-manufacturing', title: 'Manufacturing PPC' }, ...defaultRelated],
  }),

  'google-ads-bedfordview': cfg('google-ads-bedfordview', {
    metadata: {
      title: 'Google Ads Bedfordview | Financial & Professional PPC',
      description: 'Google Ads for Bedfordview financial advisors, boutiques, and professional services. High-trust landing pages and strict keyword control.',
      keywords: ['google ads bedfordview', 'financial lead generation bedfordview'],
    },
    hero: {
      eyebrow: 'Bedfordview • Professional',
      headline: 'Paid search for Bedfordview’s professional and wealth markets.',
      subhead: 'Target high-intent local queries with compliant copy and premium post-click experiences.',
    },
    pillars: [{ title: 'Professional services', body: 'Campaigns for advisory, legal, and boutique B2B offers.' }],
    faqs: [],
    serviceName: 'Google Ads Bedfordview',
    serviceType: 'Local PPC',
    relatedLinks: [{ href: '/services/google-ads-financial-services', title: 'Financial services PPC' }, ...defaultRelated],
  }),
};

export function getGoogleAdsPage(slug: string): GoogleAdsPageConfig | undefined {
  return googleAdsPages[slug];
}

export function buildGoogleAdsServiceSchema(config: GoogleAdsPageConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}${config.path}#service`,
    name: config.serviceName,
    description: config.metadata.description,
    provider: { '@id': `${BASE_URL}#organization` },
    areaServed: { '@type': 'City', name: 'Johannesburg' },
    serviceType: config.serviceType,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'ZAR',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}${config.path}`,
    },
  };
}
