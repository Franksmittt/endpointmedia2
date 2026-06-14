import type { Metadata } from 'next';

/**
 * SEO Utility Functions
 * 
 * Secure JSON-LD sanitization and SEO helper functions
 * Based on Next.js SEO best practices and security guidelines
 */

/**
 * Securely sanitizes JSON-LD data to prevent XSS attacks
 * Replaces < characters with unicode equivalent as recommended by Next.js docs
 * 
 * @param data - The JSON-LD object to sanitize
 * @returns Sanitized JSON string safe for dangerouslySetInnerHTML
 */
export function secureJsonLD(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/**
 * Base URL and canonical schema IDs for knowledge graph linking.
 * CRITICAL: Always use the www version (www.endpointmedia.co.za) as canonical.
 */
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.endpointmedia.co.za';

export const ORG_ID = `${BASE_URL}/#organization`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
export const LOCAL_BUSINESS_ID = `${BASE_URL}/#localbusiness`;
export const HOMEPAGE_ID = `${BASE_URL}/#webpage`;
export const HOMEPAGE_FAQ_ID = `${BASE_URL}/#faq`;
export const FRANK_SMIT_ID = `${BASE_URL}/about/author/frank-smit#person`;

/** Crawlable brand assets used by metadata and schema. */
export const DEFAULT_OG_IMAGE = `${BASE_URL}/opengraph-image`;
export const LOGO_IMAGE = `${BASE_URL}/images/endpoint-media-logo.svg`;
export const FOUNDER_IMAGE = `${BASE_URL}/images/frank-smit.svg`;

/** Google Business Profile Maps CID */
export const GBP_MAPS_URL = 'https://www.google.com/maps?cid=06180556288562610524';

export const ORGANIZATION_SCHEMA = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Endpoint Media",
  alternateName: "Endpoint Media Web Design",
  url: BASE_URL,
  logo: LOGO_IMAGE,
  description: "Endpoint Media builds high-performance, lead-generating websites for Johannesburg service businesses.",
  founder: { "@id": FRANK_SMIT_ID },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27-76-972-4559",
    contactType: "Sales",
    email: "hello@endpointmedia.co.za",
    areaServed: "ZA",
    availableLanguage: ["en-ZA"],
  },
  sameAs: [
    "https://www.facebook.com/people/Endpoint-Media/61583029051159/",
    "https://www.linkedin.com/in/frank-smittt",
    GBP_MAPS_URL,
  ],
  knowsAbout: [
    {
      "@type": "Thing",
      name: "Next.js",
      sameAs: "https://www.wikidata.org/wiki/Q28957137",
    },
    {
      "@type": "Thing",
      name: "Google Ads",
      sameAs: "https://www.wikidata.org/wiki/Q180864",
    },
    {
      "@type": "Thing",
      name: "Technical SEO",
      sameAs: "https://www.wikidata.org/wiki/Q2902242",
    },
    {
      "@type": "Thing",
      name: "Local SEO",
      sameAs: "https://en.wikipedia.org/wiki/Local_search_engine_optimisation",
    },
    {
      "@type": "Thing",
      name: "Conversion Rate Optimization",
      sameAs: "https://en.wikipedia.org/wiki/Conversion_rate_optimization",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Johannesburg" },
    { "@type": "City", name: "Sandton" },
    { "@type": "City", name: "Randburg" },
    { "@type": "City", name: "Bryanston" },
    { "@type": "City", name: "Rivonia" },
    { "@type": "City", name: "Midrand" },
    { "@type": "City", name: "Roodepoort" },
    { "@type": "City", name: "Rosebank" },
    { "@type": "City", name: "Fourways" },
    { "@type": "City", name: "Waterfall" },
    { "@type": "City", name: "Benoni" },
    { "@type": "City", name: "Meyersdal" },
    { "@type": "City", name: "New Redruth" },
  ],
};

