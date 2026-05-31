"use client";

import React from 'react';
import { trackFormSubmission } from '@/lib/analytics';

const inputClassName =
  'w-full rounded-sm border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-zinc-500';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitMessage, setSubmitMessage] = React.useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    const form = event.currentTarget;

    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      website: formData.get('website') ?? '',
      source: 'contact-form',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
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
        trackFormSubmission();

        setSubmitMessage({
          type: 'success',
          text:
            result.message ||
            'Thank you! Your inquiry has been sent. We will be in touch within 24 hours.',
        });
        form.reset();
      } else {
        setSubmitMessage({
          type: 'error',
          text: result.error
            ? `${result.error}${result.details ? ` (${result.details})` : ''}`
            : `Something went wrong (${response.status}). Please try again or contact us directly.`,
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      const details = error instanceof Error ? error.message : 'Unknown network error';
      setSubmitMessage({
        type: 'error',
        text: `Failed to send your inquiry (${details}). Please try again or contact us directly at hello@endpointmedia.co.za`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full max-w-2xl rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-left">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">Inquiry Form</p>
      <h3 className="mt-2 text-2xl font-semibold text-white">Send Us a Message</h3>
      <form onSubmit={handleSubmit} method="POST" className="relative mt-6 space-y-5">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm text-zinc-400">
            Your Full Name <span className="text-zinc-600">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            placeholder="e.g. John Doe"
            className={inputClassName}
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm text-zinc-400">
            Email Address <span className="text-zinc-600">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            placeholder="e.g. hello@business.co.za"
            className={inputClassName}
            required
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block text-sm text-zinc-400">
            Phone Number
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            placeholder="e.g. 076 972 4559"
            className={inputClassName}
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="mb-1.5 block text-sm text-zinc-400">
            What can we help you achieve? <span className="text-zinc-600">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell us about your business, your goals, and your service area (e.g., Sandton, Randburg)."
            className={inputClassName}
            required
            aria-required="true"
          />
        </div>

        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input
            type="text"
            id="contact-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            defaultValue=""
          />
        </div>

        {submitMessage && (
          <div
            role={submitMessage.type === 'error' ? 'alert' : 'status'}
            aria-live="polite"
            className={`rounded-sm border p-4 text-sm ${
              submitMessage.type === 'success'
                ? 'border-emerald-800/40 bg-emerald-950/20 text-emerald-200'
                : 'border-red-800/40 bg-red-950/20 text-red-200'
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-sm bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Send My Inquiry'}
        </button>
      </form>
    </div>
  );
}
