import type { BlogPostMeta } from './types';

export function getRelatedLinks(slug: string) {
  const siloLinks: Record<string, { href: string; title: string; description: string }[]> = {
    'web-architecture': [
      { href: '/blog/the-brutal-truth-about-wordpress', title: 'WordPress vs Next.js', description: 'Why legacy CMS architecture destroys conversion rates.' },
      { href: '/blog/core-web-vitals-financial-metric', title: 'Core Web Vitals ROI', description: 'LCP and CLS as financial metrics.' },
      { href: '/blog/website-migration-blueprint', title: 'Migration Blueprint', description: 'Rebuild without losing search traffic.' },
      { href: '/services/website-development', title: 'Website Development', description: 'Next.js enterprise builds.' },
    ],
    'google-ads': [
      { href: '/blog/landing-page-speed-quality-score', title: 'Speed & Quality Score', description: 'How page speed cuts CPC.' },
      { href: '/blog/google-ads-tracking-errors-budget', title: 'Tracking Errors', description: 'Fix budget hemorrhage from bad setup.' },
      { href: '/services/google-ads', title: 'Google Ads Management', description: 'Performance marketing for B2B.' },
      { href: '/insights/south-africa-google-ads-cpc-benchmarks', title: 'SA CPC Benchmarks', description: 'Regional cost data.' },
    ],
    'local-dominance': [
      { href: '/blog/local-seo-blueprint', title: 'Local SEO Blueprint', description: 'Hub-and-spoke regional architecture.' },
      { href: '/blog/structured-data-local-schema', title: 'Local Schema Guide', description: 'JSON-LD with GeoCoordinates.' },
      { href: '/services/google-ads-alberton', title: 'Alberton Google Ads', description: 'Regional service pages.' },
      { href: '/services/local-seo', title: 'Local SEO Services', description: 'Dominate map pack results.' },
    ],
  };

  const post = slug;
  const defaultLinks = [
    { href: '/pricing', title: 'Transparent Pricing', description: 'Website packages and ROI focus.' },
    { href: '/case-studies', title: 'Case Studies', description: 'Proven B2B results.' },
    { href: '/contact', title: 'Contact', description: 'Get a technical audit.' },
    { href: '/blog', title: 'All Articles', description: 'Full insights library.' },
  ];

  if (post.includes('wordpress') || post.includes('vitals') || post.includes('migration') || post.includes('landing-page') || post.includes('aeo')) {
    return siloLinks['web-architecture'];
  }
  if (post.includes('google-ads') || post.includes('bidding') || post.includes('vanity') || post.includes('performance-engine') || post.includes('quality-score') || post.includes('tracking')) {
    return siloLinks['google-ads'];
  }
  if (post.includes('local') || post.includes('schema') || post.includes('map') || post.includes('industrial') || post.includes('minimalist')) {
    return siloLinks['local-dominance'];
  }
  if (post.includes('cost') || post.includes('pricing')) {
    return [
      { href: '/pricing', title: 'Pricing Packages', description: 'Foundation to Market Leader tiers.' },
      { href: '/services/website-design-prices', title: 'Design Prices', description: 'Interactive pricing calculator.' },
      { href: '/blog/how-much-does-website-cost-south-africa-2025', title: 'SA Pricing Guide', description: 'National cost breakdown.' },
      { href: '/contact', title: 'Get a Quote', description: 'Custom proposal.' },
    ];
  }
  return defaultLinks;
}

export function buildFaqSchema(post: BlogPostMeta, url: string) {
  if (!post.faqs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}
