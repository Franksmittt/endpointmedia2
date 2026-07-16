'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideMarketingChrome =
    pathname?.startsWith('/enigma') || pathname?.startsWith('/onboarding');

  if (hideMarketingChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
