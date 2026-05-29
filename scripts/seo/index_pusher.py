#!/usr/bin/env python3
"""
Google Indexing API batch orchestrator.

Pushes URLs from sitemap to Google Indexing API (200 URLs/day quota).
Requires a GCP service account with Indexing API enabled and Search Console access.

Setup:
  1. Enable "Web Search Indexing API" in Google Cloud Console
  2. Create service account JSON key
  3. Add service account email as Owner in Google Search Console
  4. Set GOOGLE_APPLICATION_CREDENTIALS=path/to/key.json

Usage:
  python scripts/seo/index_pusher.py --dry-run
  python scripts/seo/index_pusher.py --credentials gcp_service_account.json
  python scripts/seo/index_pusher.py --urls-file urls.txt
"""

from __future__ import annotations

import argparse
import logging
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import time
import urllib.request
import xml.etree.ElementTree as ET
from typing import List

from seo_config import DEFAULT_SITEMAP_PATH, GOOGLEBOT_UA, PRODUCTION_BASE_URL, SITEMAP_NS

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

try:
    import httplib2
    from googleapiclient.discovery import build
    from googleapiclient.errors import HttpError
    from oauth2client.service_account import ServiceAccountCredentials
except ImportError:
    build = None  # type: ignore


class GoogleIndexingOrchestrator:
    def __init__(self, credentials_path: str):
        if build is None:
            raise ImportError(
                "Install: pip install google-api-python-client oauth2client httplib2"
            )

        self.scopes = ["https://www.googleapis.com/auth/indexing"]
        self.credentials = ServiceAccountCredentials.from_json_keyfile_name(
            credentials_path, scopes=self.scopes
        )
        self.http_auth = self.credentials.authorize(httplib2.Http())
        self.service = build("indexing", "v3", http=self.http_auth)
        logging.info("Google Indexing API authenticated")

    def execute_batch_index(
        self, urls: List[str], action_type: str = "URL_UPDATED", dry_run: bool = False
    ) -> None:
        if not urls:
            logging.warning("No URLs to submit")
            return

        unique_urls = list(dict.fromkeys(urls))[:200]
        batches = [unique_urls[i : i + 100] for i in range(0, len(unique_urls), 100)]

        for batch_index, url_batch in enumerate(batches):
            logging.info(
                "Batch %s/%s (%s URLs)",
                batch_index + 1,
                len(batches),
                len(url_batch),
            )

            if dry_run:
                for url in url_batch:
                    logging.info("[DRY RUN] Would publish: %s", url)
                continue

            batch_request = self.service.new_batch_http_request()

            for url in url_batch:
                body = {"url": url, "type": action_type}
                request = self.service.urlNotifications().publish(body=body)
                batch_request.add(request, callback=self._batch_callback)

            try:
                batch_request.execute()
                time.sleep(2)
            except HttpError as err:
                logging.error("Batch HTTP error: %s", err)

    @staticmethod
    def _batch_callback(request_id, response, exception) -> None:
        if exception is not None:
            logging.error("Request %s failed: %s", request_id, exception)
        else:
            url = response.get("urlNotificationMetadata", {}).get("url", "unknown")
            logging.info("Queued for indexing: %s", url)


def fetch_sitemap_urls(sitemap_url: str) -> list[str]:
    request = urllib.request.Request(sitemap_url, headers={"User-Agent": GOOGLEBOT_UA})
    with urllib.request.urlopen(request, timeout=30) as response:
        root = ET.fromstring(response.read())

    urls: list[str] = []
    for loc in root.findall(".//sm:loc", SITEMAP_NS):
        if loc.text:
            urls.append(loc.text.strip())
    if not urls:
        for loc in root.findall(".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc"):
            if loc.text:
                urls.append(loc.text.strip())
    return urls


def load_urls_from_file(path: str) -> list[str]:
    with open(path, encoding="utf-8") as handle:
        return [line.strip() for line in handle if line.strip() and not line.startswith("#")]


def main() -> int:
    parser = argparse.ArgumentParser(description="Google Indexing API pusher")
    parser.add_argument(
        "--credentials",
        default=os.environ.get("GOOGLE_APPLICATION_CREDENTIALS", "gcp_service_account.json"),
        help="Path to GCP service account JSON",
    )
    parser.add_argument(
        "--sitemap-url",
        default=f"{PRODUCTION_BASE_URL.rstrip('/')}{DEFAULT_SITEMAP_PATH}",
        help="Production sitemap URL",
    )
    parser.add_argument("--urls-file", help="Text file with one URL per line")
    parser.add_argument("--dry-run", action="store_true", help="List URLs without API calls")
    parser.add_argument("--limit", type=int, default=200, help="Max URLs (quota 200/day)")
    args = parser.parse_args()

    if args.urls_file:
        urls = load_urls_from_file(args.urls_file)
    else:
        print(f"[*] Loading URLs from {args.sitemap_url}")
        try:
            urls = fetch_sitemap_urls(args.sitemap_url)
        except Exception as exc:
            print(f"[!] Failed to fetch sitemap: {exc}")
            return 1

    if args.limit > 0:
        urls = urls[: args.limit]

    print(f"[*] {len(urls)} URLs to process")

    if args.dry_run:
        orchestrator = None
        for url in urls:
            print(f"  [DRY RUN] {url}")
        print("\nDry run complete. No API calls made.")
        return 0

    if not os.path.isfile(args.credentials):
        print(f"[!] Credentials file not found: {args.credentials}")
        print("    Create a GCP service account and set GOOGLE_APPLICATION_CREDENTIALS")
        print("    Or run with --dry-run to preview URLs only.")
        return 1

    try:
        orchestrator = GoogleIndexingOrchestrator(args.credentials)
        orchestrator.execute_batch_index(urls, dry_run=False)
        print("\n[+] Indexing API batch submitted.")
        return 0
    except Exception as exc:
        print(f"[!] Indexing API error: {exc}")
        return 1


if __name__ == "__main__":
    sys.exit(main())
