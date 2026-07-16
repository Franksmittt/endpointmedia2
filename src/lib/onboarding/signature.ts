/**
 * Digital signature provider interfaces.
 * Phase 3 Option A uses LocalClickwrapProvider (see clickwrap.ts).
 * Option B: implement ESignProvider with PandaDoc without changing the status machine.
 */

import type { OnboardingSubmissionRecord } from './types';

export type ESignProviderId = 'pandadoc' | 'docusign' | 'signiflow' | 'clickwrap_fallback';

export interface SignatureEnvelopeRequest {
  submissionId: string;
  signatoryEmail: string;
  signatoryName: string;
  documentUrls: string[];
  returnUrl?: string;
}

export interface SignatureEnvelopeResult {
  provider: ESignProviderId;
  envelopeId: string;
  status: 'sent' | 'viewed' | 'signed' | 'declined' | 'error';
  signingUrl?: string;
}

export interface SignatureAuditEvent {
  submissionId: string;
  at: string;
  ip?: string;
  userAgent?: string;
  documentSha256?: string;
  typedName?: string;
  event: 'viewed' | 'accepted' | 'signed' | 'declined';
}

/** Pluggable remote e-sign provider (PandaDoc-first when keys exist). */
export interface ESignProvider {
  id: ESignProviderId;
  createEnvelope(req: SignatureEnvelopeRequest): Promise<SignatureEnvelopeResult>;
  getEnvelopeStatus(envelopeId: string): Promise<SignatureEnvelopeResult>;
}

/** Local clickwrap + typed name + audit log (Phase 3 Option A). */
export interface ClickwrapFallback {
  id: 'clickwrap_fallback';
  recordAcceptance(
    submission: OnboardingSubmissionRecord,
    audit: Omit<SignatureAuditEvent, 'submissionId'>,
  ): Promise<SignatureAuditEvent>;
}

/** Stub remote provider — PandaDoc-shaped placeholder for Option B. */
export class StubPandaDocProvider implements ESignProvider {
  id: ESignProviderId = 'pandadoc';

  async createEnvelope(req: SignatureEnvelopeRequest): Promise<SignatureEnvelopeResult> {
    return {
      provider: this.id,
      envelopeId: `pandadoc_stub_${req.submissionId}`,
      status: 'sent',
      signingUrl: `/onboarding/sign/${req.submissionId}`,
    };
  }

  async getEnvelopeStatus(envelopeId: string): Promise<SignatureEnvelopeResult> {
    return {
      provider: this.id,
      envelopeId,
      status: 'sent',
    };
  }
}

/** @deprecated alias */
export const StubESignProvider = StubPandaDocProvider;

export function recommendESignPath(hasProviderKeys: boolean): ESignProviderId {
  return hasProviderKeys ? 'pandadoc' : 'clickwrap_fallback';
}

/**
 * Resolve which path the app should use.
 * Phase 3: always clickwrap unless PANDADOC_API_KEY is present (still not wired).
 */
export function getActiveESignMode(): ESignProviderId {
  const hasPandaDoc = Boolean((process.env.PANDADOC_API_KEY ?? '').trim());
  return recommendESignPath(hasPandaDoc);
}
