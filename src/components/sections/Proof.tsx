// src/components/sections/Proof.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const Proof = () => {
  const observerRefs = useRef<(HTMLDivElement | null | HTMLElement | HTMLQuoteElement)[]>([]);
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

  const addToRefs = (el: HTMLDivElement | null | HTMLElement | HTMLQuoteElement) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };

  return (
    <section id="proof" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <header ref={addToRefs} className="text-center mb-16 max-w-3xl mx-auto scroll-observed">
          <div className="flex flex-wrap justify-center items-center space-x-8 mb-10 opacity-60 grayscale">
            <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold mr-4 mb-2 sm:mb-0 w-full sm:w-auto text-center sm:text-left">Trusted By Joburg Experts:</p>
            
            <Image 
              src="https://placehold.co/100x40/cccccc/969696?text=Client+Logo+1" 
              alt="Trusted Client Logo 1" 
              width={100}
              height={40}
              className="h-8 w-auto mb-2 sm:mb-0" 
              loading="lazy" 
              unoptimized={true}
            /> 
            
            <Image 
              src="https://placehold.co/100x40/cccccc/969696?text=Client+Logo+2" 
              alt="Trusted Client Logo 2" 
              width={100}
              height={40}
              className="h-8 w-auto mb-2 sm:mb-0" 
              loading="lazy" 
              unoptimized={true}
            /> 
            
            <Image 
              src="https://placehold.co/100x40/cccccc/969696?text=Client+Logo+3" 
              alt="Trusted Client Logo 3" 
              width={100}
              height={40}
              className="h-8 w-auto mb-2 sm:mb-0 hidden sm:inline-block" 
              loading="lazy" 
              unoptimized={true}
            /> 
            
            <Image 
              src="https://placehold.co/100x40/cccccc/969696?text=Client+Logo+4" 
              alt="Trusted Client Logo 4" 
              width={100}
              height={40}
              className="h-8 w-auto mb-2 sm:mb-0 hidden lg:inline-block" 
              loading="lazy" 
              unoptimized={true}
            />
          </div>

          <div className="inline-block mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-4 py-2 rounded-full border border-cyan-200">
              Real Results
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-heading text-gray-900">
            Real Results. Real Johannesburg Businesses.
          </h2>
          <p className="text-xl text-gray-600">
            Don&apos;t take our word for it. Hear from service champions already dominating their local market with an Endpoint Media asset.
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <blockquote ref={addToRefs} className="scroll-observed p-10 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-xl border-2 border-cyan-100 transition duration-300 hover:shadow-2xl hover:border-cyan-200 transform hover:-translate-y-2 relative">
            <div className="absolute top-4 right-4 w-12 h-12 border border-cyan-200 rounded opacity-20"></div>
            <p className="text-6xl font-extrabold text-cyan-100 absolute top-2 left-4 select-none" aria-hidden="true">&ldquo;</p>
            <p className="text-lg md:text-xl italic text-gray-700 mb-8 relative z-10">
              &quot;We went from obscurity on page three to the <strong className='text-cyan-600 font-semibold'>top of the Google Map Pack</strong> for &apos;emergency electrician Sandton&apos;. The phone rings constantly. This isn&apos;t just a website; it&apos;s a genuine <strong className='text-cyan-600 font-semibold'>lead pipeline</strong>.&quot;
            </p>
            <footer className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center font-bold text-lg mr-4 uppercase text-white shadow-lg">D</div>
              <div>
                <p className="font-bold text-xl font-heading text-gray-900">David M.</p>
                <p className="text-cyan-600 text-sm font-semibold">Owner, Ampere Electrical Solutions (Sandton)</p>
            </div>
            </footer>
          </blockquote>

          {/* Testimonial 2 */}
          <blockquote
            ref={addToRefs}
            className="scroll-observed p-10 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-xl border-2 border-cyan-100 transition duration-300 hover:shadow-2xl hover:border-cyan-200 transform hover:-translate-y-2 relative"
           >
            <div className="absolute top-4 right-4 w-12 h-12 border border-cyan-200 rounded opacity-20"></div>
            <p className="text-6xl font-extrabold text-cyan-100 absolute top-2 left-4 select-none" aria-hidden="true">&ldquo;</p>
            <p className="text-lg md:text-xl italic text-gray-700 mb-8 relative z-10">
              &quot;I needed to get my plumbing business online properly but was completely overwhelmed. Endpoint handled everything and explained it clearly. Now I get <strong className='text-cyan-600 font-semibold'>quote requests daily through the site</strong>. Total game changer, it finally feels professional.&quot;</p>
            <footer className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center font-bold text-lg mr-4 uppercase text-white shadow-lg">S</div>
              <div>
                <p className="font-bold text-xl font-heading text-gray-900">Sipho N.</p>
                <p className="text-cyan-600 text-sm font-semibold">Lead Plumber, Randburg Flow Plumbing (Randburg)</p>
            </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Proof;
