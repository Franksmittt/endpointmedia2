// src/app/locations/sandton/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL, buildLocationLocalBusinessSchema, WIKIDATA } from '@/lib/seo';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design Sandton | Website Design Services Sandton",
    description: "Professional web design and local SEO services for Sandton businesses. Dominate Africa's richest square mile with a high-performance, lead-generating website. Free audit available.",
    path: "/locations/sandton",
    keywords: [
      "web design sandton",
      "website design sandton",
      "local SEO sandton",
      "web developer sandton",
      "website redesign sandton",
      "shopify expert sandton",
      "web design sandton CBD",
      "website design sandton city",
      "local SEO services sandton",
      "lead generation website sandton",
      "google business profile sandton",
      "hyper-local SEO sandton",
    ],
  });
}

const SandtonPage = () => {
  // JSON-LD Schema for Sandton location page
  const locationSchema = buildLocationLocalBusinessSchema({
    slug: 'sandton',
    label: 'Sandton',
    latitude: -26.1076,
    longitude: 28.0567,
    wikidataUrl: WIKIDATA.sandton,
    serviceRadiusKm: 10,
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${BASE_URL}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Sandton",
        item: `${BASE_URL}/locations/sandton`,
      },
    ],
  };

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(locationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(breadcrumbSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="border-b border-zinc-800 bg-black py-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-zinc-500">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/locations" className="hover:text-white transition">
                Locations
              </Link>
            </li>
            <li>/</li>
            <li className="text-white font-semibold">Sandton</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section - Hyper-Local for Sandton */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-heading">
            Web Design Sandton: Dominate Africa&apos;s Richest Square Mile
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-8">
            Stop losing Sandton clients to competitors with outdated websites. Endpoint Media builds 
            high-performance, lead-generating websites specifically engineered for Sandton businesses 
            seeking market dominance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Get Your Free Sandton Audit
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-8 py-4 text-base font-semibold text-zinc-100 transition-colors hover:bg-zinc-900"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Why Sandton Businesses Choose Endpoint Media */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Why Sandton Businesses Trust Endpoint Media
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  🏆 Financial Hub Expertise
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Sandton is Africa&apos;s financial capital, home to the JSE and major corporate headquarters. 
                  We understand the sophisticated needs of Sandton businesses. Trust, professionalism, and 
                  measurable ROI are non-negotiable.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  🎯 Hyper-Local SEO Domination
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  When Sandton customers search for your services, we ensure you appear first. Our 
                  hyper-local SEO strategy targets Sandton CBD, Sandton City, Nelson Mandela Square, 
                  and surrounding landmarks.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  ⚡ Performance-Optimized
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Sandton professionals don&apos;t have time for slow websites. We engineer blazing-fast, 
                  mobile-first websites that convert visitors into leads, backed by Next.js and Core 
                  Web Vitals optimization.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-4 font-heading text-white">
                  📈 Measurable ROI
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  We don&apos;t build online brochures. We build lead-generating assets. Every Sandton 
                  website we create is designed to generate measurable business results, from increased 
                  bookings to higher conversion rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sandton Service Areas */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Sandton Service Areas We Cover
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Sandton CBD</h3>
                <p className="text-zinc-500 text-sm">
                  Financial district, corporate headquarters, JSE
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Sandton City</h3>
                <p className="text-zinc-500 text-sm">
                  Shopping precinct, retail businesses, restaurants
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Nelson Mandela Square</h3>
                <p className="text-zinc-500 text-sm">
                  Iconic landmark, high-end retail, hospitality
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <Link href="/locations/rivonia" className="block group">
                  <h3 className="text-xl font-bold mb-2 font-heading text-white group-hover:text-teal-400/90 transition-colors">Rivonia Road</h3>
                  <p className="text-zinc-500 text-sm">
                    Office parks, professional services, tech companies
                  </p>
                </Link>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Grayson Drive</h3>
                <p className="text-zinc-500 text-sm">
                  Mixed-use developments, medical practices, consulting
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-bold mb-2 font-heading text-white">Benmore Gardens</h3>
                <p className="text-zinc-500 text-sm">
                  Residential services, local businesses, community-focused
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Sandton Businesses */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Services Designed for Sandton Success
            </h2>
            <div className="space-y-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Website Design & Development
                </h3>
                <p className="text-zinc-400 mb-4">
                  Custom, high-performance websites engineered for Sandton businesses. From financial 
                  services to legal firms, we build websites that reflect your professionalism and 
                  generate leads.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Mobile-first responsive design</li>
                  <li>Next.js-powered for maximum speed</li>
                  <li>Custom branding and UI/UX design</li>
                  <li>Lead capture forms and integrations</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Hyper-Local SEO for Sandton
                </h3>
                <p className="text-zinc-400 mb-4">
                  Dominate Google Maps and local search results for Sandton. Our hyper-local SEO 
                  strategy ensures you rank for searches like &quot;web design Sandton&quot;, 
                  &quot;lawyer Sandton CBD&quot;, or &quot;accountant Sandton City&quot;.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Google Business Profile optimization</li>
                  <li>Local citation building</li>
                  <li>Landmark-inclusive content strategy</li>
                  <li>Schema markup for local SEO</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Website Redesign Services
                </h3>
                <p className="text-zinc-400 mb-4">
                  Is your Sandton website outdated, underperforming, or mobile-incompatible? We 
                  specialize in transforming existing websites into high-converting, modern assets 
                  that generate measurable ROI.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Performance audits and recommendations</li>
                  <li>Modern design refresh</li>
                  <li>Mobile compatibility fixes</li>
                  <li>Conversion rate optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Dominate Sandton&apos;s Digital Landscape?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-8">
            Join the Sandton businesses that have transformed their online presence with Endpoint Media. 
            Get your free audit and discover how we can help you dominate Africa&apos;s richest square mile.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500"
          >
            Get Your Free Sandton Audit
          </Link>
        </div>
      </section>
      <HubSpokeLinks variant="location" slug="sandton" />
    </>
  );
};

export default SandtonPage;

