import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CRAWLER_UA =
  /Googlebot|Google-InspectionTool|AdsBot-Google|Mediapartners-Google|bingbot|Baiduspider|YandexBot|DuckDuckBot|Slurp|facebookexternalhit|Twitterbot|LinkedInBot|Applebot/i;
const BLOCKING_RENDER_CRAWLER_UA =
  /Googlebot|Google-InspectionTool|AdsBot-Google|bingbot|BingPreview/i;
const HIGH_VALUE_VERIFIED_BOT_UA = /Googlebot|Google-InspectionTool|bingbot|BingPreview/i;
const LIVE_RETRIEVAL_AGENT_UA = /OAI-SearchBot|PerplexityBot|ChatGPT-User/i;
const TRAINING_SCRAPER_UA = /GPTBot|CCBot|FacebookBot/i;
const BOT_LIKE_UA = /bot|crawler|spider|scrape|slurp|preview|fetch|ai|gpt|perplexity|chatgpt/i;
const TRAILING_ANOMALY_RE = /[&%$]+$/;
const RECURSIVE_PATH_LOOP_RE = /(\/[^/]+)\1{3,}/;
const TRACKING_PARAM_RE = /^(utm_|fbclid$|gclid$)/i;
const STATIC_ASSET_RE =
  /^\/(?:_next\/static|_next\/image|.*\.(?:css|js|mjs|map|svg|png|jpg|jpeg|gif|webp|avif|ico|woff|woff2|ttf|otf))$/i;
const MAX_QUERY_PARAMS = 12;
const MAX_REPEATED_QUERY_PARAM = 3;
const SPELLCHECK_CONFIDENCE_THRESHOLD = 0.85;
const RATE_LIMIT_CAPACITY = 20;
const RATE_LIMIT_REFILL_PER_SECOND = 0.25;
const DNS_CACHE_TTL_MS = 1000 * 60 * 60;

type CrawlerFamily = 'google' | 'bing';
type BotVerification =
  | { kind: 'allowed-live-agent' }
  | { kind: 'verified-search-bot'; family: CrawlerFamily; method: 'manifest' | 'rdns' }
  | { kind: 'training-scraper' }
  | { kind: 'spoofed-search-bot'; family: CrawlerFamily }
  | { kind: 'unverified-bot-like' }
  | { kind: 'human' };

type TokenBucket = {
  tokens: number;
  updatedAt: number;
};

const tokenBuckets = new Map<string, TokenBucket>();
const dnsVerificationCache = new Map<string, { family: CrawlerFamily | null; expiresAt: number }>();

const CRAWLER_IP_MANIFESTS: Record<CrawlerFamily, readonly string[]> = {
  google: [
    '64.233.160.0/19',
    '66.102.0.0/20',
    '66.249.64.0/19',
    '72.14.192.0/18',
    '74.125.0.0/16',
    '108.177.8.0/21',
    '172.217.0.0/16',
    '209.85.128.0/17',
    '216.239.32.0/19',
  ],
  bing: [
    '13.66.139.0/24',
    '40.77.167.0/24',
    '52.167.144.0/24',
    '157.55.39.0/24',
    '207.46.13.0/24',
  ],
};

const VERIFIED_RDNS_SUFFIXES: Record<CrawlerFamily, readonly string[]> = {
  google: ['.googlebot.com', '.google.com'],
  bing: ['.search.msn.com', '.bing.com'],
};

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

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return (
    request.headers.get('cf-connecting-ip') ??
    request.headers.get('x-real-ip') ??
    forwardedFor ??
    ''
  );
}

function ipV4ToInt(ip: string) {
  const parts = ip.split('.').map((part) => Number.parseInt(part, 10));
  if (parts.length !== 4 || parts.some((part) => Number.isNaN(part) || part < 0 || part > 255)) {
    return null;
  }

  return parts.reduce((acc, part) => (acc << 8) + part, 0) >>> 0;
}

function cidrContainsIp(cidr: string, ip: string) {
  if (!cidr.includes('/') || !ip.includes('.') || ip.includes(':')) return false;

  const [range, bitsValue] = cidr.split('/');
  const bits = Number.parseInt(bitsValue, 10);
  const rangeInt = ipV4ToInt(range);
  const ipInt = ipV4ToInt(ip);
  if (rangeInt === null || ipInt === null || Number.isNaN(bits)) return false;

  const mask = bits === 0 ? 0 : (0xffffffff << (32 - bits)) >>> 0;
  return (rangeInt & mask) === (ipInt & mask);
}

function manifestFamilyForIp(ip: string) {
  for (const [family, cidrs] of Object.entries(CRAWLER_IP_MANIFESTS) as [
    CrawlerFamily,
    readonly string[],
  ][]) {
    if (cidrs.some((cidr) => cidrContainsIp(cidr, ip))) {
      return family;
    }
  }

  return null;
}

