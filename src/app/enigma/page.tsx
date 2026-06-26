import type { Metadata } from 'next';
import { EnigmaCipherTitle } from '@/components/enigma/EnigmaCipherTitle';
import { EnigmaLoginForm } from '@/components/enigma/EnigmaLoginForm';
import { EnigmaParticleCanvas } from '@/components/enigma/EnigmaParticleCanvas';

export const metadata: Metadata = {
  title: { absolute: 'Enigma | Sign In' },
  description: 'Sign in to Enigma by Endpoint Media — the future of Google Ads.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnigmaSignInPage() {
  return (
    <div className="enigma-shell relative m-0 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,#111118_0%,#000000_100%)] text-[#F5F5F7] selection:bg-[#0A84FF] selection:text-white">
      <EnigmaParticleCanvas />

      <main className="z-10 mx-auto flex w-full max-w-sm flex-col items-center rounded-3xl border border-white/10 bg-white/[0.08] p-10 shadow-2xl backdrop-blur-2xl">
        <div className="mb-10 flex w-full flex-col items-center justify-center text-center">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#86868B]">Google Ads</p>
          <EnigmaCipherTitle />
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-[#86868B]">by Endpoint Media</p>
        </div>

        <EnigmaLoginForm />
      </main>

      <div className="pointer-events-none absolute bottom-8 z-10 flex w-full flex-col items-center justify-center space-y-2">
        <p className="text-sm font-medium tracking-wide text-white/70">The Future of Google Ads has arrived</p>
        <div className="flex justify-center space-x-6 text-xs tracking-wide text-[#86868B] opacity-60">
          <span>macOS Core</span>
          <span>Secure Enclave Active</span>
        </div>
      </div>
    </div>
  );
}
