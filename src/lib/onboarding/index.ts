export * from './status';
export * from './types';
export * from './signature';
export * from './fees';
export * from './schema';

/** Paths to draft legal packages (repo-relative). */
export const LEGAL_DRAFT_PATHS = {
  msa: 'src/content/legal/msa-draft.md',
  keyTerms: 'src/content/legal/key-commercial-terms-draft.md',
  sowAds: 'src/content/legal/sow-google-ads-draft.md',
  sowWeb: 'src/content/legal/sow-website-draft.md',
  popia: 'src/content/legal/popia-operator-annex-draft.md',
} as const;

// Server-only modules (do not import from client components):
//   '@/lib/onboarding/store'
//   '@/lib/onboarding/email'
//   '@/lib/onboarding/package-html'
//   '@/lib/onboarding/clickwrap'
//   '@/lib/onboarding/pdf'
//   '@/lib/onboarding/auth'
