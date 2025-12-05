// src/app/services/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
  title: "Web Design & SEO Services Johannesburg | Endpoint Media",
  description: "Endpoint Media offers expert web design, local SEO, Google Ads, and website maintenance services tailored for Johannesburg service businesses seeking measurable growth.",
    path: "/services",
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
  });
}

const serviceCards = [
  {
    title: "Web Design Firm Services",
    description:
      "Professional digital architecture firm engineering Next.js enterprise solutions. Beyond templates—we build scalable digital assets.",
    href: "/services/web-design-firms",
    badge: "Enterprise",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Website Development Services",
    description:
      "Modern Next.js 15 development with entity-based SEO and architectural supremacy that outranks legacy CMS sites.",
    href: "/services/website-development",
    badge: "SEO dominance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Website Redesign Services",
    description:
      "Transform outdated, brochure-style sites into conversion-optimized, Core Web Vitals-beating revenue assets.",
    href: "/services/website-redesign",
    badge: "Conversion uplift",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.75A2.75 2.75 0 016.75 4h10.5A2.75 2.75 0 0120 6.75v10.5A2.75 2.75 0 0117.25 20H6.75A2.75 2.75 0 014 17.25V6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8M8 12h3" />
      </svg>
    ),
  },
  {
    title: "Hyper-Local SEO Sprints",
    description:
      "Dominate Sandton to Roodepoort map packs with suburb silos, GBP automation, and review accelerators.",
    href: "/services/local-seo",
    badge: "Local dominance",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a3.75 3.75 0 013.75 3.75c0 2.25-3.75 7.5-3.75 7.5s-3.75-5.25-3.75-7.5A3.75 3.75 0 0112 6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10a.5.5 0 11-.001 1.001A.5.5 0 0112 10z" />
      </svg>
    ),
  },
  {
    title: "Shopify Expert Builds",
    description:
      "Speed-to-market Shopify builds with CRO-ready layouts, Klaviyo flows, and onsite SEO baked in.",
    href: "/services/shopify-expert",
    badge: "E-commerce",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 7l-1 9.5A2.5 2.5 0 007.5 19h9a2.5 2.5 0 002.49-2.75L18 7H6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 7h12l-1-3H7L6 7z" />
      </svg>
    ),
  },
  {
    title: "Custom Development & Integrations",
    description:
      "Next.js and headless builds with CRM/ERP integrations, multi-step quoting, and bespoke dashboards.",
    href: "/services/custom-development",
    badge: "Enterprise",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8l5-5 5 5M7 16l5 5 5-5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16" />
      </svg>
    ),
  },
  {
    title: "Google Ads & Paid Search",
    description:
      "Campaign rebuilds, landing pages, and GA4 tracking to turn Google Ads into accountable, scale-ready lead flow.",
    href: "/services/google-ads",
    badge: "New",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4h2v7h-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9h2v7H6zM16 9h2v7h-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18h16" />
      </svg>
    ),
  },
  {
    title: "Facebook & Instagram Ads",
    description:
      "Offer engineering, creative, Meta CAPI tracking, and automation to turn paid social into predictable demand.",
    href: "/services/facebook-ads",
    badge: "New",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 8h1.5V6H13c-2.2 0-3.5 1.2-3.5 3.3V11H8v2h1.5v5h2.1v-5h1.7l.3-2h-2v-.6c0-.6.2-1 .9-1z" />
      </svg>
    ),
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Funnel forensics, UX fixes, and experimentation to turn existing traffic into booked calls without extra ad spend.",
    href: "/services/conversion-rate-optimization",
    badge: "New",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h4l2 6 2-12 2 6h4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "Law Firm Websites",
    description:
      "LPC/POPIA-compliant intake engines with attorney bios, practice area clusters, and automated review funnels.",
    href: "/services/law-firm-websites",
    badge: "New",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 4v10l-7 4-7-4V7l7-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.5h6M9 13h6" />
      </svg>
    ),
  },
  {
    title: "Medical & Aesthetic Websites",
    description:
      "HPCSA-ready patient journeys with booking automations, service hubs, and secure intake workflows.",
    href: "/services/medical-websites",
    badge: "New",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "Growth Rescue: CRO & Tracking",
    description:
      "Emergency sprints to fix broken funnels, analytics, and paid media—stabilise lead flow in 30 days.",
    href: "/services/growth-rescue",
    badge: "New",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Keep your site fast, secure, and updated. Ongoing maintenance packages with security updates, backups, and priority support.",
    href: "/services/website-maintenance",
    badge: "Recurring",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "Review Management & Reputation",
    description:
      "Automated review generation, professional responses, and reputation repair. Turn satisfied customers into 5-star reviews that drive bookings.",
    href: "/services/review-management",
    badge: "New",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

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
        dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {serviceCards.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition duration-300 block text-left"
              >
                <div className="w-16 h-16 mb-4 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center">
                  {service.icon}
               </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold font-heading text-gray-900 group-hover:text-teal-700 transition">
                    {service.title}
               </h3>
                  {service.badge && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 bg-teal-50 px-2 py-1 rounded-full">
                      {service.badge}
                    </span>
                  )}
               </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <span className="text-teal-600 font-semibold text-sm group-hover:underline inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
            </Link>
            ))}
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