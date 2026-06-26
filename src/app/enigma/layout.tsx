'use client';

import { useEffect } from 'react';

export default function EnigmaLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return children;
}
