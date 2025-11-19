// src/app/sitemap.ts
import { MetadataRoute } from 'next';

const baseUrl = 'https://endpointmedia.co.za';
const currentDate = new Date();

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]['changeFrequency']
>;

const createEntry = (
  path: string,
  changeFrequency: ChangeFrequency,
  priority: number,
): MetadataRoute.Sitemap[number] => ({
  url: path === '/' ? baseUrl : `${baseUrl}${path}`,
  lastModified: currentDate,
  changeFrequency,
  priority,
});

const mapPaths = (
  paths: string[],
  changeFrequency: ChangeFrequency,
  priority: number,
) => paths.map((path) => createEntry(path, changeFrequency, priority));

const corePaths = ['/services', '/case-studies', '/blog'];

const secondaryCoreConfigs = [
  { path: '/pricing', changeFrequency: 'monthly' as ChangeFrequency, priority: 0.9 },
  { path: '/contact', changeFrequency: 'monthly' as ChangeFrequency, priority: 0.8 },
  { path: '/process', changeFrequency: 'monthly' as ChangeFrequency, priority: 0.7 },
];

const serviceDetailPaths = [
  '/services/website-redesign',
  '/services/shopify-expert',
  '/services/custom-development',
  '/services/law-firm-websites',
  '/services/medical-websites',
  '/services/growth-rescue',
  '/services/local-seo',
  '/services/google-ads',
  '/services/facebook-ads',
  '/services/conversion-rate-optimization',
  '/services/website-maintenance',
  '/services/review-management',
];

const locationPaths = [
  '/locations',
  '/locations/sandton',
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
];

const caseStudySlugs = [
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

const mapConfigs = (
  configs: { path: string; changeFrequency: ChangeFrequency; priority: number }[],
) =>
  configs.map(({ path, changeFrequency, priority }) =>
    createEntry(path, changeFrequency, priority),
  );

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    createEntry('/', 'weekly', 1),
    ...mapPaths(corePaths, 'weekly', 0.9),
    ...mapConfigs(secondaryCoreConfigs),
    ...mapPaths(serviceDetailPaths, 'weekly', 0.95),
    ...mapPaths(locationPaths, 'weekly', 0.9),
    ...mapPaths(industryPaths, 'weekly', 0.9),
    ...mapPaths(
      caseStudySlugs.map((slug) => `/case-studies/${slug}`),
      'monthly',
      0.7,
    ),
    ...mapPaths(blogSlugs.map((slug) => `/blog/${slug}`), 'weekly', 0.75),
    createEntry('/about/author/frank-smit', 'monthly', 0.8),
  ];
}

