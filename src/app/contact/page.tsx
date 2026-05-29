import React from 'react';
import dynamic from 'next/dynamic';
import ContactWhatsAppLink from '@/app/contact/ContactWhatsAppLink';

export const revalidate = 86400;

const ContactForm = dynamic(() => import('@/app/contact/ContactForm'), {
  loading: () => <div className="min-h-[480px] animate-pulse bg-charcoal/5" />,
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Contact Endpoint Media
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Ready to stop building brochures and start building a lead-generating asset?
            Connect with Frank Smit directly for a focused consultation. We specialize in transforming
            Johannesburg service businesses into market leaders through hyper-optimized web architecture.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-stretch">
            <div className="lg:col-span-1 space-y-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-teal-500 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">Our Details</h2>
                <address className="not-italic space-y-2">
                  <p className="font-semibold text-gray-900">Endpoint Media</p>
                  <p className="text-gray-600">Frank Smit, Founder</p>
                  <p>
                    <a href="mailto:hello@endpointmedia.co.za" className="text-teal-600 hover:text-teal-800 transition">
                      hello@endpointmedia.co.za
                    </a>
                  </p>
                  <p>
                    <a href="tel:+27769724559" className="text-teal-600 hover:text-teal-800 transition">
                      076 972 4559
                    </a>
                    {' · '}
                    <ContactWhatsAppLink
                      href="https://wa.me/27769724559?text=Hi%20Frank,%20I%20want%20to%20discuss%20my%20project"
                      className="text-teal-600 hover:text-teal-800 transition"
                    >
                      WhatsApp
                    </ContactWhatsAppLink>
                  </p>
                  <p className="text-gray-600">Johannesburg, Gauteng, South Africa (Remote Operations)</p>
                </address>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  As a premium digital architecture firm focused on high-performance projects, we operate a remote-first model. This means zero agency overhead and a direct, transparent working relationship with the expert (Frank Smit) handling your project from strategy to launch. We look forward to partnering with your Johannesburg service business to achieve market dominance.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
