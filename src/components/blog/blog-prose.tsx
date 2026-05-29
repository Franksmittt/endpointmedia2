import React from 'react';
import Link from 'next/link';

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold font-heading mt-10 mb-4 text-teal-700">{children}</h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-bold font-heading mt-8 mb-3 text-gray-900">{children}</h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return <p className="mb-4 text-lg text-gray-700 leading-relaxed">{children}</p>;
}

export function Lead({ children }: { children: React.ReactNode }) {
  return <p className="mb-6 text-xl font-semibold text-gray-900 leading-relaxed">{children}</p>;
}

export function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc list-inside mb-6 pl-4 space-y-2 text-gray-700">
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
    teal: 'bg-teal-50 border-teal-600',
    gray: 'bg-gray-50 border-gray-400',
    red: 'bg-red-50 border-red-600',
  };
  return (
    <div className={`rounded-xl p-6 mb-6 border-l-4 ${styles[variant]}`}>
      <h3 className="text-lg font-bold mb-3 font-heading text-gray-900">{title}</h3>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

export function InternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-teal-600 font-bold hover:underline">
      {children}
    </Link>
  );
}

export function CodeBlock({ code, title }: { code: string; title?: string }) {
  return (
    <div className="mb-6 rounded-lg overflow-hidden border border-gray-200">
      {title && (
        <div className="bg-gray-800 text-gray-300 text-sm px-4 py-2 font-mono">{title}</div>
      )}
      <pre className="bg-gray-900 text-green-400 p-4 overflow-x-auto text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
