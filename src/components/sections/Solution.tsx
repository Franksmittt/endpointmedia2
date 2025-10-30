// src/components/sections/Solution.tsx
"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image'; 

const Solution = () => {
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
    <section id="solution" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <header ref={addToRefs} className="text-center mb-16 max-w-3xl mx-auto scroll-observed">
          <h2 className="text-4xl md:text-5xl font-extrapold tracking-tight mb-4 text-gray-900 font-heading">
            We Engineer Lead-Generating Engines for Johannesburg.
          </h2>
          <p className="text-xl text-gray-600">
           Endpoint Media focuses exclusively on **Johannesburg&apos;s** hardest-working service businesses. We are your local digital growth partner – direct, transparent, and relentlessly focused on your ROI.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={addToRefs} className="scroll-observed">
           
            <Image
              src="https://source.unsplash.com/600x400/?architectural,blueprint,strategy" 
              alt="A custom-generated architectural blueprint showing a cohesive digital strategy for web design and local SEO." 
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
              priority={false} 
              unoptimized={false}
            />
          </div>

          <div ref={addToRefs} className="scroll-observed space-y-6">
            <h3 className="text-3xl font-bold font-heading text-gray-800">Your Dedicated Johannesburg Growth Partner</h3>
            <p className="text-lg text-gray-700">
              Forget impersonal agencies.
              You get direct access and accountability. We understand the nuances of the **Johannesburg market**—from Sandton to Soweto—because we operate within it. Your success is our focus.
            </p> 
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span><strong className="font-semibold text-gray-800">Radical Transparency:</strong> A straightforward process, clear pricing, and measurable results (qualified leads, increased calls, new customers).</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span><strong className="font-semibold text-gray-800">Performance Engineered:</strong> Blazing-fast, mobile-first websites optimized to dominate **local Johannesburg Google searches** and convert visitors effectively.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span><strong className="font-semibold text-gray-800">Rapid Deployment:</strong> See a custom mockup in 48 hours. Launch your revenue-generating website in days, not months.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;