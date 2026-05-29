#!/usr/bin/env python3
"""Run all pre-deploy SEO checks in sequence."""

from __future__ import annotations

import argparse
import os
import subprocess
import sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))


def run_script(name: str, base_url: str, extra_args: list[str] | None = None) -> int:
    path = os.path.join(SCRIPT_DIR, name)
    cmd = [sys.executable, path, "--base-url", base_url]
    if extra_args:
        cmd.extend(extra_args)
    print(f"\n>>> Running {name}\n")
    result = subprocess.run(cmd)
    return result.returncode


def main() -> int:
    parser = argparse.ArgumentParser(description="Run full SEO validation suite")
    parser.add_argument("--base-url", default=os.environ.get("SEO_BASE_URL", "http://localhost:3000"))
    parser.add_argument("--skip-graph", action="store_true")
    args = parser.parse_args()

    exit_code = run_script("validate_seo.py", args.base_url)
    if exit_code != 0:
        return exit_code

    if not args.skip_graph:
        exit_code = run_script("graph_auditor.py", args.base_url)
        if exit_code != 0:
            return exit_code

    print("\n[+] All automated checks passed.")
    print("    After deploy, run: python scripts/seo/index_pusher.py")
    return 0


if __name__ == "__main__":
    sys.exit(main())
