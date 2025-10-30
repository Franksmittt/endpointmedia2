// src/app/layout.tsx
import type { Metadata } from "next";
import { Roboto, Poppins } from 'next/font/google'; // Import next/font functions
import "./globals.css"; // Import global styles (including Tailwind directives)
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configure Roboto font (for body/sans-serif)
const roboto = Roboto({
  weight: ['400', '500'], // Specify only the weights you use
  subsets: ['latin'],
  display: 'swap', // Recommended for performance
  variable: '--font-roboto', // Define CSS variable name
});

// Configure Poppins font (for headings)
const poppins = Poppins({
  weight: ['600', '700', '800'], // Specify only the weights you use
  subsets: ['latin'],
  display: 'swap', // Recommended for performance
  variable: '--font-poppins', // Define CSS variable name
});


// Define metadata for SEO
export const metadata: Metadata = {
  title: "Web Design Johannesburg | Endpoint Media | Websites That Generate Revenue",
  description: "Stop buying online brochures. Endpoint Media builds high-performance, lead-generating websites for Johannesburg service businesses. We deliver ROI, not excuses. Get your free audit.",
  keywords: "web design johannesburg, local SEO johannesburg, web developer johannesburg, lead generation website, website design sandton, website design randburg, small business website johannesburg, website design prices johannesburg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply font variables to the html tag
    <html lang="en" className={`${roboto.variable} ${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Font links are handled automatically by next/font */}
      </head>
      {/* Apply base body font className */}
      <body className={`bg-gray-50 text-gray-800 antialiased ${roboto.className}`}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Header /> {/* Header component */}
        <main id="main-content">{children}</main> {/* Wrap children in main for semantics */}
        <Footer /> {/* Footer component */}
        {/* Script logic (mobile menu, observer) should be in client components */}
      </body>
    </html>
  );
}