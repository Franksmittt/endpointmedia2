// src/app/industries/finance/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Web Design for Financial Services Johannesburg | Finance Website Design",
    description: "Professional web design for Johannesburg financial advisors, accountants, and finance firms. Trust, security, and compliance-focused websites that generate qualified leads.",
    path: "/industries/finance",
    keywords: [
      "web design for financial services johannesburg",
      "financial advisor website design",
      "accountant website design johannesburg",
      "finance firm website",
      "financial services SEO",
    ],
  });
}

const FinancePage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${BASE_URL}/industries/finance#service`,
    name: "Web Design for Financial Services",
    description: "Professional web design services specifically for financial services firms",
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    serviceType: "Financial Services Website Design",
    areaServed: {
      "@type": "City",
      name: "Johannesburg",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/industries/finance#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a financial services website cost in Johannesburg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Financial services websites typically range from R20,000 to R80,000 depending on complexity, secure portal requirements, and integration with CRM/financial systems.",
        },
      },
      {
        "@type": "Question",
        name: "Are financial services websites secure and compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build websites with SSL encryption, secure client portals, and compliance with financial regulations. Security is non-negotiable for financial services.",
        },
      },
      {
        "@type": "Question",
        name: "Can you integrate with financial planning software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We integrate with financial planning tools, CRM systems, and portfolio management software. We can also build custom integrations for proprietary systems.",
        },
      },
      {
        "@type": "Question",
        name: "How do you ensure client data privacy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement end-to-end encryption, secure client portals, data encryption at rest, and comply with financial data protection regulations. Client privacy is our top priority.",
        },
      },
      {
        "@type": "Question",
        name: "Will my financial services website build trust with potential clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We showcase credentials, certifications, regulatory compliance, and testimonials. Trust signals are essential for financial services, and we optimize for them throughout your website.",
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
            Web Design for Financial Services: Trust & Compliance Online
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-8">
            Trust, security, and compliance are non-negotiable for financial services. We build 
            professional websites that establish credibility, showcase expertise, and generate qualified 
            leads for Johannesburg financial advisors, accountants, and finance firms.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Get Your Free Finance Website Audit
          </Link>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Financial Services Website Features
            </h2>
            <div className="space-y-6">
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">Secure Client Portals</h3>
                <p className="text-zinc-400 mb-4">
                  Encrypted client portals for secure document sharing, financial statements, and communication.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">Compliance & Trust Signals</h3>
                <p className="text-zinc-400 mb-4">
                  Display credentials, certifications, and regulatory compliance information to build trust with potential clients.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">Service Area Pages</h3>
                <p className="text-zinc-400 mb-4">
                  Dedicated pages for investment planning, tax preparation, retirement planning, and other financial services.
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
              Frequently Asked Questions About Financial Services Websites
            </h2>
            <div className="space-y-6">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  How much does a financial services website cost in Johannesburg?
                </h3>
                <p className="text-zinc-400">
                  Financial services websites typically range from R20,000 to R80,000 depending on 
                  complexity, secure portal requirements, and integration with CRM/financial systems.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Are financial services websites secure and compliant?
                </h3>
                <p className="text-zinc-400">
                  Yes. We build websites with SSL encryption, secure client portals, and compliance 
                  with financial regulations. Security is non-negotiable for financial services.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Can you integrate with financial planning software?
                </h3>
                <p className="text-zinc-400">
                  Yes. We integrate with financial planning tools, CRM systems, and portfolio 
                  management software. We can also build custom integrations for proprietary systems.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  How do you ensure client data privacy?
                </h3>
                <p className="text-zinc-400">
                  We implement end-to-end encryption, secure client portals, data encryption at rest, 
                  and comply with financial data protection regulations. Client privacy is our top priority.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Will my financial services website build trust with potential clients?
                </h3>
                <p className="text-zinc-400">
                  Absolutely. We showcase credentials, certifications, regulatory compliance, and 
                  testimonials. Trust signals are essential for financial services, and we optimize 
                  for them throughout your website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Establish Your Financial Services Online?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Get Your Free Finance Website Audit
          </Link>
        </div>
      </section>
      <HubSpokeLinks variant="industry" slug="finance" />
    </>
  );
};

export default FinancePage;

