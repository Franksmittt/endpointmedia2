"use client";

import type { ReactNode } from 'react';
import { trackWhatsAppClick } from '@/lib/analytics';

type ContactWhatsAppLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function ContactWhatsAppLink({
  href,
  children,
  className,
}: ContactWhatsAppLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('+27769724559')}
      className={className}
    >
      {children}
    </a>
  );
}
