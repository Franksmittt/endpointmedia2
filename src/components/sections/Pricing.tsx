// src/components/sections/Pricing.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const Pricing = () => {
  // --- Start Intersection Observer Logic ---
  const observerRefs = useRef<(HTMLDivElement | null | HTMLElement)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); 
          }
        });
      },
      {
        threshold: 0.1, 
      }
    );

    const currentRefs = observerRefs.current.filter(ref => ref !== null);
    currentRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null | HTMLElement) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };
  // --- End Intersection Observer Logic ---


  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <header ref={addToRefs} className="text-center mb-16 max-w-3xl mx-auto scroll-observed">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">Pricing Engineered for Local ROI.</h2>
          <p className="text-xl text-gray-600">No retainers, no hidden fees. Just transparent, powerful investments designed to make your Joburg business the obvious choice.</p>
        </header>

        {/* Pricing Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">

          {/* Card 1: Foundation */}
          <div ref={addToRefs} className="scroll-observed flex flex-col p-8 bg-white rounded-xl shadow-lg border border-gray-200 transition duration-300 hover:shadow-2xl hover:border-teal-300">
            <div className="flex-grow">
              <h3 className="text-3xl font-bold font-heading mb-2 text-gray-800">Foundation</h3>
              <p className="text-gray-500 mb-6">Establish your essential, professional online footprint.</p>
              <p className="text-5xl font-extrabold mb-6 text-gray-900">R5,500 <span className="text-lg font-normal text-gray-500">once-off</span></p>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span><strong className="font-semibold">3-Page Custom Website</strong> (Home, About, Services/Contact)</span></li>
                <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span>Essential <strong className="font-semibold">Local SEO Setup</strong> &amp; Google Business Profile Optimization</span></li> 
                <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span>Mobile-First Responsive Design</span></li>
                <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span><strong className="font-semibold">Rapid 48-Hour</strong> Initial Mockup</span></li>
                <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span>Built for Speed &amp; Performance</span></li> 
              </ul>
            </div>
            <Link href="#audit" className="w-full mt-auto text-center block bg-white border-2 border-teal-600 text-teal-600 font-bold py-3 px-6 rounded-lg hover:bg-teal-600 hover:text-white transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500">Get Foundation</Link>
          </div>

          {/* Card 2: Growth Engine (Most Popular) */}
          <div
            ref={addToRefs}
            className="scroll-observed flex flex-col p-10 bg-gray-900 text-white rounded-xl shadow-2xl transform lg:scale-105 relative border-4 border-teal-500"
          >
            <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
            <div className="flex-grow">
              <h3 className="text-3xl font-bold font-heading mb-2 text-white">Growth Engine</h3>
              <p className="text-gray-300 mb-6">The complete toolkit for serious lead generation and local dominance.</p>
              <p className="text-5xl font-extrabold mb-6 text-white">R10,000 <span className="text-lg font-normal text-gray-400">once-off</span></p>
              <ul className="space-y-4 text-gray-200 mb-8">
                <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">&#10003;</span><span>Everything in Foundation, plus:</span></li>
                <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">&#10003;</span><span><strong className="font-semibold">5-7 Page Website</strong> (Incl. dedicated service pages, blog setup)</span></li>
                <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">&#10003;</span><span><strong className="font-semibold">Advanced Local SEO</strong> (Suburb targeting, schema markup)</span></li>
                <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">&#10003;</span><span>Google Analytics Setup &amp; Reporting Intro</span></li> 
                <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">&#10003;</span><span>Contact Form &amp; Social Media Integration</span></li> 
                <li className="flex items-start"><span className="text-teal-400 mr-3 mt-1 font-bold">&#10003;</span><span>Enhanced Performance Tuning</span></li>
              </ul>
            </div>
            <Link href="#audit" className="w-full mt-auto text-center block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-white">Choose Growth Engine</Link>
          </div>

          {/* Card 3: Market Leader */}
          <div
            ref={addToRefs}
            className="scroll-observed flex flex-col p-8 bg-white rounded-xl shadow-lg border border-gray-200 transition duration-300 hover:shadow-2xl hover:border-teal-300"
          >
            <div className="flex-grow">
              <h3 className="text-3xl font-bold font-heading mb-2 text-gray-800">Market Leader</h3>
              <p className="text-gray-500 mb-6">For established pros aiming for total local market saturation.</p>
              <p className="text-5xl font-extrabold mb-6 text-gray-900">R15,000 <span className="text-lg font-normal text-gray-500">once-off</span></p>
              <ul className="space-y-4 text-gray-700 mb-8">
                <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span>Everything in Growth Engine, plus:</span></li>
                <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span><strong className="font-semibold">8+ Pages</strong> &amp; Advanced Features (e.g., booking integration)</span></li> 
                <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span><strong className="font-semibold">Pro SEO Strategy</strong> &amp; Competitor Analysis Report</span></li> 
                <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span>Basic Branding Kit &amp; Social Media Launch Graphics</span></li> 
                <li className="flex items-start"><span className="text-teal-500 mr-3 mt-1">&#10003;</span><span>Priority Support &amp; Launch Training Session</span></li> 
              </ul>
            </div>
            <Link href="#audit" className="w-full mt-auto text-center block bg-white border-2 border-teal-600 text-teal-600 font-bold py-3 px-6 rounded-lg hover:bg-teal-600 hover:text-white transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500">Go Market Leader</Link>
          </div>
        </div>

        {/* Footer Text */}
        <div ref={addToRefs} className="text-center mt-16 text-gray-600 scroll-observed">
          <p className="text-lg">Not sure which is right? [cite_start]Your <Link href="#audit" className="text-teal-600 font-bold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded px-1">Free Growth Audit</Link> will clarify everything. [cite: 12610]</p>
          [cite_start]<p className="mt-2 text-sm">All packages include 1 year of free basic hosting &amp; domain name registration if needed. [cite: 12611]</p> 
        </div>
      </div>
    </section>
  );
};

export default Pricing;