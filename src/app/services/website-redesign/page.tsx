// src/app/services/website-redesign/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import InternalLinks from '@/components/seo/InternalLinks';

// METADATA: Core Money Page - Website Redesign Services
export const metadata: Metadata = {
  title: "Website Redesign Services Johannesburg | Outdated Website Transformation | Endpoint Media",
  description: "Stop losing clients to competitors with outdated websites. Endpoint Media transforms underperforming, mobile-incompatible websites into high-converting, modern assets that generate measurable ROI.",
  keywords: [
    "website redesign services johannesburg",
    "outdated website redesign",
    "underperforming website redesign",
    "mobile-incompatible website fix",
    "website transformation johannesburg",
    "modern website redesign",
    "conversion rate optimization",
    "website performance audit",
  ],
  alternates: {
    canonical: "/services/website-redesign",
  },
  openGraph: {
    title: "Website Redesign Services Johannesburg | Endpoint Media",
    description: "Transform your outdated website into a high-converting, modern asset that generates measurable ROI.",
    url: "https://endpointmedia.co.za/services/website-redesign",
    type: "website",
  },
};

const WebsiteRedesignPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://endpointmedia.co.za/services/website-redesign#service",
    name: "Website Redesign Services",
    description: "Transform outdated, underperforming websites into high-converting, modern assets",
    provider: {
      "@id": "https://endpointmedia.co.za/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "Johannesburg",
    },
    serviceType: "Website Redesign",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://endpointmedia.co.za/services/website-redesign#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a website redesign take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical website redesign takes 4-8 weeks depending on complexity. We provide a detailed timeline during your free audit, including milestones and deliverables.",
        },
      },
      {
        "@type": "Question",
        name: "Will my SEO rankings be affected during the redesign?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. We maintain all existing URLs, redirects, and SEO elements during the redesign. In fact, most clients see improved rankings due to better performance and technical SEO.",
        },
      },
      {
        "@type": "Question",
        name: "What if I need changes after the redesign is complete?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer maintenance packages starting at R500/month for updates, security patches, and minor changes. Major updates are quoted separately.",
        },
      },
      {
        "@type": "Question",
        name: "Do you redesign websites built on different platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can redesign websites built on WordPress, Wix, Squarespace, or any other platform. We typically migrate to Next.js for better performance and SEO.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a website redesign cost in Johannesburg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Website redesign costs range from R10,000 to R60,000 depending on complexity, number of pages, and required features. See our pricing page for detailed packages.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Website Redesign Services: Transform Your Outdated Site Into a Lead-Generating Asset
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Is your website outdated, underperforming, or mobile-incompatible? Stop losing clients 
            to competitors. We specialize in transforming existing websites into high-converting, 
            modern assets that generate measurable ROI.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Website Audit
          </Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Is Your Website Costing You Clients?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 border-l-4 border-red-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">❌ Outdated Design</h3>
                <p className="text-gray-700">
                  Your website looks like it was built in 2010. First impressions matter—an outdated 
                  site tells clients you don&apos;t invest in your business.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border-l-4 border-red-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">📱 Mobile-Incompatible</h3>
                <p className="text-gray-700">
                  Over 60% of traffic is mobile. If your site doesn&apos;t work on phones, you&apos;re 
                  losing more than half your potential clients.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border-l-4 border-red-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">🐌 Slow & Underperforming</h3>
                <p className="text-gray-700">
                  Slow websites kill conversions. If your site takes more than 3 seconds to load, 
                  visitors are gone—and so are your leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              How We Transform Your Website
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  1. Comprehensive Website Audit
                </h3>
                <p className="text-gray-700 mb-4">
                  We analyze your current website&apos;s performance, user experience, mobile 
                  compatibility, SEO, and conversion potential. You&apos;ll receive a detailed 
                  report with actionable recommendations.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Performance analysis (speed, Core Web Vitals)</li>
                  <li>Mobile compatibility testing</li>
                  <li>SEO audit and ranking assessment</li>
                  <li>Conversion rate analysis</li>
                  <li>Competitive analysis</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  2. Modern Design Refresh
                </h3>
                <p className="text-gray-700 mb-4">
                  We redesign your website with a modern, professional aesthetic that reflects 
                  your brand and converts visitors into leads.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Contemporary UI/UX design</li>
                  <li>Mobile-first responsive layout</li>
                  <li>Brand consistency and visual hierarchy</li>
                  <li>Conversion-optimized layouts</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  3. Performance Optimization
                </h3>
                <p className="text-gray-700 mb-4">
                  We rebuild your website on Next.js for maximum speed, ensuring fast load times 
                  and excellent Core Web Vitals scores.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Next.js-powered for blazing speed</li>
                  <li>Image optimization and lazy loading</li>
                  <li>Code minification and bundling</li>
                  <li>CDN integration</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  4. Conversion Rate Optimization
                </h3>
                <p className="text-gray-700 mb-4">
                  We optimize every element for conversion, from call-to-action buttons to lead 
                  capture forms, ensuring your website generates measurable ROI.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Strategic CTAs and form placement</li>
                  <li>A/B testing and optimization</li>
                  <li>Lead capture optimization</li>
                  <li>Analytics and goal tracking setup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Frequently Asked Questions About Website Redesign
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How long does a website redesign take?
                </h3>
                <p className="text-gray-700">
                  A typical website redesign takes 4-8 weeks depending on complexity. We provide 
                  a detailed timeline during your free audit, including milestones and deliverables.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Will my SEO rankings be affected during the redesign?
                </h3>
                <p className="text-gray-700">
                  No. We maintain all existing URLs, redirects, and SEO elements during the redesign. 
                  In fact, most clients see improved rankings due to better performance and technical SEO.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  What if I need changes after the redesign is complete?
                </h3>
                <p className="text-gray-700">
                  We offer maintenance packages starting at R500/month for updates, security patches, 
                  and minor changes. Major updates are quoted separately.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Do you redesign websites built on different platforms?
                </h3>
                <p className="text-gray-700">
                  Yes. We can redesign websites built on WordPress, Wix, Squarespace, or any other 
                  platform. We typically migrate to Next.js for better performance and SEO.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How much does a website redesign cost in Johannesburg?
                </h3>
                <p className="text-gray-700">
                  Website redesign costs range from R10,000 to R60,000 depending on complexity, 
                  number of pages, and required features. See our <Link href="/pricing" className="text-teal-600 font-semibold hover:underline">pricing page</Link> for detailed packages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links - Pillar-Cluster Model */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <InternalLinks
            title="Related Services & Resources"
            variant="default"
            links={[
              {
                href: "/services",
                title: "All Web Design Services",
                description: "Explore our complete range of web design and SEO services for Johannesburg businesses.",
              },
              {
                href: "/services/custom-development",
                title: "Custom Web Development",
                description: "Need a custom solution? We build enterprise websites with CRM/ERP integration.",
              },
              {
                href: "/locations/sandton",
                title: "Web Design Sandton",
                description: "Dominate Africa's richest square mile with a high-performance website.",
              },
              {
                href: "/industries/law-firms",
                title: "Web Design for Law Firms",
                description: "Professional websites for Johannesburg law firms that establish trust and generate leads.",
              },
              {
                href: "/pricing",
                title: "Website Design Pricing",
                description: "Transparent pricing for website redesign services in Johannesburg.",
              },
              {
                href: "/blog/the-true-cost-of-a-website-in-johannesburg",
                title: "Website Cost Guide 2025",
                description: "Complete guide to website costs in Johannesburg including hidden fees and ROI analysis.",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading">
            Ready to Transform Your Outdated Website?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Get your free website audit and discover how we can transform your site into a 
            lead-generating asset that drives measurable ROI.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Website Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default WebsiteRedesignPage;

