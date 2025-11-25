// src/app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Use environment variable if available, fallback to hardcoded value
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://endpointmedia.co.za';

  // Dynamic environment detection - prevents staging/dev from being indexed
  if (process.env.NODE_ENV !== 'production') {
    return {
      rules: {
        userAgent: '*',
        disallow: '/', // Block all crawling on non-production environments
      },
    };
  }

  // Production robots.txt
  // CRITICAL: Do NOT block /_next/ - Googlebot needs JS/CSS for rendering
  // Blocking /_next/ will cause render failures and poor rankings
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
        ],
      },
    ],
    // 3. The Double-Sitemap Declaration
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/alberton-service-area.kml` // The Geo-Map
    ],
  };
}

