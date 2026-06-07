// src/app/robots.ts
import { MetadataRoute } from 'next';

const AI_AGENTS = [
  'GPTBot',
  'ChatGPT-User',
  'ClaudeBot',
  'anthropic-ai',
  'PerplexityBot',
  'Google-Extended',
] as const;

const AI_ALLOW = [
  '/',
  '/blog/',
  '/services/',
  '/insights/',
  '/compare/',
  '/locations/',
  '/industries/',
  '/case-studies/',
  '/pricing/',
  '/process/',
  '/about/',
  '/contact/',
  '/alberton-business-heritage',
];

const DISALLOW = ['/api/', '/admin/', '/private/', '/report/'];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.endpointmedia.co.za';

  if (process.env.NODE_ENV !== 'production') {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: DISALLOW,
      },
      ...AI_AGENTS.map((userAgent) => ({
        userAgent,
        allow: AI_ALLOW,
        disallow: DISALLOW,
      })),
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/llms.txt`,
      `${baseUrl}/alberton-service-area.kml`,
      `${baseUrl}/northern-corridor.kml`,
    ],
  };
}
