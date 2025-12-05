# Why Your Blog Post Shows "Not Indexed" in Google Search Console

## The Problem

Google is showing your blog post as "not indexed" with this message:
- **User-declared canonical**: `https://endpointmedia.co.za/blog/...` (no www)
- **URL being checked**: `https://www.endpointmedia.co.za/blog/...` (with www)
- **Reason**: "Alternate page with proper canonical tag"

## What's Happening

1. **You're checking the www version** in Google Search Console
2. **But your canonical tag points to the non-www version**
3. **Google correctly indexes the non-www version** (the one in the canonical tag)
4. **So the www version correctly shows as "not indexed"** - this is actually CORRECT behavior!

Google is doing exactly what it should - it's indexing the canonical URL (non-www) and telling you the www version isn't indexed because it's an alternate page.

## Why This Is Happening

Your production environment likely has:
```bash
NEXT_PUBLIC_BASE_URL=https://endpointmedia.co.za
```

But it should be:
```bash
NEXT_PUBLIC_BASE_URL=https://www.endpointmedia.co.za
```

## The Solution

You have two options:

### Option 1: Use www as canonical (Recommended)

1. **Set production environment variable:**
   ```bash
   NEXT_PUBLIC_BASE_URL=https://www.endpointmedia.co.za
   ```

2. **This ensures all canonical tags use www**

3. **Your redirect in `next.config.mjs` already redirects non-www → www**, so this is the correct setup

### Option 2: Use non-www as canonical

1. **Remove the redirect in `next.config.mjs`**
2. **Set `NEXT_PUBLIC_BASE_URL=https://endpointmedia.co.za`**
3. **Update all hardcoded www references to non-www**

**I recommend Option 1** because:
- You already have the redirect set up
- www is more commonly expected by users
- The redirect is already in place

## What to Check in Production

1. **Verify environment variable:**
   - Check your hosting provider (Vercel, Netlify, etc.)
   - Ensure `NEXT_PUBLIC_BASE_URL=https://www.endpointmedia.co.za`

2. **Check actual canonical tags:**
   - Visit the blog post in production
   - View page source
   - Look for `<link rel="canonical" href="...">`
   - It should show `https://www.endpointmedia.co.za/...`

## Fixing Inconsistencies in Code

I also found hardcoded non-www URLs in:
- `ORG_ID` in `src/lib/seo.ts` (line 24)
- `FRANK_SMIT_ID` in `src/lib/seo.ts` (line 29)

These should be updated to use www for consistency.

## After Fixing

1. **Rebuild and redeploy** your site
2. **In Google Search Console:**
   - Check the **non-www version** of the URL (the one Google is actually indexing)
   - You should see it's indexed correctly
   - The www version showing "not indexed" is correct - it's an alternate page

3. **Request indexing** for the canonical version (non-www) if needed

## Summary

**This is not actually a problem!** Google is correctly:
- Indexing the canonical URL (non-www)
- Telling you the www version isn't indexed (which is correct, it redirects to non-www)

The "fix" is just ensuring your environment variable matches what you want as canonical, and updating any hardcoded URLs for consistency.

