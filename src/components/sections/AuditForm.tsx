'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { trackFreeAudit } from '@/lib/analytics';

const inputClassName =
  'w-full p-3 bg-gray-800/50 border border-accent/30 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-accent transition-colors';

export function AuditForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const website = formData.get('website');
    if (website) {
      setIsSubmitting(false);
      return;
    }

    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const businessName = formData.get('business_name');
    const source = formData.get('source');

    const payload = {
      name,
      email,
      phone: phone || '',
      message: `[Audit Request] Business: ${businessName}`,
      source: source || 'audit-form',
      website: formData.get('website') ?? '',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        trackFreeAudit();
        setStatus({
          type: 'success',
          text:
            result.message ||
            'Audit secured. We will be in touch within 24 hours.',
        });
        event.currentTarget.reset();
      } else {
        setStatus({
          type: 'error',
          text:
            result.error ||
            'Something went wrong. WhatsApp us at 076 972 4559.',
        });
      }
    } catch {
      setStatus({
        type: 'error',
        text: 'Failed to send your request. WhatsApp us at 076 972 4559.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-sm border-2 border-accent/40 p-6 sm:p-8 rounded-xl text-white shadow-2xl shadow-accent/10 text-left mx-auto lg:ml-auto lg:mr-0 relative"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <h3 className="text-2xl font-bold font-heading mb-6 text-center text-white">Get Your Free Audit & Mockup</h3>
      <input type="hidden" name="source" value="Website Audit Form" />

      <div className="space-y-4">
        <div>
          <label htmlFor="audit-name" className="block text-sm font-medium text-gray-300 mb-1">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="audit-name"
            name="name"
            placeholder="Your full name"
            className={inputClassName}
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="audit-business" className="block text-sm font-medium text-gray-300 mb-1">
            Business Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="audit-business"
            name="business_name"
            placeholder="Your company name"
            className={inputClassName}
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="audit-email" className="block text-sm font-medium text-gray-300 mb-1">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="audit-email"
            name="email"
            placeholder="you@company.co.za"
            className={inputClassName}
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="audit-phone" className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="audit-phone"
            name="phone"
            placeholder="e.g. 076 972 4559"
            className={inputClassName}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="audit-website">Website</label>
        <input
          type="text"
          id="audit-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      {status && (
        <div
          role={status.type === 'error' ? 'alert' : 'status'}
          aria-live="polite"
          className={`mt-6 p-4 rounded-lg text-sm ${
            status.type === 'success'
              ? 'bg-green-900/40 text-green-200 border border-green-700/50'
              : 'bg-red-900/40 text-red-200 border border-red-700/50'
          }`}
        >
          {status.text}
        </div>
      )}

      <div className="mt-8">
        <Button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="w-full bg-gradient-to-r from-accent-600 to-accent hover:from-accent hover:to-accent/90 text-white font-bold py-4 px-6 rounded-lg shadow-2xl shadow-accent/30 border-2 border-accent/50 transition-all duration-300 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 focus-visible:ring-accent uppercase tracking-wider transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Submitting...' : 'Claim My Free Audit Now'}
        </Button>
      </div>
    </form>
  );
}
