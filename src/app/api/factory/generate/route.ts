import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import type { AssetType } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import { rateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';

const MAX_NICHES = 50;

type GenerateRequestBody = {
  clientId: string;
  serviceNicheIds?: string[];
};

type FastApiAsset = {
  type: AssetType;
  text: string;
  description_line_1?: string | null;
  description_line_2?: string | null;
  final_url?: string | null;
  service_niche_id?: string | null;
};

type FastApiPayload = {
  agency_name: string;
  client_name: string;
  daily_budget: number;
  target_area: string;
  campaign_name: string | null;
  final_url: string;
  max_cpc: string;
  language: string;
  location: string;
  global_negatives: string[];
  ad_schedule: string;
  mobile_bid_modifier: string;
  tablet_bid_modifier: string;
  niches: Array<{
    id: string;
    name: string;
    match_types: string[];
    keywords: string[];
  }>;
  campaign_assets: FastApiAsset[];
};

function isAuthorized(request: NextRequest): boolean {
  const adminSecret = process.env.FACTORY_ADMIN_SECRET;
  if (!adminSecret) {
    return false;
  }
  const header = request.headers.get('x-factory-secret');
  return header === adminSecret;
}

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Unsupported Media Type' }, { status: 415 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests. Try again shortly.' }, { status: 429 });
  }

  const fastApiUrl = process.env.FASTAPI_SERVICE_URL;
  const internalSecret = process.env.INTERNAL_API_KEY;

  if (!fastApiUrl || !internalSecret) {
    return NextResponse.json(
      { error: 'Microservice routing or security configuration is missing.' },
      { status: 500 }
    );
  }

  let body: GenerateRequestBody;
  try {
    body = (await request.json()) as GenerateRequestBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload' }, { status: 400 });
  }

  const { clientId, serviceNicheIds } = body;
  if (!clientId || typeof clientId !== 'string') {
    return NextResponse.json({ error: 'clientId is required' }, { status: 400 });
  }

  if (serviceNicheIds && serviceNicheIds.length > MAX_NICHES) {
    return NextResponse.json({ error: 'Too many service niches requested' }, { status: 413 });
  }

  const clientData = await prisma.agencyClient.findFirst({
    where: {
      id: clientId,
      isActive: true,
    },
    include: {
      serviceNiches: {
        where: serviceNicheIds?.length
          ? { id: { in: serviceNicheIds } }
          : undefined,
        orderBy: { sortOrder: 'asc' },
        include: {
          assets: {
            orderBy: { sortOrder: 'asc' },
          },
        },
      },
      campaignAssets: {
        where: { serviceNicheId: null },
        orderBy: { sortOrder: 'asc' },
      },
    },
  });

  if (!clientData) {
    return NextResponse.json({ error: 'Client state could not be resolved.' }, { status: 404 });
  }

  if (clientData.serviceNiches.length === 0) {
    return NextResponse.json(
      { error: 'No active service niches found for this client.' },
      { status: 400 }
    );
  }

  const nicheAssets = clientData.serviceNiches.flatMap((niche) =>
    niche.assets.map((asset) => ({
      type: asset.type,
      text: asset.text,
      description_line_1: asset.descriptionLine1,
      description_line_2: asset.descriptionLine2,
      final_url: asset.finalUrl,
      service_niche_id: niche.id,
    }))
  );

  const globalAssets: FastApiAsset[] = clientData.campaignAssets.map((asset) => ({
    type: asset.type,
    text: asset.text,
    description_line_1: asset.descriptionLine1,
    description_line_2: asset.descriptionLine2,
    final_url: asset.finalUrl,
    service_niche_id: null,
  }));

  const microservicePayload: FastApiPayload = {
    agency_name: 'Endpoint Media',
    client_name: clientData.name,
    daily_budget: clientData.dailyBudget,
    target_area: clientData.targetArea,
    campaign_name: clientData.campaignName,
    final_url: clientData.finalUrl,
    max_cpc: clientData.maxCpc,
    language: clientData.language,
    location: clientData.location,
    global_negatives: clientData.globalNegatives,
    ad_schedule: clientData.adSchedule,
    mobile_bid_modifier: clientData.mobileBidModifier,
    tablet_bid_modifier: clientData.tabletBidModifier,
    niches: clientData.serviceNiches.map((niche) => ({
      id: niche.id,
      name: niche.name,
      match_types: niche.matchTypes.length ? niche.matchTypes : ['exact'],
      keywords: niche.keywords,
    })),
    campaign_assets: [...globalAssets, ...nicheAssets],
  };

  try {
    const response = await fetch(`${fastApiUrl.replace(/\/$/, '')}/api/v1/generate-csv`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${internalSecret}`,
      },
      body: JSON.stringify(microservicePayload),
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `Microservice execution failed: ${errorText}` },
        { status: response.status }
      );
    }

    const stream = response.body;
    if (!stream) {
      return NextResponse.json(
        { error: 'Failed to establish a continuous stream with the microservice.' },
        { status: 500 }
      );
    }

    const headers = new Headers();
    const contentDisposition =
      response.headers.get('Content-Disposition') ??
      `attachment; filename="campaigns_${clientData.slug}_${Date.now()}.csv"`;

    headers.set('Content-Disposition', contentDisposition);
    headers.set('Content-Type', 'text/csv; charset=utf-8');
    headers.set('Cache-Control', 'no-store, max-age=0');

    return new Response(stream, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Factory Bridge Architectural Fault:', error);
    return NextResponse.json(
      { error: 'Internal server error occurred during stream proxying.' },
      { status: 500 }
    );
  }
}
