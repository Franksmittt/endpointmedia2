'use client';

import React from 'react';
import {
  validateOnboardingStep,
  type FieldErrors,
} from '@/lib/onboarding/schema';
import {
  EMPTY_ONBOARDING_FORM,
  ONBOARDING_STEPS,
  type OnboardingFormData,
  type OnboardingStepId,
} from '@/lib/onboarding/types';

const inputClassName =
  'w-full rounded-sm border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-zinc-500';

const inputErrorClassName =
  'w-full rounded-sm border border-red-800/70 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-red-500';

const labelClassName = 'mb-1.5 block text-sm text-zinc-400';

function FieldError({ errors, name }: { errors: FieldErrors; name: string }) {
  const msg = errors[name] || errors[`acknowledgements.${name}`] || errors[`access.${name}`];
  if (!msg) return null;
  return <p className="mt-1.5 text-xs text-red-400">{msg}</p>;
}

function StepBadge({ current }: { current: OnboardingStepId }) {
  const idx = ONBOARDING_STEPS.findIndex((s) => s.id === current);
  return (
    <ol className="flex flex-wrap gap-2">
      {ONBOARDING_STEPS.map((step, i) => {
        const active = i === idx;
        const done = i < idx;
        return (
          <li
            key={step.id}
            className={`rounded-sm border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] ${
              active
                ? 'border-zinc-500 bg-zinc-900 text-white'
                : done
                  ? 'border-emerald-900/50 bg-emerald-950/20 text-emerald-300'
                  : 'border-zinc-800 text-zinc-600'
            }`}
          >
            {String(i + 1).padStart(2, '0')} · {step.title}
          </li>
        );
      })}
    </ol>
  );
}

