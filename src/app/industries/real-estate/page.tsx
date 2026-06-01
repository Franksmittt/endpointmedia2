// src/app/industries/real-estate/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design for Real Estate Johannesburg | Property Website Design",
    description: "Professional web design for Johannesburg real estate agents and agencies. Property listings, IDX integration, lead capture, and local SEO optimized for real estate success.",
    path: "/industries/real-estate",
    keywords: [
      "web design for real estate johannesburg",
      "real estate website design",
      "property website design johannesburg",
      "real estate agent website",
      "IDX integration johannesburg",
      "property listings website",
    ],
  });
}

const RealEstatePage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/industries/real-estate#service`,
    name: "Web Design for Real Estate",
    description: "Professional web design services specifically for real estate agents and agencies",
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    serviceType: "Real Estate Website Design",
    areaServed: {
      "@type": "City",
      name: "Johannesburg",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/industries/real-estate#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a real estate website cost in Johannesburg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Real estate websites typically range from R20,000 to R60,000 depending on IDX integration, number of property listings, and required features like lead capture systems.",
        },
      },
      {
        "@type": "Question",
        name: "Do you integrate with MLS/IDX systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We integrate with major MLS/IDX systems to display live property listings, ensuring your website stays updated automatically with new listings.",
        },
      },
      {
        "@type": "Question",
        name: "Can you add property search and filtering features?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We build advanced property search with filters for price, location, property type, bedrooms, and more to help visitors find exactly what they're looking for.",
        },
      },
      {
        "@type": "Question",
        name: "Will my real estate website work on mobile devices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every real estate website we build is mobile-first and responsive, ensuring property listings look perfect on phones, tablets, and desktops. Most property searches happen on mobile.",
        },
      },
      {
        "@type": "Question",
        name: "How do you capture leads from property listings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement lead capture forms on property pages, saved search functionality, newsletter signups, and inquiry forms. All leads are automatically forwarded to your email and CRM if integrated.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }}
      />

      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-heading">
            Web Design for Real Estate: Property Success Online
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-8">
            Property listings, IDX integration, lead capture, and local SEO optimized for Johannesburg 
            real estate agents and agencies. We build websites that showcase properties and generate qualified leads.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Get Your Free Real Estate Website Audit
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Real Estate Website Features
            </h2>
            <div className="space-y-6">
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">Property Listings</h3>
                <p className="text-zinc-400 mb-4">
                  Beautiful property galleries with search, filters, and detailed listings that convert browsers into buyers.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">IDX Integration</h3>
                <p className="text-zinc-400 mb-4">
                  Integrate with your MLS/IDX system to display live property listings and keep your site updated automatically.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">Lead Capture</h3>
                <p className="text-zinc-400 mb-4">
                  Property inquiry forms, saved searches, and newsletter signups to capture and nurture leads effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Frequently Asked Questions About Real Estate Websites
            </h2>
            <div className="space-y-6">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  How much does a real estate website cost in Johannesburg?
                </h3>
                <p className="text-zinc-400">
                  Real estate websites typically range from R20,000 to R60,000 depending on IDX 
                  integration, number of property listings, and required features like lead capture systems.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Do you integrate with MLS/IDX systems?
                </h3>
                <p className="text-zinc-400">
                  Yes. We integrate with major MLS/IDX systems to display live property listings, 
                  ensuring your website stays updated automatically with new listings.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Can you add property search and filtering features?
                </h3>
                <p className="text-zinc-400">
                  Absolutely. We build advanced property search with filters for price, location, 
                  property type, bedrooms, and more to help visitors find exactly what they&apos;re looking for.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Will my real estate website work on mobile devices?
                </h3>
                <p className="text-zinc-400">
                  Yes. Every real estate website we build is mobile-first and responsive, ensuring 
                  property listings look perfect on phones, tablets, and desktops. Most property 
                  searches happen on mobile.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  How do you capture leads from property listings?
                </h3>
                <p className="text-zinc-400">
                  We implement lead capture forms on property pages, saved search functionality, 
                  newsletter signups, and inquiry forms. All leads are automatically forwarded to 
                  your email and CRM if integrated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Showcase Your Properties Online?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Real Estate Website Audit
          </Link>
        </div>
      </section>
      <HubSpokeLinks variant="industry" slug="real-estate" />
    </>
  );
};

export default RealEstatePage;

