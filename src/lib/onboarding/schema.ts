import { z } from 'zod';
import type { OnboardingFormData, OnboardingStepId } from './types';

const entityTypeSchema = z.enum([
  'sole_proprietor',
  'pty_ltd',
  'close_corporation',
  'partnership',
  'trust',
  'other',
]);

const cpaBandSchema = z.enum(['below_r2m', 'above_r2m', 'unknown']);
const serviceSchema = z.enum(['ads', 'web', 'both']);
const yesNoSchema = z.enum(['yes', 'no']);

export const accessChecklistSchema = z.object({
  googleAds: z.boolean(),
  ga4: z.boolean(),
  gtm: z.boolean(),
  meta: z.boolean(),
  dnsHosting: z.boolean(),
});

export const acknowledgementsSchema = z.object({
  termAndRenewal: z.literal(true, {
    errorMap: () => ({ message: 'Required: 3-month initial + 6-month renewals' }),
  }),
  cancellationModel: z.literal(true, {
    errorMap: () => ({ message: 'Required: clawback + notice-period cancellation model' }),
  }),
  noRoiGuarantee: z.literal(true, {
    errorMap: () => ({ message: 'Required: no ROI / leads / ROAS guarantee' }),
  }),
  clientPaidAdSpend: z.literal(true, {
    errorMap: () => ({ message: 'Required: ad spend paid by client to Google/Meta' }),
  }),
  popia: z.literal(true, {
    errorMap: () => ({ message: 'Required: POPIA acknowledgement' }),
  }),
  startAfterSignAndPay: z.literal(true, {
    errorMap: () => ({ message: 'Required: work starts only after signed + paid' }),
  }),
  nonVatPricing: z.literal(true, {
    errorMap: () => ({ message: 'Required: non-VAT pricing acknowledgement' }),
  }),
});

/** Full form — used on final submit. */
export const onboardingFormSchema = z
  .object({
    legalEntityName: z.string().trim().min(1, 'Legal entity name is required').max(200),
    entityType: entityTypeSchema,
    registrationOrId: z.string().trim().min(1, 'Registration / ID number is required').max(80),
    signatoryName: z.string().trim().min(1, 'Signatory name is required').max(120),
    signatoryCapacity: z.string().trim().min(1, 'Signatory capacity is required').max(120),
    signatoryEmail: z.string().trim().email('Valid signatory email is required').max(254),
    signatoryPhone: z.string().trim().max(32).optional().default(''),
    cpaTurnoverBand: cpaBandSchema,
    domiciliumAddress: z.string().trim().min(1, 'Domicilium address is required').max(300),
    domiciliumCity: z.string().trim().max(100).optional().default(''),
    domiciliumProvince: z.string().trim().max(100).optional().default(''),
    domiciliumPostalCode: z.string().trim().max(20).optional().default(''),
    serviceSelection: serviceSchema,
    minMonthlyAdSpendZar: z.string().trim().max(32).optional().default(''),
    regulatedIndustry: yesNoSchema,
    competitorBidding: yesNoSchema,
    access: accessChecklistSchema,
    acknowledgements: acknowledgementsSchema,
    notes: z.string().trim().max(5000).optional().default(''),
  })
  .superRefine((data, ctx) => {
    if (
      (data.serviceSelection === 'ads' || data.serviceSelection === 'both') &&
      !data.minMonthlyAdSpendZar.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['minMonthlyAdSpendZar'],
        message: 'Minimum monthly ad spend is required for Ads services',
      });
    }
  });

export type OnboardingFormParsed = z.infer<typeof onboardingFormSchema>;

const entityStepSchema = z.object({
  legalEntityName: z.string().trim().min(1, 'Legal entity name is required'),
  entityType: entityTypeSchema,
  registrationOrId: z.string().trim().min(1, 'Registration / ID number is required'),
  cpaTurnoverBand: cpaBandSchema,
});

const signatoryStepSchema = z.object({
  signatoryName: z.string().trim().min(1, 'Signatory name is required'),
  signatoryCapacity: z.string().trim().min(1, 'Signatory capacity is required'),
  signatoryEmail: z.string().trim().email('Valid email is required'),
  domiciliumAddress: z.string().trim().min(1, 'Domicilium address is required'),
});

const servicesStepSchema = z
  .object({
    serviceSelection: serviceSchema,
    minMonthlyAdSpendZar: z.string().trim().optional().default(''),
    regulatedIndustry: yesNoSchema,
    competitorBidding: yesNoSchema,
  })
  .superRefine((data, ctx) => {
    if (
      (data.serviceSelection === 'ads' || data.serviceSelection === 'both') &&
      !data.minMonthlyAdSpendZar?.trim()
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['minMonthlyAdSpendZar'],
        message: 'Minimum monthly ad spend is required',
      });
    }
  });

const accessStepSchema = z.object({
  access: accessChecklistSchema,
});

const acknowledgementsStepSchema = z.object({
  acknowledgements: acknowledgementsSchema,
});

export type FieldErrors = Record<string, string>;

function zodToFieldErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path.join('.') || '_form';
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}

/** Validate a single wizard step. Returns null if OK. */
export function validateOnboardingStep(
  step: OnboardingStepId,
  form: OnboardingFormData,
): FieldErrors | null {
  let result: z.SafeParseReturnType<unknown, unknown>;

  switch (step) {
    case 'entity':
      result = entityStepSchema.safeParse(form);
      break;
    case 'signatory':
      result = signatoryStepSchema.safeParse(form);
      break;
    case 'services':
      result = servicesStepSchema.safeParse(form);
      break;
    case 'access':
      result = accessStepSchema.safeParse(form);
      break;
    case 'acknowledgements':
      result = acknowledgementsStepSchema.safeParse(form);
      break;
    case 'review':
      result = onboardingFormSchema.safeParse(form);
      break;
    default:
      return { _form: 'Unknown step' };
  }

  if (result.success) return null;
  return zodToFieldErrors(result.error);
}

export function parseOnboardingForm(input: unknown):
  | { ok: true; data: OnboardingFormParsed }
  | { ok: false; errors: FieldErrors } {
  const result = onboardingFormSchema.safeParse(input);
  if (!result.success) {
    return { ok: false, errors: zodToFieldErrors(result.error) };
  }
  return { ok: true, data: result.data };
}
