// src/app/contact/page.tsx
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  
  // Basic form submission handler (replace with actual logic)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    // Placeholder logic:
    console.log("Contact form submitted!");
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
    alert("Thank you! Your inquiry has been sent. We will be in touch within 24 hours.");
    event.currentTarget.reset();
  };

  return (
    <>
      {/* Hero Section for Contact Page */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Contact Endpoint Media
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            [cite_start]Ready to stop building brochures and start building a **lead-generating asset**? [cite: 12364]
            Connect with Frank Smit directly for a focused consultation. We specialize in transforming 
            [cite_start]Johannesburg service businesses into market leaders through hyper-optimized web architecture. [cite: 12365]
          </p>
        </div>
      </section>

      {/* Main Content and Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          
          <div className="grid lg:grid-cols-3 gap-16 items-stretch">
            
            {/* Contact Info Column */}
            <div className="lg:col-span-1 space-y-8 p-6 bg-white rounded-xl shadow-lg border-t-4 border-teal-500 flex flex-col justify-between">
              <div>
                [cite_start]<h2 className="text-2xl font-bold font-heading text-gray-900 mb-4">Our Details [cite: 12366]</h2>
                <div className="space-y-4">
                  
                  {/* Name and Title */}
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    <div>
                      <p className="font-semibold text-gray-700">Founder</p>
                      [cite_start]<p className="text-gray-600">Frank Smit [cite: 12368]</p>
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13l-9-9V7l9 5 9-5v5z"></path></svg>
                    <div>
                      <p className="font-semibold text-gray-700">Email Inquiry</p>
                      [cite_start]<a href="mailto:hello@endpointmedia.co.za" className="text-teal-600 hover:text-teal-800 transition">hello@endpointmedia.co.za [cite: 12371]</a>
                    </div>
                  </div>
                  
                  {/* Phone Field */}
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <div>
                      <p className="font-semibold text-gray-700">Call/WhatsApp</p>
                      [cite_start]<a href="tel:+27769724559" className="text-teal-600 hover:text-teal-800 transition">076 972 4559 [cite: 12373]</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <div>
                      <p className="font-semibold text-gray-700">Office</p>
                      [cite_start]<p className="text-gray-600">Johannesburg, Gauteng, SA (Online/Remote) [cite: 12375]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer text - Now at the bottom of the stretched column */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  [cite_start]As a dedicated freelancer focused on high-performance projects, I operate a remote-first model. [cite: 12377] [cite_start]This means **zero agency overhead** and a direct, transparent working relationship with the expert (Frank Smit) handling your project from strategy to launch. [cite: 12377] [cite_start]We look forward to partnering with your Johannesburg service business to achieve market dominance. [cite: 12378]
                </p>
              </div>
            </div>

            {/* Form Column (Larger on Desktop) */}
            <div className="lg:col-span-2">
              <div className="p-8 bg-white rounded-xl shadow-2xl text-left max-w-2xl mx-auto border-t-4 border-gray-900 h-full">
                [cite_start]<h3 className="text-3xl font-bold font-heading mb-6 text-gray-900">Send Us an Inquiry [cite: 12380]</h3>
                <form onSubmit={handleSubmit} method="POST" action="YOUR_FORM_ENDPOINT" className="space-y-6">
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Your Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="e.g. John Doe"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      required
                      aria-required="true"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="e.g. hello@business.co.za"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      required
                      aria-required="true"
                    />
                  </div>
                  
                  {/* Phone Field */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="e.g. 076 972 4559"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">What can we help you achieve? <span className="text-red-500">*</span></label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your business, your goals, and your service area (e.g., Sandton, Randburg)."
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      required
                      aria-required="true"
                    />
                  </div>
                  
                  {/* Honeypot Field for basic spam protection */}
                  <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                    <label htmlFor="honeypot">Do not fill this out if you&apos;re human:</label>
                    <input type="text" id="honeypot" name="honeypot" tabIndex={-1} autoComplete="off" />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-6 rounded-lg transition duration-300 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 uppercase tracking-wider shadow-lg"
                  >
                    [cite_start]Send My Inquiry [cite: 12395]
                  </Button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;