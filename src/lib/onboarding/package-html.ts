/**
 * Phase 3A scaffolding — interpolate draft legal MD into a single HTML preview.
 * DRAFT banners shown until ONBOARDING_ATTORNEY_CLEARED is explicitly set.
 */

import 'server-only';

import { readFile } from 'fs/promises';
import path from 'path';
import { buildFeeTokens } from './fees';
import { draftBannerText, shouldShowDraftBanner } from './flags';
import type { OnboardingFormData } from './types';

const DOC_FILES = {
  msa: 'msa-draft.md',
  keyTerms: 'key-commercial-terms-draft.md',
  sowAds: 'sow-google-ads-draft.md',
  sowWeb: 'sow-website-draft.md',
  popia: 'popia-operator-annex-draft.md',
} as const;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Minimal markdown → HTML for preview (headings, bold, lists, paragraphs). */
function mdToHtml(md: string): string {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out: string[] = [];
  let inList = false;

  const flushList = () => {
    if (inList) {
      out.push('</ul>');
      inList = false;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      flushList();
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      flushList();
      out.push('<hr />');
      continue;
    }

    const heading = /^(#{1,3})\s+(.*)$/.exec(line);
    if (heading) {
      flushList();
      const level = heading[1].length;
      out.push(`<h${level}>${inlineFormat(heading[2])}</h${level}>`);
      continue;
    }

    if (/^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line)) {
      if (!inList) {
        out.push('<ul>');
        inList = true;
      }
      const item = line.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, '');
      out.push(`<li>${inlineFormat(item)}</li>`);
      continue;
    }

    flushList();
    out.push(`<p>${inlineFormat(line)}</p>`);
  }
  flushList();
  return out.join('\n');
}

function inlineFormat(text: string): string {
  let s = escapeHtml(text);
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/_(.+?)_/g, '<em>$1</em>');
  s = s.replace(/`(.+?)`/g, '<code>$1</code>');
  s = s.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>',
  );
  return s;
}

function interpolate(template: string, tokens: Record<string, string>): string {
  return template.replace(/\{\{\s*([a-z0-9_]+)\s*\}\}/gi, (_, key: string) => {
    const value = tokens[key];
    return value !== undefined ? value : `{{${key}}}`;
  });
}

function formTokens(form: OnboardingFormData): Record<string, string> {
  const fees = buildFeeTokens(form.minMonthlyAdSpendZar);
  const domicilium = [
    form.domiciliumAddress,
    form.domiciliumCity,
    form.domiciliumProvince,
    form.domiciliumPostalCode,
  ]
    .filter(Boolean)
    .join(', ');

  return {
    ...fees,
    effective_date: new Date().toISOString().slice(0, 10),
    legal_entity_name: form.legalEntityName || '—',
    entity_type: form.entityType || '—',
    registration_or_id: form.registrationOrId || '—',
    signatory_name: form.signatoryName || '—',
    signatory_capacity: form.signatoryCapacity || '—',
    signatory_email: form.signatoryEmail || '—',
    domicilium_address: domicilium || form.domiciliumAddress || '—',
    cpa_turnover_band: form.cpaTurnoverBand || '—',
    service_selection: form.serviceSelection || '—',
    regulated_industry: form.regulatedIndustry || '—',
    competitor_bidding: form.competitorBidding || '—',
    website_project_type: 'TBD',
    website_primary_goal: 'TBD',
    website_page_list: 'TBD',
    website_integrations: 'TBD',
    website_timeline_weeks: 'TBD',
  };
}

async function readDraft(fileName: string): Promise<string> {
  const full = path.join(process.cwd(), 'src/content/legal', fileName);
  return readFile(full, 'utf8');
}

