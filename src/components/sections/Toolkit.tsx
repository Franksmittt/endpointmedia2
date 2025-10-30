// src/components/sections/Toolkit.tsx
"use client";
import React, { useEffect, useRef } from 'react';

const Toolkit = () => {
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
    <section id="engine" className="py-24 bg-teal-700 text-white"> 
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <header ref={addToRefs} className="text-center mb-16 max-w-3xl mx-auto scroll-observed">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-heading text-white">
            More Than a Website: A Conversion Toolkit.
          </h2>
          <p className="text-xl text-teal-100">
            A beautiful website is useless if it doesn&apos;t convert. We integrate the essential tools that turn **Johannesburg** visitors into actual, paying customers for *your* specific service business.
          </p>
        </header>

        {/* Grid Section */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1: Booking Integration */}
          <div ref={addToRefs} className="scroll-observed group p-8 bg-white text-gray-800 rounded-xl shadow-2xl transition duration-300 transform hover:scale-105 hover:shadow-gray-900/40 border-b-8 border-teal-900">
            <div className="text-teal-700 mb-4">
              {/* SVG for Calendar */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-teal-700 transition">Automated Online Booking</h3>
            <p className="text-gray-600">
              Essential for <strong className="font-semibold">salons, consultants, and professionals</strong>. Let clients book appointments 24/7, directly filling your calendar and reducing admin. Your site becomes an active sales agent.
            </p>
          </div>

          {/* Card 2: Tap-to-Call & Forms */}
          <div
            ref={addToRefs}
            className="scroll-observed group p-8 bg-white text-gray-800 rounded-xl shadow-2xl transition duration-300 transform hover:scale-105 hover:shadow-gray-900/40 border-b-8 border-teal-900"
          >
            <div className="text-teal-700 mb-4">
              {/* SVG for Mobile */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-teal-700 transition">Instant-Response Conversion Tools</h3>
            <p className="text-gray-600">
              Critical for <strong className="font-semibold">plumbers, electricians, and trades</strong>. We integrate frictionless &quot;Tap-to-Call&quot; buttons and smart quote forms, making it effortless for mobile users in **Johannesburg** to contact you instantly.
            </p>
          </div>

          {/* Card 3: Visual Proof */}
          <div
            ref={addToRefs}
            className="scroll-observed group p-8 bg-white text-gray-800 rounded-xl shadow-2xl transition duration-300 transform hover:scale-105 hover:shadow-gray-900/40 border-b-8 border-teal-900"
          >
            <div className="text-teal-700 mb-4">
              {/* SVG for Image */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm16.5-1.5H3.75" /></svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-teal-700 transition">Authoritative Visual Proof</h3>
            <p className="text-gray-600">
              Showcase your expert work with stunning photo &amp; video galleries. Your completed **Johannesburg projects** become your most powerful sales tool, <strong className="font-semibold">building instant trust and proving your quality</strong> visually.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;