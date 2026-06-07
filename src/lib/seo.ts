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
 * Canonical organization ID for knowledge graph linking
 * CRITICAL: Must match BASE_URL (use www for consistency)
 */
export const ORG_ID = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.endpointmedia.co.za'}/#organization`;

/**
 * Canonical person ID for Frank Smit (E-E-A-T)
 * CRITICAL: Must match BASE_URL (use www for consistency)
 */
export const FRANK_SMIT_ID = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.endpointmedia.co.za'}/about/author/frank-smit#person`;

/**
 * Base URL for the site
 * Uses environment variable if available, falls back to hardcoded value
 * IMPORTANT: Set NEXT_PUBLIC_BASE_URL in production for canonical consistency
 * CRITICAL: Always use www version (www.endpointmedia.co.za) as canonical
 */
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.endpointmedia.co.za';

/** Crawlable brand assets used by metadata and schema. */
export const DEFAULT_OG_IMAGE = `${BASE_URL}/opengraph-image`;
export const LOGO_IMAGE = `${BASE_URL}/images/endpoint-media-logo.svg`;
export const FOUNDER_IMAGE = `${BASE_URL}/images/frank-smit.svg`;

/** Google Business Profile Maps CID */
export const GBP_MAPS_URL = 'https://www.google.com/maps?cid=06180556288562610524';

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

