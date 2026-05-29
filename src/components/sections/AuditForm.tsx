'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { trackFreeAudit } from '@/lib/analytics';

export function AuditForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    trackFreeAudit();

    alert('Thank you! Your audit is secured. We will be in touch shortly.');
    event.currentTarget.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      action="YOUR_FORM_ENDPOINT"
      className="bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-sm border-2 border-cyan-500/40 p-6 sm:p-8 rounded-xl text-white shadow-2xl shadow-cyan-500/10 text-left mx-auto lg:ml-auto lg:mr-0 relative"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

      <h3 className="text-2xl font-bold font-heading mb-6 text-center text-white">Get Your Free Audit & Mockup</h3>
      <input type="hidden" name="source" value="Website Audit Form" />

      <div className="space-y-4">
        <div>
          <label htmlFor="audit-name" className="block text-sm font-medium text-gray-300 mb-1">Your Name <span className="text-red-400">*</span></label>
          <input
            type="text"
            id="audit-name"
            name="name"
            placeholder="e.g. Sarah Connor"
            className="w-full p-3 bg-gray-800/50 border border-cyan-500/30 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-colors"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="audit-business" className="block text-sm font-medium text-gray-300 mb-1">Business Name <span className="text-red-400">*</span></label>
          <input
            type="text"
            id="audit-business"
            name="business_name"
            placeholder="e.g. Cyberdyne Systems"
            className="w-full p-3 bg-gray-800/50 border border-cyan-500/30 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-colors"
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="audit-email" className="block text-sm font-medium text-gray-300 mb-1">Email Address <span className="text-red-400">*</span></label>
          <input
            type="email"
            id="audit-email"
            name="email"
            placeholder="e.g. sarah@skynet.com"
            className="w-full p-3 bg-gray-800/50 border border-cyan-500/30 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-colors"
            required
            aria-required="true"
          />
        </div>
      </div>

      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <label htmlFor="honeypot">Do not fill this out if you&apos;re human:</label>
        <input type="text" id="honeypot" name="honeypot" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-8">
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold py-4 px-6 rounded-lg shadow-2xl shadow-cyan-500/30 border-2 border-cyan-400/50 transition-all duration-300 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500 uppercase tracking-wider transform hover:scale-105"
        >
          Claim My Free Audit Now
        </Button>
      </div>
    </form>
  );
}
