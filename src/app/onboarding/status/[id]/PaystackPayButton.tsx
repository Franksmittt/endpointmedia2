'use client';

import React from 'react';

export default function PaystackPayButton({
  submissionId,
  token,
}: {
  submissionId: string;
  token: string;
}) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const start = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/onboarding/${submissionId}/paystack/initialize`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });
      const data = (await res.json()) as {
        error?: string;
        authorizationUrl?: string;
      };
      if (!res.ok || !data.authorizationUrl) {
        setError(data.error || `Paystack unavailable (${res.status})`);
        return;
      }
      window.location.href = data.authorizationUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={start}
        disabled={loading}
        className="rounded-sm bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200 disabled:opacity-60"
      >
        {loading ? 'Redirecting…' : 'Pay with Paystack'}
      </button>
      {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
    </div>
  );
}
