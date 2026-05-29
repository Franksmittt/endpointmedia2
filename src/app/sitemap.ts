// src/app/sitemap.ts
import { MetadataRoute } from 'next';

export const revalidate = 86400;

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.endpointmedia.co.za';
const currentDate = new Date();

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]['changeFrequency']
>;

const BLOG_POST_DATES: Record<string, string> = {
  'the-true-cost-of-a-website-in-johannesburg': '2025-10-30',
  'freelancer-vs-agency-the-low-risk-choice-for-johannesburg': '2025-10-23',
  'the-schema-vacuum-technical-seo-advantage': '2025-10-15',
  'wix-vs-wordpress-guide-johannesburg-small-businesses': '2025-11-05',
  'how-much-does-website-cost-south-africa-2025': '2025-11-12',
};

const createEntry = (
  path: string,
  changeFrequency: ChangeFrequency,
  priority: number,
  lastModified?: Date,
): MetadataRoute.Sitemap[number] => {
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  return {
    url: cleanPath === '' ? baseUrl : `${baseUrl}${cleanPath}`,
    lastModified: lastModified ?? currentDate,
    changeFrequency,
    priority,
  };
};

const mapPaths = (
  paths: string[],
  changeFrequency: ChangeFrequency,
  priority: number,
  lastModified?: Date,
) => paths.map((path) => createEntry(path, changeFrequency, priority, lastModified));

const corePaths = ['/services', '/case-studies', '/blog'];

const googleAdsServicePaths = [
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
];

const insightPaths = ['/insights/south-africa-google-ads-cpc-benchmarks'];

const comparePaths = ['/compare/google-ads-flat-fee-vs-percentage-spend'];

const serviceDetailPaths = [
  '/services/web-design-firms',
  '/services/website-development',
  '/services/website-design-prices',
  '/services/website-redesign',
  '/services/shopify-expert',
  '/services/custom-development',
  '/services/law-firm-websites',
  '/services/medical-websites',
  '/services/growth-rescue',
  '/services/local-seo',
  ...googleAdsServicePaths.filter((p) => p !== '/services/google-ads'),
  '/services/facebook-ads',
  '/services/conversion-rate-optimization',
  '/services/website-maintenance',
  '/services/review-management',
];

const locationPaths = [
  '/locations',
  '/locations/sandton',
  '/locations/meyersdal',
  '/locations/new-redruth',
  '/locations/roodepoort',
  '/locations/bryanston',
  '/locations/rivonia',
  '/locations/midrand',
  '/locations/rosebank',
  '/locations/randburg',
  '/locations/fourways',
  '/locations/waterfall',
  '/locations/benoni',
];

const industryPaths = [
  '/industries',
  '/industries/law-firms',
  '/industries/real-estate',
  '/industries/finance',
  '/industries/medical',
  '/industries/manufacturing-logistics',
];

const caseStudySlugs = [
  'as-brokers',
  'alberton-battery-mart',
  'alberton-tyre-clinic',
  'maverick-painting-contractors',
  'qj-paint-world',
  'rhino-panel-beaters',
  'sakana-no-ichi',
];

const blogSlugs = [
  'the-true-cost-of-a-website-in-johannesburg',
  'freelancer-vs-agency-the-low-risk-choice-for-johannesburg',
  'the-schema-vacuum-technical-seo-advantage',
  'wix-vs-wordpress-guide-johannesburg-small-businesses',
  'how-much-does-website-cost-south-africa-2025',
];

function dedupeSitemap(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) {
      return false;
    }
    seen.add(entry.url);
    return true;
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    createEntry('/', 'weekly', 1.0),
    createEntry('/industries/manufacturing-logistics', 'weekly', 1.0),
    createEntry('/locations/meyersdal', 'weekly', 0.95),
    createEntry('/locations/new-redruth', 'weekly', 0.95),
    createEntry('/locations/sandton', 'weekly', 0.95),
    createEntry('/pricing', 'weekly', 0.95),
    createEntry('/services/google-ads', 'weekly', 0.95),
    createEntry('/services/b2b-google-ads-management', 'weekly', 0.92),
    ...mapPaths(serviceDetailPaths, 'weekly', 0.9),
    ...mapPaths(corePaths, 'weekly', 0.9),
    createEntry('/contact', 'monthly', 0.9),
    createEntry('/process', 'monthly', 0.85),
    ...mapPaths(locationPaths.filter((path) => path !== '/locations'), 'weekly', 0.9),
    ...mapPaths(industryPaths.filter((path) => path !== '/industries'), 'weekly', 0.9),
    createEntry('/alberton-business-heritage', 'monthly', 0.8),
    createEntry('/about/author/frank-smit', 'monthly', 0.8),
    createEntry('/case-studies', 'weekly', 0.85),
    ...mapPaths(
      caseStudySlugs.map((slug) => `/case-studies/${slug}`),
      'monthly',
      0.75,
    ),
    ...blogSlugs.map((slug) =>
      createEntry(
        `/blog/${slug}`,
        'weekly',
        0.7,
        new Date(BLOG_POST_DATES[slug] ?? currentDate),
      ),
    ),
    createEntry('/locations', 'weekly', 0.9),
    createEntry('/industries', 'weekly', 0.9),
    ...mapPaths(insightPaths, 'monthly', 0.75),
    ...mapPaths(comparePaths, 'monthly', 0.7),
    createEntry('/privacy-policy', 'yearly', 0.3),
    createEntry('/terms-of-service', 'yearly', 0.3),
  ];

  return dedupeSitemap(entries);
}
