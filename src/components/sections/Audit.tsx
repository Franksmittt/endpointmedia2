// src/components/sections/Audit.tsx
import React from 'react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { AuditForm } from '@/components/sections/AuditForm';

const Audit = () => {
  return (
    <ScrollReveal>
      <section id="audit" className="py-16 sm:py-24 bg-gradient-to-br from-black via-gray-950 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
        `,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left order-2 lg:order-1">
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

            <div className="order-1 lg:order-2">
              <AuditForm />
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Audit;