export const LOCAL_BUSINESS_SCHEMA = {
  "@type": "LocalBusiness",
  "@id": LOCAL_BUSINESS_ID,
  name: "Endpoint Media",
  image: LOGO_IMAGE,
  description: "Professional web design and local SEO services for Johannesburg businesses",
  parentOrganization: { "@id": ORG_ID },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Johannesburg",
    addressRegion: "Gauteng",
    addressCountry: "ZA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.2041,
    longitude: 28.0473,
  },
  url: BASE_URL,
  telephone: "+27-76-972-4559",
  email: "hello@endpointmedia.co.za",
  priceRange: "R5,500 - R15,000",
  hasMap: GBP_MAPS_URL,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "17:00",
  },
  branchCode: "06180556288562610524",
  areaServed: [
    { "@type": "City", name: "Johannesburg", sameAs: "https://www.wikidata.org/wiki/Q1754" },
    { "@type": "City", name: "Sandton", sameAs: "https://www.wikidata.org/wiki/Q1025682" },
    { "@type": "City", name: "Randburg", sameAs: "https://www.wikidata.org/wiki/Q2719072" },
    { "@type": "City", name: "Bryanston", sameAs: "https://www.wikidata.org/wiki/Q4927445" },
    { "@type": "City", name: "Rivonia", sameAs: "https://www.wikidata.org/wiki/Q7338859" },
    { "@type": "City", name: "Midrand", sameAs: "https://www.wikidata.org/wiki/Q1025681" },
    { "@type": "City", name: "Roodepoort", sameAs: "https://www.wikidata.org/wiki/Q943397" },
    { "@type": "City", name: "Rosebank", sameAs: "https://www.wikidata.org/wiki/Q7371732" },
    { "@type": "City", name: "Fourways", sameAs: "https://www.wikidata.org/wiki/Q5454389" },
    { "@type": "City", name: "Waterfall", sameAs: "https://www.wikidata.org/wiki/Q7969776" },
    { "@type": "City", name: "Benoni", sameAs: "https://www.wikidata.org/wiki/Q816873" },
    { "@type": "City", name: "Meyersdal", sameAs: "https://www.wikidata.org/wiki/Q3593815" },
    { "@type": "City", name: "New Redruth", sameAs: "https://www.wikidata.org/wiki/Q3593815" },
  ],
};

export const WEBSITE_SCHEMA = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: BASE_URL,
  name: "Endpoint Media",
  description: "Web Design Johannesburg | High-Performance Websites That Generate Revenue",
  publisher: {
    "@id": ORG_ID,
  },
};

export const FRANK_SMIT_SCHEMA = {
  "@type": "Person",
  "@id": FRANK_SMIT_ID,
  name: "Frank Smit",
  jobTitle: "Web Design Expert & Founder",
  url: `${BASE_URL}/about/author/frank-smit`,
  image: FOUNDER_IMAGE,
  sameAs: [
    "https://www.linkedin.com/in/frank-smittt",
  ],
  worksFor: {
    "@id": ORG_ID,
  },
  knowsAbout: [
    {
      "@type": "Thing",
      name: "Web Design",
      sameAs: "https://en.wikipedia.org/wiki/Web_design",
    },
    {
      "@type": "Thing",
      name: "Local SEO",
      sameAs: "https://en.wikipedia.org/wiki/Local_search_engine_optimisation",
    },
    {
      "@type": "Thing",
      name: "Next.js Development",
      sameAs: "https://www.wikidata.org/wiki/Q28957137",
    },
    {
      "@type": "Thing",
      name: "Technical SEO",
      sameAs: "https://www.wikidata.org/wiki/Q2902242",
    },
    {
      "@type": "Thing",
      name: "E-commerce Development",
      sameAs: "https://en.wikipedia.org/wiki/E-commerce",
    },
  ],
};

export const ROOT_SCHEMA_NODES = [
  ORGANIZATION_SCHEMA,
  LOCAL_BUSINESS_SCHEMA,
  WEBSITE_SCHEMA,
  FRANK_SMIT_SCHEMA,
];

export const WIKIDATA = {
  johannesburg: 'https://www.wikidata.org/wiki/Q1754',
  sandton: 'https://www.wikidata.org/wiki/Q1025682',
  midrand: 'https://www.wikidata.org/wiki/Q1025681',
  randburg: 'https://www.wikidata.org/wiki/Q2719072',
  bryanston: 'https://www.wikidata.org/wiki/Q4927445',
  rivonia: 'https://www.wikidata.org/wiki/Q7338859',
  fourways: 'https://www.wikidata.org/wiki/Q5454389',
  rosebank: 'https://www.wikidata.org/wiki/Q7371732',
  waterfall: 'https://www.wikidata.org/wiki/Q7969776',
  benoni: 'https://www.wikidata.org/wiki/Q816873',
  roodepoort: 'https://www.wikidata.org/wiki/Q943397',
  alberton: 'https://www.wikidata.org/wiki/Q3593815',
  bedfordview: 'https://www.wikidata.org/wiki/Q813076',
  southAfrica: 'https://www.wikidata.org/wiki/Q258',
} as const;

export function cityAreaServed(name: string, wikidataUrl: string) {
  return { '@type': 'City' as const, name, sameAs: wikidataUrl };
}

