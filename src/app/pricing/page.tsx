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
        name: "Strategic Foundation",
        price: "25000",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
        url: `${BASE_URL}/pricing#strategic-foundation`,
      },
      {
        "@type": "Offer",
        name: "Market Dominance",
        price: "45000",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
        url: `${BASE_URL}/pricing#market-dominance`,
      },
      {
        "@type": "Offer",
        name: "Category Authority",
        price: "75000",
        priceCurrency: "ZAR",
        availability: "https://schema.org/InStock",
        url: `${BASE_URL}/pricing#category-authority`,
      },
    ],
  },
};

const PricingPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/pricing#faq`,
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
            Premium Investment. Maximum Return.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            We don&apos;t compete on price. We compete on results. Every package is an intensive, research-driven investment engineered to put you <strong className="text-white">completely above your competitors</strong> and generate measurable growth. We&apos;d rather work with fewer clients who excel than hundreds who just become statistics.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
              Premium Investment. Maximum Return.
            </h2>
            <p className="text-lg text-gray-600">
              We don&apos;t compete on price. We compete on results. Every package is an intensive, research-driven investment engineered to put you <strong className="text-gray-900">completely above your competitors</strong> and generate measurable growth. We&apos;d rather work with fewer clients who excel than hundreds who just become statistics.
            </p>
          </header>

          {/* Pricing Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">

            {/* Card 1: Strategic Foundation */}
            <div id="strategic-foundation" className="flex flex-col p-8 bg-white rounded-2xl border-2 border-cyan-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-cyan-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold font-heading text-gray-900">Strategic Foundation</h3>
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-50 text-cyan-600">Entry Tier</span>
              </div>
              <div className="flex-grow">
                <p className="text-gray-500 mb-6">For businesses ready to outrank local competitors and establish market authority.</p>
                <p className="text-5xl font-extrabold mb-6 text-gray-900">R25,000 <span className="text-lg font-normal text-gray-500">once-off</span></p>
                <ul className="space-y-4 text-sm flex-grow text-gray-700 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-50 border-cyan-200">
                      <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Deep competitor &amp; market analysis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-50 border-cyan-200">
                      <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Custom 5-7 page architecture with Next.js 15</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-50 border-cyan-200">
                      <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Entity-based SEO with Knowledge Graph integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-50 border-cyan-200">
                      <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Comprehensive suburb targeting strategy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-50 border-cyan-200">
                      <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Performance engineered (LCP &lt;1s, 100/100 Core Web Vitals)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-50 border-cyan-200">
                      <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>60-day intensive research &amp; build process</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full mt-auto text-center block bg-white border-2 border-cyan-600 text-cyan-600 font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 hover:text-white transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500">Start Strategic Foundation</Link>
            </div>

            {/* Card 2: Market Dominance (Most Popular) */}
            <div id="market-dominance" className="flex flex-col p-8 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white border-cyan-500/50 shadow-2xl shadow-cyan-500/20 lg:scale-105 relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold font-heading text-white">Market Dominance</h3>
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-600 text-white">Most Popular</span>
              </div>
              <div className="flex-grow">
                <p className="text-gray-200 mb-6">For serious operators who want to completely outrank every competitor in their market.</p>
                <p className="text-5xl font-extrabold mb-6 text-white">R45,000 <span className="text-lg font-normal text-gray-400">once-off</span></p>
                <ul className="space-y-4 text-sm flex-grow text-gray-100 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-500/20 border-cyan-400">
                      <svg className="w-3 h-3 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Everything in Strategic Foundation, plus:</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-500/20 border-cyan-400">
                      <svg className="w-3 h-3 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Complete competitor teardown &amp; positioning strategy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-500/20 border-cyan-400">
                      <svg className="w-3 h-3 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>10-15 page architecture with service clusters</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-500/20 border-cyan-400">
                      <svg className="w-3 h-3 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Advanced semantic SEO &amp; entity injection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-500/20 border-cyan-400">
                      <svg className="w-3 h-3 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Custom conversion funnels &amp; lead generation systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-500/20 border-cyan-400">
                      <svg className="w-3 h-3 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>90-day intensive research, build &amp; optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-500/20 border-cyan-400">
                      <svg className="w-3 h-3 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Post-launch growth acceleration program</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full mt-8 text-center block font-bold py-3 px-6 rounded-lg transition duration-300 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white shadow-lg shadow-cyan-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500">Start Market Dominance</Link>
            </div>

            {/* Card 3: Category Authority */}
            <div id="category-authority" className="flex flex-col p-8 bg-white rounded-2xl border-2 border-cyan-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-cyan-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-bold font-heading text-gray-900">Category Authority</h3>
                <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-50 text-cyan-600">Enterprise</span>
              </div>
              <div className="flex-grow">
                <p className="text-gray-500 mb-6">For businesses determined to become the undisputed leader in their category.</p>
                <p className="text-5xl font-extrabold mb-6 text-gray-900">R75,000+ <span className="text-lg font-normal text-gray-500">once-off</span></p>
                <ul className="space-y-4 text-sm flex-grow text-gray-700 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-50 border-cyan-200">
                      <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Everything in Market Dominance, plus:</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-50 border-cyan-200">
                      <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Full market mapping &amp; competitive intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-50 border-cyan-200">
                      <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Custom integrations &amp; automation systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-50 border-cyan-200">
                      <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Multi-location/suburb expansion architecture</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-50 border-cyan-200">
                      <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Advanced analytics &amp; conversion optimization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-50 border-cyan-200">
                      <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>120-day comprehensive strategy, build &amp; scale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5 rounded-full flex items-center justify-center border-2 bg-cyan-50 border-cyan-200">
                      <svg className="w-3 h-3 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span>Ongoing strategic partnership &amp; optimization</span>
                  </li>
                </ul>
              </div>
              <Link href="/contact" className="w-full mt-auto text-center block bg-white border-2 border-cyan-600 text-cyan-600 font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 hover:text-white transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500">Start Category Authority</Link>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-16 text-gray-600">
            <p className="text-lg max-w-3xl mx-auto">
              Not sure which investment level is right? Our{' '}
              <Link
                href="/contact"
                className="text-cyan-600 font-bold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded px-1"
              >
                Free Architecture Audit
              </Link>{' '}
              analyzes your market, competitors, and opportunities to determine the optimal strategy for dominating your category.
            </p>
            <p className="mt-4 text-sm max-w-2xl mx-auto">
              <strong className="text-gray-900">What&apos;s Included:</strong> All packages include premium hosting, domain registration, SSL, comprehensive research, competitor analysis, and strategic consultation. We don&apos;t charge monthly maintenance fees—our Next.js architecture is self-sustaining and requires minimal ongoing support.
            </p>
            <p className="mt-4 text-xs text-gray-500 italic max-w-2xl mx-auto">
              *Pricing reflects intensive research, custom engineering, and strategic consultation. We work exclusively with businesses committed to market leadership.
            </p>
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