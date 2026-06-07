// src/app/page.tsx
import React from 'react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const revalidate = 86400;

// Import all sections for the main landing page
import AgencyHeroSection from '@/components/sections/AgencyHeroSection';
import ProofBar from '@/components/sections/ProofBar';
import SymptomSection from '@/components/sections/SymptomSection';
import MethodologySection from '@/components/sections/MethodologySection';
import GoogleAdsSection from '@/components/sections/GoogleAdsSection';
import Pricing from '@/components/sections/Pricing';
import FitSection from '@/components/sections/FitSection';
import FounderLetterSection from '@/components/sections/FounderLetterSection';
import FinalCtaSection from '@/components/sections/FinalCtaSection';
import { secureJsonLD, BASE_URL, buildMetadata, buildSpeakableWebPageSchema } from '@/lib/seo';

const Audit = dynamic(() => import('@/components/sections/Audit'), {
  loading: () => <div className="min-h-[480px] animate-pulse bg-zinc-950/40" />,
});

// Homepage-specific metadata (extends root layout metadata)
export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Premium Web Architecture Firm Johannesburg | Market Domination Specialists",
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
  name: "Web Design Johannesburg",
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
        text: "Endpoint Media engineers high-performance Next.js websites with entity-based SEO, structured data, and conversion-focused architecture. Not generic template sites. Every build prioritizes Core Web Vitals, local search dominance, and measurable lead generation for Johannesburg service businesses.",
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
        text: "Yes. Endpoint Media builds hyper-local SEO architecture targeting suburbs including Sandton, Randburg, Bryanston, Meyersdal, Midrand, and Roodepoort. With location pages, LocalBusiness schema, and Google Business Profile optimization.",
      },
    },
  ],
};

const homepageSpeakableSchema = buildSpeakableWebPageSchema({
  url: BASE_URL,
  name: "Endpoint Media , Web Design Johannesburg",
  description:
    "Premium web architecture and local SEO for Johannesburg service businesses that need measurable lead generation.",
  cssSelectors: ["#hero-headline", "#hero-summary"],
});

export default function HomePage() {
  return (
    <div className="bg-black text-zinc-300">
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
      <AgencyHeroSection />
      <ProofBar />
      <SymptomSection />
      <MethodologySection />
      <GoogleAdsSection />
      <FitSection />
      <FounderLetterSection />
      <Pricing />
      <FinalCtaSection />
      <Audit />
    </div>
  );
}