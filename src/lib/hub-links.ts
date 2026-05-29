export interface HubLink {
  href: string;
  title: string;
  description: string;
}

const CORE_HUB_LINKS: HubLink[] = [
  {
    href: '/blog/local-seo-blueprint',
    title: 'Local SEO Blueprint',
    description: 'Hub-and-spoke regional architecture for Gauteng dominance.',
  },
  {
    href: '/services/local-seo',
    title: 'Local SEO Services',
    description: 'Google Business Profile and map pack optimization.',
  },
  {
    href: '/case-studies',
    title: 'Client Case Studies',
    description: 'Proof from Johannesburg service businesses.',
  },
];

const LOCATION_GOOGLE_ADS: Record<string, string> = {
  sandton: '/services/google-ads-sandton',
  midrand: '/services/google-ads-midrand',
  meyersdal: '/services/google-ads-alberton',
  'new-redruth': '/services/google-ads-alberton',
  benoni: '/services/google-ads-bedfordview',
};

const LOCATION_LABELS: Record<string, string> = {
  sandton: 'Sandton',
  midrand: 'Midrand',
  meyersdal: 'Meyersdal',
  'new-redruth': 'New Redruth',
  benoni: 'Benoni',
  bryanston: 'Bryanston',
  rivonia: 'Rivonia',
  rosebank: 'Rosebank',
  randburg: 'Randburg',
  roodepoort: 'Roodepoort',
  fourways: 'Fourways',
  waterfall: 'Waterfall',
};

const INDUSTRY_SERVICE_LINKS: Record<string, HubLink> = {
  'law-firms': {
    href: '/services/law-firm-websites',
    title: 'Law Firm Website Design',
    description: 'Trust-first legal websites with practice area architecture.',
  },
  medical: {
    href: '/services/medical-websites',
    title: 'Medical Website Design',
    description: 'HIPAA-aware layouts, booking flows, and local SEO for clinics.',
  },
  finance: {
    href: '/services/google-ads-financial-services',
    title: 'Financial Services Google Ads',
    description: 'Compliance-ready paid acquisition for advisory firms.',
  },
  'manufacturing-logistics': {
    href: '/services/google-ads-manufacturing',
    title: 'Manufacturing Google Ads',
    description: 'Industrial B2B lead gen for Gauteng operators.',
  },
  'real-estate': {
    href: '/services/website-development',
    title: 'Real Estate Web Development',
    description: 'Listing-ready Next.js sites with conversion architecture.',
  },
};

export function getLocationHubLinks(slug: string): HubLink[] {
  const label = LOCATION_LABELS[slug] ?? 'Johannesburg';
  const links: HubLink[] = [
    {
      href: '/locations',
      title: 'All Service Locations',
      description: 'Browse every Johannesburg hub we serve.',
    },
  ];

  const adsPath = LOCATION_GOOGLE_ADS[slug];
  if (adsPath) {
    links.push({
      href: adsPath,
      title: `Google Ads ${label}`,
      description: `Regional paid acquisition for ${label} operators.`,
    });
  } else {
    links.push({
      href: '/services/google-ads',
      title: 'Google Ads Management',
      description: 'Performance marketing for high-intent local searches.',
    });
  }

  return [...links, ...CORE_HUB_LINKS];
}

export function getLocationsIndexHubLinks(): HubLink[] {
  return [
    {
      href: '/locations/sandton',
      title: 'Web Design Sandton',
      description: 'Dominate Africa\'s richest square mile.',
    },
    {
      href: '/locations/midrand',
      title: 'Web Design Midrand',
      description: 'Corporate corridor and logistics hub coverage.',
    },
    {
      href: '/locations/new-redruth',
      title: 'Web Design New Redruth',
      description: 'Alberton industrial and professional services.',
    },
    ...CORE_HUB_LINKS,
  ];
}

export function getIndustryHubLinks(slug: string): HubLink[] {
  const industryLink = INDUSTRY_SERVICE_LINKS[slug];
  const links: HubLink[] = [
    {
      href: '/industries',
      title: 'All Industries',
      description: 'Industry-specific web design and SEO solutions.',
    },
  ];

  if (industryLink) {
    links.push(industryLink);
  }

  links.push(
    {
      href: '/services/website-development',
      title: 'Website Development',
      description: 'Next.js performance assets engineered for conversion.',
    },
    ...CORE_HUB_LINKS,
  );

  return links;
}

