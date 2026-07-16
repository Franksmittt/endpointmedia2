'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  submissionId: string;
  token: string;
  expectedSignatoryName: string;
  alreadySigned: boolean;
};

const boxClass =
  'flex cursor-pointer gap-3 rounded-sm border border-zinc-800 bg-zinc-950/40 p-4 text-sm text-zinc-300';

export default function SignForm({
  submissionId,
  token,
  expectedSignatoryName,
  alreadySigned,
}: Props) {
  const router = useRouter();
  const [typedName, setTypedName] = React.useState('');
  const [checkboxes, setCheckboxes] = React.useState({
    readKeyTerms: false,
    agreeMsaSowPopia: false,
    authorityToBind: false,
    commercialRulesAck: false,
  });
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>({});
  const [error, setError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  if (alreadySigned) {
    return (
      <div className="rounded-sm border border-emerald-800/40 bg-emerald-950/20 p-5 text-sm text-emerald-200">
        This package is already signed. Status is awaiting first invoice payment.
        <button
          type="button"
          className="mt-4 block rounded-sm bg-white px-4 py-2 text-sm font-semibold text-black"
          onClick={() =>
            router.push(`/onboarding/sign/${submissionId}/success?token=${token}`)
          }
        >
          View confirmation
        </button>
      </div>
    );
  }

  const patchBox = (key: keyof typeof checkboxes, value: boolean) => {
    setCheckboxes((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setFieldErrors({});

    try {
      const response = await fetch(`/api/onboarding/${submissionId}/sign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, typedName, checkboxes }),
      });
      const data = (await response.json()) as {
        error?: string;
        fieldErrors?: Record<string, string>;
        redirectTo?: string;
      };

      if (!response.ok) {
        if (data.fieldErrors) setFieldErrors(data.fieldErrors);
        setError(data.error || `Sign failed (${response.status})`);
        return;
      }

      router.push(data.redirectTo || `/onboarding/sign/${submissionId}/success?token=${token}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Network error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-amber-500/90">
        Electronic signature · Draft package
      </p>
      <h2 className="text-xl font-semibold text-white">Sign package electronically</h2>
      <p className="text-sm text-zinc-500">
        Expected signatory name on file: <span className="text-zinc-300">{expectedSignatoryName}</span>
      </p>

      <label className={boxClass}>
        <input
          type="checkbox"
          className="mt-1 accent-white"
          checked={checkboxes.readKeyTerms}
          onChange={(e) => patchBox('readKeyTerms', e.target.checked)}
        />
        <span>I have read the Key Commercial Terms.</span>
      </label>
      {fieldErrors.readKeyTerms && (
        <p className="text-xs text-red-400">{fieldErrors.readKeyTerms}</p>
      )}

      <label className={boxClass}>
        <input
          type="checkbox"
          className="mt-1 accent-white"
          checked={checkboxes.agreeMsaSowPopia}
          onChange={(e) => patchBox('agreeMsaSowPopia', e.target.checked)}
        />
        <span>
          I agree to the MSA, selected SoW(s), and POPIA annex (
          <strong className="text-zinc-200">DRAFT — REQUIRES SA ATTORNEY REVIEW</strong>).
        </span>
      </label>
      {fieldErrors.agreeMsaSowPopia && (
        <p className="text-xs text-red-400">{fieldErrors.agreeMsaSowPopia}</p>
      )}

      <label className={boxClass}>
        <input
          type="checkbox"
          className="mt-1 accent-white"
          checked={checkboxes.authorityToBind}
          onChange={(e) => patchBox('authorityToBind', e.target.checked)}
        />
        <span>I confirm I have authority to bind the legal entity named in this package.</span>
      </label>
      {fieldErrors.authorityToBind && (
        <p className="text-xs text-red-400">{fieldErrors.authorityToBind}</p>
      )}

      <label className={boxClass}>
        <input
          type="checkbox"
          className="mt-1 accent-white"
          checked={checkboxes.commercialRulesAck}
          onChange={(e) => patchBox('commercialRulesAck', e.target.checked)}
        />
        <span>
          I understand ROI/leads/ROAS are not guaranteed; Endpoint Media is not VAT-registered;
          Initial Term is 3 months then 6-month renewals; early cancellation uses setup clawback +
          notice-period fees; ad spend is paid by me to Google/Meta.
        </span>
      </label>
      {fieldErrors.commercialRulesAck && (
        <p className="text-xs text-red-400">{fieldErrors.commercialRulesAck}</p>
      )}

      <div>
        <label htmlFor="typedName" className="mb-1.5 block text-sm text-zinc-400">
          Type your full legal name *
        </label>
        <input
          id="typedName"
          value={typedName}
          onChange={(e) => setTypedName(e.target.value)}
          className="w-full rounded-sm border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          placeholder={expectedSignatoryName}
          autoComplete="name"
        />
        {fieldErrors.typedName && (
          <p className="mt-1.5 text-xs text-red-400">{fieldErrors.typedName}</p>
        )}
      </div>

      {error && (
        <div className="rounded-sm border border-red-800/40 bg-red-950/20 p-3 text-sm text-red-200">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-sm bg-white px-5 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-200 disabled:opacity-60"
      >
        {isSubmitting ? 'Signing…' : 'Sign package electronically'}
      </button>
    </form>
  );
}