export async function buildPackageHtml(form: OnboardingFormData): Promise<string> {
  const tokens = formTokens(form);
  const includeAds = form.serviceSelection === 'ads' || form.serviceSelection === 'both';
  const includeWeb = form.serviceSelection === 'web' || form.serviceSelection === 'both';

  const sections: { title: string; file: string; include: boolean }[] = [
    { title: 'Master Services Agreement', file: DOC_FILES.msa, include: true },
    { title: 'Key Commercial Terms', file: DOC_FILES.keyTerms, include: true },
    { title: 'SoW — Google Ads Retainer', file: DOC_FILES.sowAds, include: includeAds },
    { title: 'SoW — Website Build', file: DOC_FILES.sowWeb, include: includeWeb },
    { title: 'POPIA Operator Annex', file: DOC_FILES.popia, include: true },
  ];

  const showDraft = shouldShowDraftBanner();
  const draftBanner = draftBannerText();

  const bodies: string[] = [];
  for (const section of sections) {
    if (!section.include) continue;
    const md = await readDraft(section.file);
    const filled = interpolate(md, tokens);
    const sectionBanner = showDraft
      ? `<header class="section-banner">${escapeHtml(draftBanner)}</header>`
      : '';
    bodies.push(`
      <section class="doc-section">
        ${sectionBanner}
        <h1 class="section-title">${escapeHtml(section.title)}</h1>
        <div class="section-body">${mdToHtml(filled)}</div>
      </section>
    `);
  }

  const pageBanner = showDraft
    ? `<div class="page-banner">${escapeHtml(draftBanner)} · Not binding until digitally signed · Endpoint Media is not VAT-registered</div>`
    : '';
  const footerNote = showDraft
    ? `<p class="footer-note">${escapeHtml(draftBanner)}. Electronic signature and payment gates are not completed in this preview.</p>`
    : `<p class="footer-note">Endpoint Media engagement package. Electronic signature and payment gates are not completed in this preview.</p>`;
  const pageTitle = showDraft
    ? `${draftBanner} — Endpoint Media Package`
    : 'Endpoint Media Package';

  return `<!DOCTYPE html>
<html lang="en-ZA">
<head>
  <meta charset="utf-8" />
  <meta name="robots" content="noindex,nofollow" />
  <title>${escapeHtml(pageTitle)}</title>
  <style>
    :root { color-scheme: light; }
    body { font-family: ui-sans-serif, system-ui, sans-serif; margin: 0; background: #f4f4f5; color: #18181b; line-height: 1.55; }
    .page-banner { position: sticky; top: 0; z-index: 10; background: #854d0e; color: #fefce8; padding: 10px 20px; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
    .wrap { max-width: 820px; margin: 0 auto; padding: 24px 16px 64px; }
    .meta { background: #fff; border: 1px solid #e4e4e7; padding: 16px 20px; margin-bottom: 24px; font-size: 14px; }
    .doc-section { background: #fff; border: 1px solid #e4e4e7; padding: 28px 32px; margin-bottom: 28px; }
    .section-banner { background: #fef3c7; color: #92400e; padding: 8px 12px; font-size: 11px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; margin: -28px -32px 20px; }
    .section-title { font-size: 22px; margin: 0 0 16px; }
    .section-body h1 { font-size: 20px; }
    .section-body h2 { font-size: 17px; margin-top: 1.4em; }
    .section-body h3 { font-size: 15px; }
    .section-body table { width: 100%; border-collapse: collapse; font-size: 13px; }
    .section-body hr { border: none; border-top: 1px solid #e4e4e7; margin: 1.5em 0; }
    .footer-note { font-size: 12px; color: #71717a; text-align: center; margin-top: 12px; }
  </style>
</head>
<body>
  ${pageBanner}
  <div class="wrap">
    <div class="meta">
      <p><strong>Client:</strong> ${escapeHtml(form.legalEntityName || '—')}</p>
      <p><strong>Signatory:</strong> ${escapeHtml(form.signatoryName || '—')} (${escapeHtml(form.signatoryCapacity || '—')})</p>
      <p><strong>Services:</strong> ${escapeHtml(form.serviceSelection || '—')}</p>
      <p><strong>Fee defaults used:</strong> setup clawback R${escapeHtml(tokens.setup_clawback_zar)} · retainer R${escapeHtml(tokens.monthly_retainer_zar)} · notice ${escapeHtml(tokens.notice_business_days)} business days</p>
      <p><strong>Invoice wording:</strong> Amount Due (VAT not applicable – vendor not registered). Never “Tax Invoice”.</p>
    </div>
    ${bodies.join('\n')}
    ${footerNote}
  </div>
</body>
</html>`;
}