export function getIndustriesIndexHubLinks(): HubLink[] {
  return [
    {
      href: '/industries/law-firms',
      title: 'Law Firm Websites',
      description: 'Professional legal web design for Johannesburg firms.',
    },
    {
      href: '/industries/medical',
      title: 'Medical Practice Websites',
      description: 'Clinic and specialist sites with booking integration.',
    },
    {
      href: '/industries/manufacturing-logistics',
      title: 'Manufacturing & Logistics',
      description: 'Industrial B2B digital acquisition systems.',
    },
    ...CORE_HUB_LINKS,
  ];
}

export function getCaseStudyHubLinks(slug: string): HubLink[] {
  const links: HubLink[] = [
    {
      href: '/case-studies',
      title: 'All Case Studies',
      description: 'Browse every Endpoint Media client success story.',
    },
    {
      href: '/services/website-development',
      title: 'Website Development',
      description: 'Build your own high-performance revenue engine.',
    },
    {
      href: '/contact',
      title: 'Free Growth Audit',
      description: 'Get a custom roadmap for your market.',
    },
  ];

  if (slug.startsWith('alberton') || slug === 'qj-paint-world') {
    links.unshift(
      {
        href: '/locations/new-redruth',
        title: 'Alberton & New Redruth Hub',
        description: 'Regional landing pages for south Johannesburg.',
      },
      {
        href: '/alberton-business-heritage',
        title: 'Alberton Business Heritage',
        description: 'Local authority content for Alberton operators.',
      },
    );
  }

  if (slug === 'as-brokers') {
    links.unshift(
      {
        href: '/industries/finance',
        title: 'Financial Services Web Design',
        description: 'Wealth and advisory platform architecture.',
      },
      {
        href: '/services/google-ads-financial-services',
        title: 'Financial Services Google Ads',
        description: 'Compliance-ready paid lead generation.',
      },
    );
  }

  if (slug === 'maverick-painting-contractors' || slug === 'rhino-panel-beaters') {
    links.unshift({
      href: '/services/google-ads-automotive',
      title: 'Automotive & Trades Google Ads',
      description: 'High-intent campaigns for field service businesses.',
    });
  }

  links.push(...CORE_HUB_LINKS.slice(0, 2));

  return links;
}

/** SEO metadata for case study Article JSON-LD */
export const CASE_STUDY_SEO: Record<
  string,
  { headline: string; description: string; datePublished: string }
> = {
  'as-brokers': {
    headline: 'AS Brokers: Engineering a High-Trust Wealth Conversion Platform',
    description:
      'How Endpoint Media rebuilt AS Brokers into a premium wealth platform with actuarial calculators, compliance-first messaging, and CRM-ready lead systems.',
    datePublished: '2026-01-15',
  },
  'alberton-battery-mart': {
    headline: 'Alberton Battery Mart: Mobile Battery Service & E-commerce Dominance',
    description:
      'Ground-up strategic overhaul with advanced product search, local SEO, and Google Merchant Center integration for Alberton Battery Mart.',
    datePublished: '2025-09-12',
  },
  'alberton-tyre-clinic': {
    headline: 'Alberton Tyre Clinic: Safety-Driven Vehicle Maintenance Center',
    description:
      'Transforming a traditional tyre shop into a modern safety-driven maintenance brand with hyper-local trust signals.',
    datePublished: '2025-08-20',
  },
  'maverick-painting-contractors': {
    headline: 'Maverick Painting Contractors: Premium Commercial Repositioning',
    description:
      'Repositioning Maverick as a risk-averse commercial painting partner with QA guarantees and technical authority.',
    datePublished: '2025-07-08',
  },
  'qj-paint-world': {
    headline: 'QJ Paint World: Expert B2B Technical Supplier Platform',
    description:
      'B2B-focused conversion strategy for professional decorative, automotive, and industrial coatings in Johannesburg South.',
    datePublished: '2025-06-15',
  },
  'rhino-panel-beaters': {
    headline: 'Rhino Panel Beaters: High-Performance Quote Engine & Local SEO',
    description:
      'Next.js conversion site with multi-step quote engine and local SEO for Zululand market dominance.',
    datePublished: '2025-05-22',
  },
  'sakana-no-ichi': {
    headline: 'Sakana no Ichi: Luxury Koi Brand Development',
    description:
      'Premium lifestyle brand built on Japanese aesthetic principles and mindful ritual positioning.',
    datePublished: '2025-04-10',
  },
};
