// src/app/case-studies/page.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// METADATA: Trust-building page targeting local businesses
export const metadata = {
  title: "Client Success Stories | Web Design & SEO Results | Endpoint Media Johannesburg",
  description: "See real-world examples of how Endpoint Media's web design and local SEO strategies have driven measurable growth for service businesses across Johannesburg.",
};

const CaseStudiesPage = () => {
  return (
    <>
      {/* Hero Section for Case Studies Page */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 font-heading">
            Proven Results for Johannesburg Businesses
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            We measure success by the tangible growth we deliver for our clients. Explore how our tailored web design and SEO strategies translate into real-world market dominance in Johannesburg.
          </p>
        </div>
      </section>

      {/* Case Studies / Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
              Client Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              Hear directly from service business owners who partnered with Endpoint Media to transform their online presence and accelerate growth.
            </p>
          </header>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

            {/* Testimonial 1 */}
            <blockquote className="p-10 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-xl relative border-t-4 border-teal-500">
              <p className="text-6xl font-extrabold text-teal-500/10 absolute top-2 left-4 select-none" aria-hidden="true">“</p>
              <p className="text-lg md:text-xl italic text-gray-700 mb-8 relative z-10">
                &quot;We went from being buried on page three to the <strong className='text-teal-700 font-semibold'>top of the Google Map Pack</strong> for &apos;emergency electrician Sandton&apos;. The phone rings consistently now. This isn&apos;t just a website; it&apos;s a reliable <strong className='text-teal-700 font-semibold'>lead generation engine</strong>.&quot;
              </p>
              <footer className="flex items-center">
                {/* Placeholder Avatar */}
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center font-bold text-lg mr-4 uppercase text-white">D</div>
                <div>
                  <p className="font-bold text-xl font-heading text-gray-900">David M.</p>
                  <p className="text-teal-600 text-sm">Owner, Ampere Electrical Solutions (Sandton)</p>
                </div>
              </footer>
            </blockquote>

            {/* Testimonial 2 */}
            <blockquote className="p-10 bg-white rounded-xl shadow-lg transition duration-300 hover:shadow-xl relative border-t-4 border-teal-500">
              <p className="text-6xl font-extrabold text-teal-500/10 absolute top-2 left-4 select-none" aria-hidden="true">“</p>
              <p className="text-lg md:text-xl italic text-gray-700 mb-8 relative z-10">
                &quot;I needed a professional online presence for my plumbing business but felt overwhelmed. Endpoint handled everything, explaining the process clearly. Now I receive <strong className='text-teal-700 font-semibold'>quote requests daily through the site</strong>. It&apos;s been a total game changer for projecting professionalism and attracting clients.&quot;
              </p>
              <footer className="flex items-center">
                 {/* Placeholder Avatar */}
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center font-bold text-lg mr-4 uppercase text-white">S</div>
                <div>
                  <p className="font-bold text-xl font-heading text-gray-900">Sipho N.</p>
                  <p className="text-teal-600 text-sm">Lead Plumber, Randburg Flow Plumbing (Randburg)</p>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold font-heading mb-4 text-gray-800">Ready to Be Our Next Success Story?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">Discover the untapped potential in your Johannesburg service business with a custom strategy.</p>
            <Button asChild className="bg-teal-600 hover:bg-teal-700 font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50 focus-visible:ring-teal-500">
              <Link href="/contact">Get Your Free Growth Audit</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
export default CaseStudiesPage;