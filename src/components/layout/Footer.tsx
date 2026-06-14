import Link from 'next/link';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/people/Endpoint-Media/61583029051159/',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 9.5V7.5c0-.8.5-1.3 1.4-1.3h1.6V3h-2.1c-2.7 0-4 1.4-4 4.1v2.4H8v3h2.4V21h3.1v-8.5h2.4l.4-3h-2.8z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/frank-smittt',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.5 9H3.5V21H6.5V9ZM5 7.5C6 7.5 6.8 6.7 6.8 5.8 6.8 5 6 4.2 5 4.2s-1.7.8-1.7 1.6c0 .9.8 1.7 1.7 1.7ZM20.5 21H17.5V14.5c0-1.6-.7-2.5-1.9-2.5s-1.9.9-1.9 2.5V21h-3v-12h3v1.5c.6-1 1.6-1.8 3.2-1.8 2.2 0 3.6 1.5 3.6 4.3V21Z" />
      </svg>
    ),
  },
  {
    name: 'Google Business Profile',
    href: 'https://www.google.com/maps?cid=06180556288562610524',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 0 20c2.7 0 5-1 6.6-2.6l-2.2-2.1c-.9.8-2.1 1.3-3.4 1.3-3 0-5.5-2.4-5.5-5.5S9 7.6 12 7.6c1.3 0 2.3.4 3.1 1.1l-1.9 1.9h6.7v-6.5l-2.1 2.1C16.5 4.3 14.5 2 12 2Z" />
      </svg>
    ),
  },
];

const navigateLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Locations', href: '/locations' },
  { name: 'Process', href: '/process' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
];

const serviceLinks = [
  { name: 'Google Ads Management', href: '/services/google-ads' },
  { name: 'Local SEO & GBP', href: '/services/local-seo' },
  { name: 'Website Design', href: '/services/website-design-prices' },
  { name: 'Google Ads Pricing', href: '/services/google-ads-pricing' },
  { name: 'Conversion Optimization', href: '/services/conversion-rate-optimization' },
  { name: 'Facebook Ads', href: '/services/facebook-ads' },
];

const COPYRIGHT_YEAR = 2026;

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-black text-zinc-400">
      <div className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="Endpoint Media Homepage"
              className="inline-block text-lg font-bold tracking-tight text-white"
            >
              Endpoint<span className="text-zinc-500">.</span>
              <span className="ml-1 font-normal text-zinc-400">Media</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              Elite web architecture and revenue systems for Johannesburg service businesses.
              We engineer discoverability, acquisition, and conversion as one accountable stack.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-zinc-600">
              Johannesburg · South Africa
            </p>

            <div className="mt-6 flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-zinc-800 text-zinc-400 transition-colors hover:border-zinc-600 hover:text-white"
                  aria-label={`Visit our ${link.name} page`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navigateLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-600">Contact</p>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <p>
                <a href="tel:+27769724559" className="transition-colors hover:text-white">
                  076 972 4559
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@endpointmedia.co.za"
                  className="transition-colors hover:text-white"
                >
                  hello@endpointmedia.co.za
                </a>
              </p>
              <p className="text-zinc-500">Johannesburg, Gauteng · Remote-first</p>
            </address>

            <Link
              href="/#audit"
              className="mt-6 inline-flex items-center justify-center rounded-sm bg-white px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-zinc-200"
            >
              Free Growth Audit
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-zinc-800 pt-8 text-xs text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>&copy; {COPYRIGHT_YEAR} Endpoint Media. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy-policy" className="transition-colors hover:text-zinc-400">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-zinc-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
