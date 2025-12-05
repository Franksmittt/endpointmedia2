// src/app/services/website-design-prices/layout.tsx
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL, ORG_ID } from '@/lib/seo';

const CANONICAL_SLUG = 'website-design-prices';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Website Design Prices South Africa 2025 | Transparent Pricing & ROI Calculator | Endpoint Media",
    description: "Website design prices in South Africa: R15,000-R150,000. Don't compare page counts—calculate ROI. Interactive calculator shows how Next.js architecture delivers superior value vs WordPress templates. Transparent pricing, zero hidden costs.",
    path: `/services/${CANONICAL_SLUG}`,
    keywords: [
      "website design prices",
      "website design prices south africa",
      "website design cost johannesburg",
      "how much does a website cost",
      "website pricing",
      "affordable website design",
      "website design packages",
      "website development prices",
      "cost of website south africa",
    ],
  });
}

export default function WebsiteDesignPricesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // PriceSpecification Schema for Rich Snippets - Server-side only
  const priceSpecificationSchema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "@id": `${BASE_URL}/services/${CANONICAL_SLUG}#priceSpecification`,
    priceCurrency: "ZAR",
    minPrice: "15000",
    maxPrice: "150000",
    name: "Custom Web Architecture Development",
    description: "Server-side rendered Next.js development with semantic SEO optimization and Knowledge Graph integration",
    valueAddedTaxIncluded: true,
    eligibleRegion: {
      "@type": "Country",
      name: "South Africa",
      sameAs: "https://www.wikidata.org/wiki/Q258",
    },
    provider: {
      "@id": ORG_ID,
    },
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE_URL}/services/${CANONICAL_SLUG}#article`,
    headline: "Website Design Prices South Africa 2025: The True Cost of Digital Assets",
    description: "Understanding website design prices goes beyond page counts. Learn how Next.js architecture delivers superior ROI compared to WordPress templates, with transparent pricing for enterprise digital assets.",
    author: {
      "@id": `${BASE_URL}/about/author/frank-smit#person`,
    },
    publisher: {
      "@id": ORG_ID,
    },
    datePublished: "2025-01-25T08:00:00Z",
    dateModified: "2025-01-25T08:00:00Z", // Fixed date to prevent hydration issues
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/services/${CANONICAL_SLUG}`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/services/${CANONICAL_SLUG}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the average cost of a website in South Africa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website costs in South Africa range from R2,500 for basic template sites to R150,000+ for enterprise Next.js solutions. The average small business website costs R15,000-R45,000. However, the true cost includes ongoing maintenance, hosting, and lost revenue from poor performance. A Next.js site at R35,000 with zero maintenance often outperforms a R15,000 WordPress site that requires R500/month maintenance plus lost conversions due to slow load times.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a 5-page website cost in South Africa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A 5-page website costs R5,000-R15,000 for template-based sites, or R25,000-R45,000 for custom Next.js architecture. However, pricing by page count is outdated. Modern pricing should reflect technical architecture, SEO optimization, and performance. A 5-page Next.js site with entity-based SEO and sub-second load times delivers superior ROI compared to a 10-page WordPress template site.",
        },
      },
      {
        "@type": "Question",
        name: "What factors actually affect website design prices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Three factors determine true website pricing: 1) Rendering Engine (Next.js Server Components vs. WordPress PHP), 2) Entity Density (Knowledge Graph ID linking vs. keyword stuffing), and 3) Self-Healing Architecture (automatic redirects and sitemap management). Cheap sites prioritize page count; premium sites prioritize technical architecture that drives search rankings and conversions.",
        },
      },
      {
        "@type": "Question",
        name: "Why do Next.js websites cost more than WordPress sites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Next.js websites cost more upfront (R25,000-R150,000) because they require custom engineering, server-side rendering optimization, and semantic SEO architecture. WordPress sites cost less initially (R5,000-R30,000) but require ongoing plugin subscriptions, maintenance fees, and often lose revenue due to slow performance. The total cost of ownership over 3 years often favors Next.js due to zero maintenance needs and superior conversion rates from faster load times.",
        },
      },
      {
        "@type": "Question",
        name: "What is the hourly rate for web developers in South Africa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Web developer hourly rates in South Africa range from R200-R600 depending on expertise. Junior developers charge R200-R300/hour, mid-level R300-R450/hour, and senior Next.js/React specialists charge R450-R600/hour. Agencies typically quote fixed project fees rather than hourly rates. For a professional Next.js site, expect R35,000-R75,000 as a fixed project fee rather than hourly billing.",
        },
      },
      {
        "@type": "Question",
        name: "What hidden costs should I consider when budgeting for a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hidden website costs include: hosting (R100-R1,000/month), domain renewal (R200/year), SSL certificates, plugin subscriptions (R50-R500/month), security updates, performance optimization, and lost revenue from slow load times. WordPress sites accumulate these costs monthly. Next.js sites have minimal ongoing costs due to built-in optimization and static hosting. Factor in 3-year total cost of ownership, not just initial build price.",
        },
      },
    ],
  };

  return (
    <>
      {/* Advanced Schema Markup - Server-side only to prevent hydration issues */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(priceSpecificationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }}
      />
      {children}
    </>
  );
}