function CheckboxRow({
  checked,
  onChange,
  error,
  children,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className={`flex cursor-pointer gap-3 rounded-sm border p-4 text-sm text-zinc-300 ${
          error ? 'border-red-800/60 bg-red-950/10' : 'border-zinc-800 bg-zinc-950/40'
        }`}
      >
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-white"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span>{children}</span>
      </label>
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}

export default function OnboardingForm() {
  const [step, setStep] = React.useState<OnboardingStepId>('entity');
  const [form, setForm] = React.useState<OnboardingFormData>(EMPTY_ONBOARDING_FORM);
  const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<{
    type: 'success' | 'error';
    text: string;
    id?: string;
    previewHint?: string;
    signHint?: string;
  } | null>(null);

  const stepIndex = ONBOARDING_STEPS.findIndex((s) => s.id === step);
  const needsAdSpend = form.serviceSelection === 'ads' || form.serviceSelection === 'both';

  const patch = (partial: Partial<OnboardingFormData>) => {
    setForm((prev) => ({ ...prev, ...partial }));
    setFieldErrors({});
  };

  const goNext = () => {
    const errors = validateOnboardingStep(step, form);
    if (errors) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    const next = ONBOARDING_STEPS[stepIndex + 1];
    if (next) setStep(next.id);
  };

  const goBack = () => {
    setFieldErrors({});
    const prev = ONBOARDING_STEPS[stepIndex - 1];
    if (prev) setStep(prev.id);
  };

  const handleSubmit = async () => {
    const errors = validateOnboardingStep('review', form);
    if (errors) {
      setFieldErrors(errors);
      setResult({
        type: 'error',
        text: 'Please fix validation errors before submitting.',
      });
      return;
    }

    setIsSubmitting(true);
    setResult(null);
    try {
      const response = await fetch('/api/onboarding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ form }),
      });
      const raw = await response.text();
      let data: {
        message?: string;
        error?: string;
        fieldErrors?: FieldErrors;
        emailWarning?: string;
        submission?: { id: string; previewToken?: string };
      } = {};
      try {
        data = raw ? JSON.parse(raw) : {};
      } catch {
        data = {};
      }

      if (!response.ok) {
        if (data.fieldErrors) setFieldErrors(data.fieldErrors);
        setResult({
          type: 'error',
          text: data.error || `Submit failed (${response.status})`,
        });
        return;
      }

      const token = data.submission?.previewToken ?? '';
      const previewHint = data.submission?.id
        ? `/api/onboarding/${data.submission.id}/preview?token=${token}`
        : undefined;
      const signHint = data.submission?.id
        ? `/onboarding/sign/${data.submission.id}?token=${token}`
        : undefined;

      setResult({
        type: 'success',
        text:
          (data.message || 'Draft package recorded.') +
          (data.emailWarning ? ` (Email warning: ${data.emailWarning})` : ''),
        id: data.submission?.id,
        previewHint,
        signHint,
      });
    } catch (error) {
      const details = error instanceof Error ? error.message : 'Network error';
      setResult({ type: 'error', text: details });
    } finally {
      setIsSubmitting(false);
    }
  };

  const cls = (name: string) => (fieldErrors[name] ? inputErrorClassName : inputClassName);

  return (
    <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-amber-500/90">
        Draft package · Requires SA attorney review
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-white">Client onboarding</h2>
      <p className="mt-2 max-w-2xl text-sm text-zinc-500">
        Invite-only draft pack. Not binding until digitally signed. Work starts only after signature
        and first invoice payment.
      </p>

      <div className="mt-6">
        <StepBadge current={step} />
      </div>

      <div className="mt-8 space-y-5">
        {step === 'entity' && (
          <>
            <div>
              <label className={labelClassName} htmlFor="legalEntityName">
                Legal entity name *
              </label>
              <input
                id="legalEntityName"
                className={cls('legalEntityName')}
                value={form.legalEntityName}
                onChange={(e) => patch({ legalEntityName: e.target.value })}
                placeholder="e.g. Acme Panel Beaters (Pty) Ltd"
              />
              <FieldError errors={fieldErrors} name="legalEntityName" />
            </div>
            <div>
              <label className={labelClassName} htmlFor="entityType">
                Entity type *
              </label>
              <select
                id="entityType"
                className={cls('entityType')}
                value={form.entityType}
                onChange={(e) =>
                  patch({ entityType: e.target.value as OnboardingFormData['entityType'] })
                }
              >
                <option value="">Select…</option>
                <option value="sole_proprietor">Sole proprietor</option>
                <option value="pty_ltd">Private company (Pty) Ltd</option>
                <option value="close_corporation">Close corporation</option>
                <option value="partnership">Partnership</option>
                <option value="trust">Trust</option>
                <option value="other">Other</option>
              </select>
              <FieldError errors={fieldErrors} name="entityType" />
            </div>
            <div>
              <label className={labelClassName} htmlFor="registrationOrId">
                Registration / ID number *
              </label>
              <input
                id="registrationOrId"
                className={cls('registrationOrId')}
                value={form.registrationOrId}
                onChange={(e) => patch({ registrationOrId: e.target.value })}
                placeholder="CIPC number or ID"
              />
              <FieldError errors={fieldErrors} name="registrationOrId" />
            </div>
            <div>
              <label className={labelClassName} htmlFor="cpaTurnoverBand">
                CPA turnover / assets declaration *
              </label>
              <select
                id="cpaTurnoverBand"
                className={cls('cpaTurnoverBand')}
                value={form.cpaTurnoverBand}
                onChange={(e) =>
                  patch({
                    cpaTurnoverBand: e.target.value as OnboardingFormData['cpaTurnoverBand'],
                  })
                }
              >
                <option value="">Select…</option>
                <option value="below_r2m">Below R2 million (CPA-protected track)</option>
                <option value="above_r2m">Above R2 million</option>
                <option value="unknown">Unknown / prefer not to say (treated as CPA-protected)</option>
              </select>
              <FieldError errors={fieldErrors} name="cpaTurnoverBand" />
              <p className="mt-2 text-xs text-zinc-600">
                If unknown, Endpoint Media treats the engagement as CPA-protected.
              </p>
            </div>
          </>
        )}

        {step === 'signatory' && (
          <>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClassName} htmlFor="signatoryName">
                  Signatory full name *
                </label>
                <input
                  id="signatoryName"
                  className={cls('signatoryName')}
                  value={form.signatoryName}
                  onChange={(e) => patch({ signatoryName: e.target.value })}
                />
                <FieldError errors={fieldErrors} name="signatoryName" />
              </div>
              <div>
                <label className={labelClassName} htmlFor="signatoryCapacity">
                  Capacity *
                </label>
                <input
                  id="signatoryCapacity"
                  className={cls('signatoryCapacity')}
                  value={form.signatoryCapacity}
                  onChange={(e) => patch({ signatoryCapacity: e.target.value })}
                  placeholder="e.g. Director, Owner"
                />
                <FieldError errors={fieldErrors} name="signatoryCapacity" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClassName} htmlFor="signatoryEmail">
                  Email *
                </label>
                <input
                  id="signatoryEmail"
                  type="email"
                  className={cls('signatoryEmail')}
                  value={form.signatoryEmail}
                  onChange={(e) => patch({ signatoryEmail: e.target.value })}
                />
                <FieldError errors={fieldErrors} name="signatoryEmail" />
              </div>
              <div>
                <label className={labelClassName} htmlFor="signatoryPhone">
                  Phone
                </label>
                <input
                  id="signatoryPhone"
                  type="tel"
                  className={inputClassName}
                  value={form.signatoryPhone}
                  onChange={(e) => patch({ signatoryPhone: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className={labelClassName} htmlFor="domiciliumAddress">
                Domicilium street address *
              </label>
              <input
                id="domiciliumAddress"
                className={cls('domiciliumAddress')}
                value={form.domiciliumAddress}
                onChange={(e) => patch({ domiciliumAddress: e.target.value })}
              />
              <FieldError errors={fieldErrors} name="domiciliumAddress" />
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <label className={labelClassName} htmlFor="domiciliumCity">
                  City
                </label>
                <input
                  id="domiciliumCity"
                  className={inputClassName}
                  value={form.domiciliumCity}
                  onChange={(e) => patch({ domiciliumCity: e.target.value })}
                />
              </div>
              <div>
                <label className={labelClassName} htmlFor="domiciliumProvince">
                  Province
                </label>
                <input
                  id="domiciliumProvince"
                  className={inputClassName}
                  value={form.domiciliumProvince}
                  onChange={(e) => patch({ domiciliumProvince: e.target.value })}
                  placeholder="Gauteng"
                />
              </div>
              <div>
                <label className={labelClassName} htmlFor="domiciliumPostalCode">
                  Postal code
                </label>
                <input
                  id="domiciliumPostalCode"
                  className={inputClassName}
                  value={form.domiciliumPostalCode}
                  onChange={(e) => patch({ domiciliumPostalCode: e.target.value })}
                />
              </div>
            </div>
          </>
        )}

        {step === 'services' && (
          <>
            <div>
              <label className={labelClassName} htmlFor="serviceSelection">
                Service selection *
              </label>
              <select
                id="serviceSelection"
                className={cls('serviceSelection')}
                value={form.serviceSelection}
                onChange={(e) =>
                  patch({
                    serviceSelection: e.target.value as OnboardingFormData['serviceSelection'],
                  })
                }
              >
                <option value="">Select…</option>
                <option value="ads">Google Ads retainer</option>
                <option value="web">Website build</option>
                <option value="both">Both Ads + Website</option>
              </select>
              <FieldError errors={fieldErrors} name="serviceSelection" />
            </div>
            {needsAdSpend && (
              <div>
                <label className={labelClassName} htmlFor="minMonthlyAdSpendZar">
                  Minimum monthly ad spend (ZAR, paid by you to Google/Meta) *
                </label>
                <input
                  id="minMonthlyAdSpendZar"
                  className={cls('minMonthlyAdSpendZar')}
                  value={form.minMonthlyAdSpendZar}
                  onChange={(e) => patch({ minMonthlyAdSpendZar: e.target.value })}
                  placeholder="e.g. 15000"
                />
                <FieldError errors={fieldErrors} name="minMonthlyAdSpendZar" />
              </div>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClassName} htmlFor="regulatedIndustry">
                  Regulated industry? *
                </label>
                <select
                  id="regulatedIndustry"
                  className={cls('regulatedIndustry')}
                  value={form.regulatedIndustry}
                  onChange={(e) =>
                    patch({
                      regulatedIndustry: e.target.value as OnboardingFormData['regulatedIndustry'],
                    })
                  }
                >
                  <option value="">Select…</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <FieldError errors={fieldErrors} name="regulatedIndustry" />
              </div>
              <div>
                <label className={labelClassName} htmlFor="competitorBidding">
                  Competitor bidding authorised? *
                </label>
                <select
                  id="competitorBidding"
                  className={cls('competitorBidding')}
                  value={form.competitorBidding}
                  onChange={(e) =>
                    patch({
                      competitorBidding: e.target.value as OnboardingFormData['competitorBidding'],
                    })
                  }
                >
                  <option value="">Select…</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <FieldError errors={fieldErrors} name="competitorBidding" />
              </div>
            </div>
            <div>
              <label className={labelClassName} htmlFor="notes">
                Notes (optional)
              </label>
              <textarea
                id="notes"
                rows={3}
                className={inputClassName}
                value={form.notes}
                onChange={(e) => patch({ notes: e.target.value })}
              />
            </div>
          </>
        )}

        {step === 'access' && (
          <>
            <p className="text-sm text-zinc-500">
              Tick accounts you can grant (or will grant before kickoff). Access is optional to
              continue — capture what you know now.
            </p>
            {(
              [
                ['googleAds', 'Google Ads'],
                ['ga4', 'Google Analytics 4'],
                ['gtm', 'Google Tag Manager'],
                ['meta', 'Meta Business / Ads'],
                ['dnsHosting', 'DNS / hosting'],
              ] as const
            ).map(([key, label]) => (
              <CheckboxRow
                key={key}
                checked={form.access[key]}
                onChange={(v) => patch({ access: { ...form.access, [key]: v } })}
              >
                {label}
              </CheckboxRow>
            ))}
          </>
        )}

        {step === 'acknowledgements' && (
          <>
            <p className="text-sm text-zinc-500">
              All boxes are required. Fee defaults in drafts: setup clawback R7,500 · retainer R5,000
              · notice 20 business days (tokens remain editable in templates).
            </p>
            <CheckboxRow
              checked={form.acknowledgements.nonVatPricing}
              error={fieldErrors['acknowledgements.nonVatPricing']}
              onChange={(v) =>
                patch({
                  acknowledgements: { ...form.acknowledgements, nonVatPricing: v },
                })
              }
            >
              Endpoint Media is <strong className="text-zinc-200">not VAT-registered</strong>. Amounts
              due are flat ZAR with wording “Amount Due (VAT not applicable – vendor not registered).”
              No Tax Invoice / no VAT lines.
            </CheckboxRow>
            <CheckboxRow
              checked={form.acknowledgements.clientPaidAdSpend}
              error={fieldErrors['acknowledgements.clientPaidAdSpend']}
              onChange={(v) =>
                patch({
                  acknowledgements: { ...form.acknowledgements, clientPaidAdSpend: v },
                })
              }
            >
              Ad spend is paid by me <strong className="text-zinc-200">directly to Google/Meta</strong>
              , not invoiced as media by Endpoint Media.
            </CheckboxRow>
            <CheckboxRow
              checked={form.acknowledgements.termAndRenewal}
              error={fieldErrors['acknowledgements.termAndRenewal']}
              onChange={(v) =>
                patch({
                  acknowledgements: { ...form.acknowledgements, termAndRenewal: v },
                })
              }
            >
              <strong className="text-zinc-200">Initial Term is 3 months</strong>, then successive{' '}
              <strong className="text-zinc-200">6-month Renewal Terms</strong>.
            </CheckboxRow>
            <CheckboxRow
              checked={form.acknowledgements.cancellationModel}
              error={fieldErrors['acknowledgements.cancellationModel']}
              onChange={(v) =>
                patch({
                  acknowledgements: { ...form.acknowledgements, cancellationModel: v },
                })
              }
            >
              Early cancellation uses{' '}
              <strong className="text-zinc-200">
                waived setup/strategy fee clawback + notice-period fees
              </strong>
              , not a sole “100% of all remaining fees” model.
            </CheckboxRow>
            <CheckboxRow
              checked={form.acknowledgements.noRoiGuarantee}
              error={fieldErrors['acknowledgements.noRoiGuarantee']}
              onChange={(v) =>
                patch({
                  acknowledgements: { ...form.acknowledgements, noRoiGuarantee: v },
                })
              }
            >
              Endpoint Media does <strong className="text-zinc-200">not guarantee</strong> ROI, leads,
              ROAS, or rankings.
            </CheckboxRow>
            <CheckboxRow
              checked={form.acknowledgements.popia}
              error={fieldErrors['acknowledgements.popia']}
              onChange={(v) =>
                patch({
                  acknowledgements: { ...form.acknowledgements, popia: v },
                })
              }
            >
              I acknowledge the <strong className="text-zinc-200">POPIA Operator Annex</strong>{' '}
              (draft) and have a lawful basis to share personal information needed for the services.
            </CheckboxRow>
            <CheckboxRow
              checked={form.acknowledgements.startAfterSignAndPay}
              error={fieldErrors['acknowledgements.startAfterSignAndPay']}
              onChange={(v) =>
                patch({
                  acknowledgements: { ...form.acknowledgements, startAfterSignAndPay: v },
                })
              }
            >
              Work and access start only after{' '}
              <strong className="text-zinc-200">digital signature and first invoice payment</strong>.
            </CheckboxRow>
          </>
        )}

        {step === 'review' && (
          <>
            <div className="space-y-3 rounded-sm border border-zinc-800 bg-black/40 p-4 text-sm text-zinc-400">
              <p>
                <span className="text-zinc-600">Entity:</span>{' '}
                <span className="text-zinc-200">{form.legalEntityName || '—'}</span>
              </p>
              <p>
                <span className="text-zinc-600">CPA band:</span>{' '}
                <span className="text-zinc-200">{form.cpaTurnoverBand || '—'}</span>
                {form.cpaTurnoverBand !== 'above_r2m' && (
                  <span className="ml-2 text-amber-500/80">(treated as CPA-protected)</span>
                )}
              </p>
              <p>
                <span className="text-zinc-600">Signatory:</span>{' '}
                <span className="text-zinc-200">
                  {form.signatoryName || '—'} ({form.signatoryCapacity || '—'})
                </span>
              </p>
              <p>
                <span className="text-zinc-600">Services:</span>{' '}
                <span className="text-zinc-200">{form.serviceSelection || '—'}</span>
              </p>
              <p className="text-xs text-amber-500/90">
                DRAFT — REQUIRES SA ATTORNEY REVIEW. Submitting saves to the database and emails
                Endpoint Media + you. Not binding until digitally signed.
              </p>
            </div>

            {fieldErrors._form && (
              <p className="text-sm text-red-400">{fieldErrors._form}</p>
            )}

            {result && (
              <div
                role={result.type === 'error' ? 'alert' : 'status'}
                className={`rounded-sm border p-4 text-sm ${
                  result.type === 'success'
                    ? 'border-emerald-800/40 bg-emerald-950/20 text-emerald-200'
                    : 'border-red-800/40 bg-red-950/20 text-red-200'
                }`}
              >
                {result.text}
                {result.id && (
                  <p className="mt-2 font-mono text-xs text-zinc-500">Submission ID: {result.id}</p>
                )}
                {result.previewHint && (
                  <p className="mt-2 break-all font-mono text-xs text-zinc-500">
                    Preview: {result.previewHint}
                  </p>
                )}
                {result.signHint && (
                  <p className="mt-2 break-all font-mono text-xs text-emerald-500/80">
                    Sign: <a href={result.signHint} className="underline">{result.signHint}</a>
                  </p>
                )}
              </div>
            )}
          </>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={goBack}
          disabled={stepIndex === 0 || isSubmitting}
          className="rounded-sm border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-900 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>
        {step !== 'review' ? (
          <button
            type="button"
            onClick={goNext}
            className="rounded-sm bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="rounded-sm bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? 'Saving draft…' : 'Submit draft package'}
          </button>
        )}
      </div>
    </div>
  );
}