function familyFromUserAgent(userAgent: string): CrawlerFamily | null {
  if (/Googlebot|Google-InspectionTool|AdsBot-Google|Mediapartners-Google/i.test(userAgent)) {
    return 'google';
  }
  if (/bingbot|BingPreview/i.test(userAgent)) {
    return 'bing';
  }
  return null;
}

function ipToArpa(ip: string) {
  if (ip.includes('.')) {
    const parts = ip.split('.');
    if (parts.length !== 4) return null;
    return `${parts.reverse().join('.')}.in-addr.arpa`;
  }

  if (!ip.includes(':')) return null;

  const [head, tail = ''] = ip.split('::');
  const headParts = head ? head.split(':') : [];
  const tailParts = tail ? tail.split(':') : [];
  const missing = 8 - headParts.length - tailParts.length;
  if (missing < 0) return null;

  const fullParts = [
    ...headParts,
    ...Array.from({ length: missing }, () => '0'),
    ...tailParts,
  ].map((part) => part.padStart(4, '0'));

  return `${fullParts.join('').split('').reverse().join('.')}.ip6.arpa`;
}

async function dnsJson(name: string, type: 'PTR' | 'A' | 'AAAA') {
  const response = await fetch(
    `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${type}`,
    { headers: { accept: 'application/dns-json' } },
  );

  if (!response.ok) return [];
  const payload = (await response.json()) as { Answer?: Array<{ data?: string }> };
  return payload.Answer?.map((answer) => answer.data?.replace(/\.$/, '') ?? '').filter(Boolean) ?? [];
}

async function rdnsFamilyForIp(ip: string) {
  if (!ip) return null;

  const cached = dnsVerificationCache.get(ip);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.family;
  }

  const arpaName = ipToArpa(ip);
  if (!arpaName) return null;

  try {
    const ptrRecords = await dnsJson(arpaName, 'PTR');
    for (const ptrRecord of ptrRecords) {
      const hostname = ptrRecord.toLowerCase();
      const family = (Object.entries(VERIFIED_RDNS_SUFFIXES) as [
        CrawlerFamily,
        readonly string[],
      ][]).find(([, suffixes]) => suffixes.some((suffix) => hostname.endsWith(suffix)))?.[0];

      if (!family) continue;

      const forwardRecords = [
        ...(await dnsJson(hostname, 'A')),
        ...(await dnsJson(hostname, 'AAAA')),
      ];

      if (forwardRecords.includes(ip)) {
        dnsVerificationCache.set(ip, { family, expiresAt: Date.now() + DNS_CACHE_TTL_MS });
        return family;
      }
    }
  } catch {
    dnsVerificationCache.set(ip, { family: null, expiresAt: Date.now() + DNS_CACHE_TTL_MS / 10 });
    return null;
  }

  dnsVerificationCache.set(ip, { family: null, expiresAt: Date.now() + DNS_CACHE_TTL_MS / 10 });
  return null;
}

async function verifyBot(request: NextRequest): Promise<BotVerification> {
  const userAgent = request.headers.get('user-agent') ?? '';
  const clientIp = getClientIp(request);

  if (LIVE_RETRIEVAL_AGENT_UA.test(userAgent)) {
    return { kind: 'allowed-live-agent' };
  }

  if (TRAINING_SCRAPER_UA.test(userAgent)) {
    return { kind: 'training-scraper' };
  }

  const expectedFamily = familyFromUserAgent(userAgent);
  const manifestFamily = manifestFamilyForIp(clientIp);

  if (expectedFamily && manifestFamily === expectedFamily) {
    return { kind: 'verified-search-bot', family: expectedFamily, method: 'manifest' };
  }

  if (expectedFamily) {
    const rdnsFamily = await rdnsFamilyForIp(clientIp);
    if (rdnsFamily === expectedFamily) {
      return { kind: 'verified-search-bot', family: expectedFamily, method: 'rdns' };
    }
    return { kind: 'spoofed-search-bot', family: expectedFamily };
  }

  if (BOT_LIKE_UA.test(userAgent)) {
    return { kind: 'unverified-bot-like' };
  }

  return { kind: 'human' };
}

function isVerifiedHighValueBot(verification: BotVerification) {
  return verification.kind === 'verified-search-bot';
}

function isAllowedAgent(verification: BotVerification) {
  return verification.kind === 'allowed-live-agent' || verification.kind === 'verified-search-bot';
}

