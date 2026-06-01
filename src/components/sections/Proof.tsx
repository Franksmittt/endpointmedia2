// src/components/sections/Proof.tsx
import React from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/scroll-reveal';

const Proof = () => {
  return (
    <ScrollReveal>
    <section id="proof" className="py-20 md:py-28 bg-black relative overflow-hidden">
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
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center items-center space-x-8 mb-10 opacity-60 grayscale">
            <p className="text-sm uppercase tracking-widest text-zinc-500 font-semibold mr-4 mb-2 sm:mb-0 w-full sm:w-auto text-center sm:text-left">Trusted By Joburg Experts:</p>
            
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
            <span className="text-xs font-semibold uppercase tracking-wider text-accent-600 bg-accent/10 px-4 py-2 rounded-full border border-accent/20">
              Real Results
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-heading text-white">
            Real Results. Real Johannesburg Businesses.
          </h2>
          <p className="text-xl text-zinc-500">
            Don&apos;t take our word for it. Hear from service champions already dominating their local market with an Endpoint Media asset.
          </p>
        </header>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Testimonial 1 */}
          <blockquote className="p-10 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-xl border-2 border-accent/20 transition duration-300 hover:shadow-2xl hover:border-accent/20 transform hover:-translate-y-2 relative">
            <div className="absolute top-4 right-4 w-12 h-12 border border-accent/20 rounded opacity-20"></div>
            <p className="text-6xl font-bold text-accent/20 absolute top-2 left-4 select-none" aria-hidden="true">&ldquo;</p>
            <p className="text-lg md:text-xl italic text-zinc-400 mb-8 relative z-10">
              &quot;We went from obscurity on page three to the <strong className='text-accent-600 font-semibold'>top of the Google Map Pack</strong> for &apos;emergency electrician Sandton&apos;. The phone rings constantly. This isn&apos;t just a website; it&apos;s a genuine <strong className='text-accent-600 font-semibold'>lead pipeline</strong>.&quot;
            </p>
            <footer className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center font-bold text-lg mr-4 uppercase text-white shadow-lg">D</div>
              <div>
                <p className="font-bold text-xl font-heading text-white">David M.</p>
                <p className="text-accent-600 text-sm font-semibold">Owner, Ampere Electrical Solutions (Sandton)</p>
            </div>
            </footer>
          </blockquote>

          {/* Testimonial 2 */}
          <blockquote
            className="p-10 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-xl border-2 border-accent/20 transition duration-300 hover:shadow-2xl hover:border-accent/20 transform hover:-translate-y-2 relative"
           >
            <div className="absolute top-4 right-4 w-12 h-12 border border-accent/20 rounded opacity-20"></div>
            <p className="text-6xl font-bold text-accent/20 absolute top-2 left-4 select-none" aria-hidden="true">&ldquo;</p>
            <p className="text-lg md:text-xl italic text-zinc-400 mb-8 relative z-10">
              &quot;I needed to get my plumbing business online properly but was completely overwhelmed. Endpoint handled everything and explained it clearly. Now I get <strong className='text-accent-600 font-semibold'>quote requests daily through the site</strong>. Total game changer, it finally feels professional.&quot;</p>
            <footer className="flex items-center">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center font-bold text-lg mr-4 uppercase text-white shadow-lg">S</div>
              <div>
                <p className="font-bold text-xl font-heading text-white">Sipho N.</p>
                <p className="text-accent-600 text-sm font-semibold">Lead Plumber, Randburg Flow Plumbing (Randburg)</p>
            </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
};

export default Proof;
