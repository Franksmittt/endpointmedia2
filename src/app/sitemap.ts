import { MetadataRoute } from 'next';
import { BLOG_POST_DATES, getAllSlugs } from '@/lib/blog/posts';

export const revalidate = 86400;

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.endpointmedia.co.za';
const currentDate = new Date();

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]['changeFrequency']
>;

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
  '/services/algorithmic-google-ads-trading',
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
  '/services/answer-engine-optimization-aeo',
  '/services/ai-crawler-firewall',
  '/services/technical-seo-edge-compute',
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

function dedupeSitemap(entries: MetadataRoute.Sitemap): MetadataRoute.Sitemap {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSlugs = await getAllSlugs();

  const entries: MetadataRoute.Sitemap = [
    createEntry('/', 'weekly', 1.0),
    createEntry('/services/google-ads', 'weekly', 0.92),
    createEntry('/pricing', 'weekly', 0.9),
    createEntry('/store', 'weekly', 0.88),
    createEntry('/services/b2b-google-ads-management', 'weekly', 0.88),
    createEntry('/blog', 'weekly', 0.85),
    createEntry('/industries/manufacturing-logistics', 'weekly', 0.86),
    createEntry('/locations/meyersdal', 'weekly', 0.86),
    createEntry('/locations/new-redruth', 'weekly', 0.86),
    createEntry('/locations/sandton', 'weekly', 0.86),
    ...mapPaths(serviceDetailPaths, 'weekly', 0.82),
    ...mapPaths(corePaths.filter((p) => p !== '/blog'), 'weekly', 0.85),
    createEntry('/contact', 'monthly', 0.8),
    createEntry('/process', 'monthly', 0.78),
    ...mapPaths(locationPaths.filter((path) => path !== '/locations'), 'weekly', 0.8),
    ...mapPaths(industryPaths.filter((path) => path !== '/industries'), 'weekly', 0.78),
    createEntry('/alberton-business-heritage', 'monthly', 0.8),
    createEntry('/about/author/frank-smit', 'monthly', 0.8),
    createEntry('/case-studies', 'weekly', 0.8),
    ...mapPaths(
      caseStudySlugs.map((slug) => `/case-studies/${slug}`),
      'monthly',
      0.72,
    ),
    ...blogSlugs.map((slug) => {
      const isCornerstone = BLOG_POST_DATES[slug]?.startsWith('2026');
      return createEntry(
        `/blog/${slug}`,
        'weekly',
        isCornerstone ? 0.76 : 0.64,
        new Date(BLOG_POST_DATES[slug] ?? currentDate),
      );
    }),
    createEntry('/locations', 'weekly', 0.82),
    createEntry('/industries', 'weekly', 0.78),
    ...mapPaths(insightPaths, 'monthly', 0.7),
    ...mapPaths(comparePaths, 'monthly', 0.66),
    createEntry('/privacy-policy', 'yearly', 0.3),
    createEntry('/terms-of-service', 'yearly', 0.3),
  ];

  return dedupeSitemap(entries);
}
