'use client';

import React, { useState } from 'react';
import { trackFreeAudit } from '@/lib/analytics';

const inputClassName =
  'w-full rounded-sm border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-zinc-500';

export function AuditForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    const form = event.currentTarget;

    const formData = new FormData(form);
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

      const rawBody = await response.text();
      let result: { message?: string; error?: string; details?: string } = {};
      try {
        result = rawBody
          ? (JSON.parse(rawBody) as { message?: string; error?: string; details?: string })
          : {};
      } catch {
        result = {};
      }

      if (response.ok) {
        trackFreeAudit();
        setStatus({
          type: 'success',
          text:
            result.message ||
            'Audit secured. We will be in touch within 24 hours.',
        });
        form.reset();
      } else {
        setStatus({
          type: 'error',
          text: result.error
            ? `${result.error}${result.details ? ` (${result.details})` : ''}`
            : `Something went wrong (${response.status}). WhatsApp us at 076 972 4559.`,
        });
      }
    } catch (error) {
      const details = error instanceof Error ? error.message : 'Unknown network error';
      setStatus({
        type: 'error',
        text: `Failed to send your request (${details}). WhatsApp us at 076 972 4559.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 text-left sm:p-8"
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
        Request Audit
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-white">Get Your Free Growth Audit</h3>
      <input type="hidden" name="source" value="Website Audit Form" />

      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="audit-name" className="mb-1.5 block text-sm text-zinc-400">
            Your Name <span className="text-zinc-600">*</span>
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
          <label htmlFor="audit-business" className="mb-1.5 block text-sm text-zinc-400">
            Business Name <span className="text-zinc-600">*</span>
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
          <label htmlFor="audit-email" className="mb-1.5 block text-sm text-zinc-400">
            Email Address <span className="text-zinc-600">*</span>
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
          <label htmlFor="audit-phone" className="mb-1.5 block text-sm text-zinc-400">
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
          className={`mt-6 rounded-sm border p-4 text-sm ${
            status.type === 'success'
              ? 'border-emerald-800/40 bg-emerald-950/20 text-emerald-200'
              : 'border-red-800/40 bg-red-950/20 text-red-200'
          }`}
        >
          {status.text}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="mt-8 w-full rounded-sm bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting...' : 'Claim My Free Audit'}
      </button>
    </form>
  );
}
