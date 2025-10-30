// src/components/sections/WhoWeServe.tsx
"use client";
import React, { useEffect, useRef } from 'react';

const targetServices = [
  "Plumbers", "Electricians", "HVAC Technicians", "Builders & Contractors",
  "Roofers", "Landscapers", "Painters", "Salons & Spas",
  "Consultants", "Therapists", "Mechanics", "Other Local Experts",
];

const WhoWeServe = () => {
  // --- Start Intersection Observer Logic ---
  const observerRef = useRef<HTMLDivElement | null>(null); 

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

    const currentRef = observerRef.current; 
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  // --- End Intersection Observer Logic ---

  return (
    <section id="who-we-serve" className="py-20 bg-white"> 
      <div
        ref={observerRef} 
        className="container mx-auto px-6 scroll-observed" 
      >
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 font-heading">
            Exclusively Serving Johannesburg&apos;s Service Industry Champions
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            We partner with ambitious local experts who understand that a high-performance website is a critical investment, not an expense. If you provide essential services in the greater Johannesburg area, we speak your language.
          </p>
        </header>

        {/* List/Grid of Services */}
        <div className="max-w-4xl mx-auto">
          <ul className="flex flex-wrap justify-center gap-3 md:gap-4 text-center">
            {targetServices.map((service) => (
              <li
                key={service}
                className="bg-teal-50 border border-teal-200 text-teal-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;