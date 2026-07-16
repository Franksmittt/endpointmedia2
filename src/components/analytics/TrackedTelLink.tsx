'use client';

import React from 'react';
import { trackPhoneClick } from '@/lib/analytics';

type TrackedTelLinkProps = {
  href: string;
  phoneNumber: string;
  className?: string;
  children: React.ReactNode;
};

/** Anchor that fires the Google Ads phone conversion (when label is configured). */
export default function TrackedTelLink({
  href,
  phoneNumber,
  className,
  children,
}: TrackedTelLinkProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackPhoneClick(phoneNumber)}
    >
      {children}
    </a>
  );
}
