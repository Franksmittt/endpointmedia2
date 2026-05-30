"""
Endpoint Media — Google Ads CSV Generation Engine (FastAPI)
Micro-Budget Sniper Protocol: R15 Max CPC, Exact Match [] only.
Streams CSV in-memory via chunked transfer — no local file writes.
"""

from __future__ import annotations

import csv
import io
import os
import re
from typing import Dict, Iterator, List, Literal, Optional

from fastapi import Depends, FastAPI, HTTPException, Security
from fastapi.responses import StreamingResponse
from fastapi.security import APIKeyHeader
from pydantic import BaseModel, Field, field_validator

app = FastAPI(title="Google Ads CSV Generation Engine", version="1.0.0")

api_key_header = APIKeyHeader(name="Authorization", auto_error=True)
EXPECTED_SECRET = os.environ.get("INTERNAL_API_KEY", "")

DEFAULT_NEGATIVES = [
    "cheap",
    "free",
    "tutorial",
    "diy",
    "how to",
    "course",
    "jobs",
    "salary",
]

DEFAULT_AD_SCHEDULE = (
    "(Monday[08:00-17:00]);(Tuesday[08:00-17:00]);(Wednesday[08:00-17:00]);"
    "(Thursday[08:00-17:00]);(Friday[08:00-17:00])"
)

# B2B ValueTrack matrix — injected exclusively on the Campaign tier row
VALUE_TRACK_FINAL_URL_SUFFIX = (
    "utm_source=google&utm_medium=cpc"
    "&utm_campaign={_campaignname}_{campaignid}"
    "&utm_term={keyword}&utm_content={matchtype}&device={device}"
)

# Canonical Google Ads Editor headers (Debugging doc + Production blueprint)
CANONICAL_HEADERS: List[str] = [
    "Campaign",
    "Daily Budget",
    "Campaign Type",
    "Bid Strategy Type",
    "Language",
    "Ad Schedule",
    "Mobile Bid Modifier",
    "Tablet Bid Modifier",
    "Tracking template",
    "Ad Group",
    "Keyword",
    "Criterion Type",
    "Match Type",
    "Max CPC",
    "Headline 1",
    "Headline 2",
    "Headline 3",
    "Description 1",
    "Description 2",
    "Final URL",
    "Link Text",
    "Description Line 1",
    "Description Line 2",
    "Final URL suffix",
    "Custom parameter",
]


def verify_api_key(authorization: str = Security(api_key_header)) -> str:
    """Reject requests unless Authorization matches Bearer {INTERNAL_API_KEY}."""
    if not EXPECTED_SECRET:
        raise HTTPException(status_code=503, detail="Microservice auth is not configured")
    expected = f"Bearer {EXPECTED_SECRET}"
    if authorization != expected:
        raise HTTPException(status_code=403, detail="Unauthorized microservice access")
    return authorization


class CampaignAssetPayload(BaseModel):
    type: Literal["HEADLINE", "DESCRIPTION", "SITELINK", "CALLOUT"]
    text: str
    description_line_1: Optional[str] = None
    description_line_2: Optional[str] = None
    final_url: Optional[str] = None
    service_niche_id: Optional[str] = None


class ServiceNichePayload(BaseModel):
    id: Optional[str] = None
    name: str
    match_types: List[str] = Field(default_factory=lambda: ["exact"])
    keywords: List[str] = Field(default_factory=list)

    @field_validator("match_types")
    @classmethod
    def enforce_exact_only(cls, values: List[str]) -> List[str]:
        normalized = [v.lower().strip() for v in values if v.strip()]
        if any(v != "exact" for v in normalized):
            raise ValueError("Micro-Budget Sniper Protocol allows exact match only")
        return normalized or ["exact"]


class ClientPayload(BaseModel):
    agency_name: str = "Endpoint Media"
    client_name: str
    daily_budget: float = Field(..., gt=0)
    target_area: str
    campaign_name: Optional[str] = None
    final_url: str = "https://www.endpointmedia.co.za"
    max_cpc: str = "15.00"
    language: str = "English"
    location: Optional[str] = None
    global_negatives: List[str] = Field(default_factory=lambda: list(DEFAULT_NEGATIVES))
    ad_schedule: str = DEFAULT_AD_SCHEDULE
    mobile_bid_modifier: str = "-30"
    tablet_bid_modifier: str = "-100"
    niches: List[ServiceNichePayload]
    campaign_assets: List[CampaignAssetPayload] = Field(default_factory=list)


