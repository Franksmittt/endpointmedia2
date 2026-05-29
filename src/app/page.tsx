// src/app/page.tsx
import React from 'react';
import type { Metadata } from 'next';

// Import all sections for the main landing page
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import WhoWeServe from "@/components/sections/WhoWeServe";
import Blueprint from '@/components/sections/Blueprint';
import Proof from '@/components/sections/Proof';
import Vetting from '@/components/sections/Vetting';
import Pricing from '@/components/sections/Pricing';
import Toolkit from '@/components/sections/Toolkit'; 
import Audit from '@/components/sections/Audit';
import SocialProof from '@/components/sections/SocialProof';
import { secureJsonLD, BASE_URL, buildMetadata, buildSpeakableWebPageSchema } from '@/lib/seo';

// Homepage-specific metadata (extends root layout metadata)
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Premium Web Architecture Firm Johannesburg | Endpoint Media | Market Domination Specialists",
    description: "We don't sell cheap websites. We engineer market domination through extreme focus, deep research, and uncompromising attention to detail. Selective partnership with serious businesses committed to outranking competitors and generating massive growth.",
    keywords: [
      "premium web design johannesburg",
      "high-end website development",
      "market domination strategy",
      "competitive advantage web design",
      "premium digital agency johannesburg",
      "enterprise web architecture",
    ],
  });
}

// Homepage Schema for enhanced SEO
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}#webpage`,
  name: "Web Design Johannesburg | Endpoint Media",
  description: "High-performance, lead-generating websites for Johannesburg service businesses",
  url: BASE_URL,
  mainEntity: {
    "@id": `${BASE_URL}#organization`,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
  },
};

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Endpoint Media different from other Johannesburg web design agencies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Endpoint Media engineers high-performance Next.js websites with entity-based SEO, structured data, and conversion-focused architecture—not generic template sites. Every build prioritizes Core Web Vitals, local search dominance, and measurable lead generation for Johannesburg service businesses.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a professional website cost in Johannesburg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Professional websites for Johannesburg SMEs typically range from R25,000 to R75,000 for custom Next.js architecture. Endpoint Media packages start at R25,000 and focus on ROI through speed, local SEO, and lead generation rather than per-page pricing alone.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer local SEO for Johannesburg suburbs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Endpoint Media builds hyper-local SEO architecture targeting suburbs including Sandton, Randburg, Bryanston, Meyersdal, Midrand, and Roodepoort—with location pages, LocalBusiness schema, and Google Business Profile optimization.",
      },
    },
  ],
};

const homepageSpeakableSchema = buildSpeakableWebPageSchema({
  url: BASE_URL,
  name: "Endpoint Media — Web Design Johannesburg",
  description:
    "Premium web architecture and local SEO for Johannesburg service businesses that need measurable lead generation.",
  cssSelectors: ["#hero-headline", "#hero-summary"],
});

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://www.endpointmedia.co.za/#review-1",
  itemReviewed: {
    "@type": "Service",
    name: "Endpoint Media Web Design Services",
    provider: {
      "@type": "Organization",
      name: "Endpoint Media",
    },
  },
  author: {
    "@type": "Person",
    name: "David M.",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
  reviewBody:
    "We went from obscurity on page three to the top of the Google Map Pack for 'emergency electrician Sandton'. The phone rings constantly. This isn't just a website; it's a genuine lead pipeline.",
};

const reviewSchema2 = {
  "@context": "https://schema.org",
  "@type": "Review",
  "@id": "https://www.endpointmedia.co.za/#review-2",
  itemReviewed: {
    "@type": "Service",
    name: "Endpoint Media Web Design Services",
    provider: {
      "@type": "Organization",
      name: "Endpoint Media",
    },
  },
  author: {
    "@type": "Person",
    name: "Sipho N.",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
  reviewBody:
    "I needed to get my plumbing business online properly but was completely overwhelmed. Endpoint handled everything and explained it clearly. Now I get quote requests daily through the site. Total game changer, it finally feels professional.",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(homepageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(homepageFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(homepageSpeakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(reviewSchema2) }}
      />
      <Hero />
      <Problem />
      <Solution />
      <WhoWeServe />
      <Blueprint />
      <Proof />
      <Vetting />
      <Pricing />
      <SocialProof />
      <Toolkit />
      <Audit />
    </>
  );
}