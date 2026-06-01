// src/app/industries/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import HubSpokeLinks from '@/components/seo/HubSpokeLinks';

export const revalidate = 86400;

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Industry-Specific Web Design Johannesburg | Law Firms, Real Estate, Finance, Medical',
    description:
      'Specialized web design services for Johannesburg businesses. We serve law firms, real estate agents, financial advisors, medical practices, and more with industry-specific solutions.',
    path: '/industries',
    keywords: [
      'industry-specific web design johannesburg',
      'web design for law firms',
      'web design for real estate',
      'web design for financial services',
      'web design for medical practices',
    ],
  });
}

const industries = [
  {
    name: 'Law Firms',
    slug: 'law-firms',
    description:
      'Professional websites that establish trust, showcase expertise, and generate qualified legal leads.',
    highlights: ['Attorney Profiles', 'Practice Areas', 'Client Portals', 'Legal SEO'],
  },
  {
    name: 'Real Estate',
    slug: 'real-estate',
    description:
      'Property listings, IDX integration, and lead capture optimized for real estate success.',
    highlights: ['Property Listings', 'IDX Integration', 'Lead Capture', 'Local SEO'],
  },
  {
    name: 'Financial Services',
    slug: 'finance',
    description:
      'Trust, security, and compliance-focused websites for financial advisors and accountants.',
    highlights: ['Secure Portals', 'Compliance', 'Service Pages', 'Trust Signals'],
  },
  {
    name: 'Medical Practices',
    slug: 'medical',
    description:
      'HIPAA-compliant, patient-focused websites with online booking and secure portals.',
    highlights: ['Online Booking', 'Patient Portals', 'Provider Profiles', 'Healthcare SEO'],
  },
  {
    name: 'Manufacturing & Logistics',
    slug: 'manufacturing-logistics',
    description:
      'B2B websites built for specification-led buyers, RFQ flows, and industrial local SEO.',
    highlights: ['RFQ Systems', 'Capability Pages', 'Technical SEO', 'Lead Qualification'],
  },
];

const IndustriesPage = () => {
  return (
    <div className="bg-black text-zinc-300">
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            Industry Specialists · Johannesburg
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            Industry-Specific Web Design
          </h1>
          <p className="mb-8 max-w-3xl text-lg tracking-[-0.3px] text-[#A1A1AA] md:text-xl">
            Every industry has unique compliance, buyer psychology, and conversion requirements. We
            build specialized Next.js architecture for law firms, real estate, finance, medical, and
            industrial operators.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Discuss Your Industry
          </Link>
        </div>
      </section>

      <section className="bg-zinc-950 py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col gap-3 border-b border-zinc-800 pb-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Choose Your Vertical
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex flex-col rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 transition-colors hover:border-teal-400/70"
              >
                <h2 className="text-2xl font-semibold text-white group-hover:text-zinc-100">
                  {industry.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {industry.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {industry.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-sm border border-zinc-800 bg-black/40 px-2.5 py-1 text-xs text-zinc-400"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <span className="mt-6 text-sm font-semibold text-white transition-colors group-hover:text-teal-400/90">
                  View {industry.name} Services →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-center md:p-12">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Don&apos;t See Your Industry?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              We serve businesses across industries. Contact us to discuss how we can create a
              specialized website solution for your market.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <HubSpokeLinks variant="industry" slug="index" />
    </div>
  );
};

export default IndustriesPage;
