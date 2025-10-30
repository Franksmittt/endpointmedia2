import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme"); // Import default theme fonts

const config: Config = {
  content: [
    // Ensure these paths cover ALL files using Tailwind classes
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Keep if using /pages
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Your custom theme extensions
      colors: {
        teal: {
          50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4',
          400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e',
          800: '#115e59', 900: '#134e4a', 950: '#042f2e'
        },
        gray: {
          50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db',
          400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151',
          800: '#1f2937', 900: '#111827', 950: '#030712'
        }
      },
      // Define font families using the CSS variables from next/font
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans], // Set Roboto as the base sans font
        heading: ["var(--font-poppins)", ...fontFamily.sans], // Set Poppins as the heading font
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // shadcn/ui often uses this
  ],
};
export default config;