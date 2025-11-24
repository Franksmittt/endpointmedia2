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
      'Endpoint rebuilt our litigation site in 5 weeks. We rank #1 for "commercial attorney Sandton" and average 18 qualified briefs a month from the website alone.',
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
    <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden" aria-labelledby="social-proof-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(reviewSchema) }}
      />

      {/* Digital Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-12">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
              Trust Metrics
            </span>
          </div>
          <h2 id="social-proof-title" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-3 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
            Johannesburg operators trust Endpoint to build their revenue engines.
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            From boutique law firms to multi-location medical practices and industrial field teams—we build the
            high-performance websites they rely on to win more work.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="group relative p-6 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-2xl flex flex-col justify-between shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Glowing Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Wireframe Decoration */}
              <div className="absolute top-4 right-4 w-10 h-10 border border-cyan-500/20 rounded opacity-30 group-hover:opacity-60 transition-opacity">
                <div className="absolute inset-0 border-t border-l border-cyan-500/40"></div>
              </div>

              <div className="relative z-10">
                <p className="text-gray-200 italic text-base md:text-lg mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-6">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <Link
                    href={testimonial.link}
                    className="text-cyan-400 text-sm font-semibold inline-flex items-center mt-2 hover:text-cyan-300 transition-colors"
                  >
                    See how &rarr;
                  </Link>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 text-center shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              {/* Glowing Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <p className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</p>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
