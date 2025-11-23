'use client';
 
import { useReportWebVitals } from 'next/web-vitals';
 
export function WebVitals() {
  useReportWebVitals((metric) => {
    // Only log Core Web Vitals
    if (['CLS', 'LCP', 'INP'].includes(metric.name)) {
      // Send to GA4 if available
      if (typeof window !== 'undefined' && 'gtag' in window && typeof (window as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
        (window as { gtag: (...args: unknown[]) => void }).gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        });
      }
      // Optional: Log to console in dev
      if (process.env.NODE_ENV === 'development') {
        console.log('[Vital]', metric.name, metric.value);
      }
    }
  });
 
  return null;
}
