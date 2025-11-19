// src/app/services/law-firm-websites/page.tsx
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildMetadata, secureJsonLD, BASE_URL } from '@/lib/seo';

const PAGE_PATH = '/services/law-firm-websites';

const faqs = [
  {
    question: 'How long does it take to launch a new law firm website?',
    answer:
      'Most firms go live in 4–6 weeks. We run strategy, copywriting, design, development, QA, and launch in one sprint with weekly stand-ups so partners always know the status of each deliverable.',
  },
  {
    question: 'Will my website comply with LPC and POPIA regulations?',
    answer:
      'Yes. We build every page to align with LPC advertising guidelines, POPIA consent requirements, and any Bar Council restrictions around testimonials, disclaimers, and fee disclosures.',
  },
  {
    question: 'Can you integrate our intake forms or case management system?',
    answer:
      'Absolutely. We connect custom forms to systems such as Actionstep, Lexis Convey, Clio, Lawcus, or even secure Google Workspace spreadsheets so enquiries, conflict checks, and documents land in one workflow.',
  },
  {
    question: 'Do you create the legal content as well?',
    answer:
      'We develop practice-area landing pages, attorney bios, FAQ hubs, pillar guides, and structured data so you rank for high-intent keywords like “family lawyer Sandton” and “commercial attorney Johannesburg.”',
  },
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE_URL}${PAGE_PATH}#service`,
  name: 'Law Firm Website Design & Intake Automation',
  serviceType: 'Law Firm Web Design',
  description:
    'High-converting legal websites purpose-built for Johannesburg law firms with compliant messaging, SEO, and automated intake.',
  provider: {
    '@id': `${BASE_URL}#organization`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Johannesburg',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Law Firms, Attorneys, Legal Practices',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'ZAR',
    price: '18000',
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
    icon: '⚙️',
    title: 'Evidence-based messaging',
    body: 'We craft practice-area pages around precedent wins, legal content strategy, and keyword data so your pages show up for “intent to instruct” searches—not vanity phrases.',
  },
  {
    icon: '🧠',
    title: 'Integrated intake intelligence',
    body: 'Every form, WhatsApp click, and call routes to a single dashboard. Automations trigger reminders, retargeting journeys, and CRM updates so no enquiry is left unattended.',
  },
  {
    icon: '🔐',
    title: 'Compliance-first frameworks',
    body: 'POPIA consent gates, LPC-compliant disclaimers, conflict checks, and secure document exchange are baked into the architecture without sacrificing conversion rate.',
  },
];

const practiceAreas = [
  {
    name: 'Litigation & dispute resolution',
    bullets: [
      'High-authority practice pages with precedent summaries and counsel profiles.',
      'Dynamic FAQs answering jurisdiction-specific questions to capture long-tail searches.',
      'Secure document upload portals for evidence, pleadings, and briefing packs.',
    ],
  },
  {
    name: 'Family & matrimonial law',
    bullets: [
      'Emotionally intelligent copy that builds trust with distressed families.',
      'Multi-step consult booking forms with urgency filters and triage questionnaires.',
      'Automated nurture journeys for prospects who need multiple touchpoints before instructing.',
    ],
  },
  {
    name: 'Corporate & commercial law',
    bullets: [
      'Industry-specific landing pages for mining, financial services, tech, and property.',
      'Thought-leadership resource hubs with gated downloads to grow mailing lists.',
      'Meeting scheduling integrated with Microsoft 365, Outlook, or Calendly.',
    ],
  },
  {
    name: 'Conveyancing & property law',
    bullets: [
      'Interactive fee calculators, transfer timelines, and “what to expect” explainer content.',
      'Location pages for Sandton, Randburg, Midrand, and Pretoria East to capture local intent.',
      'POP-compliant forms for FICA uploads and bond instruction tracking.',
    ],
  },
];

const proofPoints = [
  { stat: '312%', label: 'Increase in consultation requests in 90 days for a litigation boutique.' },
  { stat: '21', label: 'Google reviews secured with automated follow-up and schema stars.' },
  { stat: '<2.5s', label: 'Average mobile load time across our law firm builds.' },
  { stat: '4.8 / 5', label: 'Average satisfaction score from managing partners we serve.' },
];

const processSteps = [
  {
    step: '01',
    title: 'Strategic discovery & positioning',
    body:
      'We audit your existing website, Google Business Profile, competitor set, and matter mix to identify the fastest path to profitable cases. Expect a full CRO + SEO blueprint within the first week.',
  },
  {
    step: '02',
    title: 'Content, UX & compliance architecture',
    body:
      'We write authoritative legal content, map user journeys, design wireframes, and bake in LPC/POPIA compliance so partners sign off on every section before code is written.',
  },
  {
    step: '03',
    title: 'Build, automate & launch',
    body:
      'Our engineers ship a Next.js experience optimised for Core Web Vitals, integrate intake workflows, configure analytics + call tracking, and run QA so every form, chat, and calendar works perfectly.',
  },
];

