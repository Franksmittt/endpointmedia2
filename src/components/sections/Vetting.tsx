// src/components/sections/Vetting.tsx
"use client";
import React, { useEffect, useRef } from 'react';

const Vetting = () => {
  const observerRefs = useRef<(HTMLElement | null)[]>([]);
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

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };

  return (
    <section id="vetting" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black text-white relative overflow-hidden">
      {/* Digital Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={addToRefs} 
          className="max-w-6xl mx-auto px-12 py-10 bg-gradient-to-br from-gray-900/90 via-black/80 to-gray-900/90 backdrop-blur-sm border-2 border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-500/10 scroll-observed relative"
        >
          {/* Glowing Top Border */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

          {/* Header Section */}
          <header className="text-center mb-10">
            <div className="inline-block mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/30">
                Selective Partnership
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 font-heading text-cyan-400 bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-clip-text text-transparent">
              Built for Market Leaders. Is That You?
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
             We are selective. We partner with ambitious Johannesburg service businesses ready to invest in dominating their local market. See if you fit the Endpoint standard:
            </p>
          </header>

          {/* Grid Section */}
          <div className="grid md:grid-cols-3 gap-10 text-center divide-y md:divide-y-0 md:divide-x divide-cyan-500/20">
            {/* Column 1 */}
            <div className="p-4 pt-8 md:pt-4 group">
              <div className="w-16 h-16 mx-auto mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors relative">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 relative z-10"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-1 text-white group-hover:text-cyan-300 transition-colors">Hyper-Local Focus</h3>
              <p className="text-gray-400">
                You&apos;re a service business operating within the greater <strong className="text-cyan-400 font-semibold">Johannesburg</strong> region and are serious about capturing your local market.
              </p>
            </div>

            {/* Column 2 */}
            <div className="p-4 pt-8 md:pt-4 group">
              <div className="w-16 h-16 mx-auto mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors relative">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 relative z-10"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.31h5.518a.563.563 0 01.32.956l-4.218 3.135a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-3.356a.563.563 0 00-.586 0L6.982 21.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.218-3.135a.563.563 0 01.32-.956H5.88a.563.563 0 00.475-.31l2.125-5.11z" /></svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-1 text-white group-hover:text-cyan-300 transition-colors">Mastery Driven</h3>
              <p className="text-gray-400">
             You&apos;re already <strong className="text-cyan-400 font-semibold">excellent at your trade</strong> and need a digital presence that proves it.
              </p>
            </div>

            {/* Column 3 */}
            <div className="p-4 pt-8 md:pt-4 group">
              <div className="w-16 h-16 mx-auto mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors relative">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all"></div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 relative z-10"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
              </div>
              <h3 className="text-xl font-bold font-heading mb-1 text-white group-hover:text-cyan-300 transition-colors">Growth Mindset</h3>
              <p className="text-gray-400">
                You see a website as a crucial <strong className="text-cyan-400 font-semibold">lead-generation investment</strong>, not just an online brochure or a cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vetting;
