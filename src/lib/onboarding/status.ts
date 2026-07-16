/**
 * Contract / onboarding lifecycle statuses.
 * Condition precedent: work begins only at `active` (signed AND first invoice paid).
 */

export const CONTRACT_STATUSES = [
  'draft',
  'awaiting_signature',
  'signed',
  'awaiting_payment',
  'active',
  'suspended',
] as const;

export type ContractStatus = (typeof CONTRACT_STATUSES)[number];

export function isWorkAllowed(status: ContractStatus): boolean {
  return status === 'active';
}

export function canTransition(from: ContractStatus, to: ContractStatus): boolean {
  const allowed: Record<ContractStatus, ContractStatus[]> = {
    // Clickwrap collapses signed → awaiting_payment in one step after e-sign.
    draft: ['awaiting_signature', 'awaiting_payment', 'suspended'],
    awaiting_signature: ['signed', 'awaiting_payment', 'draft', 'suspended'],
    signed: ['awaiting_payment', 'active', 'suspended'],
    awaiting_payment: ['active', 'suspended'],
    active: ['suspended'],
    suspended: ['awaiting_payment', 'active', 'draft'],
  };
  return allowed[from]?.includes(to) ?? false;
}

/** Statuses where the package may still be electronically signed. */
export function canAcceptClickwrap(status: ContractStatus): boolean {
  return status === 'draft' || status === 'awaiting_signature';
}

/** Already past signature (idempotent success UX). */
export function isAlreadySigned(status: ContractStatus): boolean {
  return status === 'signed' || status === 'awaiting_payment' || status === 'active';
}
