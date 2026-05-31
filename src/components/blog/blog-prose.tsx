import React from 'react';
import Link from 'next/link';

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-4 mt-10 text-2xl font-bold text-white">{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-3 mt-8 text-xl font-semibold text-zinc-100">{children}</h3>;
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-lg leading-relaxed text-zinc-400">{children}</p>;
}

export function Lead({ children }: { children: React.ReactNode }) {
  return <p className="mb-6 text-xl font-semibold leading-relaxed text-zinc-200">{children}</p>;
}

export function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mb-6 list-inside list-disc space-y-2 pl-4 text-zinc-400">
      {items.map((item, i) => (
        <li key={i} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Callout({
  title,
  children,
  variant = 'teal',
}: {
  title: string;
  children: React.ReactNode;
  variant?: 'teal' | 'gray' | 'red';
}) {
  const styles = {
    teal: 'border-zinc-600 bg-zinc-950/80',
    gray: 'border-zinc-700 bg-black/40',
    red: 'border-red-800/50 bg-red-950/20',
  };
  return (
    <div className={`mb-6 rounded-sm border-l-4 p-6 ${styles[variant]}`}>
      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
      <div className="text-zinc-400">{children}</div>
    </div>
  );
}

export function InternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-zinc-200 underline-offset-4 hover:text-white hover:underline">
      {children}
    </Link>
  );
}

export function CodeBlock({ code, title }: { code: string; title?: string }) {
  return (
    <div className="mb-6 overflow-hidden rounded-sm border border-zinc-800">
      {title && <div className="bg-zinc-900 px-4 py-2 font-mono text-sm text-zinc-400">{title}</div>}
      <pre className="overflow-x-auto bg-black p-4 text-sm leading-relaxed text-emerald-400">
        <code>{code}</code>
      </pre>
    </div>
  );
}
