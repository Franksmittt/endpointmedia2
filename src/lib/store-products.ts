export type StoreProductCategory = 'audit' | 'micro-service';

export type StoreProduct = {
  category: StoreProductCategory;
  tier?: string;
  name: string;
  slug: string;
  amountZar: number;
  priceLabel: string;
  focus?: string;
  outcome?: string;
  body?: string;
};

export const auditProducts: StoreProduct[] = [
  {
    category: 'audit',
    tier: 'Tier 1',
    name: 'Small Business Visibility Check',
    slug: 'small-business-visibility-check',
    amountZar: 1500,
    priceLabel: 'R1,500',
    focus: 'Core Web Vitals, 404 links, and local map visibility.',
    outcome:
      'A concise visibility report showing where technical friction is suppressing discovery.',
  },
  {
    category: 'audit',
    tier: 'Tier 2',
    name: 'Answer Engine Readiness Audit',
    slug: 'answer-engine-readiness-audit',
    amountZar: 4500,
    priceLabel: 'R4,500',
    focus: 'Token envelopes, llms.txt compliance, and Vector-Ready DOM formatting.',
    outcome:
      'A machine-readability audit showing whether ChatGPT, Claude, and Perplexity can parse your business facts.',
  },
  {
    category: 'audit',
    tier: 'Tier 3',
    name: '1000-Point Algorithmic QA Scorecard',
    slug: '1000-point-algorithmic-qa-scorecard',
    amountZar: 7500,
    priceLabel: 'R7,500',
    focus:
      'Headless Playwright WRS emulation, 2MB HTML payload checks, 5-second async timeout checks, and Levenshtein DOM drift scoring.',
    outcome:
      'A zero-tolerance QA scorecard exposing invisible rendering, hydration, schema, and indexing failures.',
  },
  {
    category: 'audit',
    tier: 'Tier 4',
    name: 'Enterprise Edge Diagnostic',
    slug: 'enterprise-edge-diagnostic',
    amountZar: 15000,
    priceLabel: 'R15,000+',
    focus:
      'Server log analysis, factorial URL crawl traps, JA4 firewall mapping, HTTP 410 regex rules, and a 90-minute consulting call.',
    outcome:
      'A crawl-budget defense map for enterprise sites bleeding Googlebot capacity into infinite URL space.',
  },
];

export const microServiceProducts: StoreProduct[] = [
  {
    category: 'micro-service',
    name: 'B2A Pipeline Setup',
    slug: 'b2a-pipeline-setup',
    amountZar: 3500,
    priceLabel: 'R3,500',
    body:
      'We generate and host a fully compliant llms.txt and llms-full.txt file under the 128k BPE token ceiling, mapped to your core services and canonical URLs.',
  },
  {
    category: 'micro-service',
    name: 'Schema Graph Flattening',
    slug: 'schema-graph-flattening',
    amountZar: 4500,
    priceLabel: 'R4,500',
    body:
      'We rewrite messy, nested JSON-LD into a flawless interconnected @graph array using absolute #id fragments for every top-level entity.',
  },
  {
    category: 'micro-service',
    name: 'Edge-Level Crawl Trap Fix',
    slug: 'edge-level-crawl-trap-fix',
    amountZar: 6000,
    priceLabel: 'R6,000',
    body:
      'We deploy Edge/CDN regex rules that intercept infinite faceted navigation loops and return instant 410 Gone responses to reclaim crawl budget.',
  },
];

export const storeProducts = [...auditProducts, ...microServiceProducts];

export function getStoreProduct(slug: string | null | undefined) {
  if (!slug) return null;
  return storeProducts.find((product) => product.slug === slug) ?? null;
}
