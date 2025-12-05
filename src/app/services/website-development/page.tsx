// src/app/services/website-development/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import InternalLinks from '@/components/seo/InternalLinks';
import { buildMetadata, secureJsonLD, BASE_URL, ORG_ID } from '@/lib/seo';

// CANONICAL SLUG - Single source of truth for self-healing URLs
const CANONICAL_SLUG = 'website-development';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Website Development Services Johannesburg | Next.js 15 & Modern Architecture | Endpoint Media",
    description: "Expert website development using Next.js 15 and semantic entity engineering. We build high-performance web assets that dominate search results through architectural supremacy, not keyword stuffing.",
    path: `/services/${CANONICAL_SLUG}`,
    keywords: [
      "website development johannesburg",
      "website development services",
      "modern website development",
      "Next.js development johannesburg",
      "web development company johannesburg",
      "custom website development",
      "semantic web development",
      "entity-based SEO development",
    ],
  });
}

const WebsiteDevelopmentPage = () => {
  // ADVANCED SCHEMA: Entity-First with Knowledge Graph IDs
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services/${CANONICAL_SLUG}#service`,
    name: "Website Development Services",
    description: "Modern website development using Next.js 15, Server Components, and semantic entity engineering for superior search visibility",
    provider: {
      "@id": ORG_ID,
    },
    areaServed: {
      "@type": "City",
      name: "Johannesburg",
      sameAs: "https://www.wikidata.org/wiki/Q1754", // Wikidata entity ID for Johannesburg
    },
    serviceType: "Website Development",
    // Link to Google's Knowledge Graph entity for Web Development
    sameAs: [
      "https://en.wikipedia.org/wiki/Web_development",
      "https://www.google.com/search?kgmid=/m/081rb", // Google's Knowledge Graph ID for Web Development
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Next.js 15 Development",
            description: "Server-side rendered web applications using React Server Components",
            sameAs: "https://en.wikipedia.org/wiki/Next.js",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Semantic SEO Development",
            description: "Entity-based indexing and Knowledge Graph optimization",
            sameAs: "https://www.google.com/search?kgmid=/m/02h34t", // SEO entity ID
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Core Web Vitals Optimization",
            description: "Performance engineering for LCP, CLS, and INP metrics",
          },
        },
      ],
    },
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE_URL}/services/${CANONICAL_SLUG}#article`,
    headline: "Modern Website Development: Architectural Supremacy Over Legacy CMS",
    description: "How Next.js 15 and entity-based SEO outrank traditional WordPress sites through technical superiority",
    author: {
      "@id": `${BASE_URL}/about/author/frank-smit#person`,
    },
    publisher: {
      "@id": ORG_ID,
    },
    datePublished: "2025-01-15T08:00:00Z",
    dateModified: new Date().toISOString(),
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
        name: "What is modern website development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modern website development is the process of engineering web applications using server-side rendering technologies like Next.js 15 to ensure maximum performance, crawlability, and semantic indexing. Unlike traditional CMS platforms, it prioritizes entity-based SEO, Core Web Vitals optimization, and architectural supremacy over keyword stuffing.",
        },
      },
      {
        "@type": "Question",
        name: "How does Next.js 15 compare to WordPress for business websites?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Next.js 15 uses React Server Components for instant HTML delivery, eliminating plugin bloat and delivering LCP scores under 1 second. WordPress relies on client-side JavaScript and PHP, resulting in slower performance, undefined canonical tags, and limited semantic SEO capabilities. Next.js also enables entity-first optimization through programmatic metadata and structured data.",
        },
      },
      {
        "@type": "Question",
        name: "What is entity-based SEO and why does it matter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Entity-based SEO focuses on semantic indexing and Knowledge Graph connection rather than keyword density. Google now indexes pages as documents containing recognized entities (people, places, organizations) and their relationships. We link your services to Google's Knowledge Graph IDs (KGMID) to establish topical authority and outperform competitors using outdated keyword strategies.",
        },
      },
      {
        "@type": "Question",
        name: "How long does modern website development take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modern website development typically takes 4-12 weeks depending on complexity. A simple business website with Next.js 15 can launch in 4-6 weeks, while enterprise solutions with CRM integration may take 8-12 weeks. We provide detailed timelines during your free architecture audit.",
        },
      },
      {
        "@type": "Question",
        name: "What is the cost of website development in Johannesburg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Modern website development costs range from R15,000 for basic Next.js sites to R150,000+ for enterprise solutions with custom integrations. Unlike WordPress sites that require ongoing plugin subscriptions and maintenance, Next.js sites have lower total cost of ownership due to superior architecture and performance.",
        },
      },
      {
        "@type": "Question",
        name: "Will my website be SEO optimized from day one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every Next.js site we build includes automatic metadata generation, structured data with Knowledge Graph IDs, Core Web Vitals optimization, and semantic HTML architecture. This is built into the framework, not added via plugins, ensuring superior crawlability and search visibility from launch.",
        },
      },
    ],
  };

  // Related internal links for topical authority
  const relatedLinks = [
    {
      href: "/services/website-redesign",
      title: "Website Redesign Services",
      description: "Transform outdated WordPress sites into high-performance Next.js assets",
    },
    {
      href: "/services/custom-development",
      title: "Custom Web Development",
      description: "Enterprise solutions with CRM/ERP integration and custom dashboards",
    },
    {
      href: "/services/local-seo",
      title: "Local SEO Services",
      description: "Semantic local SEO for Johannesburg businesses using entity optimization",
    },
    {
      href: "/blog/the-schema-vacuum-technical-seo-advantage",
      title: "The Schema Vacuum: Technical SEO Advantage",
      description: "How entity-based SEO creates defensible competitive advantages",
    },
  ];

  return (
    <>
      {/* Advanced Schema Markup - Entity-First with Knowledge Graph IDs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }}
      />

      {/* Hero Section - Optimized for LCP */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6 inline-block">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                Architectural Supremacy
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 font-heading">
              Website Development Services
              <br />
              <span className="text-cyan-400">Built for Search Dominance</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We engineer high-performance web assets using <strong className="text-white">Next.js 15</strong> and <strong className="text-white">semantic entity optimization</strong>. 
              Not keyword stuffing. Not plugin bloat. Pure architectural superiority that outranks legacy WordPress sites.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/27769724559?text=Hi%20Frank,%20I%20want%20to%20discuss%20website%20development%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Get Architecture Audit
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 rounded-lg transition-all"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Position Zero: Definition Snippet - "What is Modern Website Development?" */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 font-heading">
              What is Modern Website Development?
            </h2>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-600 p-6 rounded-r-lg mb-8">
              <p className="text-lg leading-relaxed text-gray-800">
                Modern website development is the process of engineering web applications using server-side rendering technologies like <strong>Next.js 15</strong> to ensure maximum performance and crawlability. Unlike traditional CMS platforms, it prioritizes <strong>semantic HTML</strong>, <strong>entity-based indexing</strong>, and <strong>Core Web Vitals optimization</strong> to achieve superior search engine visibility and user conversion rates. This architectural approach transforms websites from mere content containers into structured, machine-readable entities that search engines understand inherently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table - Position Zero for "WordPress vs Next.js" */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center font-heading">
              WordPress vs. Next.js 15: The Architecture Gap
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Legacy CMS platforms rely on outdated SEO tactics. Modern frameworks leverage architectural superiority for search dominance.
            </p>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-200">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="p-4 text-left font-bold font-heading">Feature</th>
                    <th className="p-4 text-left font-bold font-heading">Legacy (WordPress/CMS)</th>
                    <th className="p-4 text-left font-bold font-heading bg-cyan-600">Modern (Next.js 15)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Rendering Strategy</td>
                    <td className="p-4 text-gray-700">Client-Side JavaScript / Heavy PHP</td>
                    <td className="p-4 text-gray-900 font-semibold">React Server Components (Zero JS)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">SEO Approach</td>
                    <td className="p-4 text-gray-700">Keyword Stuffing / Plugin-Based</td>
                    <td className="p-4 text-gray-900 font-semibold">Entity & Semantic Indexing</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Performance (LCP)</td>
                    <td className="p-4 text-gray-700">3-5 seconds (Plugin Bloat)</td>
                    <td className="p-4 text-gray-900 font-semibold">&lt;1 second (Optimized)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Canonical Tags</td>
                    <td className="p-4 text-red-600 font-medium">Often Undefined / Broken</td>
                    <td className="p-4 text-green-600 font-semibold">Self-Referencing & Self-Healing</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Structured Data</td>
                    <td className="p-4 text-gray-700">Basic / Missing KGMID Links</td>
                    <td className="p-4 text-gray-900 font-semibold">Deep JSON-LD with Knowledge Graph IDs</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Schema Implementation</td>
                    <td className="p-4 text-gray-700">Plugin-Dependent / Static</td>
                    <td className="p-4 text-gray-900 font-semibold">Programmatic / Dynamic</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Crawl Efficiency</td>
                    <td className="p-4 text-gray-700">Low (Heavy JS Execution)</td>
                    <td className="p-4 text-gray-900 font-semibold">High (Pre-Rendered HTML)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Total Cost of Ownership</td>
                    <td className="p-4 text-gray-700">High (Plugin Subscriptions, Maintenance)</td>
                    <td className="p-4 text-gray-900 font-semibold">Low (Built-in Optimization)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Entity-First Optimization Explanation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 font-heading">
              Entity-First Optimization: Beyond Keywords
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Google&apos;s ranking algorithm has transitioned to an <strong className="text-gray-900">Entity-First model</strong>. It no longer indexes pages primarily as &ldquo;bags of words,&rdquo; but as documents containing recognized entities (people, places, organizations, concepts) and the relationships between them.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Old SEO (Legacy CMS)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Keyword frequency optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Repeating &ldquo;Johannesburg&rdquo; 50+ times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>No Knowledge Graph connection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <span>Undefined canonical tags</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">New SEO (Next.js 15)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Entity-based semantic indexing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Knowledge Graph ID (KGMID) linking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Structured data with sameAs properties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Self-healing canonical architecture</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Establish Entity Authority</h3>
              <p className="text-gray-700 mb-4">
                We explicitly link your services to Google&apos;s Knowledge Graph using entity IDs. For example:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">•</span>
                  <span><strong>Web Development</strong> → Linked to KGMID <code className="bg-white px-2 py-1 rounded text-sm">/m/081rb</code></span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">•</span>
                  <span><strong>Johannesburg</strong> → Linked to Wikidata <code className="bg-white px-2 py-1 rounded text-sm">Q1754</code></span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 font-bold mr-3">•</span>
                  <span><strong>SEO</strong> → Linked to KGMID <code className="bg-white px-2 py-1 rounded text-sm">/m/02h34t</code></span>
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                This tells Google <strong>exactly</strong> what entities you represent, creating defensible competitive advantages that legacy CMS sites cannot replicate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zero-Volume Keyword Strategy */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 font-heading">
              Advanced Solutions for High-Scale Web Assets
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              While competitors target high-volume keywords, we exploit <strong className="text-gray-900">zero-volume, high-intent queries</strong> that traditional SEO tools miss.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automated Internal Linking</h3>
                <p className="text-gray-700">
                  We utilize <strong>TF-IDF algorithms</strong> to mathematically calculate relevance between pages, ensuring your link equity flows efficiently without manual plugins or guesswork. This creates topic clusters that establish topical authority.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Healing Architecture</h3>
                <p className="text-gray-700">
                  Our systems automatically detect URL changes and issue <strong>301 redirects</strong> to canonical URLs, preserving your domain authority permanently. This eliminates the &ldquo;undefined canonical&rdquo; errors that plague legacy CMS sites.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Core Web Vitals Engineering</h3>
                <p className="text-gray-700">
                  Every site is optimized for <strong>LCP &lt;1s</strong>, <strong>CLS &lt;0.1</strong>, and <strong>INP &lt;200ms</strong>. We use Next.js Image optimization, server-side rendering, and Partytown for third-party scripts to achieve scores that legacy platforms cannot match.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Programmatic SEO at Scale</h3>
                <p className="text-gray-700">
                  Using Next.js dynamic routes and metadata generation, we create thousands of pages targeting <strong>zero-volume, high-intent keywords</strong> that competitors ignore. This blue ocean strategy captures aggregate traffic from long-tail queries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 font-heading">
              Technical Architecture: Built for Search Dominance
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-cyan-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Server Components & Crawl Efficiency</h3>
                <p className="text-gray-700 mb-4">
                  Next.js 15 uses <strong>React Server Components (RSC)</strong> by default. This means content is pre-rendered as HTML on the server, sent to search engines instantly, and requires zero client-side JavaScript for rendering. This conserves crawl budget and ensures immediate indexing.
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>HTML delivered in initial HTTP response (no JS execution required)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Streaming and Suspense boundaries for critical content first</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-600 mr-2">•</span>
                    <span>Time to First Byte (TTFB) under 200ms</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Metadata API: Programmatic SEO</h3>
                <p className="text-gray-700 mb-4">
                  Next.js 15&apos;s Metadata API runs on the server and dynamically generates meta tags, eliminating title duplication and ensuring every page has proper canonical tags. Unlike WordPress plugins, this is built into the framework.
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Automatic canonical tag generation (self-referencing)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Open Graph and Twitter Card optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    <span>Dynamic metadata based on content (no manual management)</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Knowledge Graph Integration</h3>
                <p className="text-gray-700 mb-4">
                  We implement deep JSON-LD schema with <code className="bg-gray-100 px-2 py-1 rounded text-sm">sameAs</code> properties linking to Google&apos;s Knowledge Graph IDs (KGMID) and Wikidata entities. This explicitly establishes your entity authority.
                </p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Organization schema linked to Knowledge Graph</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>Service schema with entity relationships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span>FAQPage schema for featured snippets</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Position Zero: List Snippet - "How to Choose" */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 font-heading">
              How to Choose the Right Website Development Approach
            </h2>
            
            <ol className="space-y-6 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Assess Your SEO Requirements</h3>
                  <p className="text-gray-700">
                    If you need to rank for competitive keywords and establish topical authority, Next.js 15 with entity-based SEO provides architectural advantages that WordPress plugins cannot replicate. Legacy CMS platforms rely on keyword density, while modern frameworks use semantic indexing.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Evaluate Performance Needs</h3>
                  <p className="text-gray-700">
                    Core Web Vitals are ranking factors. If your site loads in 3-5 seconds (typical WordPress), you&apos;re losing rankings to faster competitors. Next.js Server Components deliver sub-second LCP scores, directly impacting search visibility.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Consider Total Cost of Ownership</h3>
                  <p className="text-gray-700">
                    WordPress sites require plugin subscriptions (SEO plugins, security, caching), hosting optimization, and constant maintenance. Next.js sites have lower ongoing costs due to built-in optimization and superior architecture.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Plan for Scalability</h3>
                  <p className="text-gray-700">
                    As your business grows, you&apos;ll need more pages, better performance, and deeper SEO. Next.js enables programmatic SEO at scale through dynamic routes and automated metadata generation. WordPress sites become slower and harder to manage as they grow.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold mr-4">5</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Audit Current Technical SEO</h3>
                  <p className="text-gray-700">
                    Request a free architecture audit. We&apos;ll analyze your current site&apos;s canonical tags, schema implementation, Core Web Vitals, and entity optimization. This reveals gaps that competitors are exploiting and opportunities for immediate improvements.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ Section - Position Zero Formatting */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 font-heading">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <details className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer hover:text-cyan-600 transition-colors">
                  What technologies do you use for website development?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  We use <strong>Next.js 15</strong> with React Server Components, TypeScript for type safety, and Tailwind CSS for styling. For backend, we use Node.js or Python depending on requirements. All sites are hosted on Vercel or AWS for optimal performance and global CDN distribution.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer hover:text-cyan-600 transition-colors">
                  Can you migrate my existing WordPress site to Next.js?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Yes. We migrate content, maintain URLs with 301 redirects, preserve SEO elements, and rebuild using Next.js architecture. Most clients see improved performance and rankings within 30-60 days due to better technical SEO and Core Web Vitals scores.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer hover:text-cyan-600 transition-colors">
                  How do you ensure my site ranks quickly?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  We implement entity-based SEO from day one, linking services to Knowledge Graph IDs. Server-side rendering ensures immediate crawlability. Structured data with FAQPage schema targets featured snippets. Internal linking uses TF-IDF algorithms for optimal authority distribution. Combined with Core Web Vitals optimization, these create ranking advantages that compound over time.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer hover:text-cyan-600 transition-colors">
                  Do you provide ongoing maintenance and updates?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Yes. We offer maintenance packages starting at R500/month that include security updates, performance monitoring, content updates, and technical SEO audits. Unlike WordPress sites that require constant plugin updates, Next.js sites have lower maintenance needs due to superior architecture.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading">
              Ready to Outrank Legacy CMS Sites?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free architecture audit. We&apos;ll analyze your current site&apos;s technical SEO gaps and show you exactly how Next.js 15 can dominate search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/27769724559?text=Hi%20Frank,%20I%20want%20a%20free%20website%20development%20architecture%20audit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Get Free Architecture Audit
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 rounded-lg transition-all"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking for Topical Authority */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <InternalLinks links={relatedLinks} />
          </div>
        </div>
      </section>
    </>
  );
};

export default WebsiteDevelopmentPage;

