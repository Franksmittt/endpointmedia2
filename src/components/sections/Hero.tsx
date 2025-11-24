// src/components/sections/Hero.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

const HERO_BG_SRC = "/images/hero-bg-optimized.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-black via-gray-950 to-black text-white min-h-[90vh] md:min-h-screen flex items-center overflow-hidden py-24 md:py-32"
    >
      {/* Digital Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="md:hidden h-full w-full bg-gradient-to-br from-gray-900 via-gray-900/80 to-cyan-900/40" />
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/80 to-cyan-900/40" />
      </div>

      {/* Animated Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative text-center">
        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2 mb-6 animate-fade-in-up">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
            Performance Engineered
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
          Stop Buying Brochures.<br /> Start Generating Revenue.
        </h1>

        {/* P */}
        <p className="text-lg md:text-2xl max-w-4xl mx-auto text-gray-300 mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          We don&apos;t build websites. We engineer high-performance lead-generation assets for 
          <strong className="text-cyan-400 font-semibold"> Johannesburg service businesses.</strong> Guaranteed ROI, no excuses.
        </p>

        {/* CTA Button */}
        <Link
          href="#audit"
          className="inline-block bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-extrabold py-4 px-12 rounded-lg shadow-2xl shadow-cyan-500/30 border-2 border-cyan-400/50 transform hover:scale-105 transition-all duration-300 ease-in-out uppercase text-base tracking-wider animate-fade-in-up focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-cyan-300"
          style={{ animationDelay: '0.4s' }}
        >
          Claim Your Free Growth Audit
        </Link>

        {/* Subtext */}
        <p className="mt-4 text-sm text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          See your custom website mockup and growth strategy. Zero cost, zero risk.
        </p>
      </div>
    </section>
  );
};

export default Hero;
