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

      {/* Featured Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
              Featured Case Studies
            </h2>
            <p className="text-lg text-gray-600">
              Deep dives into how we engineered high-performance websites that drive real results for service businesses.
            </p>
          </header>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
            
            {/* Case Study Card: Rhino Panel Beaters */}
            <Link 
              href="/case-studies/rhino-panel-beaters"
              className="group bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition duration-300 hover:shadow-2xl hover:border-teal-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
                <span className="text-white text-4xl font-extrabold font-heading">Rhino</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full">Panel Beaters</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Zululand</span>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3 text-gray-900 group-hover:text-teal-600 transition">
                  Rhino Panel Beaters
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  High-performance conversion-focused website built with Next.js, featuring a multi-step quote engine, local SEO optimization, and trust-building authority elements.
                </p>
                <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700 transition">
                  View Case Study
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Case Study Card: Alberton Battery Mart */}
            <Link 
              href="/case-studies/alberton-battery-mart"
              className="group bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition duration-300 hover:shadow-2xl hover:border-orange-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-orange-900 to-orange-700 flex items-center justify-center">
                <span className="text-white text-3xl font-extrabold font-heading text-center px-4">Alberton<br />Battery Mart</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">Battery Retail</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Alberton</span>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3 text-gray-900 group-hover:text-orange-600 transition">
                  Alberton Battery Mart
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Ground-up strategic overhaul with advanced product search, local SEO dominance, Google Merchant Center integration, and over 30 targeted blog posts.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition">
                  View Case Study
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Case Study Card: Maverick Painting Contractors */}
            <Link 
              href="/case-studies/maverick-painting-contractors"
              className="group bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition duration-300 hover:shadow-2xl hover:border-purple-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center">
                <span className="text-white text-3xl font-extrabold font-heading text-center px-4">Maverick<br />Painting</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Commercial Painting</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Premium</span>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3 text-gray-900 group-hover:text-purple-600 transition">
                  Maverick Painting Contractors
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Premium repositioning as a risk-averse partner for commercial and body corporate assets, featuring Independent QA guarantees and technical authority content.
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-700 transition">
                  View Case Study
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Case Study Card: QJ Paint World */}
            <Link 
              href="/case-studies/qj-paint-world"
              className="group bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition duration-300 hover:shadow-2xl hover:border-red-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-red-900 to-slate-700 flex items-center justify-center">
                <span className="text-white text-3xl font-extrabold font-heading text-center px-4">QJ Paint<br />World</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">Technical Supplier</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">B2B Focus</span>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3 text-gray-900 group-hover:text-red-600 transition">
                  QJ Paint World
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Expert Technical Supplier positioning across Decorative, Automotive, and Industrial coatings with Trade Partner Program and advanced B2B navigation.
                </p>
                <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition">
                  View Case Study
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Case Study Card: Alberton Tyre Clinic */}
            <Link 
              href="/case-studies/alberton-tyre-clinic"
              className="group bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition duration-300 hover:shadow-2xl hover:border-emerald-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-emerald-900 to-teal-700 flex items-center justify-center">
                <span className="text-white text-3xl font-extrabold font-heading text-center px-4">Alberton<br />Tyre Clinic</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Tyre & Safety</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Family Heritage</span>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3 text-gray-900 group-hover:text-emerald-600 transition">
                  Alberton Tyre Clinic
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Strategic pivot to a Safety-Driven Vehicle Maintenance Center, leveraging 36-year family heritage, FREE safety assessments, and trust-based positioning against national chains.
                </p>
                <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition">
                  View Case Study
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Case Study Card: Sakana no Ichi */}
            <Link 
              href="/case-studies/sakana-no-ichi"
              className="group bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition duration-300 hover:shadow-2xl hover:border-amber-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-gray-900 to-amber-900 flex items-center justify-center">
                <span className="text-white text-2xl font-extrabold font-heading text-center px-4">Sakana<br />no Ichi<br /><span className="text-sm font-normal">魚の市</span></span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">Luxury Brand</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Premium Lifestyle</span>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3 text-gray-900 group-hover:text-amber-600 transition">
                  Sakana no Ichi
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  Complete brand development transforming Koi fish food into a premium luxury lifestyle experience, featuring Japanese aesthetic principles, mindful ritual positioning, and sophisticated design system.
                </p>
                <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700 transition">
                  View Case Study
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Placeholder for future case studies */}
            <div className="bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 p-12 flex flex-col items-center justify-center text-center">
              <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              <p className="text-gray-500 font-medium">More Case Studies Coming Soon</p>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <header className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
              Client Testimonials
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