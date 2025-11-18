// src/components/sections/Audit.tsx
"use client";
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button'; // <--- Button is correctly imported and used

const Audit = () => {
  // --- Start Intersection Observer Logic ---
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
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };
  // --- End Intersection Observer Logic ---


  // Basic form submission handler (replace with actual logic)
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
    <section id="audit" className="py-16 sm:py-24 bg-gradient-to-br from-teal-800 to-teal-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* FIX: Removed fixed gap-16 on mobile, allowing natural stacking. Used lg:grid-cols-2 for desktop split. */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content Column (100% width on mobile) */}
          <div ref={addToRefs} className="text-center lg:text-left scroll-observed order-2 lg:order-1">
            {/* H2: Adjusted font size on mobile (4xl) to prevent line wrapping issues */}
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-heading leading-tight">
              Stop Guessing.<br /> Start Dominating Your Market.
            </h2>
            <p className="text-lg text-teal-100 mb-8 max-w-xl mx-auto lg:mx-0">
              Claim your <strong className="text-white font-semibold">100% Free, No-Obligation Digital Growth Audit</strong>. We&apos;ll dissect your online presence, pinpoint your biggest lead leaks, and show you a custom mockup of a website *actually* engineered to capture more clients in Johannesburg.
            </p>
            <p className="text-teal-200 text-sm">Secure your spot. Limited audit spots available each month. That&apos;s the Endpoint guarantee.</p>
          </div>

          {/* Form Column (100% width on mobile) */}
          <div
            ref={addToRefs}
            className="scroll-observed order-1 lg:order-2"
          >
            {/* FIX: Removed unnecessary max-w-lg from the form itself, letting the grid handle width. */}
            <form
              onSubmit={handleSubmit} 
              method="POST" 
              action="YOUR_FORM_ENDPOINT" 
              className="bg-white p-6 sm:p-8 rounded-lg text-gray-800 shadow-2xl text-left mx-auto lg:ml-auto lg:mr-0"
            >
              <h3 className="text-2xl font-bold font-heading mb-6 text-center text-gray-800">Get Your Free Audit & Mockup</h3>
              <input type="hidden" name="source" value="Website Audit Form" />

              {/* Input Fields */}
              <div className="space-y-4"> {/* FIX: Added space-y-4 for consistent mobile vertical rhythm */}
                
                {/* Name Field */}
                <div>
                  <label htmlFor="audit-name" className="block text-sm font-medium text-gray-700 mb-1">Your Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="audit-name"
                    name="name"
                    placeholder="e.g. Sarah Connor"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                    aria-required="true"
                  />
                </div>

                {/* Business Name Field */}
                <div>
                  <label htmlFor="audit-business" className="block text-sm font-medium text-gray-700 mb-1">Business Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="audit-business"
                    name="business_name"
                    placeholder="e.g. Cyberdyne Systems"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                    aria-required="true"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="audit-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="audit-email"
                    name="email"
                    placeholder="e.g. sarah@skynet.com"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                    aria-required="true"
                  />
                </div>
              </div> {/* End space-y-4 container */}


              {/* Honeypot Field for basic spam protection */}
              <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                <label htmlFor="honeypot">Do not fill this out if you&apos;re human:</label>
                <input type="text" id="honeypot" name="honeypot" tabIndex={-1} autoComplete="off" />
              </div>

              {/* Submit Button - Uses shadcn/ui Button */}
              <div className="mt-8"> {/* FIX: Added mb-6 equivalent spacing */}
                <Button 
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 uppercase tracking-wider"
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