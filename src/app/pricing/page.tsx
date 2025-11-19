// src/app/pricing/page.tsx
import React from 'react';
import type { Metadata } from "next";
import Link from 'next/link';
import { buildMetadata, secureJsonLD, BASE_URL } from "@/lib/seo";
import SocialProof from "@/components/sections/SocialProof";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: "Website Design Pricing Johannesburg | Endpoint Media Packages",
    description: "Transparent website design and SEO package pricing for Johannesburg service businesses. Explore our Foundation, Growth Engine, and Market Leader options for clear ROI.",
    path: "/pricing",
    keywords: [
      "website design pricing johannesburg",
      "web design packages south africa",
      "local seo pricing joburg",
      "small business website cost",
      "affordable web design johannesburg",
    ],
  });
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/pricing#service`,
  name: "Endpoint Media Website & Local SEO Packages",
  description: "Once-off website design and local SEO implementation packages engineered for Johannesburg service businesses.",
  provider: {
    "@id": `${BASE_URL}#organization`,
  },
  areaServed: {
    "@type": "City",
    name: "Johannesburg",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website & Local SEO Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Foundation",
        price: "5500",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
        url: `${BASE_URL}/pricing#foundation`,
      },
      {
        "@type": "Offer",
        name: "Growth Engine",
        price: "10000",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
        url: `${BASE_URL}/pricing#growth-engine`,
      },
      {
        "@type": "Offer",
        name: "Market Leader",
        price: "15000",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
        url: `${BASE_URL}/pricing#market-leader`,
      },
    ],
  },
};

const PricingPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://endpointmedia.co.za/pricing#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in the website design packages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All packages include custom website design, mobile-responsive layout, local SEO setup, hosting for 1 year, domain registration, and contact form integration. Higher packages include more pages, advanced SEO features, and additional functionality.",
        },
      },
      {
        "@type": "Question",
        name: "Are there any hidden costs or monthly fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No hidden costs. The package price is a once-off fee. After the first year, hosting and domain renewal costs approximately R200-R500 per month. Optional maintenance packages are available starting at R500/month.",
        },
      },
      {
        "@type": "Question",
        name: "Can I upgrade from Foundation to Growth Engine later?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer upgrade paths. You'll pay the difference between packages plus a small migration fee. However, choosing the right package upfront saves time and money.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to build my website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Foundation packages typically take 2-3 weeks, Growth Engine takes 4-6 weeks, and Market Leader takes 6-8 weeks. Timelines depend on content readiness and feedback speed.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide hosting and domain registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All packages include 1 year of free essential hosting and domain name registration. After the first year, you'll pay approximately R200-R500/month for continued hosting and domain renewal.",
        },
      },
      {
        "@type": "Question",
        name: "What if I need changes after my website is built?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Minor changes are included during the build phase. After launch, we offer maintenance packages starting at R500/month for updates, security patches, and minor content changes. Major updates are quoted separately.",
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
      {/* Hero Section for Pricing Page */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Clear Pricing for Measurable Results
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            No retainers, no hidden fees. Just transparent, powerful investments designed to make your Joburg business the obvious choice.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
              Website Packages Engineered for Local ROI
            </h2>
            <p className="text-lg text-gray-600">
              Choose the investment level designed to make your Johannesburg business the obvious choice for local customers searching online right now.
            </p>
          </header>

          {/* Pricing Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">

            {/* Card 1: Foundation */}
            <div id="foundation" className="flex flex-col p-8 bg-white rounded-xl shadow-lg border border-gray-200 transition duration-300 hover:shadow-xl hover:border-teal-300">
              <div className="flex-grow">
                <h3 className="text-3xl font-bold font-heading mb-2 text-gray-800">Foundation</h3>
                <p className="text-gray-500 mb-6">Establish your essential, professional online footprint.</p>
                <p className="text-5xl font-extrabold mb-6 text-gray-900">R5,500 <span className="text-lg font-normal text-gray-500">once-off</span></p>
                <ul className="space-y-4 text-gray-700 mb-8 text-sm"> 
                  <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span><strong className="font-semibold">3-Page Custom Website</strong> (Home, About, Services/Contact)</span></li>
                  <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span>Essential <strong className="font-semibold">Local SEO Setup</strong> &amp; Google Business Profile Optimization</span></li> 
                  <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span>Mobile-First Responsive Design</span></li>
                  <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span><strong className="font-semibold">Rapid 48-Hour</strong> Initial Mockup</span></li>
                  <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span>Built for Speed &amp; Performance</span></li> 
                  <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span>Contact Form Integration</span></li>
                </ul>
              </div>
              <Link href="/contact" className="w-full mt-auto text-center block bg-white border-2 border-teal-600 text-teal-600 font-bold py-3 px-6 rounded-lg hover:bg-teal-600 hover:text-white transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500">Get Foundation</Link>
            </div>

            {/* Card 2: Growth Engine (Most Popular) */}
            <div id="growth-engine" className="flex flex-col p-10 bg-gray-900 text-white rounded-xl shadow-2xl transform lg:scale-105 relative border-4 border-teal-500">
              <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
              <div className="flex-grow">
                <h3 className="text-3xl font-bold font-heading mb-2 text-white">Growth Engine</h3>
                <p className="text-gray-300 mb-6">The complete toolkit for serious lead generation and local dominance.</p>
                <p className="text-5xl font-extrabold mb-6 text-white">R10,000 <span className="text-lg font-normal text-gray-400">once-off</span></p>
                <ul className="space-y-4 text-gray-200 mb-8 text-sm"> 
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">&#10003;</span><span>Everything in Foundation, plus:</span></li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">&#10003;</span><span><strong className="font-semibold">5-7 Page Website</strong> (Incl. dedicated service pages, blog setup)</span></li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">&#10003;</span><span><strong className="font-semibold">Advanced Local SEO</strong> (Johannesburg suburb targeting, schema markup)</span></li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">&#10003;</span><span>Google Analytics Setup &amp; Reporting Intro</span></li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">&#10003;</span><span>Enhanced Contact Forms &amp; Social Media Links</span></li>
                  <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">&#10003;</span><span>Priority Performance Tuning</span></li>
                </ul>
              </div>
              <Link href="/contact" className="w-full mt-auto text-center block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-white">Choose Growth Engine</Link>
            </div>

            {/* Card 3: Market Leader */}
            <div id="market-leader" className="flex flex-col p-8 bg-white rounded-xl shadow-lg border border-gray-200 transition duration-300 hover:shadow-xl hover:border-teal-300">
              <div className="flex-grow">
                <h3 className="text-3xl font-bold font-heading mb-2 text-gray-800">Market Leader</h3>
                <p className="text-gray-500 mb-6">For established pros aiming for total Johannesburg market saturation.</p>
                <p className="text-5xl font-extrabold mb-6 text-gray-900">R15,000 <span className="text-lg font-normal text-gray-500">once-off</span></p>
                <ul className="space-y-4 text-gray-700 mb-8 text-sm"> 
                  <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span>Everything in Growth Engine, plus:</span></li>
                  <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span><strong className="font-semibold">8+ Pages</strong> &amp; Advanced Features (e.g., booking/quote system integration)</span></li>
                  <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span><strong className="font-semibold">Comprehensive SEO Strategy</strong> &amp; Competitor Analysis</span></li>
                  <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span>Advanced Google Analytics Goal Tracking</span></li>
                  <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span>Priority Support &amp; Launch Training Session</span></li>
                </ul>
              </div>
              <Link href="/contact" className="w-full mt-auto text-center block bg-white border-2 border-teal-600 text-teal-600 font-bold py-3 px-6 rounded-lg hover:bg-teal-600 hover:text-white transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500">Go Market Leader</Link>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-16 text-gray-600">
            <p className="text-lg">Not sure which package is right? Your <Link href="/contact" className="text-teal-600 font-bold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded px-1">Free Growth Audit</Link> will provide clarity.</p>
            <p className="mt-2 text-sm">All packages include 1 year of free essential hosting &amp; domain name registration if required.</p>
          </div>
        </div>
      </section>

      {/* Trust & proof section */}
      <SocialProof />

      {/* Dual CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid gap-8 lg:grid-cols-2">
          <div className="bg-gray-800 rounded-2xl p-8 border border-white/10">
            <p className="text-teal-300 text-sm font-semibold uppercase tracking-[0.2em] mb-3">Need to see it</p>
            <h3 className="text-2xl font-heading font-bold mb-4">View live case studies + pricing breakdowns.</h3>
            <p className="text-gray-300 mb-6">See the assets, metrics, and ROI clients unlocked on the exact packages above.</p>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full border border-white/40 hover:bg-white/10 transition"
            >
              Explore client wins
            </Link>
          </div>
          <div className="bg-gray-50 text-gray-900 rounded-2xl p-8 border border-gray-200">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-[0.2em] mb-3">Ready to move fast</p>
            <h3 className="text-2xl font-heading font-bold mb-4">Book a 20‑minute call with Frank Smit.</h3>
            <p className="text-gray-700 mb-6">Walk through your current site, pick a package, and lock an install date within the week.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full bg-teal-600 text-white hover:bg-teal-500 transition"
              >
                Book your audit
              </Link>
              <Link
                href="tel:+27769724559"
                className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition"
              >
                Call 076 972 4559
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 mt-8">
          Need paid traffic or funnel fixes too? Explore our{' '}
          <Link href="/services/google-ads" className="text-teal-400 font-semibold hover:underline">
            Google Ads
          </Link>{' '}
          and{' '}
          <Link href="/services/facebook-ads" className="text-teal-400 font-semibold hover:underline">
            Facebook &amp; Instagram Ads
          </Link>{' '}
          sprints for turnkey acquisition, or{' '}
          <Link href="/services/conversion-rate-optimization" className="text-teal-400 font-semibold hover:underline">
            CRO Sprints
          </Link>{' '}
          to convert more of your current traffic.
        </p>
      </section>

      {/* FAQ Section with Schema */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 font-heading text-center">
              Frequently Asked Questions About Pricing
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  What is included in the website design packages?
                </h3>
                <p className="text-gray-700">
                  All packages include custom website design, mobile-responsive layout, local SEO setup, 
                  hosting for 1 year, domain registration, and contact form integration. Higher packages 
                  include more pages, advanced SEO features, and additional functionality.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Are there any hidden costs or monthly fees?
                </h3>
                <p className="text-gray-700">
                  No hidden costs. The package price is a once-off fee. After the first year, hosting 
                  and domain renewal costs approximately R200-R500 per month. Optional maintenance 
                  packages are available starting at R500/month.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Can I upgrade from Foundation to Growth Engine later?
                </h3>
                <p className="text-gray-700">
                  Yes. We offer upgrade paths. You&apos;ll pay the difference between packages plus a 
                  small migration fee. However, choosing the right package upfront saves time and money.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  How long does it take to build my website?
                </h3>
                <p className="text-gray-700">
                  Foundation packages typically take 2-3 weeks, Growth Engine takes 4-6 weeks, and 
                  Market Leader takes 6-8 weeks. Timelines depend on content readiness and feedback speed.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  Do you provide hosting and domain registration?
                </h3>
                <p className="text-gray-700">
                  Yes. All packages include 1 year of free essential hosting and domain name registration. 
                  After the first year, you&apos;ll pay approximately R200-R500/month for continued hosting 
                  and domain renewal.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-teal-500">
                <h3 className="text-xl font-bold mb-3 font-heading text-gray-900">
                  What if I need changes after my website is built?
                </h3>
                <p className="text-gray-700">
                  Minor changes are included during the build phase. After launch, we offer maintenance 
                  packages starting at R500/month for updates, security patches, and minor content changes. 
                  Major updates are quoted separately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;