// src/components/sections/Blueprint.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const Blueprint = () => {
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
      { threshold: 0.1 }
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
    <section id="blueprint" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Digital Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <header ref={addToRefs} className="text-center mb-20 max-w-4xl mx-auto scroll-observed">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
              Performance Engineered Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-heading bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            The Johannesburg Dominance Blueprint
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our disciplined, <span className="text-cyan-400 font-semibold">3-step process</span> engineers Johannesburg search intent into paying customers. We build digital assets that own the local map.
          </p>
        </header>

        {/* Timeline Section */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Connection Line for Desktop */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-cyan-400/70 to-cyan-500/50 hidden md:block"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-cyan-400/20 blur-sm"></div>
          </div>

          {/* Step 1: Elite Performance Foundation */}
          <div ref={addToRefs} className="md:flex md:items-center w-full mb-20 md:space-x-12 relative scroll-observed">
            <div className="md:w-5/12 md:text-right">
              <div className="group relative p-8 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-sm border border-cyan-500/40 rounded-xl shadow-2xl shadow-cyan-500/10 mb-8 md:mb-0 transition-all duration-500 hover:border-cyan-400/60 hover:shadow-cyan-400/20 hover:-translate-y-2">
                {/* Glowing Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Performance Metrics Visualization */}
                <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
                  <div className="flex items-end gap-1 h-12">
                    <div className="w-2 bg-cyan-400 h-8 rounded-t"></div>
                    <div className="w-2 bg-cyan-500 h-10 rounded-t"></div>
                    <div className="w-2 bg-cyan-400 h-12 rounded-t"></div>
                    <div className="w-2 bg-cyan-500 h-8 rounded-t"></div>
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-end gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Foundation Layer</span>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold mb-4 font-heading text-white group-hover:text-cyan-300 transition-colors">
                    1. Elite Performance Foundation
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    We engineer for <strong className="text-cyan-400 font-semibold">sub-second load times</strong> and flawless mobile execution. Google rewards speed, especially for &quot;near me&quot; searches originating in Johannesburg. By optimizing <span className="text-cyan-300">Core Web Vitals (LCP, INP, CLS)</span> from day one, your site doesn&apos;t just compete; it <span className="text-cyan-400 font-semibold">dominates performance rankings</span>. This isn&apos;t just speed; it&apos;s a competitive weapon.
                  </p>

                  {/* Performance Indicators */}
                  <div className="mt-6 flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-400">LCP &lt; 1.2s</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-400">Mobile-First</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step Indicator */}
            <div className="md:w-2/12 hidden md:block text-center z-10 relative">
              <div className="relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full text-white flex items-center justify-center font-extrabold text-2xl shadow-2xl shadow-cyan-500/50 ring-4 ring-cyan-500/30 border-2 border-cyan-400/50">
                  1
                </div>
                {/* Glowing Pulse Effect */}
                <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full bg-cyan-400/30 animate-ping"></div>
              </div>
            </div>
            
            <div className="md:w-5/12 hidden md:block"></div>
          </div>

          {/* Step 2: Hyper-Local SEO Architecture */}
          <div
            ref={addToRefs}
            className="md:flex md:items-center w-full mb-20 md:space-x-12 md:flex-row-reverse relative scroll-observed"
          >
            <div className="md:w-5/12 md:text-left">
              <div className="group relative p-8 bg-gradient-to-br from-cyan-900/30 via-black/80 to-cyan-900/30 backdrop-blur-sm border-2 border-cyan-500/50 rounded-xl shadow-2xl shadow-cyan-500/20 mb-8 md:mb-0 transition-all duration-500 hover:border-cyan-400 hover:shadow-cyan-400/30 hover:-translate-y-2">
                {/* Glowing Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                
                {/* Network Nodes Visualization */}
                <div className="absolute top-4 left-4 opacity-40 group-hover:opacity-70 transition-opacity">
                  <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="2" fill="currentColor" />
                    <circle cx="6" cy="6" r="1.5" fill="currentColor" />
                    <circle cx="18" cy="6" r="1.5" fill="currentColor" />
                    <circle cx="6" cy="18" r="1.5" fill="currentColor" />
                    <circle cx="18" cy="18" r="1.5" fill="currentColor" />
                    <line x1="12" y1="12" x2="6" y2="6" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    <line x1="12" y1="12" x2="18" y2="6" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    <line x1="12" y1="12" x2="6" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                    <line x1="12" y1="12" x2="18" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Precision Targeting</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold mb-4 font-heading text-cyan-400">
                    2. Hyper-Local SEO Architecture
                  </h3>
                  
                  <p className="text-gray-200 text-lg leading-relaxed">
                    Generic SEO fails locally. We meticulously map your services to <strong className="text-cyan-300 font-semibold">specific Johannesburg suburbs and search queries</strong> (e.g., &quot;plumber Sandton,&quot; &quot;electrician Randburg&quot;). Every service page is engineered to be the <span className="text-cyan-400 font-semibold">definitive answer</span> for a local customer in their moment of need. It&apos;s precision targeting that drives qualified, local leads.
                  </p>

                  {/* Location Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">Sandton</span>
                    <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">Randburg</span>
                    <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">Midrand</span>
                    <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30">+ More</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step Indicator */}
            <div className="md:w-2/12 hidden md:block text-center z-10 relative">
              <div className="relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full text-white flex items-center justify-center font-extrabold text-2xl shadow-2xl shadow-cyan-500/50 ring-4 ring-cyan-500/30 border-2 border-cyan-400/50">
                  2
                </div>
                <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full bg-cyan-400/30 animate-ping"></div>
              </div>
            </div>
            
            <div className="md:w-5/12 hidden md:block"></div>
          </div>

          {/* Step 3: Map Pack Dominance & Authority Building */}
          <div
            ref={addToRefs}
            className="md:flex md:items-center w-full md:space-x-12 relative scroll-observed"
          >
            <div className="md:w-5/12 md:text-right">
              <div className="group relative p-8 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-sm border border-cyan-500/40 rounded-xl shadow-2xl shadow-cyan-500/10 mb-8 md:mb-0 transition-all duration-500 hover:border-cyan-400/60 hover:shadow-cyan-400/20 hover:-translate-y-2">
                {/* Glowing Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Growth Arrow Visualization */}
                <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
                  <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-end gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Authority Layer</span>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold mb-4 font-heading text-white group-hover:text-cyan-300 transition-colors">
                    3. Map Pack Dominance & Authority Building
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Visibility isn&apos;t enough; <span className="text-cyan-400 font-semibold">trust converts</span>. We establish your authority through expert <span className="text-cyan-300">Google Business Profile (GBP) optimization</span> and a system for generating consistent, high-quality reviews. This strategy secures placement in the lucrative <strong className="text-cyan-400 font-semibold">Google Map Pack</strong> – the primary source of high-intent local leads.
                  </p>

                  {/* Trust Indicators */}
                  <div className="mt-6 flex items-center justify-end gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-400">GBP Optimized</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-400">Review System</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step Indicator */}
            <div className="md:w-2/12 hidden md:block text-center z-10 relative">
              <div className="relative">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full text-white flex items-center justify-center font-extrabold text-2xl shadow-2xl shadow-cyan-500/50 ring-4 ring-cyan-500/30 border-2 border-cyan-400/50">
                  3
                </div>
                <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full bg-cyan-400/30 animate-ping"></div>
              </div>
            </div>
            
            <div className="md:w-5/12 hidden md:block"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center px-4 sm:px-0 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 rounded-2xl blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-semibold">
              Ready to execute this blueprint for your Johannesburg business?
            </p>
            <Link
              href="/process"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-extrabold py-4 px-8 md:py-5 md:px-12 rounded-lg shadow-2xl shadow-cyan-500/30 border-2 border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-400/50 uppercase text-sm sm:text-base md:text-lg tracking-wider"
            >
              <span>View Complete Process</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blueprint;
