// src/app/services/shopify-expert/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Shopify Expert Johannesburg | E-commerce Website Development",
    description: "Need an e-commerce store fast? Our Shopify expert services deliver speed-to-market e-commerce solutions for Johannesburg businesses. Professional, conversion-optimized stores that generate revenue.",
    path: "/services/shopify-expert",
    keywords: [
      "shopify expert johannesburg",
      "shopify developer johannesburg",
      "e-commerce website johannesburg",
      "shopify store setup johannesburg",
      "online store development johannesburg",
      "e-commerce website design",
      "shopify customization johannesburg",
    ],
  });
}

const ShopifyExpertPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services/shopify-expert#service`,
    name: "Shopify Expert Services",
    description: "Professional e-commerce website development using Shopify",
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: "Johannesburg",
    },
    serviceType: "E-commerce Development",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/services/shopify-expert#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to set up a Shopify store?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A typical Shopify store setup takes 2-4 weeks depending on complexity. We can launch a basic store faster if needed, but recommend taking time for proper optimization.",
        },
      },
      {
        "@type": "Question",
        name: "How much does a Shopify store cost in Johannesburg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shopify store development ranges from R13,000 to R35,000 for basic stores, and R35,000+ for advanced stores with custom features. This excludes monthly Shopify subscription fees.",
        },
      },
      {
        "@type": "Question",
        name: "Can you migrate my existing store to Shopify?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can migrate products, customers, and order history from WooCommerce, Wix, Squarespace, or other platforms to Shopify.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle Shopify app integrations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We integrate payment gateways (PayFast, PayGate), shipping providers, inventory management, CRM systems, and marketing automation tools.",
        },
      },
      {
        "@type": "Question",
        name: "Will my Shopify store be optimized for SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We optimize product pages, collections, and content for search engines. Every Shopify store we build includes technical SEO, schema markup, and local SEO optimization.",
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 font-heading">
            Shopify Expert Johannesburg: Speed-to-Market E-commerce Solutions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-8">
            Need an e-commerce store fast? With 20% Y/Y growth in South African e-commerce, now is 
            the time to launch. Our Shopify expert services deliver professional, conversion-optimized 
            stores that generate revenue from day one.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Launch Your Shopify Store
          </Link>
        </div>
      </section>

      {/* Why Shopify Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Why Choose Shopify for Your E-commerce Store?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">⚡ Speed-to-Market</h3>
                <p className="text-zinc-400">
                  Launch your e-commerce store in weeks, not months. Shopify&apos;s platform enables 
                  rapid deployment while maintaining professional quality.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">💳 Built-in Payment Processing</h3>
                <p className="text-zinc-400">
                  Accept payments from day one with Shopify Payments or integrate with South African 
                  payment gateways like PayFast and PayGate.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">📱 Mobile-Optimized</h3>
                <p className="text-zinc-400">
                  Every Shopify store is mobile-first. Your customers can shop seamlessly on any device, 
                  maximizing conversions.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">🔒 Secure & Scalable</h3>
                <p className="text-zinc-400">
                  Shopify handles security, hosting, and updates. Scale from startup to enterprise 
                  without worrying about infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Our Shopify Expert Services
            </h2>
            <div className="space-y-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Complete Shopify Store Setup
                </h3>
                <p className="text-zinc-400 mb-4">
                  We handle everything from store configuration to theme customization, ensuring 
                  your store is ready to sell from launch day.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Store configuration and setup</li>
                  <li>Custom theme development</li>
                  <li>Product catalog import and organization</li>
                  <li>Payment gateway integration</li>
                  <li>Shipping and tax configuration</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Conversion Optimization
                </h3>
                <p className="text-zinc-400 mb-4">
                  We optimize every element of your store for maximum conversions, from product 
                  pages to checkout flow.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Product page optimization</li>
                  <li>Checkout flow optimization</li>
                  <li>Cart abandonment strategies</li>
                  <li>A/B testing and optimization</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Custom App Integration
                </h3>
                <p className="text-zinc-400 mb-4">
                  Need custom functionality? We integrate third-party apps and build custom solutions 
                  to meet your specific business needs.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Inventory management integration</li>
                  <li>CRM integration</li>
                  <li>Marketing automation setup</li>
                  <li>Custom app development</li>
                </ul>
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
              Frequently Asked Questions About Shopify Development
            </h2>
            <div className="space-y-6">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  How long does it take to set up a Shopify store?
                </h3>
                <p className="text-zinc-400">
                  A typical Shopify store setup takes 2-4 weeks depending on complexity. We can launch 
                  a basic store faster if needed, but recommend taking time for proper optimization.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  How much does a Shopify store cost in Johannesburg?
                </h3>
                <p className="text-zinc-400">
                  Shopify store development ranges from R13,000 to R35,000 for basic stores, and 
                  R35,000+ for advanced stores with custom features. This excludes monthly Shopify 
                  subscription fees (R149 - R299/month).
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Can you migrate my existing store to Shopify?
                </h3>
                <p className="text-zinc-400">
                  Yes. We can migrate products, customers, and order history from WooCommerce, Wix, 
                  Squarespace, or other platforms to Shopify. We handle the entire migration process 
                  to ensure no data loss.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Do you handle Shopify app integrations?
                </h3>
                <p className="text-zinc-400">
                  Yes. We integrate payment gateways (PayFast, PayGate), shipping providers, inventory 
                  management systems, CRM platforms, and marketing automation tools. We also build 
                  custom apps when needed.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Will my Shopify store be optimized for SEO?
                </h3>
                <p className="text-zinc-400">
                  Absolutely. We optimize product pages, collections, and content for search engines. 
                  Every Shopify store we build includes technical SEO, schema markup, and local SEO 
                  optimization for Johannesburg businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
            Ready to Launch Your E-commerce Store?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-8">
            With South African e-commerce growing 20% year-over-year, there&apos;s no better time 
            to launch. Get started with a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Launch Your Shopify Store
          </Link>
        </div>
      </section>
    </>
  );
};

export default ShopifyExpertPage;

