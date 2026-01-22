// src/app/sitemap.ts
import { MetadataRoute } from 'next';

// Use environment variable if available, fallback to hardcoded value
// CRITICAL: Always use www version (www.endpointmedia.co.za) as canonical
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.endpointmedia.co.za';
const currentDate = new Date();

type ChangeFrequency = NonNullable<
  MetadataRoute.Sitemap[number]['changeFrequency']
>;

const createEntry = (
  path: string,
  changeFrequency: ChangeFrequency,
  priority: number,
): MetadataRoute.Sitemap[number] => {
  // Ensure path doesn't have trailing slash (matching next.config.mjs trailingSlash: false)
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  return {
    url: cleanPath === '' ? baseUrl : `${baseUrl}${cleanPath}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  };
};

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
  '/services/web-design-firms', // High priority: Target keyword page
  '/services/website-development', // High priority: Target keyword page
  '/services/website-design-prices', // High priority: Target keyword page
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
  '/locations/meyersdal', // The Executive Fortress - HIGH PRIORITY
  '/locations/new-redruth', // The Professional Hub - HIGH PRIORITY
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
  '/industries/manufacturing-logistics', // The Alrode Cash Cow - HIGH PRIORITY
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
  // Ensure all pages are included and properly prioritized
  return [
    // 1. Highest Priority: Homepage
    createEntry('/', 'weekly', 1.0),
    
    // 2. High Priority: The "Money" Pages - High-intent conversion pages
    createEntry('/industries/manufacturing-logistics', 'weekly', 1.0), // The Alrode Cash Cow
    createEntry('/locations/meyersdal', 'weekly', 0.95), // The Executive Fortress
    createEntry('/locations/new-redruth', 'weekly', 0.95), // The Professional Hub
    createEntry('/locations/sandton', 'weekly', 0.95),
    createEntry('/pricing', 'weekly', 0.95),
    
    // 3. High Priority: Core Service Pages - Primary revenue drivers
    ...mapPaths(serviceDetailPaths, 'weekly', 0.9),
    
    // 4. High Priority: Core Navigation Pages
    ...mapPaths(corePaths, 'weekly', 0.9),
    createEntry('/contact', 'monthly', 0.9),
    createEntry('/process', 'monthly', 0.85),
    
    // 5. High Priority: Location Pages - Local SEO goldmines
    ...mapPaths(locationPaths.filter(path => path !== '/locations'), 'weekly', 0.9),
    
    // 6. High Priority: Industry Pages - Vertical targeting
    ...mapPaths(industryPaths.filter(path => path !== '/industries'), 'weekly', 0.9),
    
    // 7. Medium Priority: Trust & Authority Pages
    createEntry('/alberton-business-heritage', 'monthly', 0.8), // The Link Magnet
    createEntry('/about/author/frank-smit', 'monthly', 0.8), // The E-E-A-T Anchor
    createEntry('/case-studies', 'weekly', 0.85),
    
    // 8. Medium Priority: Case Study Detail Pages
    ...mapPaths(
      caseStudySlugs.map((slug) => `/case-studies/${slug}`),
      'monthly',
      0.75,
    ),
    
    // 9. Medium Priority: Blog Posts - Content marketing
    ...mapPaths(blogSlugs.map((slug) => `/blog/${slug}`), 'weekly', 0.7),
    
    // 10. Lower Priority: Index Pages (already covered in corePaths)
    // Note: /locations and /industries are already included in locationPaths and industryPaths
  ];
}

