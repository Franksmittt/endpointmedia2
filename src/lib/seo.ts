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
export function buildMetadata({
  title,
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

  return {
    title,
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
            url: `${BASE_URL}/images/EPM.jpg`,
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
      images: twitter?.images ?? [`${BASE_URL}/images/EPM.jpg`],
    },
  };
}

