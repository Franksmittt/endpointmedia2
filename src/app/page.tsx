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
import { secureJsonLD, BASE_URL, buildMetadata } from '@/lib/seo';

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

// This is the core Page Router file, assembling the modular sections
export default function HomePage() {
  return (
    <>
      {/* Homepage Schema Markup - Secured with XSS protection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(homepageSchema) }}
      />
      <main id="main-content">
        {/* Assemble the sections in order */}
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
      </main>
    </>
  );
}