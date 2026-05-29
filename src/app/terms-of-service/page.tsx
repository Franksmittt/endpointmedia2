import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description:
    'Terms of service for Endpoint Media website use, enquiries, and digital services for Johannesburg businesses.',
  path: '/terms-of-service',
  keywords: ['endpoint media terms of service', 'website terms south africa'],
});

export default function TermsOfServicePage() {
  return (
    <article className="bg-white">
      <section className="bg-gray-100 py-16 md:py-20 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold font-heading text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-gray-600">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-3xl prose prose-lg prose-gray max-w-none">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the Endpoint Media website
            located at <strong>www.endpointmedia.co.za</strong>. By accessing this site, you agree to
            these Terms.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
            Use of the website
          </h2>
          <p>
            You agree to use this website only for lawful purposes. You may not attempt to disrupt the
            site, scrape content without permission, or submit false information through our forms.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
            Services and proposals
          </h2>
          <p>
            Information on this website is for general marketing purposes. Formal scope, pricing, and
            deliverables are defined only in a signed proposal or service agreement between you and
            Endpoint Media.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
            Intellectual property
          </h2>
          <p>
            Unless otherwise agreed in writing, all website content, branding, and materials displayed
            on this site remain the property of Endpoint Media or its licensors. Client-owned assets
            provided for project work remain the client&apos;s property.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
            Limitation of liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, Endpoint Media is not liable for
            indirect, incidental, or consequential damages arising from use of this website. Search
            ranking outcomes depend on many factors outside our control.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
            Governing law
          </h2>
          <p>
            These Terms are governed by the laws of the Republic of South Africa. Any disputes shall
            be subject to the jurisdiction of South African courts.
          </p>

          <h2 className="text-2xl font-bold font-heading text-gray-900 mt-10 mb-4">
            Contact
          </h2>
          <p>
            Questions about these Terms:{' '}
            <a href="mailto:hello@endpointmedia.co.za" className="text-teal-600 font-semibold">
              hello@endpointmedia.co.za
            </a>
            .
          </p>

          <p className="mt-12 text-sm text-gray-500">
            This page is provided as boilerplate placeholder text and should be reviewed by qualified
            legal counsel before production reliance.
          </p>

          <p className="mt-8">
            <Link href="/" className="text-teal-600 font-semibold hover:text-teal-800">
              &larr; Return to homepage
            </Link>
          </p>
        </div>
      </section>
    </article>
  );
}
