// src/app/services/custom-development/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";

// METADATA: Core Money Page - Custom Development Services
export const metadata: Metadata = {
  title: "Custom Web Development Johannesburg | Enterprise Solutions | Endpoint Media",
  description: "Premium enterprise web development services for Johannesburg businesses. Custom solutions with CRM/ERP integration, advanced functionality, and scalable architecture. Positioned as the premium enterprise solution.",
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
  alternates: {
    canonical: "/services/custom-development",
  },
  openGraph: {
    title: "Custom Web Development Johannesburg | Endpoint Media",
    description: "Premium enterprise web development services with CRM/ERP integration and advanced functionality.",
    url: "https://endpointmedia.co.za/services/custom-development",
    type: "website",
  },
};

const CustomDevelopmentPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://endpointmedia.co.za/services/custom-development#service",
    name: "Custom Web Development Services",
    description: "Premium enterprise web development with CRM/ERP integration",
    provider: {
      "@id": "https://endpointmedia.co.za/#organization",
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
    "@id": "https://endpointmedia.co.za/services/custom-development#faq",
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
            Custom Web Development: Enterprise Solutions for Johannesburg Businesses
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-8">
            Positioned as the premium enterprise solution. When off-the-shelf solutions don&apos;t 
            cut it, we build custom web applications with CRM/ERP integration, advanced functionality, 
            and scalable architecture.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Discuss Your Custom Project
          </Link>
        </div>
      </section>

      {/* Why Custom Development Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              When Standard Solutions Don&apos;t Cut It
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">🏢 Enterprise Needs</h3>
                <p className="text-gray-700">
                  Your business has unique requirements that off-the-shelf solutions can&apos;t 
                  accommodate. Custom development ensures every feature serves your specific needs.
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">🔗 System Integration</h3>
                <p className="text-gray-700">
                  Need seamless CRM/ERP integration? We build custom solutions that integrate 
                  perfectly with your existing business systems.
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">📈 Scalability</h3>
                <p className="text-gray-700">
                  Built to grow with your business. Our custom applications scale from startup 
                  to enterprise without costly rebuilds.
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-8 border-l-4 border-teal-600">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">⚡ Performance</h3>
                <p className="text-gray-700">
                  Optimized for your specific use case. No bloat, no unnecessary features—just 
                  exactly what you need, built for maximum performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Our Custom Development Services
            </h2>
            <div className="space-y-6 mb-12">
              <div className="bg-white rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Custom Web Applications
                </h3>
                <p className="text-gray-700 mb-4">
                  Built from the ground up to meet your exact requirements. Every feature, every 
                  function, every interaction is designed for your business.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Full-stack web application development</li>
                  <li>Custom API development and integration</li>
                  <li>Real-time features and WebSocket integration</li>
                  <li>Advanced user management and permissions</li>
                  <li>Custom reporting and analytics dashboards</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  CRM/ERP Integration
                </h3>
                <p className="text-gray-700 mb-4">
                  Seamlessly connect your website with your existing business systems. We integrate 
                  with Salesforce, Microsoft Dynamics, SAP, and more.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>CRM integration (Salesforce, HubSpot, Pipedrive)</li>
                  <li>ERP integration (SAP, Microsoft Dynamics, Oracle)</li>
                  <li>Database synchronization and data mapping</li>
                  <li>Automated workflows and business logic</li>
                  <li>Real-time data synchronization</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 border-l-4 border-teal-500">
                <h3 className="text-2xl font-bold mb-3 font-heading text-gray-900">
                  Scalable Architecture
                </h3>
                <p className="text-gray-700 mb-4">
                  Built to grow. Our custom solutions are architected for scale, ensuring your 
                  application performs flawlessly as your business grows.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Technology Stack
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">Frontend</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Next.js (React)</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Progressive Web Apps</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">Backend</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• Node.js / Python</li>
                  <li>• RESTful & GraphQL APIs</li>
                  <li>• Microservices Architecture</li>
                  <li>• Serverless Functions</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">Database</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
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
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Frequently Asked Questions About Custom Development
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How long does custom web development take?
                </h3>
                <p className="text-gray-700">
                  Custom development timelines vary based on complexity. Simple applications take 4-8 weeks, 
                  while enterprise solutions with CRM/ERP integration can take 3-6 months. We provide 
                  detailed timelines during consultation.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How much does custom web development cost in Johannesburg?
                </h3>
                <p className="text-gray-700">
                  Custom web development ranges from R40,000 for simple applications to R500,000+ for 
                  complex enterprise solutions. We provide detailed quotes after understanding your 
                  specific requirements.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Can you integrate with our existing CRM/ERP systems?
                </h3>
                <p className="text-gray-700">
                  Yes. We integrate with Salesforce, Microsoft Dynamics, SAP, Oracle, HubSpot, Pipedrive, 
                  and most other CRM/ERP platforms. We can also build custom APIs for proprietary systems.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  What technologies do you use for custom development?
                </h3>
                <p className="text-gray-700">
                  We use Next.js, React, TypeScript for frontend; Node.js or Python for backend; 
                  PostgreSQL, MySQL, or MongoDB for databases; and cloud platforms like AWS, Azure, 
                  or GCP for hosting.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Do you provide ongoing maintenance and support?
                </h3>
                <p className="text-gray-700">
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
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading">
            Ready to Build Your Custom Solution?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
            Discuss your custom development project with our team. We&apos;ll analyze your 
            requirements and propose a solution that fits your exact needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-12 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider"
          >
            Discuss Your Custom Project
          </Link>
        </div>
      </section>
    </>
  );
};

export default CustomDevelopmentPage;

