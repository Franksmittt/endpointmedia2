// src/app/page.tsx
import React from 'react';

// Import all sections for the main landing page
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import WhoWeServe from "@/components/sections/WhoWeServe";
import Blueprint from '@/components/sections/Blueprint';
import Proof from '@/components/sections/Proof';
import Vetting from '@/components/sections/Vetting';
import Pricing from '@/components/sections/Pricing';
import Toolkit from '@/components/sections/Toolkit'; 
import Audit from '@/components/sections/Audit';

// This is the core Page Router file, assembling the modular sections
export default function HomePage() {
  return (
    <main id="main-content">
      {/* Assemble the sections in order */}
      <Hero />
      <Problem />
      <Solution />
      <WhoWeServe />
      <Blueprint />
      <Proof />
      <Vetting />
      <Pricing />
      <Toolkit />
      <Audit />
    </main>
  );
}