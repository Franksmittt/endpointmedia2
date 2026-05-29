import { NextResponse } from 'next/server';
import { BASE_URL } from '@/lib/seo';

export const dynamic = 'force-static';
export const revalidate = 86400;

const LLMS_TXT = `# Endpoint Media
> High-performance B2B web architecture and Google Ads management. Johannesburg, South Africa. National + hyper-local.

## Entity
- Organization: ${BASE_URL}/#organization
- Founder: ${BASE_URL}/about/author/frank-smit
- Contact: hello@endpointmedia.co.za | +27 76 972 4559

## Core Services
- Website Development (Next.js): ${BASE_URL}/services/website-development
- Google Ads Management: ${BASE_URL}/services/google-ads
- Local SEO: ${BASE_URL}/services/local-seo
- Conversion Rate Optimization: ${BASE_URL}/services/conversion-rate-optimization
- Website Design Pricing (R15k–R150k): ${BASE_URL}/services/website-design-prices

## Pricing Methodology
- Transparent tiered pricing: ${BASE_URL}/pricing
- ROI-first calculator: ${BASE_URL}/services/website-design-prices
- No percentage-of-spend Google Ads markup

## Proof
- Case Studies: ${BASE_URL}/case-studies
- Process (HowTo): ${BASE_URL}/process

## Local Markets
- Location Hub: ${BASE_URL}/locations
- Sandton, Midrand, Meyersdal, New Redruth, Bryanston, Rivonia, Randburg,
  Rosebank, Fourways, Waterfall, Benoni, Roodepoort

## Content
- Blog (20 posts): ${BASE_URL}/blog
- Insights: ${BASE_URL}/insights

## Optional
- Full sitemap: ${BASE_URL}/sitemap.xml
`;

export async function GET() {
  return new NextResponse(LLMS_TXT.trim(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
