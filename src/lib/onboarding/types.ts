import type { ContractStatus } from './status';

/** DRAFT commercial package — Phase 1 form types. */

export type EntityType =
  | 'sole_proprietor'
  | 'pty_ltd'
  | 'close_corporation'
  | 'partnership'
  | 'trust'
  | 'other';

export type CpaTurnoverBand =
  | 'below_r2m'
  | 'above_r2m'
  | 'unknown';

export type ServiceSelection = 'ads' | 'web' | 'both';

export type YesNo = 'yes' | 'no';

export interface AccessChecklist {
  googleAds: boolean;
  ga4: boolean;
  gtm: boolean;
  meta: boolean;
  dnsHosting: boolean;
}

/** Mandatory acknowledgements — all must be true before submit. */
export interface MandatoryAcknowledgements {
  termAndRenewal: boolean;
  cancellationModel: boolean;
  noRoiGuarantee: boolean;
  clientPaidAdSpend: boolean;
  popia: boolean;
  startAfterSignAndPay: boolean;
  nonVatPricing: boolean;
}

export interface OnboardingFormData {
  // Legal entity
  legalEntityName: string;
  entityType: EntityType | '';
  registrationOrId: string;

  // Signatory
  signatoryName: string;
  signatoryCapacity: string;
  signatoryEmail: string;
  signatoryPhone: string;

  // CPA dual track
  cpaTurnoverBand: CpaTurnoverBand | '';

  // Domicilium
  domiciliumAddress: string;
  domiciliumCity: string;
  domiciliumProvince: string;
  domiciliumPostalCode: string;

  // Services
  serviceSelection: ServiceSelection | '';
  minMonthlyAdSpendZar: string; // required if ads/both
  regulatedIndustry: YesNo | '';
  competitorBidding: YesNo | '';

  // Access
  access: AccessChecklist;

  // Acknowledgements
  acknowledgements: MandatoryAcknowledgements;

  // Optional notes
  notes: string;
}

export const EMPTY_ONBOARDING_FORM: OnboardingFormData = {
  legalEntityName: '',
  entityType: '',
  registrationOrId: '',
  signatoryName: '',
  signatoryCapacity: '',
  signatoryEmail: '',
  signatoryPhone: '',
  cpaTurnoverBand: '',
  domiciliumAddress: '',
  domiciliumCity: '',
  domiciliumProvince: '',
  domiciliumPostalCode: '',
  serviceSelection: '',
  minMonthlyAdSpendZar: '',
  regulatedIndustry: '',
  competitorBidding: '',
  access: {
    googleAds: false,
    ga4: false,
    gtm: false,
    meta: false,
    dnsHosting: false,
  },
  acknowledgements: {
    termAndRenewal: false,
    cancellationModel: false,
    noRoiGuarantee: false,
    clientPaidAdSpend: false,
    popia: false,
    startAfterSignAndPay: false,
    nonVatPricing: false,
  },
  notes: '',
};

/** API / UI view of a persisted submission (Prisma-backed). */
export interface OnboardingSubmissionRecord {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: ContractStatus;
  form: OnboardingFormData;
  entityName: string;
  signatoryEmail: string;
  /** Effective CPA treatment: unknown / below → protected */
  cpaProtected: boolean;
  serviceSelection: string;
  previewToken: string;
  emailStatus: string;
  signatureMode?: string | null;
  signedAt?: string | null;
  pdfUrl?: string | null;
  pdfStorageKey?: string | null;
  invoiceAmountZar?: number | null;
  paymentReference?: string | null;
  invoiceEmailedAt?: string | null;
  /** Phase 5 — last payment reminder timestamp (ISO) */
  lastReminderAt?: string | null;
  paidAt?: string | null;
  paymentMethod?: string | null;
  paymentAmountZar?: number | null;
  paymentNote?: string | null;
  paystackReference?: string | null;
  suspendedAt?: string | null;
  suspendReason?: string | null;
}

export type OnboardingStepId =
  | 'entity'
  | 'signatory'
  | 'services'
  | 'access'
  | 'acknowledgements'
  | 'review';

export const ONBOARDING_STEPS: { id: OnboardingStepId; title: string; blurb: string }[] = [
  { id: 'entity', title: 'Legal entity', blurb: 'Company details & CPA band' },
  { id: 'signatory', title: 'Signatory', blurb: 'Who signs & domicilium' },
  { id: 'services', title: 'Services', blurb: 'Ads, web, or both' },
  { id: 'access', title: 'Access', blurb: 'Accounts & platforms' },
  { id: 'acknowledgements', title: 'Key terms', blurb: 'Mandatory checkboxes' },
  { id: 'review', title: 'Review', blurb: 'Confirm & submit draft' },
];
