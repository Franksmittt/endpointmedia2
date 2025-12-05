// src/app/services/web-design-firms/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import InternalLinks from '@/components/seo/InternalLinks';
import { buildMetadata, secureJsonLD, BASE_URL, ORG_ID } from '@/lib/seo';

// CANONICAL SLUG - Single source of truth for self-healing URLs
const CANONICAL_SLUG = 'web-design-firms';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Top Rated Web Design Firm Johannesburg | Enterprise Digital Architecture | Endpoint Media",
    description: "Beyond web design. We are a digital architecture firm engineering high-performance Next.js assets for market leaders. Server-side rendering, semantic SEO, and enterprise scalability—not WordPress templates.",
    path: `/services/${CANONICAL_SLUG}`,
    keywords: [
      "web design firms",
      "web design firm johannesburg",
      "professional web design firm",
      "top web design firms south africa",
      "enterprise web design firm",
      "digital architecture firm",
      "best web design firms",
      "web design consultancy",
    ],
  });
}

const WebDesignFirmsPage = () => {
  // ADVANCED SCHEMA: ProfessionalService (stronger than generic Organization)
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/services/${CANONICAL_SLUG}#professionalService`,
    name: "Endpoint Media - Web Design Firm",
    description: "Professional web design firm specializing in Next.js 15 enterprise development and semantic SEO engineering",
    provider: {
      "@id": ORG_ID,
    },
    areaServed: {
      "@type": "Country",
      name: "South Africa",
      sameAs: "https://www.wikidata.org/wiki/Q258",
    },
    priceRange: "$$$ - $$$$", // Premium positioning signal
    // Link to Knowledge Graph entities
    sameAs: [
      "https://en.wikipedia.org/wiki/Web_design",
      "https://www.google.com/search?kgmid=/m/081rb", // Web Development entity
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Architecture Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Next.js Enterprise Development",
            description: "Server-side rendered React applications using React Server Components for maximum SEO and performance",
            sameAs: "https://en.wikipedia.org/wiki/Next.js",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Semantic SEO Engineering",
            description: "Entity-based optimization strategies with Knowledge Graph ID linking",
            sameAs: "https://www.google.com/search?kgmid=/m/02h34t", // SEO entity
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Architecture Consulting",
            description: "Strategic technical consulting for scalable web infrastructure",
          },
        },
      ],
    },
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE_URL}/services/${CANONICAL_SLUG}#article`,
    headline: "Web Design Firms vs. Agencies: The Architecture Gap",
    description: "How professional web design firms using Next.js 15 outrank standard agencies relying on WordPress templates and keyword stuffing",
    author: {
      "@id": `${BASE_URL}/about/author/frank-smit#person`,
    },
    publisher: {
      "@id": ORG_ID,
    },
    datePublished: "2025-01-20T08:00:00Z",
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
        name: "What distinguishes a web design firm from a web design agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A web design firm is a specialized consultancy focusing on engineering, architecture, and strategic implementation of digital products using advanced technologies like Next.js 15. Agencies often prioritize marketing services and rely on WordPress templates. Firms deliver server-side rendering, semantic SEO, and enterprise scalability—not plugin-dependent solutions.",
        },
      },
      {
        "@type": "Question",
        name: "What should I look for when choosing a web design firm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choose a firm that uses server-side rendering (Next.js), achieves Core Web Vitals scores above 90, implements JSON-LD structured data with Knowledge Graph IDs, avoids template dependency with custom-engineered code, and uses scalable hosting (Vercel/AWS) rather than shared hosting. These technical indicators separate professional firms from standard agencies.",
        },
      },
      {
        "@type": "Question",
        name: "Why do professional web design firms cost more than agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional firms invest in advanced technology (Next.js Server Components), custom architecture, semantic SEO engineering, and enterprise-grade infrastructure. Agencies often use WordPress templates and plugins, resulting in slower performance, limited scalability, and higher ongoing maintenance costs. The premium reflects superior technical architecture and long-term value.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies do top web design firms use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Leading web design firms use Next.js 15 with React Server Components for zero-bundle-size server-side rendering, TypeScript for type safety, Tailwind CSS for styling, and Vercel or AWS for enterprise hosting. They avoid WordPress, plugin dependencies, and template builders, instead building custom-engineered solutions optimized for search engines and performance.",
        },
      },
      {
        "@type": "Question",
        name: "How do web design firms handle SEO differently than agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional firms use entity-based SEO with Knowledge Graph ID linking, programmatic metadata generation, and semantic HTML architecture built into the framework. Agencies rely on SEO plugins, keyword stuffing, and undefined canonical tags. Firms achieve superior crawl efficiency through server-side rendering and structured data that speaks directly to Google's entity indexing system.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a web design firm and a freelancer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Web design firms provide structured processes, multiple specialists (developers, SEO experts, designers), accountability, and enterprise-scale capabilities. Freelancers are single points of failure with limited capacity. Firms deliver consistent results using proven methodologies, while freelancer quality varies. For mission-critical projects, firms offer reliability and scalability that freelancers cannot match.",
        },
      },
    ],
  };

  // Related internal links for topical authority
  const relatedLinks = [
    {
      href: "/services/website-development",
      title: "Website Development Services",
      description: "Modern Next.js 15 development with entity-based SEO and architectural supremacy",
    },
    {
      href: "/services/custom-development",
      title: "Custom Web Development",
      description: "Enterprise solutions with CRM/ERP integration built on Next.js architecture",
    },
    {
      href: "/services/website-redesign",
      title: "Website Redesign Services",
      description: "Transform WordPress sites into high-performance Next.js assets",
    },
    {
      href: "/blog/the-schema-vacuum-technical-seo-advantage",
      title: "The Schema Vacuum: Technical SEO Advantage",
      description: "How entity-based SEO creates defensible competitive advantages",
    },
  ];

  return (
    <>
      {/* Advanced Schema Markup - ProfessionalService with Knowledge Graph IDs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(professionalServiceSchema) }}
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
                Professional Service Firm
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 font-heading">
              Beyond &ldquo;Web Design.&rdquo;
              <br />
              <span className="text-cyan-400">We Build Digital Architecture.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Most &ldquo;web design firms&rdquo; sell you WordPress templates. We engineer 
              <strong className="text-white"> commercial-grade digital architecture</strong> using Next.js 15. 
              Speed, security, and semantic authority—not plugin dependency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/27769724559?text=Hi%20Frank,%20I%20want%20to%20discuss%20professional%20web%20design%20firm%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-lg shadow-xl transition-all transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Audit Your Current Architecture
              </a>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 rounded-lg transition-all"
              >
                View Enterprise Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Position Zero: Definition Snippet - "What distinguishes a web design firm?" */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 font-heading">
              What Distinguishes a Web Design Firm from an Agency?
            </h2>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-600 p-6 rounded-r-lg mb-8">
              <p className="text-lg leading-relaxed text-gray-800">
                A <strong>Web Design Firm</strong> is a specialized consultancy that focuses on the engineering, architecture, and strategic implementation of digital products using advanced technologies like React Server Components. Whereas general agencies often prioritize marketing services and rely on WordPress templates, professional firms deliver server-side rendering, semantic SEO optimization, and enterprise scalability that ensures long-term technical superiority and search dominance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table - Position Zero for "Best web design firms comparison" */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center font-heading">
              Firm vs. Agency vs. Freelancer: The Architecture Comparison
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Professional firms use enterprise technology. Agencies use templates. Freelancers use whatever they know. Here&apos;s the difference.
            </p>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-200">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <th className="p-4 text-left font-bold font-heading">Criteria</th>
                    <th className="p-4 text-left font-bold font-heading bg-cyan-600">Professional Firm (Us)</th>
                    <th className="p-4 text-left font-bold font-heading">Standard Agency</th>
                    <th className="p-4 text-left font-bold font-heading">Freelancer / DIY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Technology Core</td>
                    <td className="p-4 text-gray-900 font-semibold bg-cyan-50">Next.js 15 (Server Components)</td>
                    <td className="p-4 text-gray-700">WordPress / PHP Templates</td>
                    <td className="p-4 text-gray-700">Wix / Squarespace / Templates</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Performance (Core Web Vitals)</td>
                    <td className="p-4 text-green-600 font-semibold bg-cyan-50">100/100 (Static Edge)</td>
                    <td className="p-4 text-orange-600">60-80 (Plugin Dependent)</td>
                    <td className="p-4 text-red-600">30-60 (Unoptimized)</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">SEO Strategy</td>
                    <td className="p-4 text-gray-900 font-semibold bg-cyan-50">Semantic Entity Injection</td>
                    <td className="p-4 text-gray-700">Keyword Stuffing / Plugins</td>
                    <td className="p-4 text-gray-700">Basic Meta Tags</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Canonical Tags</td>
                    <td className="p-4 text-green-600 font-semibold bg-cyan-50">Self-Healing & Defined</td>
                    <td className="p-4 text-red-600 font-medium">Often Undefined</td>
                    <td className="p-4 text-red-600">Missing</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Code Ownership</td>
                    <td className="p-4 text-gray-900 font-semibold bg-cyan-50">Full Ownership (Custom)</td>
                    <td className="p-4 text-gray-700">Template-Based</td>
                    <td className="p-4 text-gray-700">Platform-Locked</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Scalability</td>
                    <td className="p-4 text-gray-900 font-semibold bg-cyan-50">Enterprise Scale</td>
                    <td className="p-4 text-gray-700">Plugin Dependent</td>
                    <td className="p-4 text-gray-700">Severely Limited</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Knowledge Graph Integration</td>
                    <td className="p-4 text-gray-900 font-semibold bg-cyan-50">KGMID Linking</td>
                    <td className="p-4 text-gray-700">Basic Schema</td>
                    <td className="p-4 text-gray-700">None</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900">Total Cost of Ownership</td>
                    <td className="p-4 text-gray-900 font-semibold bg-cyan-50">Lower (Built-in Optimization)</td>
                    <td className="p-4 text-gray-700">Higher (Plugin Subscriptions)</td>
                    <td className="p-4 text-gray-700">Variable (Rebuilds Needed)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Position Zero: List Snippet - "How to choose a web design firm" */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 font-heading">
              5 Criteria for Selecting a Web Architecture Firm
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Not all firms are created equal. Use these technical indicators to separate professional digital architecture firms from standard agencies competing on price.
            </p>
            
            <ol className="space-y-6 bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">1</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Demand Server-Side Rendering</h3>
                  <p className="text-gray-700">
                    Ensure the firm uses Next.js 15 or similar frameworks with React Server Components. This delivers HTML to search engines instantly, conserving crawl budget and enabling immediate indexing. Avoid firms relying solely on client-side JavaScript or WordPress PHP rendering.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">2</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Audit Core Web Vitals Scores</h3>
                  <p className="text-gray-700">
                    Request their LCP (Largest Contentful Paint) and CLS (Cumulative Layout Shift) scores. Professional firms achieve scores above 90. Accept nothing below 85. These metrics directly impact search rankings and user experience. Firms using Next.js typically achieve 100/100 scores.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">3</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Verify Entity-Based SEO Implementation</h3>
                  <p className="text-gray-700">
                    Check that they use JSON-LD structured data with Knowledge Graph ID (KGMID) linking. This establishes entity authority beyond keyword optimization. Review their schema markup—professional firms link services to Google&apos;s Knowledge Graph, not just local business listings.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">4</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Avoid Template Dependency</h3>
                  <p className="text-gray-700">
                    Ensure the code is custom-engineered, not a recycled WordPress theme or template builder. Professional firms build from scratch using modern frameworks, resulting in unique architecture optimized for your specific needs. Templates limit customization and create duplicate content issues.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg">5</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Require Scalable Hosting Architecture</h3>
                  <p className="text-gray-700">
                    Look for Vercel, AWS, or similar enterprise hosting, not shared cPanel hosting. Professional firms use edge networks, CDN distribution, and auto-scaling infrastructure. This ensures your site performs globally and handles traffic spikes without crashing—critical for enterprise clients.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Why Firms vs Agencies - Deep Dive */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 font-heading">
              Why Professional Firms Outperform Standard Agencies
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl border-l-4 border-cyan-600 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Architecture Focus</h3>
                <p className="text-gray-700 mb-4">
                  Professional web design firms prioritize technical architecture over marketing buzzwords. They build using Next.js Server Components, ensuring zero client-side JavaScript for initial rendering. This creates faster load times, better SEO crawlability, and superior user experience.
                </p>
                <p className="text-gray-700">
                  Standard agencies often prioritize &ldquo;beautiful designs&rdquo; using WordPress themes, ignoring the technical foundation. This results in slow performance, plugin bloat, and maintenance nightmares that cost more long-term.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border-l-4 border-purple-600 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Entity-First SEO Engineering</h3>
                <p className="text-gray-700 mb-4">
                  Leading firms implement semantic SEO by linking services to Google&apos;s Knowledge Graph using entity IDs (KGMID). This tells Google <strong>exactly</strong> what entities you represent, creating defensible competitive advantages.
                </p>
                <p className="text-gray-700">
                  Agencies rely on SEO plugins that generate basic schema markup without entity linking. They compete on keyword density—an outdated strategy that Google&apos;s algorithm increasingly ignores in favor of entity understanding.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border-l-4 border-green-600 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Scalability & Ownership</h3>
                <p className="text-gray-700 mb-4">
                  Professional firms deliver full code ownership with custom-engineered solutions. Your site can scale to handle millions of visitors, integrate with enterprise systems, and adapt to future requirements without platform limitations.
                </p>
                <p className="text-gray-700">
                  Agency solutions built on WordPress require ongoing plugin subscriptions, theme updates, and often can&apos;t scale beyond medium traffic. Template-based solutions create vendor lock-in, limiting your ability to switch providers or customize beyond theme options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - Technical Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 font-heading">
              Endpoint Media: Beyond the Standard Firm
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 rounded-xl border-2 border-cyan-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Next.js 15 Architecture</h3>
                <p className="text-gray-700">
                  We build exclusively on Next.js 15 with React Server Components. This eliminates client-side JavaScript bloat, delivering HTML to search engines instantly. Our sites achieve Core Web Vitals scores of 100/100—something WordPress agencies cannot match.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Knowledge Graph Integration</h3>
                <p className="text-gray-700">
                  Every site includes deep JSON-LD schema with Knowledge Graph ID (KGMID) linking. We connect your services to Google&apos;s entity database, establishing topical authority that competitors using basic schema cannot replicate.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Self-Healing URL Architecture</h3>
                <p className="text-gray-700">
                  Our systems automatically detect URL changes and issue 301 redirects to canonical URLs, preserving domain authority permanently. This eliminates the &ldquo;undefined canonical&rdquo; errors that plague WordPress-based agencies.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border-2 border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Programmatic SEO at Scale</h3>
                <p className="text-gray-700">
                  Using Next.js dynamic routes and metadata generation, we create thousands of pages targeting zero-volume, high-intent keywords. This blue ocean strategy captures aggregate traffic from long-tail queries that competitors ignore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Position Zero Formatting */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 font-heading">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <details className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer hover:text-cyan-600 transition-colors">
                  How much does a professional web design firm cost compared to an agency?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Professional firms typically charge R25,000 to R150,000+ for enterprise projects, reflecting custom architecture and advanced technology. Standard agencies charge R5,000 to R30,000 using WordPress templates. While firms cost more initially, they deliver lower total cost of ownership due to built-in optimization, no plugin subscriptions, and superior scalability. The premium reflects technical superiority and long-term value.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer hover:text-cyan-600 transition-colors">
                  Can a web design firm migrate my existing WordPress site to Next.js?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Yes. Professional firms specialize in migrating WordPress sites to Next.js architecture. We maintain all URLs with 301 redirects, preserve SEO elements, rebuild using server-side rendering, and typically improve Core Web Vitals scores from 60-70 to 95-100. Most clients see improved rankings within 30-60 days due to better technical SEO and performance metrics.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer hover:text-cyan-600 transition-colors">
                  What is the typical timeline for a professional web design firm project?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Enterprise projects typically take 8-16 weeks depending on complexity. A custom Next.js site with 5-10 pages takes 6-10 weeks. Complex solutions with CRM integration may take 12-20 weeks. Professional firms provide detailed timelines with milestones during consultation, unlike agencies that often provide vague estimates based on template modifications.
                </p>
              </details>

              <details className="bg-white rounded-lg p-6 border-2 border-gray-200">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer hover:text-cyan-600 transition-colors">
                  Do web design firms provide ongoing maintenance and support?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Yes. Professional firms offer maintenance packages starting at R1,000/month for security updates, performance monitoring, and technical SEO audits. Unlike WordPress sites requiring constant plugin updates, Next.js sites have lower maintenance needs due to superior architecture. Firms also provide strategic consulting as your business scales.
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
              Ready to Partner with a Professional Web Design Firm?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free architecture audit. We&apos;ll analyze your current site&apos;s technical gaps and show you exactly how Next.js 15 architecture can dominate search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/27769724559?text=Hi%20Frank,%20I%20want%20a%20free%20web%20design%20firm%20architecture%20audit"
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
                View Enterprise Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking for Topical Authority */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <InternalLinks links={relatedLinks} />
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDesignFirmsPage;

