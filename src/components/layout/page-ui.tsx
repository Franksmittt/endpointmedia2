import Link from 'next/link';
import type { ReactNode } from 'react';

type Tone = 'black' | 'zinc';

const toneClass: Record<Tone, string> = {
  black: 'bg-black',
  zinc: 'bg-zinc-950',
};

export function PageHero({
  kicker,
  title,
  description,
  note,
  primaryCta,
  secondaryCta,
}: {
  kicker: string;
  title: string;
  description: string;
  note?: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="bg-black px-6 pb-16 pt-32 md:pb-20 md:pt-36">
      <div className="container mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">{kicker}</p>
        <h1 className="mt-4 text-4xl font-bold leading-[1.06] tracking-[-1px] text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">{description}</p>
        {note ? <p className="mt-4 text-sm text-zinc-500">{note}</p> : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
          >
            {primaryCta.label}
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
    </section>
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
        <div className="space-y-3">
          {items.map((faq) => (
            <details key={faq.question} className="group rounded-sm border border-zinc-800 bg-zinc-950/60 p-5 md:p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-white md:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="shrink-0 text-zinc-500 transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 md:text-base">{faq.answer}</p>
            </details>
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
}: {
  title: string;
  description: string;
  cta: { href: string; label: string };
}) {
  return (
    <PageSection tone="zinc">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">{description}</p>
        <Link
          href={cta.href}
          className="mt-8 inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
        >
          {cta.label}
        </Link>
      </div>
    </PageSection>
  );
}
