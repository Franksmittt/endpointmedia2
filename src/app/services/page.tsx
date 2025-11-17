// src/app/services/page.tsx
import React from 'react';
import Link from 'next/link';

// METADATA: Core service page with clear local intent - Enhanced for SEO dominance
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design & SEO Services Johannesburg | Endpoint Media",
  description: "Endpoint Media offers expert web design, local SEO, Google Ads, and website maintenance services tailored for Johannesburg service businesses seeking measurable growth.",
  keywords: [
    "web design johannesburg",
    "local SEO services johannesburg",
    "google ads johannesburg",
    "website maintenance johannesburg",
    "web development johannesburg",
    "hyper-local SEO johannesburg",
    "lead generation website johannesburg",
    "website redesign johannesburg",
    "shopify expert johannesburg",
    "custom web development johannesburg",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Web Design & SEO Services Johannesburg | Endpoint Media",
    description: "Endpoint Media offers expert web design, local SEO, Google Ads, and website maintenance services tailored for Johannesburg service businesses seeking measurable growth.",
    url: "https://endpointmedia.co.za/services",
    type: "website",
  },
};

const ServicesPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://endpointmedia.co.za/services#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Endpoint Media offer for Johannesburg businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer website design and redesign, e-commerce development (Shopify), custom web development, hyper-local SEO, Google Business Profile optimization, and website maintenance services specifically for Johannesburg service businesses.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with businesses in all Johannesburg suburbs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We serve businesses across Johannesburg including Sandton, Rosebank, Bryanston, Randburg, Rivonia, Midrand, Roodepoort, Fourways, Waterfall, Benoni, and all surrounding areas.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Endpoint Media different from other web design agencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We combine technical excellence (Next.js, performance optimization) with deep local SEO expertise. We're not an agency with overhead—we're a dedicated expert focused on your ROI. Every website we build includes advanced schema markup, hyper-local SEO, and conversion optimization.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to see results from local SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Local SEO typically shows initial results within 2-3 months, with significant improvements in 4-6 months. Results depend on competition, current rankings, and consistency of optimization efforts.",
        },
      },
      {
        "@type": "Question",
        name: "Can you redesign my existing website without losing SEO rankings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We maintain all URLs, redirects, and SEO elements during redesigns. In fact, most clients see improved rankings due to better performance, technical SEO, and mobile optimization.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section for Services */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Digital Solutions Engineered for Johannesburg Growth
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            We provide a focused suite of services designed to transform your online presence from a cost center into a powerful revenue-generating asset for your Johannesburg service business.
          </p>
        </div>
      </section>

      {/* Main Services Overview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
              Our Core Service Offerings
            </h2>
            <p className="text-lg text-gray-600">
              Select a service below to learn how we help Johannesburg businesses like yours achieve market dominance.
            </p>
          </header>

          {/* Grid of Services (Example Structure) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Service 1: Website Redesign */}
            <Link href="/services/website-redesign" className="group p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 text-center block">
               {/* Placeholder Icon */}
               <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
               </div>
               <h3 className="text-xl font-bold font-heading mb-2 text-gray-800 group-hover:text-teal-700 transition">
                 Website Redesign Services
               </h3>
               <p className="text-gray-600 text-sm mb-4">
                 Transform outdated, underperforming websites into high-converting, modern assets that generate ROI.
               </p>
               <span className="text-teal-600 font-semibold text-sm group-hover:underline">Learn More →</span>
            </Link>

            {/* Service 2: Local SEO */}
            <div className="group p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 text-center">
               {/* Placeholder Icon */}
               <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
               </div>
               <h3 className="text-xl font-bold font-heading mb-2 text-gray-800 group-hover:text-teal-700 transition">
                 Hyper-Local SEO
               </h3>
               <p className="text-gray-600 text-sm mb-4">
                 Dominate Google Maps and local search results across Johannesburg for your specific services.
               </p>
            </div>

             {/* Service 3: Shopify Expert */}
            <Link href="/services/shopify-expert" className="group p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 text-center block">
               {/* Placeholder Icon */}
               <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
               </div>
               <h3 className="text-xl font-bold font-heading mb-2 text-gray-800 group-hover:text-teal-700 transition">
                 Shopify Expert
               </h3>
               <p className="text-gray-600 text-sm mb-4">
                 Speed-to-market e-commerce solutions. Professional Shopify stores that generate revenue from day one.
               </p>
               <span className="text-teal-600 font-semibold text-sm group-hover:underline">Learn More →</span>
            </Link>

             {/* Service 4: Custom Development */}
            <Link href="/services/custom-development" className="group p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 text-center block">
               {/* Placeholder Icon */}
               <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
               </div>
               <h3 className="text-xl font-bold font-heading mb-2 text-gray-800 group-hover:text-teal-700 transition">
                 Custom Development
               </h3>
               <p className="text-gray-600 text-sm mb-4">
                 Premium enterprise solutions with CRM/ERP integration and scalable architecture for unique needs.
               </p>
               <span className="text-teal-600 font-semibold text-sm group-hover:underline">Learn More →</span>
            </Link>

          </div>

           {/* Call to Action */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold font-heading mb-4 text-gray-800">Ready to Transform Your Online Presence?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">Let&apos;s discuss how our tailored digital solutions can drive real growth for your Johannesburg business.</p>
            <Link
              href="/contact" 
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 focus-visible:ring-teal-500"
            >
              Get Your Free Growth Audit
            </Link>
          </div>

        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Frequently Asked Questions About Our Services
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  What services does Endpoint Media offer for Johannesburg businesses?
                </h3>
                <p className="text-gray-700">
                  We offer website design and redesign, e-commerce development (Shopify), custom web 
                  development, hyper-local SEO, Google Business Profile optimization, and website 
                  maintenance services specifically for Johannesburg service businesses.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Do you work with businesses in all Johannesburg suburbs?
                </h3>
                <p className="text-gray-700">
                  Yes. We serve businesses across Johannesburg including Sandton, Rosebank, Bryanston, 
                  Randburg, Rivonia, Midrand, Roodepoort, Fourways, Waterfall, Benoni, and all 
                  surrounding areas.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  What makes Endpoint Media different from other web design agencies?
                </h3>
                <p className="text-gray-700">
                  We combine technical excellence (Next.js, performance optimization) with deep local 
                  SEO expertise. We&apos;re not an agency with overhead—we&apos;re a dedicated expert 
                  focused on your ROI. Every website we build includes advanced schema markup, 
                  hyper-local SEO, and conversion optimization.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How long does it take to see results from local SEO?
                </h3>
                <p className="text-gray-700">
                  Local SEO typically shows initial results within 2-3 months, with significant 
                  improvements in 4-6 months. Results depend on competition, current rankings, and 
                  consistency of optimization efforts.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Can you redesign my existing website without losing SEO rankings?
                </h3>
                <p className="text-gray-700">
                  Yes. We maintain all URLs, redirects, and SEO elements during redesigns. In fact, 
                  most clients see improved rankings due to better performance, technical SEO, and 
                  mobile optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;