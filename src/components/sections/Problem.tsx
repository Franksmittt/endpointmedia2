// src/components/sections/Problem.tsx
"use client"; 

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const Problem = () => {
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
    <section id="problem" className="py-24 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <header ref={addToRefs} className="text-center mb-16 max-w-3xl mx-auto scroll-observed">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-heading">
            Let&apos;s Be Honest About Your Website&apos;s Performance.
          </h2>
          <p className="text-xl text-gray-400">
            If your site isn&apos;t actively generating leads and making your phone ring, it&apos;s not an asset. It&apos;s an online expense. You are losing revenue every single day.
          </p>
        </header>

        {/* Grid Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1: Justify Failure (Art Project) / Confirm Suspicion */}
          <div ref={addToRefs} className="scroll-observed p-8 bg-gray-700 rounded-lg shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-bold mb-3 font-heading text-white">The &quot;Looks Good, Does Nothing&quot; Trap</h3>
            <p className="text-gray-300">
              You invested in a visually appealing website... that delivers zero ROI. No calls, no form submissions, just silence. It&apos;s an expensive digital brochure collecting virtual dust.
            </p>
          </div>
          
          {/* Card 2: Ally Fears (Local Invisibility) / Confirm Suspicion */}
          <div ref={addToRefs} className="scroll-observed p-8 bg-gray-700 rounded-lg shadow-lg border-l-4 border-red-500 lg:mt-8">
            <h3 className="text-2xl font-bold mb-3 font-heading text-white">Invisible in Johannesburg</h3>
            <p className="text-gray-300">
              Your potential customers in **Sandton, Randburg, and Midrand** are searching online *right now*. If your site isn&apos;t on Google&apos;s first page, especially in the Map Pack, you are invisible. They are finding—and paying—your competitors.
            </p>
          </div>
          
          {/* Card 3: Justify Failure (Bad Agencies) / Throw Rocks at Enemy */}
          <div ref={addToRefs} className="scroll-observed p-8 bg-gray-700 rounded-lg shadow-lg border-l-4 border-red-500">
            <h3 className="text-2xl font-bold mb-3 font-heading text-white">The Agency Disappointment</h3>
            <p className="text-gray-300">
              Maybe you&apos;ve been burned by faceless agencies, outsourced developers, and broken promises. <strong className="text-teal-400">It&apos;s not your fault you have an underperforming website.</strong> You needed a dedicated partner who was truly invested in *your* business results.
            </p>
          </div>
        </div>

        {/* Footer CTA Section: Encourage Dreams / Ally Fears */}
        <div ref={addToRefs} className="mt-16 text-center scroll-observed">
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
            Stop accepting an ineffective online presence. Your expertise deserves a website that works as hard as you do.
          </p>
          <Link
            href="#audit"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-extrabold py-3 px-10 rounded shadow-lg transform hover:scale-105 transition duration-300 uppercase text-lg tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 focus-visible:ring-white"
          >
            Diagnose My Website Problem
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Problem;