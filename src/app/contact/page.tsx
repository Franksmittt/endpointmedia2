import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import ContactWhatsAppLink from '@/app/contact/ContactWhatsAppLink';
import { secureJsonLD, BASE_URL } from '@/lib/seo';

export const revalidate = 86400;

const ContactForm = dynamic(() => import('@/app/contact/ContactForm'), {
  loading: () => (
    <div className="min-h-[480px] animate-pulse rounded-sm border border-zinc-800 bg-zinc-950/40" />
  ),
});

const contactSteps = [
  {
    step: '01',
    title: 'You reach out',
    body: 'Fill in the form, call, or WhatsApp. Tell us your business, service area, and where pipeline is leaking.',
  },
  {
    step: '02',
    title: 'We diagnose',
    body: 'Frank reviews your site, competitors, and tracking. No generic deck. A direct assessment of what is broken and what will move revenue.',
  },
  {
    step: '03',
    title: 'You get a clear plan',
    body: 'We recommend the right package or service mix with transparent ZAR pricing. You decide if we are the right fit before committing.',
  },
];

const contactMarquee = [
  'Free Architecture Audit',
  'Next.js Web Builds',
  'Google Ads',
  'Meta Campaigns',
  'Local SEO',
  'Senior-Led Delivery',
  'Johannesburg B2B',
  'Flat-Fee Retainers',
];

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${BASE_URL}/contact#contactpage`,
  name: 'Contact Endpoint Media',
  description:
    'Request a free growth audit. Speak directly with Frank Smit about web design, local SEO, and lead generation for Johannesburg service businesses.',
  url: `${BASE_URL}/contact`,
  mainEntity: {
    '@type': 'Organization',
    '@id': `${BASE_URL}#organization`,
    name: 'Endpoint Media',
    email: 'hello@endpointmedia.co.za',
    telephone: '+27769724559',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Johannesburg',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
  },
};

export default function ContactPage() {
  return (
    <div className="bg-black text-zinc-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: secureJsonLD(contactSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28">
        <div className="pointer-events-none absolute top-0 h-[420px] w-[420px] rounded-full bg-blue-900/10 blur-[120px]" />

        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
            Direct Access · Senior-Led Delivery
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
            Start The Conversation.
          </h1>
          <p className="mb-4 max-w-3xl text-lg tracking-[-0.3px] text-[#A1A1AA] md:text-xl">
            Ready to stop building brochures and start building a lead-generating asset? Connect with
            Frank Smit directly for a focused consultation on architecture, SEO, and paid search.
          </p>
          <p className="mb-8 max-w-2xl text-base text-zinc-500">
            Remote-first. Zero agency overhead. One accountable expert from audit through launch.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Send a Message
            </Link>
            <Link
              href="tel:+27769724559"
              className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-8 py-4 text-base font-semibold text-zinc-100 transition-colors hover:bg-zinc-900"
            >
              Call 076 972 4559
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-zinc-800 bg-zinc-950/85 py-8 md:py-10">
        <div className="container mx-auto px-6">
          <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
            What We Discuss On Strategy Calls
          </p>
          <div className="proof-marquee relative overflow-hidden">
            <div className="proof-marquee-track flex w-max items-center gap-3">
              {[...contactMarquee, ...contactMarquee].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="whitespace-nowrap rounded-sm border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
                What Happens Next
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-1.5px] text-white md:text-5xl">
                No Sales Theater. Just Diagnosis.
              </h2>
              <div
                aria-hidden="true"
                className="mt-5 h-px w-28 bg-gradient-to-r from-teal-400/90 to-transparent"
              />
              <p className="mt-5 text-2xl font-bold leading-[1.1] tracking-[-1px] text-zinc-500 md:text-3xl">
                You talk to the person who builds the system.
              </p>
            </div>

            <div className="space-y-4">
              {contactSteps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6"
                >
                  <p className="font-mono text-xs tracking-[0.18em] text-zinc-600">{item.step}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form + contact details */}
      <section className="bg-zinc-950 py-20 md:py-28" id="contact-form">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col gap-3 border-b border-zinc-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
              Get In Touch
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">
              Response within 24 hours
            </p>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-6">
              <div className="rounded-sm border border-zinc-800 bg-black/50 p-6 md:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Direct Contact
                </p>
                <h2 className="mt-3 text-xl font-semibold text-white">Our Details</h2>
                <address className="mt-4 space-y-3 not-italic text-sm text-zinc-400">
                  <p className="font-semibold text-zinc-200">Endpoint Media</p>
                  <p>Frank Smit, Founder</p>
                  <p>
                    <a
                      href="mailto:hello@endpointmedia.co.za"
                      className="transition-colors hover:text-white"
                    >
                      hello@endpointmedia.co.za
                    </a>
                  </p>
                  <p>
                    <a href="tel:+27769724559" className="transition-colors hover:text-white">
                      076 972 4559
                    </a>
                  </p>
                  <p>
                    <ContactWhatsAppLink
                      href="https://wa.me/27769724559?text=Hi%20Frank,%20I%20want%20to%20discuss%20my%20project"
                      className="transition-colors hover:text-white"
                    >
                      WhatsApp Frank directly →
                    </ContactWhatsAppLink>
                  </p>
                  <p>Johannesburg, Gauteng, South Africa</p>
                  <p className="text-zinc-500">Remote-first operations</p>
                </address>
              </div>

              <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Before You Write
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Include your business name, service area (e.g. Sandton, Alberton), current website
                  URL if you have one, and where pipeline is leaking: visibility, conversion, or paid
                  traffic.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href="/pricing"
                    className="rounded-sm border border-zinc-800 bg-black/40 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
                  >
                    View Pricing
                  </Link>
                  <Link
                    href="/process"
                    className="rounded-sm border border-zinc-800 bg-black/40 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
                  >
                    Our Process
                  </Link>
                  <Link
                    href="/case-studies"
                    className="rounded-sm border border-zinc-800 bg-black/40 px-3 py-1.5 text-xs text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
                  >
                    Case Studies
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-center md:p-12">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Prefer To See Proof First?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-zinc-400">
              Read how we diagnosed pipeline problems for panel beaters, tyre shops, B2B suppliers,
              and wealth advisors. Then decide if we are the right fit.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200"
              >
                Read Case Studies
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