const conversionFeatures = [
  {
    title: 'Practice-area systems',
    description:
      'Modular sections for attorney bios, fee structures, FAQs, and case studies tailored for each department—easy to expand as you add partners or new matters.',
  },
  {
    title: 'Automated intake',
    description:
      'Smart forms, document uploads, and scheduling connected to Actionstep, Clio, Lawcus, Pipedrive, or even a secure spreadsheet so the right attorney is notified instantly.',
  },
  {
    title: 'Thought-leadership hubs',
    description:
      'Resource libraries, checklists, and webinars built to capture email subscribers, earn backlinks, and demonstrate authority in court-facing practice areas.',
  },
  {
    title: 'Reputation acceleration',
    description:
      'Review capture funnels, Google Business Profile optimisation, structured data for attorney listings, and trust-badge deployment across the site.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata({
    title: 'Law Firm Website Design Johannesburg | High-Converting Legal Sites',
    description:
      'Grow your practice with a litigation-ready website engineered for conversions. Custom legal website design, SEO, intake automations & review funnels for Johannesburg law firms.',
    path: PAGE_PATH,
    keywords: [
      'law firm web design johannesburg',
      'attorney website design south africa',
      'legal marketing agency joburg',
      'lawyer website seo johannesburg',
      'legal lead generation websites',
    ],
  });
}

export default function LawFirmWebsitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(serviceSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: secureJsonLD(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <p className="text-teal-300 text-xs md:text-sm uppercase tracking-[0.35em] mb-4">
            Law • Litigation • Commercial • Family
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Convert high-stakes legal searches into booked consultations.
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
            Johannesburg’s most ambitious firms trust us to build legal websites that outrank
            competitors, comply with every regulation, and capture qualified briefs around the clock.
            We script the narrative, design the experience, and install the intake infrastructure so
            you can focus on winning cases.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-teal-500 text-white shadow-lg shadow-teal-500/30 hover:bg-teal-400 transition"
            >
              Book a strategy call
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              See legal results
            </Link>
          </div>
          <p className="text-sm text-gray-400 mt-6">
            Built for boutique practices, elite litigation teams, and multidisciplinary firms in
            Sandton, Rosebank, Waterfall, and beyond.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">Why firms choose us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Built for rainmakers, not brochure sites.
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Your website should perform like a senior associate—anticipating prospects’ questions,
              qualifying them, and routing them to the right attorney with zero friction. We treat
              design, copy, and technology like a single revenue engine.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <p className="text-teal-600 font-semibold uppercase tracking-wide">Practice depth</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
                Built for every department in your firm.
              </h2>
              <p className="text-lg text-gray-600 mt-4">
                From litigation to conveyancing, we tailor landing pages, content, and conversion flows
                to the nuance of each practice area so partners see measurable ROI immediately.
              </p>
            </div>
            <div className="lg:w-64 p-6 bg-white rounded-2xl shadow">
              <p className="text-5xl font-bold text-gray-900">+42%</p>
              <p className="text-sm text-gray-600 mt-2">
                Average uplift in qualified consultations within 60 days after launch.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {practiceAreas.map((area) => (
              <div key={area.name} className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.name}</h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
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
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-4">
            {proofPoints.map((point) => (
              <div key={point.label} className="text-center border border-white/10 rounded-2xl p-6">
                <p className="text-3xl font-bold text-teal-300">{point.stat}</p>
                <p className="text-sm text-gray-300 mt-2">{point.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">The Endpoint playbook</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              One sprint. Three outcomes: authority, speed, and intake control.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-teal-500 text-sm font-semibold">Step {step.step}</p>
                <h3 className="text-xl font-semibold text-gray-900 mt-3 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">Beyond the brochure</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Every site ships with the assets that actually generate briefs.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {conversionFeatures.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to turn your website into your best-performing associate?
          </h2>
          <p className="text-lg text-teal-50 max-w-3xl mx-auto mb-8">
            Get a free Growth Audit showing the exact keywords, conversion gaps, and automation plays we
            would deploy for your practice within the next 30 days.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 text-lg font-semibold rounded-full bg-white text-teal-700 hover:bg-teal-50 transition"
          >
            Claim your audit
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white" id="faq">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <p className="text-teal-600 font-semibold uppercase tracking-wide">FAQs</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">
              Answers for managing partners & marketing directors.
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="bg-gray-50 border border-gray-200 rounded-2xl p-6 group"
              >
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                  {item.question}
                  <span className="text-teal-500 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-600 mt-4">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
