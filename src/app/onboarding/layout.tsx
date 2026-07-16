import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Client Onboarding (Draft) | Endpoint Media' },
  description:
    'Draft client onboarding and contract package for Endpoint Media. DRAFT — REQUIRES SA ATTORNEY REVIEW. Not for public marketing launch.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
