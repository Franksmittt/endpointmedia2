import 'server-only';

import type { OnboardingSubmissionRecord } from './types';
import { getOnboardingSubmission } from './store';

export type AuthResult =
  | { ok: true; submission: OnboardingSubmissionRecord; via: 'admin' | 'token' }
  | { ok: false; status: 401 | 404; error: string };

/**
 * Authorise onboarding resources with either:
 * - Authorization: Bearer CONTACT_ADMIN_SECRET
 * - ?token= / body.token matching submission.previewToken
 */
export async function authorizeOnboardingAccess(
  id: string,
  options: { bearer?: string | null; token?: string | null },
): Promise<AuthResult> {
  const submission = await getOnboardingSubmission(id);
  if (!submission) {
    return { ok: false, status: 404, error: 'Submission not found' };
  }

  const secret = (process.env.CONTACT_ADMIN_SECRET ?? '').trim();
  const bearer = (options.bearer ?? '').replace(/^Bearer\s+/i, '').trim();
  if (secret && bearer && bearer === secret) {
    return { ok: true, submission, via: 'admin' };
  }

  const token = (options.token ?? '').trim();
  if (token && token === submission.previewToken) {
    return { ok: true, submission, via: 'token' };
  }

  return {
    ok: false,
    status: 401,
    error:
      'Unauthorized. Provide a valid previewToken or Authorization: Bearer CONTACT_ADMIN_SECRET.',
  };
}

export function getBearerFromRequest(request: { headers: Headers }): string | null {
  return request.headers.get('authorization');
}
