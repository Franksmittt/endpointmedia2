// src/components/sections/Problem.tsx
"use client"; 

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
// Import Button for primary CTA
import { Button } from '@/components/ui/button'; 

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
    // CHANGE: Use a high-contrast white background to make the cards pop.
    <section id="problem" className="py-24 bg-white text-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Header Section: Set the high-level pain point */}
        <header ref={addToRefs} className="text-center mb-16 max-w-4xl mx-auto scroll-observed">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-heading">
            The Truth: An Underperforming Website is a Hidden Expense.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If your site isn&apos;t actively generating leads and making your phone ring, it&apos;s not an asset. It&apos;s an online expense. You are losing revenue every single day.
          </p>
        </header>

        {/* Grid Section: VISUAL REVAMP - Neubrutalist Cards for Impact */}
        <div className="grid lg:grid-cols-3 gap-10">
          
          {/* Card 1: Art Project Trap */}
          <div 
            ref={addToRefs} 
            className="scroll-observed p-8 bg-gray-50 border-4 border-gray-900 shadow-neubrutal transform transition duration-300 hover:shadow-neubrutal-accent hover:-translate-y-1"
          >
            <h3 className="text-3xl font-extrabold mb-3 font-heading text-gray-900">The &quot;Looks Good, Does Nothing&quot; Trap</h3>
            <p className="text-gray-700 text-lg mb-4">
              You invested in a visually appealing website... that delivers **zero ROI**. No calls, no form submissions, just silence. It&apos;s an expensive digital brochure collecting virtual dust.
            </p>
            <Link href="/services" className="text-teal-600 font-semibold hover:text-teal-800 transition duration-300 flex items-center mt-4">
              See How We Engineer ROI &rarr;
            </Link>
          </div>
          
          {/* Card 2: Local Invisibility (Most important pain point) */}
          <div 
            ref={addToRefs} 
            className="scroll-observed p-8 bg-gray-900 text-white border-4 border-teal-500 shadow-neubrutal-accent transform transition duration-300 hover:shadow-neubrutal hover:-translate-y-1 lg:mt-8"
          >
            <h3 className="text-3xl font-extrabold mb-3 font-heading text-teal-500">Invisible in Johannesburg</h3>
            <p className="text-gray-300 text-lg mb-4">
              Your potential customers in **Sandton, Randburg, and Midrand** are searching online *right now*. If your site isn&apos;t on Google&apos;s first page, especially in the **Map Pack**, you are invisible. They are finding—and paying—your competitors.
            </p>
            <Link href="/process" className="text-white font-semibold hover:text-teal-400 transition duration-300 flex items-center mt-4">
              View Our Dominance Blueprint &rarr;
            </Link>
          </div>
          
          {/* Card 3: Agency Disappointment (Ally Fears) */}
          <div 
            ref={addToRefs} 
            className="scroll-observed p-8 bg-gray-50 border-4 border-gray-900 shadow-neubrutal transform transition duration-300 hover:shadow-neubrutal-accent hover:-translate-y-1"
          >
            <h3 className="text-3xl font-extrabold mb-3 font-heading text-gray-900">The Agency Disappointment</h3>
            <p className="text-gray-700 text-lg mb-4">
              You&apos;ve been burned by faceless agencies and broken promises. **It&apos;s not your fault** you have an underperforming website. You needed a dedicated partner truly invested in *your* business results.
            </p>
            <Link href="/case-studies" className="text-teal-600 font-semibold hover:text-teal-800 transition duration-300 flex items-center mt-4">
              Meet Your Partner (Case Studies) &rarr;
            </Link>
          </div>
        </div>

        {/* Footer CTA Section: High-Contrast and Action-Oriented */}
        <div ref={addToRefs} className="mt-20 text-center scroll-observed">
          <p className="text-2xl max-w-4xl mx-auto text-gray-800 mb-8 font-semibold">
            Stop accepting an ineffective online presence. Your expertise deserves a website that works as hard as you do.
          </p>
          {/* Primary CTA Button - Using full Button component */}
          <Button asChild 
            className="bg-red-600 hover:bg-red-700 text-white font-extrabold py-4 px-12 rounded-lg shadow-neubrutal-accent border-4 border-gray-900 transition duration-300 transform hover:scale-105 uppercase text-lg tracking-wider focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:ring-red-500"
          >
            <Link href="#audit">
              Diagnose My Website Problem
            </Link>
          </Button>
        </div>
    
      </div>
    </section>
  );
};

export default Problem;