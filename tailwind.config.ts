import type { Config } from "tailwindcss";
// CRITICAL FIX: Merge the require and destructuring into one correct block.
const { fontFamily } = require("tailwindcss/defaultTheme"); 

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", 
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Defined a cohesive color scheme:
        // Primary: Dark background for sophistication/contrast
        primary: {
          DEFAULT: '#111827', // Dark Blue/Gray
          foreground: '#FAFAFA', // Light text on dark background
        },
        // Accent: Teal/Blue for CTAs, links, and highlights (Conversion Focus)
        accent: {
          DEFAULT: '#00A4C8', // Standard accent blue
          500: '#00A4C8',
          600: '#008BAD', 
          foreground: '#FAFAFA',
        },
        // Secondary/Neutral colors for use throughout the UI
        teal: {
          50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4',
          400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e',
          800: '#115e59', 900: '#134e4a', 950: '#042f2e'
        },
        gray: {
          50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db',
          400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151',
          800: '#1f2937', 900: '#111827', 950: '#030712'
        },
      },
      // CRITICAL: Add a custom shadow utility for Neubrutalist visual impact
      boxShadow: {
        'neubrutal': '6px 6px 0px 0px rgba(0, 0, 0, 1)', // Hard, dark offset shadow
        'neubrutal-accent': '6px 6px 0px 0px #00A4C8', // Accent shadow for contrast
      },
      // Ensure font definitions correctly link to the CSS variables defined in layout.tsx
      fontFamily: {
        // Use the CSS variable defined in layout.tsx, falling back to system sans-serif
        sans: ["var(--font-roboto)", ...fontFamily.sans], 
        heading: ["var(--font-poppins)", ...fontFamily.sans], 
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
export default config;