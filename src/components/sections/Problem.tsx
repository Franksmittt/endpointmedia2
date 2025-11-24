// src/components/sections/Problem.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Problem = () => {
  return (
    <section id="problem" className="py-24 bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white relative overflow-hidden">
      {/* Digital Grid Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Glowing Data Lines Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse"></div>
        <div className="absolute top-2/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-cyan-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wider text-red-400 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/30">
              Hidden Expense Detected
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-heading bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
            The Truth: An Underperforming Website is a Hidden Expense.
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            If your site isn&apos;t actively generating leads and making your phone ring, it&apos;s not an asset. 
            <span className="text-red-400 font-semibold"> It&apos;s an online expense.</span> You are losing revenue every single day.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Problem Card 1: Looks Good, Does Nothing */}
          <div className="group relative p-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/30 rounded-xl shadow-2xl transition-all duration-500 hover:border-red-500/60 hover:shadow-red-500/20 hover:-translate-y-2">
            {/* Glowing Red Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Wireframe Decoration */}
            <div className="absolute top-4 right-4 w-16 h-16 border border-red-500/20 rounded opacity-30 group-hover:opacity-60 transition-opacity">
              <div className="absolute inset-0 border-t border-l border-red-500/40"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400">Problem Identified</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 font-heading text-white group-hover:text-red-400 transition-colors">
                The &quot;Looks Good, Does Nothing&quot; Trap
              </h3>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                You invested in a visually appealing website... that delivers zero ROI. No calls, no form submissions, just silence. It&apos;s an expensive digital brochure collecting virtual dust.
              </p>
              
              <Link 
                href="/services" 
                className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group/link"
              >
                <span>See How We Engineer ROI</span>
                <svg className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Problem Card 2: Invisible in Johannesburg - Featured/Center */}
          <div className="group relative p-8 bg-gradient-to-br from-cyan-900/40 via-black to-cyan-900/40 backdrop-blur-sm border-2 border-cyan-500/50 rounded-xl shadow-2xl shadow-cyan-500/20 transition-all duration-500 hover:border-cyan-400 hover:shadow-cyan-400/30 hover:-translate-y-2 lg:scale-105">
            {/* Glowing Cyan Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            
            {/* Network Nodes Decoration */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-40 group-hover:opacity-80 transition-opacity">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>
            
            {/* Growth Arrow Decoration */}
            <div className="absolute bottom-4 left-4 opacity-30 group-hover:opacity-60 transition-opacity">
              <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Critical Issue</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 font-heading text-cyan-400">
                Invisible in Johannesburg
              </h3>
              
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                Your potential customers in <span className="text-cyan-300 font-semibold">Sandton, Randburg, and Midrand</span> are searching online <em className="text-cyan-400">*right now*</em>. If your site isn&apos;t on Google&apos;s first page, especially in the Map Pack, you are invisible. They are finding—and paying—your competitors.
              </p>
              
              <Link 
                href="/process" 
                className="inline-flex items-center text-cyan-300 font-semibold hover:text-cyan-200 transition-colors group/link"
              >
                <span>View Our Dominance Blueprint</span>
                <svg className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Problem Card 3: Agency Disappointment */}
          <div className="group relative p-8 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-orange-500/30 rounded-xl shadow-2xl transition-all duration-500 hover:border-orange-500/60 hover:shadow-orange-500/20 hover:-translate-y-2">
            {/* Glowing Orange Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Broken Chain Decoration */}
            <div className="absolute top-4 right-4 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity">
              <svg className="w-full h-full text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-400">Trust Broken</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 font-heading text-white group-hover:text-orange-400 transition-colors">
                The Agency Disappointment
              </h3>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                You&apos;ve been burned by faceless agencies and broken promises. It&apos;s not your fault you have an underperforming website. You needed a dedicated partner truly invested in <em className="text-orange-400">*your*</em> business results.
              </p>
              
              <Link 
                href="/case-studies" 
                className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group/link"
              >
                <span>Meet Your Partner (Case Studies)</span>
                <svg className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center px-4 sm:px-0 relative">
          {/* Glowing Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10 rounded-2xl blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto text-gray-200 mb-10 font-semibold leading-relaxed">
              Stop accepting an ineffective online presence. Your expertise deserves a website that works as hard as you do.
            </p>
            
            <Button
              asChild
              className="group relative bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-extrabold py-4 px-8 md:py-5 md:px-12 rounded-lg shadow-2xl shadow-red-500/30 border-2 border-red-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-red-500/50 uppercase text-sm sm:text-base md:text-lg tracking-wider focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 focus-visible:ring-red-500 w-full sm:w-auto max-w-full sm:max-w-none overflow-hidden"
            >
              <Link href="#audit" className="relative z-10 flex items-center justify-center gap-2">
                <span>Diagnose My Website Problem</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
