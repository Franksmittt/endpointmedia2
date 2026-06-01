// src/components/seo/InternalLinks.tsx
import React from 'react';
import Link from 'next/link';

interface InternalLink {
  href: string;
  title: string;
  description?: string;
}

interface InternalLinksProps {
  links: InternalLink[];
  title?: string;
  variant?: 'default' | 'compact' | 'sidebar';
  theme?: 'light' | 'dark';
}

/**
 * Internal Links Component for Strategic SEO Linking
 * Implements pillar-cluster model for topical authority
 */
const InternalLinks: React.FC<InternalLinksProps> = ({
  links,
  title = 'Related Content',
  variant = 'default',
  theme = 'dark',
}) => {
  const isDark = theme === 'dark';

  if (variant === 'compact') {
    return (
      <div className={`mt-12 pt-8 ${isDark ? '' : 'border-t border-zinc-800'}`}>
        <h3
          className={
            isDark
              ? 'mb-4 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500'
              : 'mb-4 font-heading text-lg font-bold text-white'
          }
        >
          {title}
        </h3>
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  isDark
                    ? 'text-sm text-zinc-300 transition-colors hover:text-white'
                    : 'text-sm font-semibold text-teal-600 transition duration-300 hover:text-white hover:underline'
                }
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <aside
        className={
          isDark
            ? 'rounded-sm border border-zinc-800 bg-zinc-950/60 p-6'
            : 'rounded-xl border-l-4 border-teal-600 bg-zinc-950/70 p-6'
        }
      >
        <h3
          className={
            isDark
              ? 'mb-4 font-mono text-xs uppercase tracking-[0.18em] text-zinc-500'
              : 'mb-4 font-heading text-xl font-bold text-white'
          }
        >
          {title}
        </h3>
        <ul className={isDark ? 'space-y-3' : 'space-y-3'}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  isDark
                    ? 'block font-medium text-zinc-200 transition-colors hover:text-white'
                    : 'block font-semibold text-teal-600 transition duration-300 hover:text-white hover:underline'
                }
              >
                {link.title}
              </Link>
              {link.description ? (
                <p className={`mt-1 text-sm ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{link.description}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  if (isDark) {
    return (
      <section>
        <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">{title}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group block rounded-sm border border-zinc-800 bg-black/40 p-5 transition-colors hover:border-zinc-600"
            >
              <h3 className="text-base font-semibold text-white group-hover:text-zinc-100">{link.title}</h3>
              {link.description ? (
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{link.description}</p>
              ) : null}
              <span className="mt-3 inline-block text-sm text-zinc-400 group-hover:text-white">Read more →</span>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mt-16 rounded-xl border-t-2 border-zinc-800 bg-zinc-950/70 p-8 pt-12">
      <h2 className="mb-6 font-heading text-2xl font-bold text-white md:text-3xl">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group block rounded-sm border border-zinc-800 bg-zinc-950/70 p-6 transition duration-300 hover:border-teal-400/70"
          >
            <h3 className="mb-2 font-heading text-lg font-bold text-white transition group-hover:text-white">
              {link.title}
            </h3>
            {link.description ? (
              <p className="text-sm leading-relaxed text-zinc-500">{link.description}</p>
            ) : null}
            <span className="mt-2 inline-flex items-center text-sm font-semibold text-teal-400/90 group-hover:underline">
              Read More →
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default InternalLinks;
