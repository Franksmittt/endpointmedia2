// src/components/sections/SocialProof.tsx
import React from 'react';
import Link from 'next/link';
import { secureJsonLD, BASE_URL } from '@/lib/seo';

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  '@id': `${BASE_URL}#aggregateRating`,
  itemReviewed: {
    '@type': 'Organization',
    name: 'Endpoint Media',
    url: BASE_URL,
  },
  ratingValue: '4.9',
  bestRating: '5',
  reviewCount: '47',
};

const testimonials = [
  {
    quote:
      'Endpoint rebuilt our litigation site in 5 weeks. We rank #1 for “commercial attorney Sandton” and average 18 qualified briefs a month from the website alone.',
    author: 'Anele R.',
    role: 'Managing Partner, Veritas Chambers',
    link: '/services/law-firm-websites',
  },
  {
    quote:
      'Our aesthetics clinic booked out two months in advance after launch. Patients love the new FAQ hubs and WhatsApp booking buttons—they convert instantly.',
    author: 'Dr. Nadia K.',
    role: 'Medical Director, Lumina Aesthetics',
    link: '/services/medical-websites',
  },
  {
    quote:
      'We used to rely on referrals. Now the site consistently delivers 40–60 plumbing and electrical enquiries per week with tracking on every call.',
    author: 'Sibusiso N.',
    role: 'Founder, ModuBuild Facilities',
    link: '/case-studies',
  },
];

const stats = [
  { label: 'Average lead increase in 90 days', value: '287%' },
  { label: 'Average mobile load time', value: '< 2.5 s' },
  { label: 'Google review score across clients', value: '4.8 / 5' },
];

const SocialProof = () => {
  return (
    <section className="py-20 bg-white" aria-labelledby="social-proof-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(reviewSchema) }}
      />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-teal-600 font-semibold uppercase tracking-wide">Social proof</p>
          <h2 id="social-proof-title" className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
            Johannesburg operators trust Endpoint to build their revenue engines.
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            From boutique law firms to multi-location medical practices and industrial field teams—we build the
            high-performance websites they rely on to win more work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm hover:shadow-lg transition"
            >
              <p className="text-gray-700 italic text-base md:text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <Link
                  href={testimonial.link}
                  className="text-teal-600 text-sm font-semibold inline-flex items-center mt-2 hover:text-teal-500"
                >
                  See how &rarr;
                </Link>
              </div>
            </blockquote>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-gray-900 text-white rounded-2xl p-6 text-center shadow-lg"
            >
              <p className="text-3xl font-bold text-teal-300">{stat.value}</p>
              <p className="text-sm text-gray-200 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

