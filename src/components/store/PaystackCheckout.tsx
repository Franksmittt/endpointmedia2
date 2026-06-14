'use client';

import { useEffect, useMemo, useState } from 'react';
import type { ComponentType } from 'react';

type PaystackButtonProps = {
  publicKey: string;
  email: string;
  amount: number;
  currency: string;
  reference: string;
  disabled?: boolean;
  text?: string;
  className?: string;
  metadata?: Record<string, unknown>;
  onSuccess?: (response?: { reference?: string }) => void;
  onClose?: () => void;
};

type PaystackCheckoutProps = {
  productSlug: string;
  productName: string;
  amountZar: number;
  className?: string;
};

function zarToPaystackSubunit(amountZar: number): number {
  if (!Number.isSafeInteger(amountZar) || amountZar <= 0) {
    throw new Error('Paystack amount must be a positive whole-rand integer.');
  }

  const amount = amountZar * 100;
  if (!Number.isSafeInteger(amount)) {
    throw new Error('Paystack amount exceeds safe integer bounds.');
  }

  return amount;
}

function createReference(productSlug: string) {
  const randomValues = new Uint32Array(2);
  crypto.getRandomValues(randomValues);
  return `em_${productSlug}_${Date.now()}_${randomValues[0].toString(36)}${randomValues[1].toString(36)}`;
}

export function PaystackCheckout({
  productSlug,
  productName,
  amountZar,
  className,
}: PaystackCheckoutProps) {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [reference, setReference] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [PaystackButton, setPaystackButton] = useState<ComponentType<PaystackButtonProps> | null>(null);
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? '';
  const amount = useMemo(() => zarToPaystackSubunit(amountZar), [amountZar]);
  const trimmedEmail = email.trim();
  const isReady =
    PaystackButton !== null &&
    publicKey.length > 0 &&
    trimmedEmail.includes('@') &&
    reference.length > 0;

  useEffect(() => {
    setReference(createReference(productSlug));
  }, [productSlug]);

  useEffect(() => {
    let mounted = true;
    import('react-paystack').then((module) => {
      if (mounted) {
        setPaystackButton(() => module.PaystackButton as ComponentType<PaystackButtonProps>);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className={className}>
      <div className="space-y-3">
        <label className="block text-left text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
          Email for receipt
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@company.co.za"
            className="mt-2 w-full rounded-sm border border-zinc-800 bg-black px-3 py-2 text-sm normal-case tracking-normal text-zinc-100 placeholder:text-zinc-600"
          />
        </label>
        <label className="block text-left text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
          Name or company
          <input
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Optional"
            className="mt-2 w-full rounded-sm border border-zinc-800 bg-black px-3 py-2 text-sm normal-case tracking-normal text-zinc-100 placeholder:text-zinc-600"
          />
        </label>
      </div>

      {PaystackButton ? (
        <PaystackButton
          publicKey={publicKey}
          email={trimmedEmail}
          amount={amount}
          currency="ZAR"
          reference={reference}
          disabled={!isReady}
          text="Purchase Now"
          className="mt-4 inline-flex w-full items-center justify-center rounded-sm bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
          metadata={{
            productSlug,
            productName,
            amountZar,
            customerName: fullName.trim(),
            custom_fields: [
              {
                display_name: 'Product',
                variable_name: 'product_slug',
                value: productSlug,
              },
              {
                display_name: 'Customer Name',
                variable_name: 'customer_name',
                value: fullName.trim(),
              },
            ],
          }}
          onSuccess={(response) => {
            setStatus(`Payment initialized successfully. Reference: ${response?.reference ?? reference}`);
            setReference(createReference(productSlug));
          }}
          onClose={() => {
            setStatus('Checkout closed before payment completion.');
          }}
        />
      ) : (
        <button
          type="button"
          disabled
          className="mt-4 inline-flex w-full cursor-not-allowed items-center justify-center rounded-sm bg-white px-5 py-3 text-sm font-semibold text-black opacity-50"
        >
          Loading checkout...
        </button>
      )}

      {!publicKey && (
        <p className="mt-2 text-left text-xs text-red-300">
          Paystack public key is not configured.
        </p>
      )}
      {status && <p className="mt-2 text-left text-xs text-zinc-500">{status}</p>}
    </div>
  );
}
