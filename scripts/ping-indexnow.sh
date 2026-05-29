#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${NEXT_PUBLIC_BASE_URL:-https://www.endpointmedia.co.za}"
SECRET="${INDEXNOW_SECRET:?INDEXNOW_SECRET is required}"

echo "Pinging IndexNow via ${BASE_URL}/api/indexnow ..."

curl -sf -X POST "${BASE_URL}/api/indexnow" \
  -H "Authorization: Bearer ${SECRET}" \
  -H "Content-Type: application/json" \
  -d '{}'

echo ""
