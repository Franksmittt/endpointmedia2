// src/lib/performance.ts
/**
 * Performance optimization utilities for Core Web Vitals
 */

/**
 * Image optimization configuration
 */
export const imageConfig = {
  formats: ['webp', 'avif'] as const,
  sizes: {
    hero: '(max-width: 768px) 100vw, 1200px',
    thumbnail: '(max-width: 768px) 100vw, 400px',
    card: '(max-width: 768px) 100vw, 600px',
  },
  quality: 85,
  placeholder: 'blur' as const,
};

/**
 * Resource hints for preconnect and prefetch
 */
export const resourceHints = {
  // Google Fonts
  fonts: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  ],
  // Analytics (if used)
  analytics: [],
};

/**
 * Core Web Vitals thresholds
 */
export const coreWebVitalsThresholds = {
  LCP: 2.5, // Largest Contentful Paint - should be under 2.5s
  FID: 100, // First Input Delay - should be under 100ms
  CLS: 0.1, // Cumulative Layout Shift - should be under 0.1
};

