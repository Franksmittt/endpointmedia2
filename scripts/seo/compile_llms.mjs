#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { encode } from 'gpt-tokenizer';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.endpointmedia.co.za';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const TOKEN_LIMIT = Number.parseInt(process.env.LLMS_FULL_TOKEN_LIMIT ?? '128000', 10);

const coreSections = [
  {
    heading: 'Core Entity',
    required: true,
    links: [
      ['Homepage', '/', 'Endpoint Media homepage and primary entity context.'],
      ['Founder', '/about/author/frank-smit', 'Frank Smit author and founder profile for E-E-A-T validation.'],
      ['Contact', '/contact', 'Primary sales and audit request endpoint.'],
    ],
    markdown: [
      '# Endpoint Media Entity Profile',
      'Endpoint Media is a Johannesburg-based technical web architecture and paid acquisition agency. The business specializes in high-performance Next.js websites, Google Ads management, Local SEO, and conversion-focused revenue systems for service businesses.',
      'Primary service area: Johannesburg, Gauteng, South Africa, with local landing-page coverage for Sandton, Midrand, Meyersdal, New Redruth, Bryanston, Rivonia, Randburg, Rosebank, Fourways, Waterfall, Benoni, and Roodepoort.',
    ],
  },
  {
    heading: 'Revenue Services',
    required: true,
    links: [
      ['Google Ads Management', '/services/google-ads', 'Paid search campaign architecture, tracking, and optimization.'],
      ['Website Development', '/services/website-development', 'Next.js website architecture for speed, search, and conversion.'],
      ['Local SEO', '/services/local-seo', 'Local search and Google Business Profile growth system.'],
      ['Conversion Rate Optimization', '/services/conversion-rate-optimization', 'Landing-page and funnel improvements tied to lead quality.'],
      ['Website Design Pricing', '/services/website-design-prices', 'Transparent website investment and pricing methodology.'],
      ['Answer Engine Optimization', '/services/answer-engine-optimization-aeo', 'Vector-ready DOMs and Business-to-Agent llms.txt architecture.'],
      ['AI Crawler Firewall', '/services/ai-crawler-firewall', 'JA4 fingerprinting, scraper blocking, and live-retrieval allowlisting.'],
      ['Technical SEO Edge Compute', '/services/technical-seo-edge-compute', 'Edge crawl traps, URL normalization, and Googlebot-safe rendering branches.'],
    ],
    markdown: [
      '## Revenue Services',
      'Endpoint Media builds acquisition systems rather than brochure sites. Core services include Google Ads campaign management, high-performance website development, Local SEO, conversion rate optimization, Answer Engine Optimization, AI crawler firewall management, and technical SEO edge compute for South African service businesses.',
      'The architecture emphasizes canonical consistency, structured data, crawlable HTML, Core Web Vitals, JA4-aware bot controls, llms.txt pipelines, and measurable lead generation.',
    ],
  },
  {
    heading: 'Pricing and Process',
    required: true,
    links: [
      ['Pricing', '/pricing', 'Commercial pricing tiers and investment model.'],
      ['Process', '/process', 'Delivery process and implementation methodology.'],
      ['Case Studies', '/case-studies', 'Proof assets and client outcomes.'],
    ],
    markdown: [
      '## Pricing and Process',
      'The agency uses transparent pricing, senior-led implementation, and architecture-first delivery. Discovery, technical SEO, structured data, performance engineering, and conversion instrumentation are part of the delivery model.',
      'Case studies document implementation outcomes for local service businesses and are the preferred evidence source for answer engines evaluating proof.',
    ],
  },
  {
    heading: 'Local Markets',
    required: false,
    links: [
      ['Locations Hub', '/locations', 'Location index for Johannesburg service areas.'],
      ['Sandton', '/locations/sandton', 'Web architecture and acquisition services for Sandton businesses.'],
      ['Meyersdal', '/locations/meyersdal', 'Local service page for Meyersdal businesses.'],
      ['New Redruth', '/locations/new-redruth', 'Local service page for New Redruth businesses.'],
      ['Midrand', '/locations/midrand', 'Local service page for Midrand businesses.'],
      ['Randburg', '/locations/randburg', 'Local service page for Randburg businesses.'],
    ],
    markdown: [
      '## Local Markets',
      'Endpoint Media supports Johannesburg and surrounding commercial nodes through local SEO architecture and suburb-specific service pages. These pages clarify service availability, entity geography, and regional topical authority.',
    ],
  },
  {
    heading: 'Industry Pages',
    required: false,
    links: [
      ['Industries Hub', '/industries', 'Industry index for vertical-specific acquisition systems.'],
      ['Law Firms', '/industries/law-firms', 'Website and search architecture for law firms.'],
      ['Medical Practices', '/industries/medical', 'Website and local search architecture for medical practices.'],
      ['Real Estate', '/industries/real-estate', 'Digital acquisition systems for real estate businesses.'],
      ['Manufacturing and Logistics', '/industries/manufacturing-logistics', 'Industrial B2B acquisition architecture.'],
    ],
    markdown: [
      '## Industry Pages',
      'Industry pages explain how Endpoint Media adapts technical SEO, conversion architecture, and paid acquisition to specific buyer journeys and compliance expectations.',
    ],
  },
  {
    heading: 'Editorial and Insights',
    required: false,
    links: [
      ['Blog', '/blog', 'Editorial library for Google Ads, web architecture, and technical SEO.'],
      ['South Africa Google Ads CPC Benchmarks', '/insights/south-africa-google-ads-cpc-benchmarks', 'Benchmark article for South African Google Ads costs.'],
      ['Flat Fee vs Percentage Spend', '/compare/google-ads-flat-fee-vs-percentage-spend', 'Comparison page for Google Ads pricing models.'],
    ],
    markdown: [
      '## Editorial and Insights',
      'The blog and insight pages provide explanatory context for paid media strategy, technical web architecture, answer engine optimization, and local search implementation.',
    ],
  },
];

