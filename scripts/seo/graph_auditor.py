#!/usr/bin/env python3
"""
Internal Link Graph Auditor for Next.js sites.

Builds a directed graph from homepage crawl + sitemap cross-check.
Flags orphaned pages and URLs deeper than 3 clicks from home.

Usage:
  python scripts/seo/graph_auditor.py
  python scripts/seo/graph_auditor.py --base-url http://localhost:3000
"""

from __future__ import annotations

import argparse
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import urllib.request
import xml.etree.ElementTree as ET
from collections import deque
from urllib.parse import urljoin, urlparse

import networkx as nx
import requests
from bs4 import BeautifulSoup

from seo_config import (
    CRAWL_SKIP_PREFIXES,
    DEFAULT_BASE_URL,
    DEFAULT_SITEMAP_PATH,
    GOOGLEBOT_UA,
    MAX_CLICK_DEPTH,
    MAX_CRAWL_DEPTH,
    SITEMAP_NS,
)


class NextjsLinkGraphAuditor:
    def __init__(self, base_url: str):
        self.base_url = base_url.rstrip("/")
        parsed = urlparse(self.base_url)
        self.domain = parsed.netloc.lower().replace("www.", "")
        self.graph: nx.DiGraph = nx.DiGraph()
        self.visited: set[str] = set()
        self.headers = {"User-Agent": GOOGLEBOT_UA}

    def _clean_url(self, url: str) -> str:
        parsed = urlparse(url)
        path = parsed.path or "/"
        if path != "/" and path.endswith("/"):
            path = path[:-1]
        return f"{parsed.scheme}://{parsed.netloc.lower()}{path}"

    def _is_internal(self, url: str) -> bool:
        host = urlparse(url).netloc.lower().replace("www.", "")
        return host == self.domain

    def _should_skip(self, path: str) -> bool:
        return any(path.startswith(prefix) for prefix in CRAWL_SKIP_PREFIXES)

    def crawl_bfs(self, max_depth: int = MAX_CRAWL_DEPTH) -> None:
        queue: deque[tuple[str, int]] = deque([(self.base_url, 0)])
        self.graph.add_node(self._clean_url(self.base_url))

        while queue:
            current, depth = queue.popleft()
            clean_current = self._clean_url(current)

            if clean_current in self.visited or depth > max_depth:
                continue

            self.visited.add(clean_current)

            try:
                response = requests.get(
                    clean_current,
                    headers=self.headers,
                    timeout=12,
                    allow_redirects=True,
                )
                if response.status_code != 200:
                    continue

                soup = BeautifulSoup(response.text, "html.parser")
                for link in soup.find_all("a", href=True):
                    href = link["href"].strip()
                    if not href or href.startswith(("#", "mailto:", "tel:", "javascript:")):
                        continue

                    absolute = urljoin(clean_current, href)
                    absolute = absolute.split("#")[0].split("?")[0]
                    if not self._is_internal(absolute):
                        continue

                    clean_target = self._clean_url(absolute)
                    path = urlparse(clean_target).path
                    if self._should_skip(path):
                        continue

                    self.graph.add_edge(clean_current, clean_target)
                    if clean_target not in self.visited and depth + 1 <= max_depth:
                        queue.append((clean_target, depth + 1))

            except requests.RequestException as exc:
                print(f"  [warn] {clean_current}: {exc}")

    def analyze(self, sitemap_urls: list[str]) -> dict:
        orphans: list[str] = []
        deep_nodes: list[dict] = []
        sitemap_orphans: list[str] = []

        root = self._clean_url(self.base_url)

        for node in self.graph.nodes():
            if node != root and self.graph.in_degree(node) == 0:
                orphans.append(node)

        try:
            lengths = nx.single_source_shortest_path_length(self.graph, root)
            for node, distance in lengths.items():
                if distance > MAX_CLICK_DEPTH:
                    deep_nodes.append({"url": node, "depth": distance})

            unreachable = set(self.graph.nodes()) - set(lengths.keys())
            orphans.extend(list(unreachable))
        except nx.NetworkXError:
            print("[!] Root not in graph")

        clean_sitemap = {self._clean_url(u) for u in sitemap_urls}
        crawled = self.visited | set(self.graph.nodes())
        for url in sorted(clean_sitemap):
            if url not in crawled and url != root:
                sitemap_orphans.append(url)

        return {
            "total_nodes": self.graph.number_of_nodes(),
            "total_edges": self.graph.number_of_edges(),
            "orphaned_pages": sorted(set(orphans)),
            "excessive_click_depth": deep_nodes,
            "sitemap_not_reachable_from_crawl": sitemap_orphans,
        }


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


def main() -> int:
    parser = argparse.ArgumentParser(description="Next.js internal link graph auditor")
    parser.add_argument("--base-url", default=DEFAULT_BASE_URL)
    parser.add_argument("--sitemap-path", default=DEFAULT_SITEMAP_PATH)
    parser.add_argument("--max-depth", type=int, default=MAX_CRAWL_DEPTH)
    args = parser.parse_args()

    base = args.base_url.rstrip("/")
    sitemap_url = f"{base}{args.sitemap_path}"

    print("=" * 55)
    print(" Next.js Link Graph Audit")
    print("=" * 55)
    print(f" Target: {base}\n")

    try:
        sitemap_urls = fetch_sitemap_urls(sitemap_url)
    except Exception as exc:
        print(f"[!] Sitemap fetch failed: {exc}")
        return 1

    host = urlparse(base).hostname
    if host in ("localhost", "127.0.0.1"):
        sitemap_urls = [
            f"{urlparse(base).scheme}://{urlparse(base).netloc}{urlparse(u).path}"
            for u in sitemap_urls
        ]

    auditor = NextjsLinkGraphAuditor(base)
    print("[*] Crawling internal links (BFS)...")
    auditor.crawl_bfs(max_depth=args.max_depth)

    report = auditor.analyze(sitemap_urls)
    print("\n--- Topology Report ---")
    print(json.dumps(report, indent=2))

    has_issues = (
        bool(report["orphaned_pages"])
        or bool(report["excessive_click_depth"])
        or bool(report["sitemap_not_reachable_from_crawl"])
    )

    if has_issues:
        print("\n[!] Link graph issues detected (review before deploy).")
        print("    Note: sitemap-only URLs may be OK if linked from external sites.")
        return 1

    print("\n[+] No critical graph issues.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
