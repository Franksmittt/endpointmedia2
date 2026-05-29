/**
 * Google Ads conversion labels — set in Vercel / .env.local (never commit real secrets).
 *
 * Google Ads → Tools → Conversions → Tag setup → copy label after the slash in:
 *   AW-XXXXXXXXXX/LABEL_HERE
 */

export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? 'AW-17744075656';

export const CONVERSION_LABELS = {
  FORM_SUBMISSION: process.env.NEXT_PUBLIC_CONVERSION_LABEL_FORM ?? '',
  FREE_AUDIT: process.env.NEXT_PUBLIC_CONVERSION_LABEL_AUDIT ?? '',
  PHONE_CALL: process.env.NEXT_PUBLIC_CONVERSION_LABEL_PHONE ?? '',
  WHATSAPP: process.env.NEXT_PUBLIC_CONVERSION_LABEL_WHATSAPP ?? '',
} as const;

/** True when a real label is configured (not empty / placeholder). */
export function isConversionLabelConfigured(label: string | undefined): label is string {
  if (!label) return false;
  const trimmed = label.trim();
  return trimmed.length > 0 && !trimmed.startsWith('YOUR_');
}

export function getConfiguredConversionLabels(): Partial<typeof CONVERSION_LABELS> {
  return Object.fromEntries(
    Object.entries(CONVERSION_LABELS).filter(([, value]) => isConversionLabelConfigured(value)),
  ) as Partial<typeof CONVERSION_LABELS>;
}
