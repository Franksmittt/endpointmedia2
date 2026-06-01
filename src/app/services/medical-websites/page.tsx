// src/app/services/medical-websites/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

const PAGE_PATH = '/services/medical-websites';

const faqs = [
  {
    question: 'How fast can you launch a new medical or aesthetic website?',
    answer:
      'Most practices go live within 4–6 weeks. We compress strategy, copy, design, build, QA, and launch into one sprint with twice-weekly check-ins so you always know what is shipping next.',
  },
  {
    question: 'Will the site help with HPCSA and POPIA compliance?',
    answer:
      'Yes. We design every page to align with HPCSA advertising rules, POPIA consent requirements, and platform policies (Meta, Google Ads). We include disclosure sections, consent checkboxes, and secure intake flows.',
  },
  {
    question: 'Can you integrate bookings, WhatsApp, or practice management tools?',
    answer:
      'Absolutely. We integrate RecoMed, Booksy, Calendly, Q-Assist, SimplePractice, or even a Google Calendar. All WhatsApp CTAs, call tracking, and contact forms route into one analytics view.',
  },
  {
    question: 'Do you create the SEO content and treatment pages?',
    answer:
      'Yes. We write treatment pages, doctor bios, FAQ hubs, and evergreen medical guides that rank for “treatment + suburb” searches (e.g. “botox Sandton”, “pediatrician Bryanston”), all optimized for conversion.',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Medical & Aesthetic Website Design',
  serviceType: 'Healthcare Web Design',
  description:
    'High-converting medical websites for doctors, dentists, and aesthetic clinics with compliant messaging, SEO, and booking automations.',
  provider: {
    '@id': `${BASE_URL}#organization`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Johannesburg',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'ZAR',
    price: '15000',
    url: `${BASE_URL}${PAGE_PATH}`,
    availability: 'https://schema.org/InStock',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BASE_URL}${PAGE_PATH}#faq`,
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

const differentiators = [
  {
    icon: '🩺',
    title: 'Patient psychology driven copy',
    body: 'We write empathetic messaging that answers safety, recovery, and pricing questions, guiding patients from research to booking without overwhelming medical jargon.',
  },
  {
    icon: '⚡',
    title: 'Real-time lead intelligence',
    body: 'Every CTA (call, WhatsApp, form, booking) hits one dashboard with alerts, so reception can respond within minutes. Critical for cash-pay treatments.',
  },
  {
    icon: '🔐',
    title: 'Compliance baked in',
    body: 'HPCSA-compliant disclaimers, POPIA consent, before/after galleries with consent flags, and review automation that respects platform rules.',
  },
];

const verticals = [
  {
    name: 'Dental & orthodontics',
    bullets: [
      'Treatment funnels for implants, Invisalign, whitening, and hygiene plans.',
      'Finance calculator integrations and instant call widgets for emergencies.',
      'SEO for suburb-specific keywords (“Sandton dentist”, “Bryanston orthodontist”).',
    ],
  },
  {
    name: 'Aesthetics & med-spa',
    bullets: [
      'Before/after galleries with consent gating and load-optimized media.',
      'Landing pages for high-value treatments (botox, dermal fillers, IV therapy).',
      'Upsell automations that promote memberships, seasonal offers, and packages.',
    ],
  },
  {
    name: 'General, family & specialist physicians',
    bullets: [
      'Condition hubs with structured FAQs, symptom checklists, and POPIA-friendly forms.',
      'Referral intake flows for GPs feeding specialists and allied professionals.',
      'Telehealth-ready booking experiences with calendar integrations.',
    ],
  },
  {
    name: 'Allied health & wellness',
    bullets: [
      'Booking funnels for physio, chiro, biokinetics, dieticians, and wellness studios.',
      'Content programs that answer “at-home” searches and capture leads with lead magnets.',
      'Automated review requests to keep Google ratings above 4.5 stars.',
    ],
  },
];

const proofPoints = [
  { stat: '54%', label: 'Average increase in online bookings within 60 days of launch.' },
  { stat: '38%', label: 'Decrease in no-shows after automated reminders & confirmations.' },
  { stat: '<2s', label: 'Average mobile load time. Critical for impatient patients on 4G.' },
  { stat: '92%', label: 'Patients who chose our client after reading FAQs + testimonials.' },
];

const processSteps = [
  {
    step: '01',
    title: 'Patient journey mapping',
    body:
      'We interview your team, analyze booking logs, and audit competitors to map the exact questions patients ask before they commit. That becomes our messaging blueprint.',
  },
  {
    step: '02',
    title: 'Content, UX, and trust architecture',
    body:
      'We build treatment, doctor, and location pages, layer in visuals, calculators, FAQs, and trust elements so every objection is handled before reception answers the call.',
  },
  {
    step: '03',
    title: 'Automation & launch',
    body:
      'We develop the site in Next.js, connect to booking platforms, configure Google Analytics + call tracking, and deploy continuous A/B tests on CTAs and offers.',
  },
];

const conversionFeatures = [
  {
    title: 'Treatment page systems',
    description:
      'Reusable templates for procedures with indications, benefits, recovery timelines, FAQs, and lead captures that can be cloned whenever you add new services.',
  },
  {
    title: 'Multi-channel booking',
    description:
      'Embedded calendars, WhatsApp “Book Now,” instant call buttons, and waitlist forms routed to your CRM so patients can book however they prefer.',
  },
  {
    title: 'Review & reputation engines',
    description:
      'Automated review requests, testimonial publishing with schema markup, and social proof sliders to boost conversion and local SEO.',
  },
  {
    title: 'Content & lead magnets',
    description:
      'Procedure prep guides, post-care checklists, and wellness PDFs gated behind email forms to grow nurture lists and retargeting audiences.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Medical & Aesthetic Website Design Johannesburg',
    description:
      'Custom medical, dental, and aesthetic websites engineered for bookings. HPCSA-compliant copy, POPIA consent, SEO, WhatsApp + booking automations for Johannesburg practices.',
    path: PAGE_PATH,
    keywords: [
      'medical website design johannesburg',
      'aesthetic clinic website south africa',
      'dental practice web design joburg',
      'healthcare marketing johannesburg',
      'medical booking website south africa',
    ],
  });
}

export default function MedicalWebsitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-black text-white py-20 md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px]" aria-hidden />
        <div className="container mx-auto px-6 text-center">
          <p className="text-teal-400/90 text-xs md:text-sm uppercase tracking-[0.35em] mb-4">
            Medical • Dental • Aesthetic • Wellness
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Turn patient search intent into booked appointments.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-400">
            We build HPCSA-compliant, conversion-optimised websites for practices across Gauteng.
            Patients get answers in under 30 seconds. Your reception gets qualified leads. You get a
            predictable calendar filled with high-value treatments.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-sm bg-white text-black hover:bg-zinc-200 transition"
            >
              Book a discovery call
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-sm border border-zinc-700 text-white hover:bg-white/10 transition"
            >
              See practice results
            </Link>
          </div>
          <p className="text-sm text-zinc-400 mt-6">
            Serving practices in Sandton, Rosebank, Midrand, Waterfall, Pretoria East, and nationwide.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-teal-400/90 font-semibold uppercase tracking-wide">Why clinics choose us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Not another template. A patient acquisition engine.
            </h2>
            <p className="text-lg text-zinc-500 mt-4">
              We align web design, messaging, and marketing automation so your front desk spends less time
              chasing enquiries and more time confirming bookings.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-sm border border-zinc-800 bg-black/40 p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{item.title}</h3>
                <p className="text-zinc-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <p className="text-teal-400/90 font-semibold uppercase tracking-wide">Practice depth</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
                Built for every discipline in your group.
              </h2>
              <p className="text-lg text-zinc-500 mt-4">
                Dental, derm, GP, allied health, or wellness. Each department gets a conversion playbook tailored
                to its patient journey.
              </p>
            </div>
            <div className="lg:w-64 rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
              <p className="text-5xl font-bold text-white">+71%</p>
              <p className="text-sm text-zinc-500 mt-2">Average uplift in treatment-specific enquiries.</p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {verticals.map((area) => (
              <div key={area.name} className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{area.name}</h3>
                <ul className="space-y-2 text-zinc-500 list-disc list-inside">
                  {area.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 md:py-28 bg-zinc-950 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {proofPoints.map((point) => (
              <div key={point.label} className="text-center border border-white/10 rounded-2xl p-6">
                <p className="text-3xl font-bold text-teal-400/90">{point.stat}</p>
                <p className="text-sm text-zinc-400 mt-2">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-teal-400/90 font-semibold uppercase tracking-wide">Endpoint process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              One sprint to launch, continuous optimisation thereafter.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-sm border border-zinc-800 bg-black/40 p-6">
                <p className="text-teal-400/90 text-sm font-semibold">Step {step.step}</p>
                <h3 className="text-xl font-semibold text-white mt-3 mb-2">{step.title}</h3>
                <p className="text-zinc-500">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion features */}
      <section className="py-20 md:py-28 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-teal-400/90 font-semibold uppercase tracking-wide">Conversion stack</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Everything you need to turn awareness into appointments.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {conversionFeatures.map((feature) => (
              <div key={feature.title} className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-zinc-950 text-white border-t border-zinc-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fill your appointment book.</h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto mb-8">
            Request your free Growth Audit to see the exact CRO, SEO, and automation plays we would deploy
            over the next 30 days for your practice.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-white text-black hover:bg-zinc-200 transition"
          >
            Claim your audit
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-black" id="faq">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-teal-400/90 font-semibold uppercase tracking-wide">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Your most important questions. Answered.
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="rounded-sm border border-zinc-800 bg-black/40 p-6 group"
              >
                <summary className="text-lg font-semibold text-white cursor-pointer flex items-center justify-between">
                  {item.question}
                  <span className="text-teal-400/90 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-zinc-500 mt-4">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

