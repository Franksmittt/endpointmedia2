import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you requested could not be found.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-black px-6 py-24 text-center text-zinc-300">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">404</p>
      <h1 className="mt-4 text-6xl font-bold tracking-tight text-white md:text-8xl">404</h1>
      <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-4xl">
        Broken Links Cost You Money.
      </h2>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
        You found a dead end. If this was your customer looking for your services, you just lost a
        sale. I am Frank Smit. I build websites that do not have dead ends. Let&apos;s fix your
        digital pipeline.
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-base font-semibold text-black transition-colors hover:bg-zinc-200"
        >
          Get A Website That Works
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-sm border border-zinc-700 px-8 py-4 text-base font-semibold text-zinc-100 transition-colors hover:bg-zinc-900"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
