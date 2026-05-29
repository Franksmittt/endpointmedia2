/**
 * Google Ads conversion tracking + gtag queue (survives lazyOnload race).
 */

import {
  CONVERSION_LABELS,
  GOOGLE_ADS_ID,
  isConversionLabelConfigured,
} from './conversion-config';

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
    __gtagQueue?: unknown[][];
    __flushGtagQueue?: () => void;
  }
}

function getGtagQueue(): unknown[][] {
  if (typeof window === 'undefined') return [];
  if (!window.__gtagQueue) {
    window.__gtagQueue = [];
  }
  return window.__gtagQueue;
}

/** Push to gtag immediately, or queue until the layout init script flushes. */
export function gtagSafe(...args: unknown[]) {
  if (typeof window === 'undefined') return;

  if (typeof window.gtag === 'function') {
    window.gtag(...args);
    return;
  }

  getGtagQueue().push(args);
}

/** Drain queued events after gtag is defined (called from layout inline script + module init). */
export function flushGtagQueue() {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;

  const queue = getGtagQueue();
  while (queue.length > 0) {
    const args = queue.shift();
    if (args) window.gtag(...args);
  }
}

if (typeof window !== 'undefined') {
  getGtagQueue();
  window.__flushGtagQueue = flushGtagQueue;
}

export function trackConversion(conversionLabel: string, value?: number, currency = 'ZAR') {
  if (!isConversionLabelConfigured(conversionLabel)) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[analytics] Conversion label not configured — event skipped.');
    }
    return;
  }

  gtagSafe('event', 'conversion', {
    send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
    value,
    currency,
  });

  if (process.env.NODE_ENV === 'development') {
    console.log(`[analytics] Conversion queued/sent: ${GOOGLE_ADS_ID}/${conversionLabel}`);
  }
}

export function trackEvent(eventName: string, eventParams?: Record<string, unknown>) {
  gtagSafe('event', eventName, eventParams);
}

export function trackPhoneClick(phoneNumber: string) {
  trackEvent('phone_click', { phone_number: phoneNumber });

  if (isConversionLabelConfigured(CONVERSION_LABELS.PHONE_CALL)) {
    trackConversion(CONVERSION_LABELS.PHONE_CALL);
  }
}

export function trackWhatsAppClick(phoneNumber: string) {
  trackEvent('whatsapp_click', { phone_number: phoneNumber });

  if (isConversionLabelConfigured(CONVERSION_LABELS.WHATSAPP)) {
    trackConversion(CONVERSION_LABELS.WHATSAPP);
  }
}

export function trackFormSubmission() {
  if (isConversionLabelConfigured(CONVERSION_LABELS.FORM_SUBMISSION)) {
    trackConversion(CONVERSION_LABELS.FORM_SUBMISSION);
  }
}

export function trackFreeAudit() {
  if (isConversionLabelConfigured(CONVERSION_LABELS.FREE_AUDIT)) {
    trackConversion(CONVERSION_LABELS.FREE_AUDIT);
  }
}