export function buildLocationLocalBusinessSchema(config: {
  slug: string;
  label: string;
  latitude: number;
  longitude: number;
  wikidataUrl: string;
  serviceRadiusKm?: number;
}) {
  const url = `${BASE_URL}/locations/${config.slug}`;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}#localbusiness`,
    name: `Endpoint Media - Web Design ${config.label}`,
    image: LOGO_IMAGE,
    description: `Professional web design and local SEO services for ${config.label} businesses`,
    parentOrganization: { '@id': ORG_ID },
    areaServed: cityAreaServed(config.label, config.wikidataUrl),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: config.latitude,
      longitude: config.longitude,
    },
    url,
    telephone: '+27-76-972-4559',
    email: 'hello@endpointmedia.co.za',
    priceRange: 'R5,500 - R15,000',
  };

  if (config.serviceRadiusKm) {
    schema.serviceArea = {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: config.latitude,
        longitude: config.longitude,
      },
      geoRadius: {
        '@type': 'Distance',
        value: String(config.serviceRadiusKm),
        unitCode: 'KM',
      },
    };
  }

  return schema;
}

type OpenGraphType =
  | 'website'
  | 'article'
  | 'book'
  | 'profile'
  | 'music.song'
  | 'music.album'
  | 'music.playlist'
  | 'music.radio_station'
  | 'video.movie'
  | 'video.episode'
  | 'video.tv_show'
  | 'video.other';
type MetadataTwitter = NonNullable<Metadata['twitter']>;

type BuildMetadataOptions = {
  title: string;
  /** When true, bypasses root layout title template (no automatic "| Endpoint Media" suffix). */
  titleAbsolute?: boolean;
  description: string;
  path?: string;
  keywords?: string[];
  hreflang?: Record<string, string>;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: OpenGraphType;
    images?: {
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }[];
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image';
    title?: MetadataTwitter['title'];
    description?: MetadataTwitter['description'];
    images?: string[];
  };
};

/**
 * Builds consistent metadata with canonical + Open Graph data
 */
/** Speakable WebPage schema for AEO / voice search */
export function buildSpeakableWebPageSchema(options: {
  url: string;
  name: string;
  description: string;
  cssSelectors: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${options.url}#webpage`,
    url: options.url,
    name: options.name,
    description: options.description,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: options.cssSelectors,
    },
  };
}

/** Article schema for case study conversion assets */
export function buildCaseStudyArticleSchema(options: {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${options.url}#article`,
    headline: options.headline,
    description: options.description,
    author: { '@type': 'Person', '@id': FRANK_SMIT_ID, name: 'Frank Smit' },
    publisher: { '@id': ORG_ID },
    image: options.image ?? DEFAULT_OG_IMAGE,
    datePublished: new Date(options.datePublished).toISOString(),
    dateModified: new Date(options.datePublished).toISOString(),
    mainEntityOfPage: { '@type': 'WebPage', '@id': options.url },
    inLanguage: 'en-ZA',
  };
}

/** HowTo schema for process / instructional pages */
export function buildHowToSchema(options: {
  url: string;
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${options.url}#howto`,
    name: options.name,
    description: options.description,
    step: options.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function buildMetadata({
  title,
  titleAbsolute = false,
  description,
  path = '/',
  keywords,
  hreflang,
  openGraph,
  twitter,
}: BuildMetadataOptions): Metadata {
  // Ensure path doesn't have trailing slash (matching next.config.mjs trailingSlash: false)
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  const url = `${BASE_URL}${cleanPath}`;
  const languageAlternates =
    hreflang ??
    {
      'en-ZA': url,
      en: url,
    };

  const resolvedTitle: Metadata['title'] = titleAbsolute ? { absolute: title } : title;

  return {
    title: resolvedTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: languageAlternates,
    },
    openGraph: {
      title: openGraph?.title ?? title,
      description: openGraph?.description ?? description,
      url: openGraph?.url ?? url,
      type: openGraph?.type ?? 'website',
      siteName: 'Endpoint Media',
      locale: 'en_ZA',
      images:
        openGraph?.images ??
        [
          {
            url: DEFAULT_OG_IMAGE,
            width: 1200,
            height: 630,
            alt: 'Endpoint Media - Web Design Johannesburg',
          },
        ],
    },
    twitter: {
      card: twitter?.card ?? 'summary_large_image',
      title: twitter?.title ?? title,
      description: twitter?.description ?? description,
      images: twitter?.images ?? [DEFAULT_OG_IMAGE],
    },
  };
}

