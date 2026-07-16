/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force full HTML for search bots (avoid indexing RSC flight payloads)
  htmlLimitedBots: /Googlebot|AdsBot-Google|Mediapartners-Google|bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|facebookexternalhit|Twitterbot|LinkedInBot|WhatsApp|Applebot/i,

  // Image optimization for Core Web Vitals
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  
  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  
  // Trailing slash configuration for canonical consistency
  // IMPORTANT: Choose one strategy and ensure all canonicals match
  // Setting to false means /about (not /about/)
  trailingSlash: false,
  
  // WWW redirect configuration - redirect non-www to www for canonical consistency
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'endpointmedia.co.za',
          },
        ],
        destination: 'https://www.endpointmedia.co.za/:path*',
        permanent: true, // 308 redirect
      },
    ];
  },
  
  // Production optimizations
  productionBrowserSourceMaps: false,
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups'
          },
          {
            // Perfect-10 Task 2: Paystack commerce CSP allowlist (Path A).
            // Store: react-paystack → @paystack/inline-js (popup/iframe).
            // Onboarding: server initialize + top-level redirect (mostly unaffected by script-src).
            // Hosts evidenced from node_modules/@paystack/inline-js + Paystack Inline docs.
            // Do NOT use https: wildcards. Do NOT add unsafe-eval. Staging/beta/legacy hosts omitted.
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // gtag + Paystack Inline/popup scripts (js.paystack.co classic; checkout* for vendor chunks e.g. pusher)
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://js.paystack.co https://checkout.paystack.com https://checkout-studio.paystack.com",
              "style-src 'self' 'unsafe-inline'",
              // img-src already allows https: (Paystack card brand assets covered)
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              // Analytics + Paystack API / checkout XHR (studio-api for newer checkout studio)
              "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://vitals.vercel-insights.com https://api.paystack.co https://checkout.paystack.com https://standard.paystack.co https://checkout-studio.paystack.com https://studio-api.paystack.co",
              // Google embeds + Paystack payment iframes/popups
              "frame-src 'self' https://www.google.com https://checkout.paystack.com https://standard.paystack.co https://checkout-studio.paystack.com https://js.paystack.co",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              // Keep self; allow Paystack checkout form posts / 3DS handoffs from Inline
              "form-action 'self' https://checkout.paystack.com https://standard.paystack.co",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
      {
        source: '/((?!api|_next/static|_next/image).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Experimental features for performance
  // Note: optimizeCss requires 'critters' package - disabled for now
  // experimental: {
  //   optimizeCss: true,
  // },
};

export default nextConfig;