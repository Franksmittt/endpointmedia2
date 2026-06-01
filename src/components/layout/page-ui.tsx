import Link from 'next/link';
import type { ReactNode } from 'react';

type Tone = 'black' | 'zinc';

const toneClass: Record<Tone, string> = {
  black: 'bg-black',
  zinc: 'bg-zinc-950',
};

/** Blue glow used on marketing heroes sitewide */
export function HeroGlow({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute left-1/2 top-0 z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-900/10 blur-[120px] ${className}`}
      aria-hidden
    />
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <div className="bg-black text-zinc-300">{children}</div>;
}

export function PageHero({
  kicker,
  title,
  description,
  note,
  primaryCta,
  secondaryCta,
  centered = true,
}: {
  kicker: string;
  title: string;
  description: string;
  note?: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  centered?: boolean;
}) {
  const alignClass = centered
    ? 'mx-auto flex max-w-5xl flex-col items-center text-center'
    : 'container mx-auto max-w-4xl';

  return (
    <section className="relative overflow-hidden bg-black px-[5%] pb-16 pt-24 md:pb-20 md:pt-28">
      <HeroGlow />
      <div className={`relative z-10 ${alignClass}`}>
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">{kicker}</p>
        <h1 className="mb-4 text-4xl font-bold leading-[1.05] tracking-[-2px] text-white md:text-6xl">
          {title}
        </h1>
        <p className="mb-4 max-w-3xl text-lg tracking-[-0.3px] text-[#A1A1AA] md:text-xl">{description}</p>
        {note ? <p className="mb-8 max-w-2xl text-base text-zinc-500">{note}</p> : null}
        <div className={`flex flex-col gap-3 sm:flex-row ${centered ? 'justify-center' : ''}`}>
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            {primaryCta.label}
          </Link>
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-8 py-4 text-base font-semibold text-zinc-100 transition-colors hover:bg-zinc-900"
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export function DarkBreadcrumb({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <nav className="border-b border-zinc-800 bg-black py-4" aria-label="Breadcrumb">
      <div className="container mx-auto px-6">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span className="text-zinc-700">/</span> : null}
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-zinc-300">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export function PageSection({
  tone = 'zinc',
  children,
  className = '',
}: {
  tone?: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`${toneClass[tone]} py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
}

export function PageIntro({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      {kicker ? (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{kicker}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-relaxed text-zinc-400">{description}</p> : null}
    </div>
  );
}

export function PageMetrics({
  items,
}: {
  items: Array<{ stat: string; label: string }>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-5 md:p-6">
          <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">{item.stat}</p>
          <p className="mt-2 text-sm leading-snug text-zinc-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export function PageCardGrid({
  items,
  columns = 2,
}: {
  items: Array<{ title: string; body: string; step?: string }>;
  columns?: 2 | 3;
}) {
  const gridClass = columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {items.map((item, index) => (
        <article key={item.title} className="rounded-sm border border-zinc-800 bg-black/40 p-6">
          {item.step ? (
            <p className="font-mono text-xs tracking-[0.18em] text-zinc-600">{item.step}</p>
          ) : (
            <p className="font-mono text-xs tracking-[0.18em] text-zinc-600">
              {String(index + 1).padStart(2, '0')}
            </p>
          )}
          <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

export function PageBulletGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="rounded-sm border border-zinc-800 bg-zinc-950/60 p-5">
          <p className="text-sm leading-relaxed text-zinc-300">{item}</p>
        </div>
      ))}
    </div>
  );
}

export function PageFaq({
  kicker,
  title,
  items,
}: {
  kicker?: string;
  title: string;
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <PageSection tone="black" className="scroll-mt-28">
      <div id="faq">
        <PageIntro kicker={kicker ?? 'FAQs'} title={title} />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {items.map((faq) => (
            <article
              key={faq.question}
              className="rounded-sm border border-zinc-800 bg-zinc-950/60 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </PageSection>
  );
}

export function PageCta({
  title,
  description,
  cta,
  secondaryCta,
}: {
  title: string;
  description: string;
  cta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <PageSection tone="black">
      <div className="rounded-sm border border-zinc-800 bg-zinc-950/70 p-8 text-center md:p-12">
        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={cta.href}
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            {cta.label}
          </Link>
          {secondaryCta ? (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-100 transition-colors hover:bg-zinc-900"
            >
              {secondaryCta.label}
            </Link>
          ) : null}
        </div>
      </div>
    </PageSection>
  );
}
