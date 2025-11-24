// src/components/sections/Audit.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const Audit = () => {
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);
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

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Audit form submitted!");
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    alert("Thank you! Your audit is secured. We will be in touch shortly.");
    event.currentTarget.reset();
  };

  return (
    <section id="audit" className="py-16 sm:py-24 bg-gradient-to-br from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Digital Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content Column */}
          <div ref={addToRefs} className="text-center lg:text-left scroll-observed order-2 lg:order-1">
            <div className="inline-block mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                Free Audit
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-heading leading-tight bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Stop Guessing.<br /> Start Dominating Your Market.
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Claim your <strong className="text-cyan-400 font-semibold">100% Free, No-Obligation Digital Growth Audit</strong>. We&apos;ll dissect your online presence, pinpoint your biggest lead leaks, and show you a custom mockup of a website *actually* engineered to capture more clients in Johannesburg.
            </p>
            <p className="text-cyan-200 text-sm">Secure your spot. Limited audit spots available each month. That&apos;s the Endpoint guarantee.</p>
          </div>

          {/* Form Column */}
          <div
            ref={addToRefs}
            className="scroll-observed order-1 lg:order-2"
          >
            <form
              onSubmit={handleSubmit} 
              method="POST" 
              action="YOUR_FORM_ENDPOINT" 
              className="bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-sm border-2 border-cyan-500/40 p-6 sm:p-8 rounded-xl text-white shadow-2xl shadow-cyan-500/10 text-left mx-auto lg:ml-auto lg:mr-0 relative"
            >
              {/* Glowing Top Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

              <h3 className="text-2xl font-bold font-heading mb-6 text-center text-white">Get Your Free Audit & Mockup</h3>
              <input type="hidden" name="source" value="Website Audit Form" />

              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="audit-name" className="block text-sm font-medium text-gray-300 mb-1">Your Name <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    id="audit-name"
                    name="name"
                    placeholder="e.g. Sarah Connor"
                    className="w-full p-3 bg-gray-800/50 border border-cyan-500/30 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-colors"
                    required
                    aria-required="true"
                  />
                </div>

                {/* Business Name Field */}
                <div>
                  <label htmlFor="audit-business" className="block text-sm font-medium text-gray-300 mb-1">Business Name <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    id="audit-business"
                    name="business_name"
                    placeholder="e.g. Cyberdyne Systems"
                    className="w-full p-3 bg-gray-800/50 border border-cyan-500/30 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-colors"
                    required
                    aria-required="true"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="audit-email" className="block text-sm font-medium text-gray-300 mb-1">Email Address <span className="text-red-400">*</span></label>
                  <input
                    type="email"
                    id="audit-email"
                    name="email"
                    placeholder="e.g. sarah@skynet.com"
                    className="w-full p-3 bg-gray-800/50 border border-cyan-500/30 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition-colors"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Honeypot Field */}
              <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                <label htmlFor="honeypot">Do not fill this out if you&apos;re human:</label>
                <input type="text" id="honeypot" name="honeypot" tabIndex={-1} autoComplete="off" />
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-bold py-4 px-6 rounded-lg shadow-2xl shadow-cyan-500/30 border-2 border-cyan-400/50 transition-all duration-300 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500 uppercase tracking-wider transform hover:scale-105"
                >
                  Claim My Free Audit Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audit;
