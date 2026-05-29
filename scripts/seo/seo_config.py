"""Shared configuration for local SEO validation scripts."""

from __future__ import annotations

import os
from urllib.parse import urljoin

DEFAULT_BASE_URL = os.environ.get("SEO_BASE_URL", "http://localhost:3000")
DEFAULT_SITEMAP_PATH = "/sitemap.xml"
PRODUCTION_BASE_URL = os.environ.get(
    "NEXT_PUBLIC_BASE_URL", "https://www.endpointmedia.co.za"
)

GOOGLEBOT_UA = (
    "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
)

SITEMAP_NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}

# Paths excluded from graph crawl (API, static assets)
CRAWL_SKIP_PREFIXES = (
    "/api/",
    "/_next/data/",
    "/__nextjs/",
)

MAX_CRAWL_DEPTH = 5
MAX_CLICK_DEPTH = 3