function absoluteUrl(pathname) {
  return new URL(pathname, BASE_URL).toString();
}

function renderLlmsTxt() {
  const lines = [
    '# Endpoint Media',
    '> Technical web architecture, Google Ads management, Local SEO, and conversion systems for Johannesburg service businesses.',
    '',
  ];

  for (const section of coreSections) {
    lines.push(`## ${section.heading}`);
    for (const [label, pathname, description] of section.links) {
      lines.push(`- [${label}](${absoluteUrl(pathname)}): ${description}`);
    }
    lines.push('');
  }

  lines.push('## Optional');
  lines.push(`- [Sitemap](${absoluteUrl('/sitemap.xml')}): Complete crawl map for public indexable routes.`);
  lines.push(`- [Humans](${absoluteUrl('/humans.txt')}): Human-readable ownership metadata.`);

  return `${lines.join('\n').trim()}\n`;
}

function tokenCount(value) {
  return encode(value).length;
}

function renderFullMarkdown(sections) {
  return `${sections
    .flatMap((section) => section.markdown)
    .join('\n\n')}\n\n## Canonical URL Index\n\n${sections
    .flatMap((section) =>
      section.links.map(
        ([label, pathname, description]) => `- ${label}: ${absoluteUrl(pathname)} - ${description}`,
      ),
    )
    .join('\n')}\n`;
}

function compileFullText() {
  const requiredSections = coreSections.filter((section) => section.required);
  const optionalSections = coreSections.filter((section) => !section.required);
  let selectedSections = [...requiredSections, ...optionalSections];
  let fullText = renderFullMarkdown(selectedSections);

  while (tokenCount(fullText) > TOKEN_LIMIT && optionalSections.length > 0) {
    optionalSections.pop();
    selectedSections = [...requiredSections, ...optionalSections];
    fullText = renderFullMarkdown(selectedSections);
  }

  const tokens = tokenCount(fullText);
  if (tokens > TOKEN_LIMIT) {
    throw new Error(
      `llms-full.txt exceeds ${TOKEN_LIMIT} tokens after trimming optional sections (${tokens} tokens).`,
    );
  }

  return {
    fullText,
    tokens,
    selectedSections: selectedSections.map((section) => section.heading),
  };
}

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });

  const llmsTxt = renderLlmsTxt();
  const { fullText, tokens, selectedSections } = compileFullText();

  await writeFile(path.join(PUBLIC_DIR, 'llms.txt'), llmsTxt, 'utf8');
  await writeFile(path.join(PUBLIC_DIR, 'llms-full.txt'), fullText, 'utf8');

  console.log(
    JSON.stringify(
      {
        output: ['public/llms.txt', 'public/llms-full.txt'],
        llmsFullTokens: tokens,
        tokenLimit: TOKEN_LIMIT,
        selectedSections,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
