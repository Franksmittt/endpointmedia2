/**
 * Soft-launch / counsel flags.
 * DRAFT banners remain ON unless attorney clearance is explicitly set.
 * Default: OFF (keep DRAFT banners).
 */

export function isAttorneyCleared(): boolean {
  const raw = (process.env.ONBOARDING_ATTORNEY_CLEARED ?? '').trim().toLowerCase();
  return raw === '1' || raw === 'true' || raw === 'yes';
}

export function draftBannerText(): string {
  return 'DRAFT — REQUIRES SA ATTORNEY REVIEW';
}

export function shouldShowDraftBanner(): boolean {
  return !isAttorneyCleared();
}

/** Sticky / section banner HTML fragment for package HTML (empty when cleared). */
export function attorneyDraftBannerHtml(options?: {
  className?: string;
  extra?: string;
}): string {
  if (!shouldShowDraftBanner()) return '';
  const className = options?.className ?? 'page-banner';
  const extra = options?.extra ? ` · ${options.extra}` : '';
  return `<div class="${className}">${draftBannerText()}${extra}</div>`;
}
