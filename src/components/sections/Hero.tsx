// src/components/sections/Hero.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-gray-900 text-white min-h-[90vh] md:min-h-screen flex items-center overflow-hidden py-24 md:py-32 hero-texture"
    >
      {/* Background Image: Optimized for LCP */}
      <Image
        src="https://source.unsplash.com/1600x900/?johannesburg,cityscape,dynamic"
        alt="Dynamic Johannesburg cityscape representing a modern digital agency" 
        layout="fill"
        objectFit="cover"
        quality={70}
        priority 
        className="absolute inset-0 z-0 opacity-15"
        aria-hidden="true"
        unoptimized={false}
      />
      
      {/* Gradient Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/80 to-teal-900/30 z-0"></div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Your Website Should Generate Revenue.<br /> Not Excuses.
        </h1>

        <p className="text-lg md:text-2xl max-w-4xl mx-auto text-gray-300 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Tired of digital art projects that cost a fortune and deliver nothing?
          Endpoint Media builds high-performance websites for **Johannesburg&apos;s service industry** – <strong className="text-teal-400 font-semibold">engineered for one purpose: to generate qualified leads that convert into paying customers.</strong>
        </p>

        {/* CTA Button */}
        <Link
          href="#audit"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-extrabold py-4 px-12 rounded shadow-xl transform hover:scale-105 transition duration-300 ease-in-out uppercase text-base tracking-wider animate-fade-in-up focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-teal-300"
          style={{ animationDelay: '0.4s' }}
        >
          Get Your Free Growth Audit
        </Link>

        <p className="mt-4 text-sm text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          See your untapped potential &amp; get a custom website mockup. Zero cost, zero obligation.
        </p>
      </div>
    </section>
  );
};

export default Hero;