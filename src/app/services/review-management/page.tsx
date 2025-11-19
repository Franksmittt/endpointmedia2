// src/app/services/review-management/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

const PAGE_PATH = '/services/review-management';

const faqs = [
  {
    question: 'How do you get more Google reviews without being pushy?',
    answer:
      'We set up automated, tasteful review request workflows triggered after service completion. SMS, email, and WhatsApp templates that feel personal—not robotic. We also train your team on the right moments to ask.',
  },
  {
    question: 'Can you respond to reviews on our behalf?',
    answer:
      'Yes. We craft professional, brand-aligned responses to all reviews (positive and negative) that show you care about customer feedback. Responses go live within 24 hours and help improve your local ranking.',
  },
  {
    question: 'What happens if we get a negative review?',
    answer:
      'We respond professionally within 24 hours, offer to resolve the issue offline, and work with you to address the root cause. We also help you build a review recovery strategy to offset negative sentiment with new positive reviews.',
  },
  {
    question: 'Do you manage reviews on platforms other than Google?',
    answer:
      'Yes. We monitor and respond to reviews on Google Business Profile, Facebook, HelloPeter, and industry-specific platforms. We centralize everything in one dashboard so you see all feedback in one place.',
  },
  {
    question: 'How long before we see results?',
    answer:
      'Review velocity typically increases within 2-3 weeks after automation workflows launch. Most clients see a 3-5 star rating improvement and 20-40% more reviews within 60 days.',
  },
];

const proofStats = [
  { stat: '+340%', label: 'Average increase in review volume within 90 days' },
  { stat: '4.8★', label: 'Average rating after review management implementation' },
  { stat: '<24h', label: 'Average response time to all reviews' },
  { stat: '92%', label: 'Review response rate across managed profiles' },
];

const serviceFeatures = [
  {
    title: 'Automated review requests',
    body: 'Smart workflows that trigger review requests at the perfect moment—after service completion, via SMS, email, or WhatsApp. Templates that feel personal, not pushy.',
  },
  {
    title: 'Professional review responses',
    body: 'We craft and publish responses to every review (positive and negative) that protect your reputation, show you care, and improve your local ranking signals.',
  },
  {
    title: 'Multi-platform management',
    body: 'Monitor and respond to reviews across Google Business Profile, Facebook, HelloPeter, and industry-specific platforms from one central dashboard.',
  },
  {
    title: 'Review recovery & reputation repair',
    body: 'When negative reviews hit, we respond professionally, work with you to resolve issues, and build a recovery strategy to offset negative sentiment.',
  },
  {
    title: 'Review analytics & insights',
    body: 'Track review trends, sentiment analysis, competitor benchmarking, and identify patterns that help you improve service delivery and customer satisfaction.',
  },
  {
    title: 'Schema markup for stars',
    body: 'We implement AggregateRating schema so your review scores display as rich snippets in Google search results, increasing click-through rates.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Audit & strategy',
    body: 'We review your current review profile, competitor benchmarks, and customer touchpoints to design a review generation and management strategy tailored to your business.',
  },
  {
    step: '02',
    title: 'Automation setup',
    body: 'We implement automated review request workflows, set up monitoring dashboards, and train your team on best practices for asking for reviews at the right moments.',
  },
  {
    step: '03',
    title: 'Ongoing management',
    body: 'We respond to all reviews professionally, monitor sentiment, flag issues early, and continuously optimize your review generation to maintain a strong reputation.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Review Management & Reputation Building',
  description:
    'Automated review generation, professional response management, and reputation repair for Johannesburg service businesses. Turn satisfied customers into 5-star reviews.',
  provider: {
    '@id': `${BASE_URL}#organization`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Johannesburg',
  },
  serviceType: 'Review Management',
  audience: {
    '@type': 'Audience',
    audienceType: 'Service businesses, medical practices, law firms, trades, retail operators',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'ZAR',
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}${PAGE_PATH}`,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BASE_URL}${PAGE_PATH}#faq`,
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Review Management Johannesburg | Google Reviews & Reputation Service | Endpoint Media',
    description:
      'Turn satisfied customers into 5-star reviews. Endpoint Media offers automated review generation, professional response management, and reputation repair for Johannesburg businesses.',
    path: PAGE_PATH,
    keywords: [
      'review management johannesburg',
      'google reviews service',
      'reputation management south africa',
      'review generation automation',
      'google business profile reviews',
      'online reputation repair',
    ],
  });
}

const ReviewManagementPage = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <p className="text-purple-300 text-xs md:text-sm uppercase tracking-[0.35em] mb-4">Reviews • Reputation • Rankings</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Turn satisfied customers into 5-star reviews that drive bookings.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            Your Google Business Profile reviews are a ranking signal and a conversion driver. We automate review generation, respond
            professionally to every review, and protect your reputation so you rank higher and book more work.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-purple-500 text-white shadow-lg shadow-purple-500/30 hover:bg-purple-400 transition"
            >
              Get a review audit
            </Link>
            <Link
              href="/services/local-seo"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              See Local SEO services
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Trusted by service businesses across Sandton, Rosebank, Midrand, Bryanston, and the broader Gauteng region.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {proofStats.map((stat) => (
              <div key={stat.label} className="text-center border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-3xl font-bold text-gray-900">{stat.stat}</p>
                <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-purple-600 font-semibold uppercase tracking-wide">What we deliver</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Everything required to build and protect your online reputation.
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              From automated review requests to professional responses and reputation repair, we handle every aspect of review
              management so you can focus on delivering great service.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-purple-600 font-semibold uppercase tracking-wide">How it works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              A systematic approach to review generation and management.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-purple-500 text-sm font-semibold">Step {step.step}</p>
                <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why reviews matter */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-purple-300 font-semibold uppercase tracking-wide">Why reviews matter</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
              Reviews are a ranking signal, a trust signal, and a conversion driver.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Local ranking factor',
                body: 'Google uses review quantity, recency, and rating as ranking signals. More 5-star reviews = better map pack visibility.',
              },
              {
                title: 'Trust & conversion',
                body: '92% of consumers read reviews before booking. Higher ratings and more reviews directly increase conversion rates.',
              },
              {
                title: 'Competitive advantage',
                body: 'Businesses with 4.5+ stars and 50+ reviews outrank competitors with fewer or lower-rated reviews in local search.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-800 rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to turn satisfied customers into 5-star reviews?</h2>
          <p className="text-lg text-purple-50 max-w-3xl mx-auto mb-8">
            Get a free review audit. We will analyze your current review profile, benchmark against competitors, and show you the
            exact strategy we would deploy to increase review volume and improve ratings.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-white text-purple-700 hover:bg-purple-50 transition"
          >
            Request a review audit
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white" id="faq">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-purple-600 font-semibold uppercase tracking-wide">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Common review management questions from Johannesburg businesses.
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 group">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  {faq.question}
                  <span className="text-purple-500 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewManagementPage;

