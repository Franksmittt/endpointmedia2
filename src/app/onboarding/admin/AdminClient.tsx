'use client';

import React from 'react';
import {
  adminListAction,
  adminMarkPaidAction,
  adminSuspendAction,
} from './actions';

type Lead = {
  id: string;
  entityName: string;
  signatoryEmail: string;
  status: string;
  serviceSelection: string;
  invoiceAmountZar: number | null | undefined;
  paymentReference: string | null | undefined;
  signedAt: string | null | undefined;
  paidAt: string | null | undefined;
  previewToken: string;
};

export default function AdminClient() {
  const [secret, setSecret] = React.useState('');
  const [leads, setLeads] = React.useState<Lead[]>([]);
  const [message, setMessage] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const load = async () => {
    setLoading(true);
    setError(null);
    setMessage(null);
    const result = await adminListAction(secret);
    setLoading(false);
    if (!result.ok) {
      setError(result.error);
      setLeads([]);
      return;
    }
    setLeads(result.leads);
    setMessage(`Loaded ${result.leads.length} submission(s). Secret stays in this session only.`);
  };

  return (
    <div className="space-y-8">
      <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-6">
        <p className="text-sm text-zinc-500">
          Enter <code className="text-zinc-300">CONTACT_ADMIN_SECRET</code> (server-validated — not
          bundled as NEXT_PUBLIC). Prefer curl in production if you do not want the secret in the
          browser at all.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            placeholder="CONTACT_ADMIN_SECRET"
            className="w-full rounded-sm border border-zinc-800 bg-black px-4 py-3 text-sm text-zinc-100 outline-none focus:border-zinc-500"
          />
          <button
            type="button"
            onClick={load}
            disabled={loading || !secret}
            className="rounded-sm bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-zinc-200 disabled:opacity-60"
          >
            {loading ? 'Loading…' : 'Load submissions'}
          </button>
        </div>
        {message && <p className="mt-3 text-sm text-emerald-300">{message}</p>}
        {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      </div>

      <ul className="space-y-4">
        {leads.map((lead) => (
          <li
            key={lead.id}
            className="rounded-sm border border-zinc-800 bg-zinc-950/50 p-5 text-sm text-zinc-400"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-lg font-semibold text-white">{lead.entityName}</p>
                <p className="font-mono text-xs text-zinc-600">{lead.id}</p>
                <p className="mt-1">
                  {lead.signatoryEmail} ·{' '}
                  <span className="text-zinc-200">{lead.status}</span> · {lead.serviceSelection || '—'}
                </p>
                <p className="mt-1">
                  Invoice: R{lead.invoiceAmountZar ?? '—'} · Ref:{' '}
                  <span className="font-mono text-zinc-200">{lead.paymentReference || '—'}</span>
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <a
                  href={`/onboarding/status/${lead.id}?token=${lead.previewToken}`}
                  className="text-xs text-zinc-300 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Client status
                </a>
                <button
                  type="button"
                  onClick={async () => {
                    setError(null);
                    try {
                      const res = await fetch(`/api/onboarding/${lead.id}/handoff`, {
                        headers: { Authorization: `Bearer ${secret}` },
                      });
                      if (!res.ok) {
                        const body = (await res.json().catch(() => null)) as {
                          error?: string;
                        } | null;
                        setError(body?.error || `Handoff failed (${res.status})`);
                        return;
                      }
                      const blob = await res.blob();
                      const cd = res.headers.get('Content-Disposition') || '';
                      const match = /filename="([^"]+)"/.exec(cd);
                      const filename = match?.[1] || `handoff-${lead.id}.zip`;
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = filename;
                      a.click();
                      URL.revokeObjectURL(url);
                      setMessage(`Downloaded handoff pack for ${lead.entityName}`);
                    } catch {
                      setError('Handoff download failed');
                    }
                  }}
                  className="rounded-sm border border-zinc-600 px-3 py-1.5 text-xs text-zinc-200 hover:bg-zinc-900"
                >
                  Handoff pack
                </button>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <form
                action={async (fd) => {
                  fd.set('secret', secret);
                  fd.set('id', lead.id);
                  const result = await adminMarkPaidAction(fd);
                  if (!result.ok) setError(result.error);
                  else {
                    setMessage(`Marked ${lead.entityName} → ${result.status}`);
                    await load();
                  }
                }}
                className="flex flex-wrap items-end gap-2"
              >
                <input
                  name="amountZar"
                  placeholder="Amount ZAR"
                  defaultValue={lead.invoiceAmountZar ?? ''}
                  className="w-28 rounded-sm border border-zinc-800 bg-black px-2 py-2 text-xs text-zinc-100"
                />
                <input
                  name="note"
                  placeholder="Note"
                  className="w-40 rounded-sm border border-zinc-800 bg-black px-2 py-2 text-xs text-zinc-100"
                />
                <button
                  type="submit"
                  className="rounded-sm bg-emerald-600 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-500"
                >
                  Mark EFT paid → active
                </button>
              </form>

              <form
                action={async (fd) => {
                  fd.set('secret', secret);
                  fd.set('id', lead.id);
                  const result = await adminSuspendAction(fd);
                  if (!result.ok) setError(result.error);
                  else {
                    setMessage(`Suspended ${lead.entityName}`);
                    await load();
                  }
                }}
                className="flex flex-wrap items-end gap-2"
              >
                <input
                  name="reason"
                  placeholder="Suspend reason"
                  className="w-40 rounded-sm border border-zinc-800 bg-black px-2 py-2 text-xs text-zinc-100"
                />
                <button
                  type="submit"
                  className="rounded-sm border border-red-800 px-3 py-2 text-xs text-red-300 hover:bg-red-950/40"
                >
                  Suspend
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
