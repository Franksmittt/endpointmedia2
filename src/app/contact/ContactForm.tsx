"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { trackFormSubmission } from '@/lib/analytics';

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

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        trackFormSubmission();

        setSubmitMessage({
          type: 'success',
          text:
            result.message ||
            'Thank you! Your inquiry has been sent. We will be in touch within 24 hours.',
        });
        event.currentTarget.reset();
      } else {
        setSubmitMessage({
          type: 'error',
          text:
            result.error ||
            'Something went wrong. Please try again or contact us directly.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Failed to send your inquiry. Please try again or contact us directly at hello@endpointmedia.co.za',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-2xl text-left max-w-2xl mx-auto border-t-4 border-gray-900 h-full">
      <h3 className="text-3xl font-bold font-heading mb-6 text-gray-900">Send Us an Inquiry</h3>
      <form onSubmit={handleSubmit} method="POST" className="space-y-6">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Full Name <span className="text-red-500">*</span>
          </label>
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

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
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

        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            placeholder="e.g. 076 972 4559"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
            What can we help you achieve? <span className="text-red-500">*</span>
          </label>
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

        <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
          <label htmlFor="honeypot">Do not fill this out if you&apos;re human:</label>
          <input type="text" id="honeypot" name="honeypot" tabIndex={-1} autoComplete="off" />
        </div>

        {submitMessage && (
          <div
            className={`p-4 rounded-lg ${
              submitMessage.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-4 px-6 rounded-lg transition duration-300 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 uppercase tracking-wider shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send My Inquiry'}
        </Button>
      </form>
    </div>
  );
}
