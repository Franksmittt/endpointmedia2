// src/components/layout/Header.tsx
"use client";
// Keep this for useState and event handlers

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"; // <-- NEW IMPORT
// Define the new navigation links
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' }, // Link to a main services page
  { name: 'Our Process', href: '/process' }, // Link to a dedicated process page
  { name: 'Case Studies', href: '/case-studies' }, // Link to case studies page
  { name: 'Pricing', href: '/pricing' }, // Link to pricing page
  { name: 'Blog', href: '/blog' }, // Link to blog page
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
// Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
// Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
// Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
};

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      {/* Container: Changed layout strategy to center navigation on desktop */}
      <div className="container mx-auto px-6 py-4 flex justify-start lg:justify-between items-center">
        {/* Logo */}
        <Link 
          href="/" 
          aria-label="Endpoint Media Homepage" 
          className="text-2xl font-extrabold text-white transition duration-300 hover:text-teal-400 font-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 rounded"
        >
          Endpoint<span className="text-teal-500">.</span><span className="font-normal text-xl ml-1 text-white opacity-80">Media</span>
        </Link>

        {/* Desktop Navigation - CENTERED LINKS */}
        {/* The use of flex-grow and mx-auto pushes the centered element in between the two fixed elements (logo and button) */}
        <nav className="hidden lg:flex items-center 
space-x-6 flex-grow justify-center lg:mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-teal-400 transition duration-300 font-medium px-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-300 rounded"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* CTA Button (Now "Contact Us") - Floats Right on desktop */}
        <div className="hidden lg:block ml-auto">
          <Link
            href="/contact" // Link changed to new 
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded shadow transform hover:scale-105 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-teal-300"
          >
            Contact Us {/* FIX: Consolidated the text inside the Link component */}
          </Link>
        </div>


        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white ml-auto focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 rounded"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ?
(
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

     
{/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-x-0 top-0 origin-top transition-transform transform ${isMenuOpen ?
'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 pointer-events-none'} duration-300 ease-out z-40`}
        style={{ paddingTop: '72px' }} // Adjust based on header height
      >
        <div className="bg-gray-800 shadow-xl rounded-b-lg p-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                
key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-teal-400 transition duration-300 text-lg font-medium py-2 px-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-300 rounded"
                onClick={closeMenu} // Close menu on link click
              >
                {link.name}
     
          </Link>
            ))}
             {/* Mobile CTA Button */}
            <Link
              href="/contact" // Link changed
              className="mt-4 w-full text-center inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded shadow transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800 focus-visible:ring-teal-300"
 
              onClick={closeMenu} // Close menu on link click
            >
              Contact Us {/* Text changed */}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;