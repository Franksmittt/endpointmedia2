'use client';

import React from 'react';

type Props = {
  reportId: string;
  blurState: boolean;
};

export default function ReportActions({ reportId, blurState }: Props) {
  const [loadingCheckout, setLoadingCheckout] = React.useState(false);
  const [loadingPdf, setLoadingPdf] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function startCheckout() {
    setLoadingCheckout(true);
    setError(null);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reportId }),
      });
      const payload = (await response.json()) as { checkoutUrl?: string; error?: string };
      if (!response.ok || !payload.checkoutUrl) {
        throw new Error(payload.error ?? `Checkout failed (${response.status})`);
      }
      window.location.href = payload.checkoutUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to open Stripe checkout.');
    } finally {
      setLoadingCheckout(false);
    }
  }

  async function exportPdf() {
    setLoadingPdf(true);
    setError(null);
    try {
      const response = await fetch('/api/vicious-audit/export-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reportId }),
      });
      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error ?? `PDF export failed (${response.status})`);
      }
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `vicious-web-audit-${reportId}.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to export PDF.');
    } finally {
      setLoadingPdf(false);
    }
  }

  return (
    <div className="mt-6 space-y-3">
      {error && (
        <div className="rounded-md border border-red-700/40 bg-red-900/20 p-3 text-sm text-red-200">
          {error}
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-3">
        {blurState ? (
          <button
            type="button"
            onClick={startCheckout}
            disabled={loadingCheckout}
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200 disabled:opacity-60"
          >
            {loadingCheckout ? 'Redirecting to Stripe...' : 'Unlock Full Report'}
          </button>
        ) : (
          <button
            type="button"
            onClick={exportPdf}
            disabled={loadingPdf}
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200 disabled:opacity-60"
          >
            {loadingPdf ? 'Generating PDF...' : 'Download Full PDF'}
          </button>
        )}
      </div>
    </div>
  );
}

