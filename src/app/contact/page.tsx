import React from 'react';
import dynamic from 'next/dynamic';
import ContactWhatsAppLink from '@/app/contact/ContactWhatsAppLink';
import { PageHero, PageSection } from '@/components/layout/page-ui';

export const revalidate = 86400;

const ContactForm = dynamic(() => import('@/app/contact/ContactForm'), {
  loading: () => <div className="min-h-[480px] animate-pulse rounded-sm border border-zinc-800 bg-zinc-950/40" />,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Start The Conversation."
        description="Ready to stop building brochures and start building a lead-generating asset? Connect with Frank Smit directly for a focused consultation on architecture, SEO, and paid search."
        primaryCta={{ href: '#contact-form', label: 'Send a message' }}
        secondaryCta={{ href: '/services/google-ads', label: 'Explore Google Ads' }}
      />

      <PageSection tone="zinc">
        <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-12">
          <div className="rounded-sm border border-zinc-800 bg-black/40 p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white">Our Details</h2>
            <address className="mt-4 space-y-2 not-italic text-sm text-zinc-400">
              <p className="font-semibold text-zinc-200">Endpoint Media</p>
              <p>Frank Smit, Founder</p>
              <p>
                <a href="mailto:hello@endpointmedia.co.za" className="transition-colors hover:text-white">
                  hello@endpointmedia.co.za
                </a>
              </p>
              <p>
                <a href="tel:+27769724559" className="transition-colors hover:text-white">
                  076 972 4559
                </a>
                {' · '}
                <ContactWhatsAppLink
                  href="https://wa.me/27769724559?text=Hi%20Frank,%20I%20want%20to%20discuss%20my%20project"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp
                </ContactWhatsAppLink>
              </p>
              <p>Johannesburg, Gauteng, South Africa (Remote Operations)</p>
            </address>
            <p className="mt-6 border-t border-zinc-800 pt-6 text-sm leading-relaxed text-zinc-500">
              As a premium digital architecture firm focused on high-performance projects, we operate a
              remote-first model. That means zero agency overhead and a direct, transparent working
              relationship with the expert handling your project from strategy to launch.
            </p>
          </div>

          <div className="lg:col-span-2" id="contact-form">
            <ContactForm />
          </div>
        </div>
      </PageSection>
    </>
  );
}
