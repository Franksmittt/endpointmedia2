'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEnigmaRoute = pathname?.startsWith('/enigma');

  if (isEnigmaRoute) {
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
