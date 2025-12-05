// src/components/sections/Hero.tsx
"use client";
import React from 'react';
import Image from 'next/image';
import { trackWhatsAppClick } from '@/lib/analytics'; 

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
          priority={true}
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
        {/* Premium Badge */}
        <div className="mb-6 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-sm md:text-base font-bold uppercase tracking-wider text-cyan-300 bg-cyan-900/40 px-6 py-3 rounded-full border border-cyan-400">
            Premium Digital Architecture Firm
          </span>
        </div>

        {/* Status Indicator */}
        <div className="inline-flex items-center gap-2 mb-6 animate-fade-in-up">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
            Selective Partnership · Extreme Focus
          </span>
        </div>

        {/* H1 - Premium Positioning */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-in-up text-white">
          We Don&apos;t Sell Cheap Websites.
          <br />
          <span className="text-cyan-400">We Engineer Market Domination.</span>
        </h1>

        {/* Premium Value Proposition */}
        <p className="text-lg md:text-2xl max-w-4xl mx-auto text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          We take a <strong className="text-white font-semibold">handful of clients</strong> who are serious about growth. 
          We dissect every millimeter of your business, your market, and your competitors. 
          We don&apos;t build websites—we architect <strong className="text-cyan-400 font-semibold">competitive advantages</strong> that put you completely above anyone else in your market.
        </p>

        <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-400 mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          We&apos;d rather have <strong className="text-white">10 clients who dominate</strong> than 100 who just become a number. 
          Your success isn&apos;t optional—it&apos;t our only metric.
        </p>

        {/* Primary CTA */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="#audit"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white font-extrabold py-4 px-12 rounded-lg shadow-2xl shadow-cyan-500/30 border-2 border-cyan-400/50 transform hover:scale-105 transition-all duration-300 ease-in-out uppercase text-base tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-cyan-300"
          >
            Get Your Free Architecture Audit
          </a>
        </div>

        {/* Secondary CTA */}
        <div className="mt-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="https://wa.me/27769724559?text=Hi%20Frank,%20I%20want%20to%20discuss%20how%20Endpoint%20Media%20can%20help%20my%20business%20dominate%20the%20market"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('+27769724559')}
            className="inline-flex items-center justify-center gap-2 text-cyan-300 hover:text-cyan-200 font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Or discuss your project with Frank on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
