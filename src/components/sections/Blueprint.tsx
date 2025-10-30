// src/components/sections/Blueprint.tsx
"use client";

import React, { useEffect, useRef } from 'react';

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
    <section id="blueprint" className="py-24 bg-gray-100 border-t border-b border-gray-200">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <header ref={addToRefs} className="text-center mb-16 max-w-3xl mx-auto scroll-observed">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-900 font-heading">
            The Johannesburg Dominance Blueprint
          </h2>
          <p className="text-xl text-gray-600">
            Our disciplined, 3-step process engineers **Johannesburg search intent** into paying customers. We build digital assets that own the local map.
          </p>
        </header>

        {/* Timeline Section */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line for Desktop */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-teal-500/30 hidden md:block" 
            aria-hidden="true"
          ></div>

          {/* Step 1 */}
          <div ref={addToRefs} className="md:flex md:items-center w-full mb-16 md:space-x-12 relative scroll-observed">
            <div className="md:w-5/12 md:text-right">
              <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-teal-500 mb-8 md:mb-0 transition duration-300 hover:shadow-xl hover:border-teal-600 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-3 font-heading text-gray-900">1. Elite Performance Foundation</h3>
                <p className="text-gray-700">
                  We engineer for <strong className="text-teal-700 font-semibold">sub-second load times</strong> and flawless mobile execution. Google rewards speed, especially for &quot;near me&quot; searches originating in Johannesburg. By optimizing Core Web Vitals (like LCP) from day one, your site doesn&apos;t just compete; it dominates performance rankings. This isn&apos;t just speed; it&apos;s a competitive weapon.
                </p>
              </div>
            </div>
            {/* Step Indicator */}
            <div className="md:w-2/12 hidden md:block text-center z-10"> 
              <div className="w-12 h-12 mx-auto bg-teal-500 rounded-full text-white flex items-center justify-center font-extrabold text-xl shadow-xl ring-8 ring-gray-100">1</div>
            </div>
            <div className="md:w-5/12 hidden md:block"></div> 
          </div>

          {/* Step 2 */}
          <div
            ref={addToRefs}
            className="md:flex md:items-center w-full mb-16 md:space-x-12 md:flex-row-reverse relative scroll-observed"
          >
            <div className="md:w-5/12 md:text-left">
              <div className="p-8 bg-gray-900 text-white rounded-xl shadow-lg border-r-4 border-blue-500 mb-8 md:mb-0 transition duration-300 hover:shadow-xl hover:border-blue-600 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-3 font-heading">2. Hyper-Local SEO Architecture</h3>
                <p className="text-gray-300">
                  Generic SEO fails locally. We meticulously map your services to <strong className="text-blue-400 font-semibold">specific Johannesburg suburbs and search queries</strong> (e.g., &quot;plumber Sandton,&quot; &quot;electrician Randburg&quot;). Every service page is engineered to be the definitive answer for a local customer in their moment of need. It&apos;s precision targeting that drives qualified, local leads.
                </p>
              </div>
            </div>
             {/* Step Indicator */}
            <div className="md:w-2/12 hidden md:block text-center z-10"> 
              <div className="w-12 h-12 mx-auto bg-blue-500 rounded-full text-white flex items-center justify-center font-extrabold text-xl shadow-xl ring-8 ring-gray-100">2</div>
            </div>
            <div className="md:w-5/12 hidden md:block"></div> 
          </div>

          {/* Step 3 */}
          <div
            ref={addToRefs}
            className="md:flex md:items-center w-full md:space-x-12 relative scroll-observed"
          >
            <div className="md:w-5/12 md:text-right">
              <div className="p-8 bg-white rounded-xl shadow-lg border-l-4 border-teal-500 mb-8 md:mb-0 transition duration-300 hover:shadow-xl hover:border-teal-600 transform hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-3 font-heading text-gray-900">3. Map Pack Dominance &amp; Authority Building</h3>
                <p className="text-gray-700">
                  Visibility isn&apos;t enough; trust converts. We establish your authority through expert **Google Business Profile (GBP) optimization** and a system for generating consistent, high-quality reviews. This strategy secures placement in the lucrative <strong className="text-teal-700 font-semibold">Google Map Pack</strong> – the primary source of high-intent local leads.
                </p>
              </div>
            </div>
             {/* Step Indicator */}
            <div className="md:w-2/12 hidden md:block text-center z-10"> 
              <div className="w-12 h-12 mx-auto bg-teal-500 rounded-full text-white flex items-center justify-center font-extrabold text-xl shadow-xl ring-8 ring-gray-100">3</div>
            </div>
            <div className="md:w-5/12 hidden md:block"></div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blueprint;