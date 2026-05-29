'use client';

import { useReportWebVitals } from 'next/web-vitals';
import { gtagSafe } from '@/lib/analytics';

export function WebVitals() {
  useReportWebVitals((metric) => {
    if (!['CLS', 'LCP', 'INP'].includes(metric.name)) return;

    gtagSafe('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_delta: metric.delta,
      metric_rating: metric.rating,
      event_category: 'Web Vitals',
      non_interaction: true,
    });

    if (process.env.NODE_ENV === 'development') {
      console.log('[Vital]', metric.name, metric.value);
    }
  });

  return null;
}
