// src/app/december-special/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Client component for form handling
const DecemberSpecialPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  // Countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date('2025-12-15T23:59:59').getTime();
      const now = new Date().getTime();
      const difference = endDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send to an API endpoint
    console.log("December Special Form Data:", data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert("Thank you! We've received your booking. You will receive an invoice via email shortly.");
    event.currentTarget.reset();
    setIsSubmitting(false);
  };

  return (
    <main id="main-content" className="overflow-x-hidden">
      {/* Section 1: MASSIVE Hero with Countdown */}
      <section className="relative bg-gradient-to-br from-black via-gray-950 to-black text-white min-h-screen flex items-center overflow-hidden" style={{backgroundImage: 'linear-gradient(to bottom right, #000000, #030712, #581c87, #000000)'}}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>

        <div className="container mx-auto px-6 z-10 relative py-24 md:py-32">
          {/* Urgency Badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4 animate-pulse">
              <span className="w-3 h-3 bg-red-500 rounded-full animate-ping absolute"></span>
              <span className="relative text-sm font-black uppercase tracking-widest text-red-400 bg-red-500/20 px-6 py-3 rounded-full border-2 border-red-500/60 backdrop-blur-sm">
                ⚡ FLASH SALE: Dec 1-15 Only
              </span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 text-center">
              <div className="text-4xl md:text-5xl font-black text-cyan-400">{timeLeft.days}</div>
              <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Days</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 text-center">
              <div className="text-4xl md:text-5xl font-black text-cyan-400">{timeLeft.hours}</div>
              <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Hours</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-4 text-center">
              <div className="text-4xl md:text-5xl font-black text-cyan-400">{timeLeft.minutes}</div>
              <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">Minutes</div>
            </div>
          </div>

          {/* Massive Headline */}
          <div className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-tight mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
              Professional Website<br />
              <span className="text-6xl sm:text-7xl lg:text-9xl">R1,500</span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl">Once-Off</span>
            </h1>
            <p className="text-xl md:text-3xl max-w-4xl mx-auto text-gray-300 mb-4 leading-relaxed">
              Launch your business online before 2026 starts.<br />
              <span className="text-cyan-400 font-bold">Get indexed and ranking</span> before the January rush.
            </p>
            <p className="text-lg md:text-xl text-purple-300 mb-8">
              Built with <strong className="text-white">Next.js</strong> — The same tech used by Netflix, Uber, and TikTok
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a
              href="#booking-form"
              className="group relative inline-flex items-center justify-center px-12 py-6 text-xl font-black text-white uppercase tracking-wider bg-gradient-to-r from-cyan-600 via-cyan-500 to-purple-600 hover:from-cyan-500 hover:via-purple-500 hover:to-cyan-500 rounded-xl shadow-2xl shadow-cyan-500/50 border-2 border-cyan-400/50 transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-gray-900"
            >
              <span className="relative z-10">Claim Your Spot Now</span>
              <svg className="w-6 h-6 ml-3 relative z-10 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#what-you-get"
              className="inline-flex items-center justify-center px-10 py-6 text-lg font-bold text-white uppercase tracking-wide bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-xl transform hover:scale-105 transition-all duration-300"
            >
              See What You Get ↓
            </a>
          </div>

          {/* Scarcity Warning */}
          <div className="text-center">
            <p className="text-red-400 font-bold text-lg animate-pulse">
              ⚠️ Only 5 Spots Available — First Come, First Served
            </p>
            <p className="text-gray-400 text-sm mt-2">No monthly fees. No hidden costs. You own everything.</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Section 2: What You Get - DETAILED BREAKDOWN */}
      <section id="what-you-get" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-4">
              Exactly What You Get
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This isn&apos;t a template. It&apos;s a <strong className="text-cyan-600">custom-coded, professional landing page</strong> built specifically for your business.
            </p>
          </div>

          {/* Feature Grid - 3 Columns */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Column 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-cyan-100 hover:border-cyan-400 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Optimized</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                  <span>Google-optimized metadata & keywords</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                  <span>Local SEO structure (your city/suburb)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                  <span>Schema markup for rich results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                  <span>Fast loading (Core Web Vitals optimized)</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-purple-100 hover:border-purple-400 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Perfect</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                  <span>Mobile-first responsive design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                  <span>Touch-optimized buttons & forms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                  <span>Fast loading on mobile data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                  <span>WhatsApp integration built-in</span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-pink-100 hover:border-pink-400 transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Conversion Focused</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                  <span>Clear call-to-action buttons</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                  <span>Contact form integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                  <span>Trust signals & social proof</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-3 flex-shrink-0">✓</span>
                  <span>Professional design & branding</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Complete Feature List */}
          <div className="bg-gradient-to-r from-cyan-50 to-purple-50 rounded-2xl p-10 border-2 border-cyan-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Everything Included:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✓</span>
                <span className="text-gray-800 font-medium">Custom domain setup (you provide domain)</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✓</span>
                <span className="text-gray-800 font-medium">SSL Certificate (HTTPS secure)</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✓</span>
                <span className="text-gray-800 font-medium">Next.js framework (enterprise-grade)</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✓</span>
                <span className="text-gray-800 font-medium">Google Analytics setup</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✓</span>
                <span className="text-gray-800 font-medium">Social media integration</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✓</span>
                <span className="text-gray-800 font-medium">Fast hosting (Vercel/Netlify)</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✓</span>
                <span className="text-gray-800 font-medium">Image optimization</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 text-2xl mr-4">✓</span>
                <span className="text-gray-800 font-medium">Up to 3 rounds of revisions</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="#booking-form"
              className="inline-block bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold py-4 px-10 rounded-xl shadow-xl transform hover:scale-105 transition-all"
            >
              Secure Your R1,500 Spot →
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Tech Comparison - Visual */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Next.js Beats Everything Else
            </h2>
            <p className="text-xl text-gray-600">
              No templates. No bloat. Just pure performance.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Comparison Table */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Wix/Squarespace */}
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">❌</div>
                  <h3 className="text-xl font-bold text-gray-900">Wix/Squarespace</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>• Slow page loads (3-5 seconds)</li>
                  <li>• Monthly fees (R200-500/month)</li>
                  <li>• Template limitations</li>
                  <li>• Weak SEO</li>
                  <li>• You don&apos;t own the code</li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="text-red-600 font-bold">R2,400-6,000/year</span>
                </div>
              </div>

              {/* WordPress */}
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">⚠️</div>
                  <h3 className="text-xl font-bold text-gray-900">WordPress</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>• Security vulnerabilities</li>
                  <li>• Plugin bloat</li>
                  <li>• Slow without optimization</li>
                  <li>• Needs maintenance</li>
                  <li>• Complex backend</li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="text-orange-600 font-bold">R1,500 + maintenance</span>
                </div>
              </div>

              {/* Your Next.js Build */}
              <div className="bg-gradient-to-br from-cyan-50 to-purple-50 border-4 border-cyan-500 rounded-xl p-6 transform scale-105 shadow-2xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  YOUR BUILD
                </div>
                <div className="text-center mb-4 mt-4">
                  <div className="text-4xl mb-2">✅</div>
                  <h3 className="text-xl font-bold text-gray-900">Next.js Custom</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-800 font-medium">
                  <li>• Lightning fast (&lt;1 second loads)</li>
                  <li>• Zero monthly fees</li>
                  <li>• Custom design</li>
                  <li>• Built-in SEO optimization</li>
                  <li>• You own everything</li>
                </ul>
                <div className="mt-6 text-center">
                  <span className="text-3xl font-black text-cyan-600">R1,500</span>
                  <div className="text-xs text-gray-600 mt-1">Once-off, no recurring</div>
                </div>
              </div>
            </div>

            {/* Companies Using Next.js */}
            <div className="bg-gray-100 rounded-xl p-8 text-center">
              <p className="text-gray-600 mb-4">Trusted by the world&apos;s biggest companies:</p>
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 font-bold">
                <span>Netflix</span>
                <span>•</span>
                <span>TikTok</span>
                <span>•</span>
                <span>Uber</span>
                <span>•</span>
                <span>Hulu</span>
                <span>•</span>
                <span>Twitch</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300">
              Simple. Fast. Professional.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Book Your Spot", desc: "Fill out the form below and secure your R1,500 spot" },
                { step: "2", title: "We Connect", desc: "We&apos;ll reach out within 24 hours to discuss your needs" },
                { step: "3", title: "We Build", desc: "Your custom landing page is built in 5-7 business days" },
                { step: "4", title: "You Launch", desc: "Your site goes live and starts generating leads" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-3xl font-black mb-4 mx-auto">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Who This Is For */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
              Perfect For...
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Perfect For */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-green-500 text-3xl mr-3">✓</span>
                  Ideal Clients
                </h3>
                <ul className="space-y-4">
                  {['Plumbers, Electricians, HVAC', 'Consultants & Coaches', 'Local Service Providers', 'Small Retail Shops', 'Tradespeople', 'Professional Services'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-800">
                      <span className="text-green-500 text-xl mr-3">•</span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not For */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="text-red-500 text-3xl mr-3">✗</span>
                  Not Suitable For
                </h3>
                <ul className="space-y-4">
                  {['Full E-commerce (20+ products)', 'Complex Web Applications', 'Membership Sites', 'Multi-language Sites', 'Heavy Database Systems'].map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-800">
                      <span className="text-red-500 text-xl mr-3">•</span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Is this really R1,500 with no hidden costs?",
                  a: "Yes! R1,500 once-off. No monthly fees. No hidden costs. The only recurring cost is your domain registration (typically R150-250/year), which you can buy anywhere."
                },
                {
                  q: "What if I need changes after it's done?",
                  a: "We include 3 rounds of revisions during the build. After that, we offer maintenance packages, but there are no obligations. You own the code and can hire anyone to make changes."
                },
                {
                  q: "How long does it take?",
                  a: "Typically 5-7 business days from when we receive your content and assets. Faster if you're responsive with feedback."
                },
                {
                  q: "Do I own the website?",
                  a: "100% yes. You own all the code, design, and content. We set it up on your domain (or help you get one), and it's yours forever."
                },
                {
                  q: "What if I already have a domain?",
                  a: "Perfect! We'll connect your existing domain. No problem at all."
                },
                {
                  q: "Will it work on mobile?",
                  a: "Absolutely. Every site is built mobile-first and tested on all devices. Most of your customers will be on phones, so this is non-negotiable."
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FINAL CTA - Booking Form */}
      <section id="booking-form" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Secure Your Spot Now
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Only 5 spots available. Don&apos;t miss out on this December special.
            </p>

            {/* Price Display */}
            <div className="inline-block bg-gradient-to-r from-cyan-600 to-purple-600 px-12 py-6 rounded-2xl border-4 border-cyan-400/50 shadow-2xl mb-8 transform hover:scale-105 transition-transform">
              <div className="text-sm uppercase tracking-widest text-cyan-100 mb-2">One-Time Payment</div>
              <div className="text-7xl font-black text-white">R1,500</div>
              <div className="text-lg text-cyan-100 mt-2">No monthly fees. Ever.</div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border-2 border-white/20 shadow-2xl space-y-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-bold mb-2 text-cyan-100 uppercase tracking-wide">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:border-transparent text-lg"
                  placeholder="Your Business Name"
                />
              </div>

              <div>
                <label htmlFor="yourName" className="block text-sm font-bold mb-2 text-cyan-100 uppercase tracking-wide">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="yourName"
                  name="yourName"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:border-transparent text-lg"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 text-cyan-100 uppercase tracking-wide">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:border-transparent text-lg"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-bold mb-2 text-cyan-100 uppercase tracking-wide">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  className="w-full px-5 py-4 rounded-xl bg-white/20 border-2 border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:border-transparent text-lg"
                  placeholder="076 123 4567"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-600 via-cyan-500 to-purple-600 hover:from-cyan-500 hover:via-purple-500 hover:to-cyan-500 text-white font-black py-6 px-8 rounded-xl shadow-2xl shadow-cyan-500/50 border-2 border-cyan-400/50 transform hover:scale-105 transition-all duration-300 ease-in-out uppercase text-xl tracking-wider focus:outline-none focus:ring-4 focus:ring-cyan-400 focus:ring-offset-4 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Processing Your Request...' : 'Send Invoice & Start Building →'}
              </button>

              <p className="text-sm text-gray-400 text-center mt-6">
                Offer valid for invoices paid between Dec 1 and Dec 15, 2025. Limited to 5 spots only.
              </p>
            </form>

            {/* Trust Signals */}
            <div className="mt-12 text-center space-y-4">
              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-400">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Ownership</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No Hidden Fees</span>
                </div>
              </div>
            </div>

            {/* Back to Home Link */}
            <div className="text-center mt-8">
              <Link 
                href="/" 
                className="text-cyan-400 hover:text-cyan-300 transition underline text-lg"
              >
                ← Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DecemberSpecialPage;
