// src/components/sections/Hero.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

// FIX: Corrected the import to a proper public path string. 
// You must ensure this file is created under the project's /public/images/ directory.
const HERO_BG_SRC = "/images/hero-bg-optimized.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-gray-900 text-white min-h-[90vh] md:min-h-screen flex items-center overflow-hidden py-24 md:py-32 hero-texture"
    >
      {/* Background Image: Optimized for LCP with priority prop */}
      <div className="absolute inset-0 z-0">
        {/* Lightweight gradient for mobile */}
        <div className="md:hidden h-full w-full bg-gradient-to-br from-gray-900 via-gray-900/80 to-teal-900/40" />
        {/* High-res background only for md+ to avoid mobile bandwidth hit */}
        <Image
          src={HERO_BG_SRC}
          alt="A high-performance digital marketing and web design service for Johannesburg."
          fill
          quality={80}
          priority={false}
          className="hidden md:block object-cover opacity-15"
          aria-hidden="true"
          sizes="(max-width: 1023px) 0px, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/80 to-teal-900/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative 
text-center">
        {/* H1 - Streamlined for Clarity Over Cleverness [cite: 2016] */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          Stop Buying Brochures.<br /> Start Generating Revenue.
        </h1>

        {/* P - Focus on Audience Pain (Lead Generation) [cite: 538] */}
        <p className="text-lg md:text-2xl max-w-4xl mx-auto text-gray-300 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          We don&apos;t build websites. We engineer high-performance lead-generation assets for 
          <strong className="text-teal-400 font-semibold">Johannesburg service businesses.</strong> Guaranteed ROI, no excuses.
        </p>

        {/* CTA Button - Primary conversion point [cite: 539] */}
        <Link
          href="#audit"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-extrabold py-4 px-12 rounded shadow-xl transform hover:scale-105 transition duration-300 ease-in-out uppercase text-base tracking-wider animate-fade-in-up focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-teal-300"
          style={{ animationDelay: '0.4s' }}
        >
          Claim Your Free Growth Audit
        </Link>

        {/* Subtext - Low-commitment reassurance [cite: 540] */}
        <p className="mt-4 text-sm text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          See your custom website mockup and growth strategy. Zero cost, zero risk.
        </p>
      </div>
    </section>
  );
};

export default Hero;