// src/lib/analytics.ts
/**
 * Google Ads Conversion Tracking Utility
 */

import { CONVERSION_LABELS } from './conversion-config';

const GOOGLE_ADS_ID = "AW-17744075656";

// Type definition for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Track a Google Ads conversion
 * @param conversionLabel - Your conversion label from Google Ads (e.g., "LbRwCOqzq6ECEOmRz-gD")
 * @param value - Optional conversion value
 * @param currency - Optional currency code (default: "ZAR")
 */
export function trackConversion(
  conversionLabel: string,
  value?: number,
  currency: string = "ZAR"
) {
  if (typeof window === "undefined") return;

  // Check if gtag is loaded
  if (!window.gtag) {
    console.warn("Google Analytics gtag not loaded. Conversion not tracked.");
    return;
  }

  // Track the conversion
  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
    value: value,
    currency: currency,
  });

  console.log(`Conversion tracked: ${GOOGLE_ADS_ID}/${conversionLabel}`);
}

/**
 * Track a generic event (for other analytics)
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, unknown>
) {
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
}

/**
 * Track phone number clicks
 */
export function trackPhoneClick(phoneNumber: string) {
  trackEvent("phone_click", {
    phone_number: phoneNumber,
  });
  
  // Track as conversion if label is configured
  if (CONVERSION_LABELS.PHONE_CALL && !CONVERSION_LABELS.PHONE_CALL.startsWith("YOUR_")) {
    trackConversion(CONVERSION_LABELS.PHONE_CALL);
  }
}

/**
 * Track WhatsApp clicks
 */
export function trackWhatsAppClick(phoneNumber: string) {
  trackEvent("whatsapp_click", {
    phone_number: phoneNumber,
  });
  
  // Track as conversion if label is configured
  if (CONVERSION_LABELS.WHATSAPP && !CONVERSION_LABELS.WHATSAPP.startsWith("YOUR_")) {
    trackConversion(CONVERSION_LABELS.WHATSAPP);
  }
}

/**
 * Track form submission conversion
 */
export function trackFormSubmission() {
  if (CONVERSION_LABELS.FORM_SUBMISSION && !CONVERSION_LABELS.FORM_SUBMISSION.startsWith("YOUR_")) {
    trackConversion(CONVERSION_LABELS.FORM_SUBMISSION);
  }
}

/**
 * Track free audit form conversion
 */
export function trackFreeAudit() {
  if (CONVERSION_LABELS.FREE_AUDIT && !CONVERSION_LABELS.FREE_AUDIT.startsWith("YOUR_")) {
    trackConversion(CONVERSION_LABELS.FREE_AUDIT);
  }
}


