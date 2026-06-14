import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CRAWLER_UA =
  /Googlebot|Google-InspectionTool|AdsBot-Google|Mediapartners-Google|bingbot|Baiduspider|YandexBot|DuckDuckBot|Slurp|facebookexternalhit|Twitterbot|LinkedInBot|Applebot/i;
const BLOCKING_RENDER_CRAWLER_UA =
  /Googlebot|Google-InspectionTool|AdsBot-Google|bingbot|BingPreview/i;
const TRAILING_ANOMALY_RE = /[&%$]+$/;
const MAX_QUERY_PARAMS = 12;
const MAX_REPEATED_QUERY_PARAM = 3;
const SPELLCHECK_CONFIDENCE_THRESHOLD = 0.85;

const VALUABLE_PATHS = [
  '/',
  '/about/author/frank-smit',
  '/case-studies',
  '/contact',
  '/industries',
  '/industries/finance',
  '/industries/law-firms',
  '/industries/manufacturing-logistics',
  '/industries/medical',
  '/industries/real-estate',
  '/locations',
  '/locations/benoni',
  '/locations/bryanston',
  '/locations/fourways',
  '/locations/meyersdal',
  '/locations/midrand',
  '/locations/new-redruth',
  '/locations/randburg',
  '/locations/rivonia',
  '/locations/roodepoort',
  '/locations/rosebank',
  '/locations/sandton',
  '/locations/waterfall',
  '/pricing',
  '/process',
  '/services',
  '/services/b2b-google-ads-management',
  '/services/conversion-rate-optimization',
  '/services/custom-development',
  '/services/facebook-ads',
  '/services/google-ads',
  '/services/google-ads-landing-pages',
  '/services/google-ads-pricing',
  '/services/local-seo',
  '/services/performance-max-google-ads',
  '/services/review-management',
  '/services/shopify-expert',
  '/services/web-design-firms',
  '/services/website-design-prices',
  '/services/website-development',
  '/services/website-maintenance',
  '/services/website-redesign',
] as const;

const LEGACY_CANONICAL_PATHS: Record<string, string> = {
  '/services/seo': '/services/local-seo',
  '/seo': '/services/local-seo',
  '/google-ads': '/services/google-ads',
  '/web-design': '/services/website-development',
  '/website-design': '/services/website-development',
};

const ROUTE_CANDIDATES = [
  ...VALUABLE_PATHS,
  ...Object.keys(LEGACY_CANONICAL_PATHS),
] as const;

function normalizePath(pathname: string) {
  const normalized = pathname.toLowerCase().replace(/\/{2,}/g, '/').replace(/\/$/, '');
  return normalized || '/';
}

function hasCrawlTrap(url: URL) {
  if (TRAILING_ANOMALY_RE.test(url.pathname) || TRAILING_ANOMALY_RE.test(url.search)) {
    return true;
  }

  const queryCounts = new Map<string, number>();
  for (const key of url.searchParams.keys()) {
    queryCounts.set(key, (queryCounts.get(key) ?? 0) + 1);
  }

  if ([...url.searchParams.keys()].length > MAX_QUERY_PARAMS) {
    return true;
  }

  return [...queryCounts.values()].some((count) => count > MAX_REPEATED_QUERY_PARAM);
}

function levenshteinDistance(a: string, b: string) {
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  const current = Array.from({ length: b.length + 1 }, () => 0);

  for (let i = 1; i <= a.length; i += 1) {
    current[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + substitutionCost,
      );
    }
    previous.splice(0, previous.length, ...current);
  }

  return previous[b.length];
}

function ngrams(value: string, size = 2) {
  if (value.length <= size) return new Set([value]);
  const grams = new Set<string>();
  for (let index = 0; index <= value.length - size; index += 1) {
    grams.add(value.slice(index, index + size));
  }
  return grams;
}

function ngramSimilarity(a: string, b: string) {
  const aGrams = ngrams(a);
  const bGrams = ngrams(b);
  const intersection = [...aGrams].filter((gram) => bGrams.has(gram)).length;
  const union = new Set([...aGrams, ...bGrams]).size;
  return union === 0 ? 0 : intersection / union;
}

function spellcheckConfidence(input: string, candidate: string) {
  const distance = levenshteinDistance(input, candidate);
  const longest = Math.max(input.length, candidate.length, 1);
  const editSimilarity = 1 - distance / longest;
  return editSimilarity * 0.7 + ngramSimilarity(input, candidate) * 0.3;
}

function findSpellcheckRedirect(pathname: string) {
  const normalizedPath = normalizePath(pathname);

  if (
    VALUABLE_PATHS.includes(normalizedPath as (typeof VALUABLE_PATHS)[number]) ||
    pathname.includes('.')
  ) {
    return null;
  }

  let bestCandidate = '';
  let bestConfidence = 0;

  for (const candidate of ROUTE_CANDIDATES) {
    const confidence = spellcheckConfidence(normalizedPath, candidate);
    if (confidence > bestConfidence) {
      bestCandidate = candidate;
      bestConfidence = confidence;
    }
  }

  if (bestConfidence <= SPELLCHECK_CONFIDENCE_THRESHOLD) {
    return null;
  }

  return {
    pathname: LEGACY_CANONICAL_PATHS[bestCandidate] ?? bestCandidate,
    confidence: bestConfidence,
  };
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') ?? '';

  if (hasCrawlTrap(request.nextUrl)) {
    return new NextResponse('Gone', {
      status: 410,
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        'x-robots-tag': 'noindex, nofollow',
        'x-crawl-trap': 'terminated',
      },
    });
  }

  const spellcheckRedirect = findSpellcheckRedirect(pathname);
  if (spellcheckRedirect) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = spellcheckRedirect.pathname;
    redirectUrl.search = '';

    const response = NextResponse.redirect(redirectUrl, 301);
    response.headers.set('x-seo-recovery', 'spellcheck-redirect');
    response.headers.set('x-seo-recovery-confidence', spellcheckRedirect.confidence.toFixed(3));
    return response;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);
  requestHeaders.set(
    'x-endpoint-render-mode',
    BLOCKING_RENDER_CRAWLER_UA.test(userAgent) ? 'blocking' : 'streaming',
  );

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  if (CRAWLER_UA.test(userAgent)) {
    response.headers.set('x-robots-tag', 'all');
  }

  if (BLOCKING_RENDER_CRAWLER_UA.test(userAgent)) {
    response.headers.set('x-endpoint-render-mode', 'blocking');
    response.headers.set('x-bot-html-mode', 'blocking-shell');
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|kml|txt|woff2?)).*)',
  ],
};
