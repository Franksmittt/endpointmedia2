// src/app/services/page.tsx
import React from 'react';
import Link from 'next/link';

// METADATA: Core service page with clear local intent
export const metadata = {
  title: "Web Design & SEO Services Johannesburg | Endpoint Media",
  description: "Endpoint Media offers expert web design, local SEO, Google Ads, and website maintenance services tailored for Johannesburg service businesses seeking measurable growth.",
};

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section for Services */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Digital Solutions Engineered for Johannesburg Growth
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            We provide a focused suite of services designed to transform your online presence from a cost center into a powerful revenue-generating asset for your Johannesburg service business.
          </p>
        </div>
      </section>

      {/* Main Services Overview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
              Our Core Service Offerings
            </h2>
            <p className="text-lg text-gray-600">
              Select a service below to learn how we help Johannesburg businesses like yours achieve market dominance.
            </p>
          </header>

          {/* Grid of Services (Example Structure) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Service 1: Web Design */}
            <div className="group p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 text-center">
               {/* Placeholder Icon */}
               <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
               </div>
               <h3 className="text-xl font-bold font-heading mb-2 text-gray-800 group-hover:text-teal-700 transition">
                 Performance Web Design
               </h3>
               <p className="text-gray-600 text-sm mb-4">
                 Blazing-fast, mobile-first websites engineered to convert Johannesburg visitors into leads.
               </p>
            </div>

            {/* Service 2: Local SEO */}
            <div className="group p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 text-center">
               {/* Placeholder Icon */}
               <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
               </div>
               <h3 className="text-xl font-bold font-heading mb-2 text-gray-800 group-hover:text-teal-700 transition">
                 Hyper-Local SEO
               </h3>
               <p className="text-gray-600 text-sm mb-4">
                 Dominate Google Maps and local search results across Johannesburg for your specific services.
               </p>
            </div>

             {/* Service 3: Google Ads */}
            <div className="group p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 text-center">
               {/* Placeholder Icon */}
               <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.13A14.98 14.98 0 003.47 14.37m12.12 0v4.8m-3.48-4.8a14.98 14.98 0 00-6.16-12.12A14.98 14.98 0 009.63 2.13A14.98 14.98 0 003.47 14.37m12.12 0h-4.8" /></svg>
               </div>
               <h3 className="text-xl font-bold font-heading mb-2 text-gray-800 group-hover:text-teal-700 transition">
                 Google Ads (PPC)
               </h3>
               <p className="text-gray-600 text-sm mb-4">
                 Drive immediate, high-intent leads from Johannesburg customers actively searching for your services.
               </p>
            </div>

             {/* Service 4: Maintenance */}
            <div className="group p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition duration-300 text-center">
               {/* Placeholder Icon */}
               <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
               </div>
               <h3 className="text-xl font-bold font-heading mb-2 text-gray-800 group-hover:text-teal-700 transition">
                 Website Maintenance
               </h3>
               <p className="text-gray-600 text-sm mb-4">
                 Keep your digital asset secure, updated, and performing optimally with our proactive care plans.
               </p>
            </div>

          </div>

           {/* Call to Action */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold font-heading mb-4 text-gray-800">Ready to Transform Your Online Presence?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">Let&apos;s discuss how our tailored digital solutions can drive real growth for your Johannesburg business.</p>
            <Link
              href="/contact" 
              className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 focus-visible:ring-teal-500"
            >
              Get Your Free Growth Audit
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default ServicesPage;