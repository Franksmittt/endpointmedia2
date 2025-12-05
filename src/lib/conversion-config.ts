// src/lib/conversion-config.ts
/**
 * Google Ads Conversion Labels Configuration
 * 
 * IMPORTANT: Replace these placeholder values with your actual conversion labels from Google Ads
 * 
 * How to get your conversion labels:
 * 1. Go to Google Ads > Tools & Settings > Conversions
 * 2. Click on your conversion action (or create a new one)
 * 3. Click "Tag setup" > "Install the tag yourself"
 * 4. Copy the "Conversion Label" (the part after the slash)
 * 
 * Example: If Google shows "AW-17744075656/LbRwCOqzq6ECEOmRz-gD"
 * Your conversion label is: "LbRwCOqzq6ECEOmRz-gD"
 */

export const CONVERSION_LABELS = {
  // Form submissions - replace with your actual label
  FORM_SUBMISSION: process.env.NEXT_PUBLIC_CONVERSION_LABEL_FORM || "YOUR_FORM_CONVERSION_LABEL",
  
  // Free audit form - replace with your actual label
  FREE_AUDIT: process.env.NEXT_PUBLIC_CONVERSION_LABEL_AUDIT || "YOUR_AUDIT_CONVERSION_LABEL",
  
  // Phone calls - replace with your actual label
  PHONE_CALL: process.env.NEXT_PUBLIC_CONVERSION_LABEL_PHONE || "YOUR_PHONE_CONVERSION_LABEL",
  
  // WhatsApp clicks - replace with your actual label
  WHATSAPP: process.env.NEXT_PUBLIC_CONVERSION_LABEL_WHATSAPP || "YOUR_WHATSAPP_CONVERSION_LABEL",
};

