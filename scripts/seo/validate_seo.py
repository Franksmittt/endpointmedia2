#!/usr/bin/env python3
"""
Pre-Deployment Next.js SEO Validation Engine

Parses sitemap.xml, verifies HTTP status (no hidden 308 traps), canonical alignment,
robots meta, and X-Robots-Tag headers. Mimics Googlebot with allow_redirects=False.

Usage:
  python scripts/seo/validate_seo.py
  python scripts/seo/validate_seo.py --base-url http://localhost:3000
  python scripts/seo/validate_seo.py --base-url https://www.endpointmedia.co.za
"""

from __future__ import annotations

import argparse
import os
import sys
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import xml.etree.ElementTree as ET
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup

from seo_config import (
    DEFAULT_BASE_URL,
    DEFAULT_SITEMAP_PATH,
    GOOGLEBOT_UA,
    SITEMAP_NS,
)


def normalize_path(url: str, path_only: bool = False) -> str:
    """Compare paths ignoring scheme, www, and trailing slashes."""
    parsed = urlparse(url)
    path = parsed.path.rstrip("/") or "/"
    if path_only:
        return path
    host = parsed.netloc.lower().replace("www.", "")
    return f"{host}{path}"


def remap_to_base(url: str, base_url: str) -> str:
    """Map production sitemap URLs to local base when testing localhost."""
    base = urlparse(base_url)
    if base.hostname not in ("localhost", "127.0.0.1"):
        return url
    parsed = urlparse(url)
    path = parsed.path or "/"
    return f"{base.scheme}://{base.netloc}{path}"


def fetch_sitemap_urls(sitemap_url: str) -> list[str]:
    print(f"[*] Fetching sitemap: {sitemap_url}")
    request = urllib.request.Request(sitemap_url, headers={"User-Agent": GOOGLEBOT_UA})
    with urllib.request.urlopen(request, timeout=30) as response:
        xml_data = response.read()

    root = ET.fromstring(xml_data)
    urls: list[str] = []

    for loc in root.findall(".//sm:loc", SITEMAP_NS):
        if loc.text:
            urls.append(loc.text.strip())

    if not urls:
        for loc in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc"):
            if loc.text:
                urls.append(loc.text.strip())

    print(f"[+] Found {len(urls)} URLs in sitemap")
    return urls


def validate_url(
    url: str, headers: dict[str, str], *, local_mode: bool = False
) -> tuple[bool, str]:
    try:
        response = requests.get(
            url, headers=headers, timeout=15, allow_redirects=False
        )
        status = response.status_code

        if status in (301, 302, 307, 308):
            location = response.headers.get("Location", "")
            return (
                False,
                f"HTTP {status} redirect to {location} (trailing slash / proxy trap?)",
            )

        if status != 200:
            return False, f"HTTP {status} (expected 200)"

        x_robots = response.headers.get("X-Robots-Tag", "").lower()
        if "noindex" in x_robots:
            return False, "Blocked by X-Robots-Tag: noindex"

        soup = BeautifulSoup(response.text, "html.parser")

        robots_meta = soup.find("meta", attrs={"name": "robots"})
        if robots_meta:
            content = (robots_meta.get("content") or "").lower()
            if "noindex" in content:
                return False, "<meta name='robots' contains noindex"

        canonical_link = soup.find("link", rel=lambda r: r and "canonical" in r.lower())
        if not canonical_link or not canonical_link.get("href"):
            return False, "Missing <link rel='canonical'>"

        canonical_href = canonical_link["href"].strip()
        path_only = local_mode
        if normalize_path(url, path_only=path_only) != normalize_path(
            canonical_href, path_only=path_only
        ):
            return (
                False,
                f"Canonical mismatch: requested {normalize_path(url, path_only=path_only)} vs canonical {normalize_path(canonical_href, path_only=path_only)}",
            )

        return True, "OK"

    except requests.RequestException as exc:
        return False, f"Request failed: {exc}"


def main() -> int:
    parser = argparse.ArgumentParser(description="Next.js pre-deploy SEO validator")
    parser.add_argument(
        "--base-url",
        default=DEFAULT_BASE_URL,
        help="Site base URL (local: http://localhost:3000)",
    )
    parser.add_argument(
        "--sitemap-path",
        default=DEFAULT_SITEMAP_PATH,
        help="Sitemap path relative to base URL",
    )
    parser.add_argument(
        "--limit",
        type=int,
        default=0,
        help="Max URLs to validate (0 = all)",
    )
    args = parser.parse_args()

    base = args.base_url.rstrip("/")
    sitemap_url = f"{base}{args.sitemap_path}"
    headers = {"User-Agent": GOOGLEBOT_UA}

    print("=" * 55)
    print(" Next.js SEO Pre-Deployment Validation")
    print("=" * 55)

    try:
        urls = fetch_sitemap_urls(sitemap_url)
    except Exception as exc:
        print(f"[!] Cannot fetch sitemap. Is the server running at {base}?")
        print(f"    {exc}")
        print("\n    Run: npm run build && npm run start")
        return 1

    if not urls:
        print("[!] No URLs in sitemap")
        return 1

    if args.limit > 0:
        urls = urls[: args.limit]

    local_mode = urlparse(base).hostname in ("localhost", "127.0.0.1")
    if local_mode:
        urls = [remap_to_base(url, base) for url in urls]

    passed = 0
    failed = 0
    failures: list[tuple[str, str]] = []

    print(f"\n[*] Validating {len(urls)} URLs (allow_redirects=False)...\n")

    for url in urls:
        ok, message = validate_url(url, headers, local_mode=local_mode)
        if ok:
            passed += 1
            print(f"  [PASS] {url}")
        else:
            failed += 1
            failures.append((url, message))
            print(f"  [FAIL] {url}")
            print(f"         {message}")

    print("\n" + "=" * 55)
    print(f" Results: PASS={passed} FAIL={failed}")
    print("=" * 55)

    if failures:
        print("\nFailed URLs summary:")
        for url, msg in failures[:20]:
            print(f"  - {url}: {msg}")
        if len(failures) > 20:
            print(f"  ... and {len(failures) - 20} more")
        return 1

    print("\nAll checks passed. Safe to deploy from an SEO crawl perspective.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
