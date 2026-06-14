import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getStripe } from '@/lib/stripe';

export const runtime = 'nodejs';

type CheckoutRequest = {
  reportId: string;
};

type StoreProduct = {
  slug: string;
  name: string;
  description: string;
  unitAmount: number;
};

const STORE_PRODUCTS: StoreProduct[] = [
  {
    slug: 'small-business-visibility-check',
    name: 'Small Business Visibility Check',
    description: 'Core Web Vitals, 404 links, and local map visibility diagnostic.',
    unitAmount: 150000,
  },
  {
    slug: 'answer-engine-readiness-audit',
    name: 'Answer Engine Readiness Audit',
    description: 'Token envelopes, llms.txt compliance, and Vector-Ready DOM formatting audit.',
    unitAmount: 450000,
  },
  {
    slug: '1000-point-algorithmic-qa-scorecard',
    name: '1000-Point Algorithmic QA Scorecard',
    description: 'Headless WRS emulation, payload checks, timeout checks, and DOM drift scoring.',
    unitAmount: 750000,
  },
  {
    slug: 'enterprise-edge-diagnostic',
    name: 'Enterprise Edge Diagnostic',
    description: 'Server log crawl-trap analysis, JA4 firewall map, 410 regex rules, and consulting call.',
    unitAmount: 1500000,
  },
  {
    slug: 'b2a-pipeline-setup',
    name: 'B2A Pipeline Setup',
    description: 'Compliant llms.txt and llms-full.txt files under a 128k BPE token ceiling.',
    unitAmount: 350000,
  },
  {
    slug: 'schema-graph-flattening',
    name: 'Schema Graph Flattening',
    description: 'Rewrite nested JSON-LD into an interconnected @graph with absolute fragment IDs.',
    unitAmount: 450000,
  },
  {
    slug: 'edge-level-crawl-trap-fix',
    name: 'Edge-Level Crawl Trap Fix',
    description: 'Edge/CDN regex rules for infinite URL loops and instant 410 Gone responses.',
    unitAmount: 600000,
  },
];

function normalizeProductKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getStoreProduct(value: string | null): StoreProduct | null {
  if (!value) return null;
  const normalized = normalizeProductKey(value);
  return (
    STORE_PRODUCTS.find(
      (product) =>
        product.slug === normalized ||
        normalizeProductKey(product.name) === normalized,
    ) ?? null
  );
}

function getBaseUrl(request: NextRequest): string {
  const configured = process.env.NEXT_PUBLIC_BASE_URL?.trim();
  if (configured) return configured.replace(/\/$/, '');
  return new URL(request.url).origin;
}

export async function GET(request: NextRequest) {
  const product = getStoreProduct(request.nextUrl.searchParams.get('product'));

  if (!product) {
    return NextResponse.redirect(new URL('/store?checkout=invalid-product', request.url), 302);
  }

  try {
    const stripe = getStripe();
    const baseUrl = getBaseUrl(request);
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
      success_url: `${baseUrl}/store?checkout=success&product=${product.slug}`,
      cancel_url: `${baseUrl}/store?checkout=cancel&product=${product.slug}`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'zar',
            unit_amount: product.unitAmount,
            product_data: {
              name: product.name,
              description: product.description,
            },
          },
        },
      ],
      metadata: {
        product: product.slug,
        productName: product.name,
        source: 'store',
      },
    });

    if (!session.url) {
      return NextResponse.redirect(new URL('/store?checkout=unavailable', request.url), 302);
    }

    return NextResponse.redirect(session.url, 303);
  } catch (error) {
    console.error('Store checkout creation failed:', error);
    return NextResponse.redirect(new URL('/store?checkout=error', request.url), 302);
  }
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Unsupported Media Type' }, { status: 415 });
  }

  let body: CheckoutRequest;
  try {
    body = (await request.json()) as CheckoutRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  if (!body.reportId) {
    return NextResponse.json({ error: 'reportId is required.' }, { status: 400 });
  }

  const report = await prisma.auditReport.findUnique({
    where: { id: body.reportId },
    select: { id: true, targetUrl: true, blurState: true },
  });
  if (!report) {
    return NextResponse.json({ error: 'Audit report not found.' }, { status: 404 });
  }

  if (!report.blurState) {
    return NextResponse.json(
      { error: 'Report already unlocked.', reportUrl: `/report/${report.id}` },
      { status: 409 }
    );
  }

  try {
    const stripe = getStripe();
    const baseUrl = getBaseUrl(request);
    const amount = Number(process.env.AUDITOR_UNLOCK_AMOUNT_CENTS ?? 4900);
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
      success_url: `${baseUrl}/report/${report.id}?checkout=success`,
      cancel_url: `${baseUrl}/report/${report.id}?checkout=cancel`,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: 'usd',
            unit_amount: amount,
            product_data: {
              name: 'Vicious Web Auditor - Full Diagnostics Unlock',
              description: `Unblur full technical report for ${report.targetUrl}`,
            },
          },
        },
      ],
      metadata: {
        reportId: report.id,
      },
    });

    await prisma.auditReport.update({
      where: { id: report.id },
      data: { stripeSessionId: session.id },
    });

    return NextResponse.json(
      {
        checkoutUrl: session.url,
        sessionId: session.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Stripe checkout creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create Stripe checkout session.' },
      { status: 500 }
    );
  }
}

