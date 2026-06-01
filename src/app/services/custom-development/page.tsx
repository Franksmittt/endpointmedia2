// src/app/services/custom-development/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Custom Web Development Johannesburg | Enterprise Solutions",
    description: "Premium enterprise web development services for Johannesburg businesses. Custom solutions with CRM/ERP integration, advanced functionality, and scalable architecture. Positioned as the premium enterprise solution.",
    path: "/services/custom-development",
    keywords: [
      "custom web development johannesburg",
      "enterprise web development",
      "CRM integration johannesburg",
      "ERP integration johannesburg",
      "custom web application development",
      "enterprise website development",
      "bespoke web development",
      "scalable web development",
    ],
  });
}

const CustomDevelopmentPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/services/custom-development#service`,
    name: "Custom Web Development Services",
    description: "Premium enterprise web development with CRM/ERP integration",
    provider: {
      "@id": `${BASE_URL}/#organization`,
    },
    areaServed: {
      "@type": "City",
      name: "Johannesburg",
    },
    serviceType: "Custom Web Development",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/services/custom-development#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does custom web development take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Custom development timelines vary based on complexity. Simple applications take 4-8 weeks, while enterprise solutions with CRM/ERP integration can take 3-6 months. We provide detailed timelines during consultation.",
        },
      },
      {
        "@type": "Question",
        name: "How much does custom web development cost in Johannesburg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Custom web development ranges from R40,000 for simple applications to R500,000+ for complex enterprise solutions. We provide detailed quotes after understanding your specific requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can you integrate with our existing CRM/ERP systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We integrate with Salesforce, Microsoft Dynamics, SAP, Oracle, HubSpot, Pipedrive, and most other CRM/ERP platforms. We can also build custom APIs for proprietary systems.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies do you use for custom development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use Next.js, React, TypeScript for frontend; Node.js or Python for backend; PostgreSQL, MySQL, or MongoDB for databases; and cloud platforms like AWS, Azure, or GCP for hosting.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide ongoing maintenance and support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer maintenance packages starting at R2,000/month for bug fixes, security updates, and minor changes. Enterprise support includes priority response times and dedicated resources.",
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
            Custom Web Development: Enterprise Solutions for Johannesburg Businesses
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-zinc-400 mb-8">
            Positioned as the premium enterprise solution. When off-the-shelf solutions don&apos;t 
            cut it, we build custom web applications with CRM/ERP integration, advanced functionality, 
            and scalable architecture.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Discuss Your Custom Project
          </Link>
        </div>
      </section>

      {/* Why Custom Development Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              When Standard Solutions Don&apos;t Cut It
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">🏢 Enterprise Needs</h3>
                <p className="text-zinc-400">
                  Your business has unique requirements that off-the-shelf solutions can&apos;t 
                  accommodate. Custom development ensures every feature serves your specific needs.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">🔗 System Integration</h3>
                <p className="text-zinc-400">
                  Need seamless CRM/ERP integration? We build custom solutions that integrate 
                  perfectly with your existing business systems.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">📈 Scalability</h3>
                <p className="text-zinc-400">
                  Built to grow with your business. Our custom applications scale from startup 
                  to enterprise without costly rebuilds.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-900/35 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">⚡ Performance</h3>
                <p className="text-zinc-400">
                  Optimized for your specific use case. No bloat, no unnecessary features. Just 
                  exactly what you need, built for maximum performance.
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
              Our Custom Development Services
            </h2>
            <div className="space-y-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Custom Web Applications
                </h3>
                <p className="text-zinc-400 mb-4">
                  Built from the ground up to meet your exact requirements. Every feature, every 
                  function, every interaction is designed for your business.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Full-stack web application development</li>
                  <li>Custom API development and integration</li>
                  <li>Real-time features and WebSocket integration</li>
                  <li>Advanced user management and permissions</li>
                  <li>Custom reporting and analytics dashboards</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  CRM/ERP Integration
                </h3>
                <p className="text-zinc-400 mb-4">
                  Seamlessly connect your website with your existing business systems. We integrate 
                  with Salesforce, Microsoft Dynamics, SAP, and more.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>CRM integration (Salesforce, HubSpot, Pipedrive)</li>
                  <li>ERP integration (SAP, Microsoft Dynamics, Oracle)</li>
                  <li>Database synchronization and data mapping</li>
                  <li>Automated workflows and business logic</li>
                  <li>Real-time data synchronization</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 border-l border-teal-400/60">
                <h3 className="text-2xl font-bold mb-3 font-heading text-white">
                  Scalable Architecture
                </h3>
                <p className="text-zinc-400 mb-4">
                  Built to grow. Our custom solutions are architected for scale, ensuring your 
                  application performs flawlessly as your business grows.
                </p>
                <ul className="list-disc list-inside text-zinc-400 space-y-2">
                  <li>Microservices architecture</li>
                  <li>Cloud-native development (AWS, Azure, GCP)</li>
                  <li>Load balancing and auto-scaling</li>
                  <li>Database optimization and caching strategies</li>
                  <li>Security-first development practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-heading text-center">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="rounded-sm border border-zinc-800 bg-black/40 p-6">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">Frontend</h3>
                <ul className="text-zinc-400 space-y-2 text-sm">
                  <li>• Next.js (React)</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Progressive Web Apps</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-black/40 p-6">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">Backend</h3>
                <ul className="text-zinc-400 space-y-2 text-sm">
                  <li>• Node.js / Python</li>
                  <li>• RESTful & GraphQL APIs</li>
                  <li>• Microservices Architecture</li>
                  <li>• Serverless Functions</li>
                </ul>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-black/40 p-6">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">Database</h3>
                <ul className="text-zinc-400 space-y-2 text-sm">
                  <li>• PostgreSQL / MySQL</li>
                  <li>• MongoDB</li>
                  <li>• Redis (Caching)</li>
                  <li>• Elasticsearch</li>
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
              Frequently Asked Questions About Custom Development
            </h2>
            <div className="space-y-6">
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  How long does custom web development take?
                </h3>
                <p className="text-zinc-400">
                  Custom development timelines vary based on complexity. Simple applications take 4-8 weeks, 
                  while enterprise solutions with CRM/ERP integration can take 3-6 months. We provide 
                  detailed timelines during consultation.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  How much does custom web development cost in Johannesburg?
                </h3>
                <p className="text-zinc-400">
                  Custom web development ranges from R40,000 for simple applications to R500,000+ for 
                  complex enterprise solutions. We provide detailed quotes after understanding your 
                  specific requirements.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Can you integrate with our existing CRM/ERP systems?
                </h3>
                <p className="text-zinc-400">
                  Yes. We integrate with Salesforce, Microsoft Dynamics, SAP, Oracle, HubSpot, Pipedrive, 
                  and most other CRM/ERP platforms. We can also build custom APIs for proprietary systems.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  What technologies do you use for custom development?
                </h3>
                <p className="text-zinc-400">
                  We use Next.js, React, TypeScript for frontend; Node.js or Python for backend; 
                  PostgreSQL, MySQL, or MongoDB for databases; and cloud platforms like AWS, Azure, 
                  or GCP for hosting.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-white">
                  Do you provide ongoing maintenance and support?
                </h3>
                <p className="text-zinc-400">
                  Yes. We offer maintenance packages starting at R2,000/month for bug fixes, security 
                  updates, and minor changes. Enterprise support includes priority response times and 
                  dedicated resources.
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
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-400 mb-8">
            Discuss your custom development project with our team. We&apos;ll analyze your 
            requirements and propose a solution that fits your exact needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Discuss Your Custom Project
          </Link>
        </div>
      </section>
    </>
  );
};

export default CustomDevelopmentPage;