class DataSanitizer:
    @staticmethod
    def clean(text: str) -> str:
        if not text:
            return ""
        text = text.replace("\r", " ").replace("\n", " ")
        text = re.sub(r"[^\x00-\x7F]+", "", text)
        return re.sub(r"\s+", " ", text).strip()

    @staticmethod
    def validate_length(text: str, max_length: int, field_name: str) -> None:
        if len(text) > max_length:
            raise ValueError(
                f"{field_name} exceeds {max_length} characters ({len(text)}): '{text}'"
            )

    @staticmethod
    def validate_keyword(keyword: str) -> None:
        DataSanitizer.validate_length(keyword, 80, "Keyword")
        if len(keyword.split()) > 10:
            raise ValueError(f"Keyword exceeds 10 words: '{keyword}'")


class GoogleAdsCampaignFactory:
    """EAV matrix builder — explicit null strings on every row to prevent ambiguous row type."""

    BID_STRATEGY = "Manual CPC"
    MAX_CPC = "15.00"

    def __init__(self, payload: ClientPayload) -> None:
        self.payload = payload
        self.campaign_name = payload.campaign_name or (
            f"{payload.client_name} - {payload.target_area} Sniper"
        )
        self.rows: List[Dict[str, str]] = []

    def _empty_row(self) -> Dict[str, str]:
        return {header: "" for header in CANONICAL_HEADERS}

    def _tracking_suffix(self) -> str:
        return VALUE_TRACK_FINAL_URL_SUFFIX

    def _custom_parameter(self) -> str:
        client_slug = self.payload.client_name.strip().replace(" ", "_")
        return f"{{_campaignname}}={client_slug}"

    def _expand_keywords(self, niche: ServiceNichePayload) -> List[str]:
        if niche.keywords:
            seeds = [DataSanitizer.clean(k) for k in niche.keywords]
        else:
            service = DataSanitizer.clean(niche.name).lower()
            area = DataSanitizer.clean(self.payload.target_area).lower()
            seeds = [
                f"{service} {area}",
                f"{service} services {area}",
                f"{service} company {area}",
                f"best {service} {area}",
                f"{service} agency {area}",
                f"professional {service} {area}",
            ]
        result: List[str] = []
        for seed in seeds:
            DataSanitizer.validate_keyword(seed)
            bracketed = seed if seed.startswith("[") and seed.endswith("]") else f"[{seed}]"
            result.append(bracketed)
        return result

    def _niche_assets(
        self, niche: ServiceNichePayload
    ) -> tuple[List[str], List[str]]:
        headlines = [
            a.text
            for a in self.payload.campaign_assets
            if a.type == "HEADLINE"
            and (a.service_niche_id is None or a.service_niche_id == niche.id)
        ]
        descriptions = [
            a.text
            for a in self.payload.campaign_assets
            if a.type == "DESCRIPTION"
            and (a.service_niche_id is None or a.service_niche_id == niche.id)
        ]
        return headlines, descriptions

    def build_campaign_tier(self) -> None:
        row = self._empty_row()
        row["Campaign"] = DataSanitizer.clean(self.campaign_name)
        row["Daily Budget"] = str(int(self.payload.daily_budget))
        row["Campaign Type"] = "Search"
        row["Bid Strategy Type"] = self.BID_STRATEGY
        row["Language"] = DataSanitizer.clean(self.payload.language)
        row["Ad Schedule"] = self.payload.ad_schedule
        row["Mobile Bid Modifier"] = self.payload.mobile_bid_modifier
        row["Tablet Bid Modifier"] = self.payload.tablet_bid_modifier
        row["Tracking template"] = ""
        row["Final URL suffix"] = self._tracking_suffix()
        row["Custom parameter"] = self._custom_parameter()
        self.rows.append(row)

    def build_campaign_negatives_tier(self) -> None:
        for negative in self.payload.global_negatives:
            row = self._empty_row()
            row["Campaign"] = DataSanitizer.clean(self.campaign_name)
            row["Keyword"] = DataSanitizer.clean(negative)
            row["Criterion Type"] = "Campaign negative"
            row["Match Type"] = "Broad"
            self.rows.append(row)

    def build_ad_groups_keywords_and_rsas(self) -> None:
        for niche in self.payload.niches:
            service = DataSanitizer.clean(niche.name)
            ad_group_name = f"{service} - {self.payload.target_area} Exact"

            ag_row = self._empty_row()
            ag_row["Campaign"] = DataSanitizer.clean(self.campaign_name)
            ag_row["Ad Group"] = ad_group_name
            ag_row["Max CPC"] = self.payload.max_cpc or self.MAX_CPC
            self.rows.append(ag_row)

            for keyword in self._expand_keywords(niche):
                kw_row = self._empty_row()
                kw_row["Campaign"] = DataSanitizer.clean(self.campaign_name)
                kw_row["Ad Group"] = ad_group_name
                kw_row["Keyword"] = keyword
                kw_row["Match Type"] = "Exact"
                kw_row["Max CPC"] = self.payload.max_cpc or self.MAX_CPC
                self.rows.append(kw_row)

            self._build_rsa_tier(ad_group_name, service, niche)

    def _build_rsa_tier(
        self, ad_group_name: str, service_name: str, niche: ServiceNichePayload
    ) -> None:
        headlines, descriptions = self._niche_assets(niche)

        h1 = DataSanitizer.clean(headlines[0] if headlines else service_name)
        h2 = DataSanitizer.clean(
            headlines[1] if len(headlines) > 1 else f"Top Agency in {self.payload.target_area}"
        )
        h3 = DataSanitizer.clean(
            headlines[2] if len(headlines) > 2 else f"Partner with {self.payload.client_name}"
        )
        d1 = DataSanitizer.clean(
            descriptions[0]
            if descriptions
            else f"Premium {service_name} tailored for B2B growth."
        )
        d2 = DataSanitizer.clean(
            descriptions[1]
            if len(descriptions) > 1
            else "Edge-cached performance. Micro-budget efficiency. Contact us today."
        )

        for label, value, limit in [
            ("Headline 1", h1, 30),
            ("Headline 2", h2, 30),
            ("Headline 3", h3, 30),
            ("Description 1", d1, 90),
            ("Description 2", d2, 90),
        ]:
            DataSanitizer.validate_length(value, limit, label)

        rsa_row = self._empty_row()
        rsa_row["Campaign"] = DataSanitizer.clean(self.campaign_name)
        rsa_row["Ad Group"] = ad_group_name
        rsa_row["Headline 1"] = h1
        rsa_row["Headline 2"] = h2
        rsa_row["Headline 3"] = h3
        rsa_row["Description 1"] = d1
        rsa_row["Description 2"] = d2
        rsa_row["Final URL"] = DataSanitizer.clean(self.payload.final_url)
        self.rows.append(rsa_row)

    def build_sitelinks_tier(self) -> None:
        sitelinks = [a for a in self.payload.campaign_assets if a.type == "SITELINK"]
        for asset in sitelinks:
            link_text = DataSanitizer.clean(asset.text)
            desc_1 = DataSanitizer.clean(asset.description_line_1 or "")
            desc_2 = DataSanitizer.clean(asset.description_line_2 or "")
            final_url = DataSanitizer.clean(asset.final_url or self.payload.final_url)

            DataSanitizer.validate_length(link_text, 25, "Link Text")
            if desc_1:
                DataSanitizer.validate_length(desc_1, 35, "Description Line 1")
            if desc_2:
                DataSanitizer.validate_length(desc_2, 35, "Description Line 2")

            row = self._empty_row()
            row["Campaign"] = DataSanitizer.clean(self.campaign_name)
            row["Link Text"] = link_text
            row["Final URL"] = final_url
            row["Description Line 1"] = desc_1
            row["Description Line 2"] = desc_2
            self.rows.append(row)

    def generate_rows(self) -> List[Dict[str, str]]:
        self.build_campaign_tier()
        self.build_campaign_negatives_tier()
        self.build_ad_groups_keywords_and_rsas()
        self.build_sitelinks_tier()
        return self.rows