function isRateLimited(key: string) {
  const now = Date.now();
  const bucket = tokenBuckets.get(key) ?? {
    tokens: RATE_LIMIT_CAPACITY,
    updatedAt: now,
  };
  const elapsedSeconds = Math.max(0, (now - bucket.updatedAt) / 1000);
  bucket.tokens = Math.min(
    RATE_LIMIT_CAPACITY,
    bucket.tokens + elapsedSeconds * RATE_LIMIT_REFILL_PER_SECOND,
  );
  bucket.updatedAt = now;

  if (bucket.tokens < 1) {
    tokenBuckets.set(key, bucket);
    return true;
  }

  bucket.tokens -= 1;
  tokenBuckets.set(key, bucket);
  return false;
}

function hasRecursiveQuery(url: string) {
  const firstQuestionMark = url.indexOf('?');
  return firstQuestionMark !== -1 && url.indexOf('?', firstQuestionMark + 1) !== -1;
}

function hasEncodedQueryRecursion(url: URL) {
  const query = url.search.slice(1).toLowerCase();
  return query.includes('?') || query.includes('%3f');
}

function hasTrackingParams(url: URL) {
  return [...url.searchParams.keys()].some((key) => TRACKING_PARAM_RE.test(key));
}

function stripTrackingParams(url: URL) {
  const cleanUrl = new URL(url.toString());
  for (const key of [...cleanUrl.searchParams.keys()]) {
    if (TRACKING_PARAM_RE.test(key)) {
      cleanUrl.searchParams.delete(key);
    }
  }
  return cleanUrl;
}

function normalizePath(pathname: string) {
  const normalized = pathname.toLowerCase().replace(/\/{2,}/g, '/').replace(/\/$/, '');
  return normalized || '/';
}

function hasCrawlTrap(url: URL) {
  if (
    TRAILING_ANOMALY_RE.test(url.pathname) ||
    TRAILING_ANOMALY_RE.test(url.search) ||
    RECURSIVE_PATH_LOOP_RE.test(url.pathname)
  ) {
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

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const userAgent = request.headers.get('user-agent') ?? '';
  const verification = await verifyBot(request);
  const clientIp = getClientIp(request) || 'unknown';

  if (verification.kind === 'training-scraper' || verification.kind === 'spoofed-search-bot') {
    return new NextResponse('Forbidden', {
      status: 403,
      headers: {
        'Cache-Control': 'no-store',
        'x-ai-crawler-firewall': verification.kind,
      },
    });
  }

  if (STATIC_ASSET_RE.test(pathname)) {
    if (isVerifiedHighValueBot(verification)) {
      const response = NextResponse.next();
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
      response.headers.set('x-asset-cache-policy', 'verified-bot-immutable');
      return response;
    }

    if (
      verification.kind === 'unverified-bot-like' &&
      isRateLimited(`${clientIp}:${userAgent.slice(0, 80)}`)
    ) {
      return new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          'Retry-After': '60',
          'Cache-Control': 'no-store',
          'x-ai-crawler-firewall': 'asset-rate-limited',
        },
      });
    }
  }

  if (
    hasRecursiveQuery(request.url) ||
    hasEncodedQueryRecursion(request.nextUrl) ||
    TRAILING_ANOMALY_RE.test(request.nextUrl.pathname) ||
    TRAILING_ANOMALY_RE.test(request.nextUrl.search) ||
    RECURSIVE_PATH_LOOP_RE.test(request.nextUrl.pathname)
  ) {
    return new NextResponse('Gone', {
      status: 410,
      headers: {
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
        'x-robots-tag': 'noindex, nofollow',
        'x-crawl-trap': 'terminated',
      },
    });
  }

  if (hasTrackingParams(request.nextUrl)) {
    const cleanUrl = stripTrackingParams(request.nextUrl);
    if (cleanUrl.toString() !== request.nextUrl.toString()) {
      const response = NextResponse.redirect(cleanUrl, 301);
      response.headers.set('x-url-normalization', 'tracking-params-stripped');
      return response;
    }
  }

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
    BLOCKING_RENDER_CRAWLER_UA.test(userAgent) && isAllowedAgent(verification)
      ? 'blocking'
      : 'streaming',
  );
  requestHeaders.set('x-bot-verification', verification.kind);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  if (CRAWLER_UA.test(userAgent) || LIVE_RETRIEVAL_AGENT_UA.test(userAgent)) {
    response.headers.set('x-robots-tag', 'all');
  }

  if (
    BLOCKING_RENDER_CRAWLER_UA.test(userAgent) &&
    HIGH_VALUE_VERIFIED_BOT_UA.test(userAgent) &&
    isAllowedAgent(verification)
  ) {
    response.headers.set('x-endpoint-render-mode', 'blocking');
    response.headers.set('x-bot-html-mode', 'blocking-shell');
  }

  response.headers.set('x-bot-verification', verification.kind);

  return response;
}

export const config = {
  matcher: [
    '/((?!api/).*)',
  ],
};
