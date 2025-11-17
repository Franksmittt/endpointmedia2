// src/components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="pt-16 pb-8 bg-gray-900 text-gray-300 border-t-4 border-teal-700"> {/* Default text color changed to gray-300 */}
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-12 border-b border-gray-700 pb-10 mb-8">
          {/* Column 1 & 2: Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Endpoint Media Homepage" className="inline-block text-3xl font-extrabold text-white transition duration-300 hover:text-teal-400 font-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 rounded">
              Endpoint<span className="text-teal-500">.</span><span className="font-normal text-2xl ml-1 text-white opacity-80">Media</span>
            </Link>
            <p className="mt-4 max-w-md text-gray-300 text-sm leading-relaxed"> {/* Changed from gray-400 */}
              Building high-performance digital engines for Johannesburg&apos;s service industry backbone.
              {/* */}
              We transform websites into predictable lead pipelines. Your market dominance starts here.
            </p>
            <p className="mt-6 text-xs text-teal-500 font-semibold uppercase tracking-wider">
              Proudly Based in  Johannesburg , South Africa.
            </p>
            <div className="mt-6 flex space-x-4 items-center">
              <p className="text-xs text-gray-300 font-semibold uppercase tracking-wider mr-2">Trusted &amp; Secure:</p> {/* Changed from gray-500, fixed & */}
              {/* These badges have gray-400 on gray-700, which might still fail contrast. */}
              <span className="inline-block bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">SSL Secured</span> {/* Changed from gray-400 */}
              <span className="inline-block bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">Local Expert</span> {/* Changed from gray-400 */}
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider font-heading">Navigate</h4>
            <ul className="space-y-3 text-sm">
              {/* Added Contact link to match header */}
              <li><Link href="/contact" className="hover:text-teal-400 transition focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-300 rounded px-1">Contact Us</Link></li>
              <li><Link href="#problem" className="hover:text-teal-400 transition focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-300 rounded px-1">The Problem We Solve</Link></li>
              <li><Link href="#blueprint" className="hover:text-teal-400 transition focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-300 rounded px-1">Our Blueprint (Process)</Link></li>
              <li><Link href="#pricing" className="hover:text-teal-400 transition focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-300 rounded px-1">Investment Packages</Link></li>
              <li><Link href="#proof" className="hover:text-teal-400 transition focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-300 rounded px-1">Client Results</Link></li>
              <li><Link href="#audit" className="hover:text-teal-400 transition focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-300 rounded px-1">Free Growth Audit</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info - UPDATED */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white uppercase tracking-wider font-heading">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+27769724559" className="hover:text-teal-400 transition flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-300 rounded">
                  {/* SVG for phone */}
                  <svg className="w-4 h-4 mr-2 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  076 972 4559 (Frank Smit)
                </a>
              </li>
              <li>
                <a href="mailto:hello@endpointmedia.co.za" className="hover:text-teal-400 transition flex items-center focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-300 rounded">
                  {/* SVG for mail */}
                  <svg className="w-4 h-4 mr-2 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 13l-9-9V7l9 5 9-5v5z"></path></svg>
                  hello@endpointmedia.co.za
                </a>
              </li>
              <li className="flex items-start">
                {/* SVG for location */}
                <svg className="w-4 h-4 mr-2 text-teal-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Johannesburg, Gauteng, SA<br />(Online/Remote Operations)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-300"> {/* Changed from gray-500 */}
          <p>&copy; {currentYear} Endpoint Media. All rights reserved. Engineering Leads for  Joburg&apos;s  Best.</p> {/* Fixed Joburg's */}
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/privacy-policy" className="hover:text-teal-400 transition focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-300 rounded">Privacy Policy</Link>
            <span aria-hidden="true">|</span>
            <Link href="/terms-of-service" className="hover:text-teal-400 transition focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-300 rounded">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;