def generate_csv_rows(payload: ClientPayload) -> List[Dict[str, str]]:
    factory = GoogleAdsCampaignFactory(payload)
    rows = factory.generate_rows()
    if not rows:
        raise ValueError("Generated dataset resulted in an empty matrix")
    return rows


def stream_csv_bytes(rows: List[Dict[str, str]]) -> Iterator[bytes]:
    buffer = io.StringIO()
    writer = csv.DictWriter(
        buffer,
        fieldnames=CANONICAL_HEADERS,
        delimiter=",",
        quoting=csv.QUOTE_MINIMAL,
        extrasaction="ignore",
    )
    writer.writeheader()
    writer.writerows(rows)
    buffer.seek(0)
    yield buffer.getvalue().encode("utf-8")


@app.get("/health")
async def health() -> Dict[str, str]:
    return {"status": "ok"}


@app.post("/api/v1/generate-csv")
async def generate_csv_stream(
    payload: ClientPayload,
    _auth: str = Depends(verify_api_key),
) -> StreamingResponse:
    try:
        data_rows = generate_csv_rows(payload)
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Generation fault: {exc}") from exc

    slug = re.sub(r"[^a-zA-Z0-9_]", "_", payload.client_name)
    filename = f"google_ads_bulk_{slug}.csv"

    return StreamingResponse(
        stream_csv_bytes(data_rows),
        media_type="text/csv; charset=utf-8",
        headers={
            "Content-Disposition": f'attachment; filename="{filename}"',
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0",
        },
    )
