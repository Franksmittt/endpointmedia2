import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CRAWLER_UA =
  /Googlebot|Google-InspectionTool|AdsBot-Google|Mediapartners-Google|bingbot|Baiduspider|YandexBot|DuckDuckBot|Slurp|facebookexternalhit|Twitterbot|LinkedInBot|Applebot/i;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-pathname', pathname);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  if (CRAWLER_UA.test(request.headers.get('user-agent') ?? '')) {
    response.headers.set('x-robots-tag', 'all');
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|kml|txt|woff2?)).*)',
  ],
};
