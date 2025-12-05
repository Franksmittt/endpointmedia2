# Google Ads Conversion Tracking Setup Instructions

## 🔴 The Problem: 0 Conversions Showing in Google Ads

Your site is receiving traffic (good CTR) but showing 0 conversions because **conversion events are not being tracked**.

## ✅ The Solution: Add Conversion Labels

I've set up the tracking code infrastructure. Now you just need to:

1. **Get your conversion labels from Google Ads**
2. **Add them to your environment variables or config file**

---

## Step 1: Create Conversion Actions in Google Ads

If you don't have conversion actions set up yet:

1. Go to [Google Ads](https://ads.google.com)
2. Click **Tools & Settings** (wrench icon) → **Conversions**
3. Click the **+** button to create a new conversion action
4. Choose **Website** as the conversion source
5. Configure:
   - **Category**: Choose "Submit lead form" or "Contact"
   - **Value**: Set to "Don't use a value" or set a value (e.g., R1,500 for December special)
   - **Count**: "One" (recommended for leads)
   - **Click-through window**: 30 days (default)
   - **View-through window**: 1 day (default)
6. Click **Create and continue**

---

## Step 2: Get Your Conversion Labels

For each conversion action you create:

1. In Google Ads, go to **Tools & Settings** → **Conversions**
2. Click on your conversion action
3. Click **Tag setup** tab
4. Choose **Install the tag yourself**
5. You'll see code like this:

```html
<!-- Event snippet -->
gtag('event', 'conversion', {
    'send_to': 'AW-17744075656/LbRwCOqzq6ECEOmRz-gD'
});
```

6. **Copy the part after the slash** (e.g., `LbRwCOqzq6ECEOmRz-gD`)
   - This is your **conversion label**

---

## Step 3: Add Conversion Labels to Your Project

### Option A: Environment Variables (Recommended for Production)

Create or update your `.env.local` file:

```bash
NEXT_PUBLIC_CONVERSION_LABEL_FORM=LbRwCOqzq6ECEOmRz-gD
NEXT_PUBLIC_CONVERSION_LABEL_AUDIT=AbC123XyZ
NEXT_PUBLIC_CONVERSION_LABEL_DECEMBER=XyZ789AbC
NEXT_PUBLIC_CONVERSION_LABEL_PHONE=PhOnE123
NEXT_PUBLIC_CONVERSION_LABEL_WHATSAPP=WhAtS123
```

**Important**: Replace the example values with your actual conversion labels!

### Option B: Direct Config (Quick Test)

Edit `src/lib/conversion-config.ts` and replace the placeholder values:

```typescript
export const CONVERSION_LABELS = {
  FORM_SUBMISSION: "LbRwCOqzq6ECEOmRz-gD",  // Your actual label
  FREE_AUDIT: "AbC123XyZ",                  // Your actual label
  DECEMBER_SPECIAL: "XyZ789AbC",            // Your actual label
  PHONE_CALL: "PhOnE123",                   // Your actual label (optional)
  WHATSAPP: "WhAtS123",                     // Your actual label (optional)
};
```

---

## Step 4: Test Your Conversion Tracking

1. **Test locally**:
   ```bash
   npm run dev
   ```

2. **Submit a test form**:
   - Fill out the contact form, audit form, or December special form
   - Submit it
   - Open browser DevTools → Console
   - You should see: `Conversion tracked: AW-17744075656/YOUR_LABEL`

3. **Verify in Google Ads**:
   - Go to Google Ads → Tools & Settings → Conversions
   - Click on your conversion action
   - Click **Tag setup** → **Test conversions**
   - Enter your website URL and submit
   - Google will test if the conversion fires correctly

4. **Wait 24-48 hours** for conversions to appear in your reports

---

## Step 5: Track Phone & WhatsApp Clicks (Optional)

If you want to track phone calls and WhatsApp clicks as conversions:

1. Update phone number links in your components to track clicks:

```tsx
import { trackPhoneClick } from '@/lib/analytics';

<a 
  href="tel:+27769724559" 
  onClick={() => trackPhoneClick('+27769724559')}
>
  076 972 4559
</a>
```

2. Add WhatsApp tracking similarly:

```tsx
import { trackWhatsAppClick } from '@/lib/analytics';

<a 
  href="https://wa.me/27769724559" 
  onClick={() => trackWhatsAppClick('+27769724559')}
  target="_blank"
>
  WhatsApp
</a>
```

---

## 📋 Conversion Tracking Checklist

- [ ] Created conversion actions in Google Ads
- [ ] Got conversion labels for each action
- [ ] Added labels to `.env.local` or `conversion-config.ts`
- [ ] Tested form submissions locally
- [ ] Verified in Google Ads test tool
- [ ] Deployed to production
- [ ] Waited 24-48 hours for data to appear

---

## 🚨 Common Issues

### "Conversion tracked" appears in console but Google Ads shows 0

- **Wait 24-48 hours** - Google Ads reporting has a delay
- Check that your conversion label matches exactly (case-sensitive)
- Verify your Google Ads ID (`AW-17744075656`) is correct

### No "Conversion tracked" message in console

- Check that `gtag` is loaded (should be in your `layout.tsx`)
- Verify you're using the correct conversion label format
- Check browser console for any JavaScript errors

### Want to track multiple conversion types separately

- Create separate conversion actions in Google Ads for:
  - Form submissions
  - Free audit requests
  - December special bookings
  - Phone calls
  - WhatsApp messages
- Each will have its own unique conversion label

---

## 📊 After Setup

Once conversions are tracking, you'll be able to see:

- **Conversion rate** in your Google Ads reports
- **Cost per conversion** (how much you pay per lead)
- **Conversion value** (if you set values)
- Which campaigns/keywords are driving the best leads

This data will help you optimize your ad spend and improve ROI!

---

**Need help?** Check the code comments in:
- `src/lib/analytics.ts` - Conversion tracking functions
- `src/lib/conversion-config.ts` - Configuration file

