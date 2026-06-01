import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';

export const dynamic = 'force-static';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy policy for Endpoint Media. How we collect, use, and protect information submitted through our website and lead forms.',
  path: '/privacy-policy',
  keywords: ['endpoint media privacy policy', 'website privacy policy south africa'],
});

export default function PrivacyPolicyPage() {
  return (
    <article className="bg-black text-zinc-300">
      <section className="border-b border-zinc-800 bg-black py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-500">Last updated: May 2026</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-3xl prose prose-lg prose-invert max-w-none">
          <p>
            Endpoint Media (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy
            describes how we handle personal information when you visit{' '}
            <strong>www.endpointmedia.co.za</strong> or contact us through our forms.
          </p>

          <h2 className="text-2xl font-bold font-heading text-white mt-10 mb-4">
            Information we collect
          </h2>
          <p>
            When you submit a contact or audit request, we may collect your name, email address,
            phone number, and any message you provide. We also collect standard technical data such
            as browser type and pages visited through analytics tools, where enabled.
          </p>

          <h2 className="text-2xl font-bold font-heading text-white mt-10 mb-4">
            How we use your information
          </h2>
          <p>
            We use your information to respond to enquiries, provide quotes, deliver services, and
            improve our website. We do not sell your personal information to third parties.
          </p>

          <h2 className="text-2xl font-bold font-heading text-white mt-10 mb-4">
            Data retention and security
          </h2>
          <p>
            We retain contact records only as long as necessary for business and legal purposes. We
            implement reasonable technical and organisational measures to protect data against
            unauthorised access.
          </p>

          <h2 className="text-2xl font-bold font-heading text-white mt-10 mb-4">
            Your rights
          </h2>
          <p>
            You may request access, correction, or deletion of your personal information by emailing{' '}
            <a href="mailto:hello@endpointmedia.co.za" className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              hello@endpointmedia.co.za
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold font-heading text-white mt-10 mb-4">
            Contact
          </h2>
          <p>
            For privacy-related questions, contact Endpoint Media at{' '}
            <a href="mailto:hello@endpointmedia.co.za" className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              hello@endpointmedia.co.za
            </a>{' '}
            or{' '}
            <a href="tel:+27769724559" className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
              076 972 4559
            </a>
            .
          </p>

          <p className="mt-12 text-sm text-zinc-500">
            This page is provided as boilerplate placeholder text and should be reviewed by qualified
            legal counsel before production reliance.
          </p>

          <p className="mt-8">
            <Link href="/" className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 hover:text-white">
              &larr; Return to homepage
            </Link>
          </p>
        </div>
      </section>
    </article>
  );
}
