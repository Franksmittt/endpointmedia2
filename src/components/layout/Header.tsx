'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Locations', href: '/locations' },
  { name: 'Process', href: '/process' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 z-[80] w-full transition-all duration-300 ${
        isMenuOpen || isScrolled
          ? 'border-b border-zinc-800 bg-black'
          : 'bg-black/95 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Endpoint Media Homepage"
          className="text-lg font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 rounded-sm"
        >
          Endpoint<span className="text-zinc-500">.</span>
          <span className="ml-1 font-normal text-zinc-400">Media</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-500 rounded-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/services/google-ads"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            Google Ads
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-sm bg-white px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="rounded-sm p-2 text-zinc-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-teal-400/90 to-transparent animate-pulse"
      />

      {isMenuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-[65px] z-[70] bg-black lg:hidden"
            onClick={closeMenu}
            aria-label="Close menu overlay"
          />
          <div className="fixed inset-x-0 top-[65px] bottom-0 z-[75] overflow-y-auto border-t border-zinc-800 bg-zinc-950 shadow-2xl lg:hidden">
            <nav className="container mx-auto flex flex-col gap-1 px-6 py-8" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="border-b border-zinc-800 py-4 text-lg font-medium text-white transition-colors hover:text-teal-400/90"
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/services/google-ads"
                className="border-b border-zinc-800 py-4 text-lg font-medium text-white transition-colors hover:text-teal-400/90"
                onClick={closeMenu}
              >
                Google Ads
              </Link>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
