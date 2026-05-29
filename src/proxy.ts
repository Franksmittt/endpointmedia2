import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CRAWLER_UA =
  /Googlebot|Google-InspectionTool|AdsBot-Google|Mediapartners-Google|bingbot|Baiduspider|YandexBot|DuckDuckBot|Slurp|facebookexternalhit|Twitterbot|LinkedInBot|Applebot/i;

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') ?? '';

  if (CRAWLER_UA.test(userAgent)) {
    const response = NextResponse.next();
    response.headers.set('x-robots-tag', 'all');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|kml|txt|woff2?)).*)',
  ],
};
