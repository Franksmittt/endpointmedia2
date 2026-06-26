'use client';

import { FormEvent, useState } from 'react';

export function EnigmaLoginForm() {
  const [enigmaId, setEnigmaId] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Backend authentication will be wired in a later phase.
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col space-y-4">
      <div className="w-full">
        <label htmlFor="enigma-id" className="sr-only">
          Enigma ID
        </label>
        <input
          id="enigma-id"
          type="text"
          placeholder="Enigma ID"
          value={enigmaId}
          onChange={(event) => setEnigmaId(event.target.value)}
          className="enigma-transition w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#F5F5F7] placeholder:text-[#86868B] focus:border-transparent focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0A84FF]/50"
          spellCheck={false}
          autoComplete="off"
        />
      </div>

      <div className="w-full">
        <label htmlFor="enigma-password" className="sr-only">
          Password
        </label>
        <input
          id="enigma-password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="enigma-transition w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[#F5F5F7] placeholder:text-[#86868B] focus:border-transparent focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#0A84FF]/50"
          spellCheck={false}
          autoComplete="off"
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="enigma-transition w-full rounded-full bg-white py-3 font-semibold text-black shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-[0.98]"
        >
          Sign In
        </button>
      </div>

      <div className="mt-4 flex w-full justify-center space-x-2 text-xs text-[#86868B]">
        <button type="button" className="enigma-transition hover:text-[#F5F5F7]">
          Forgot ID?
        </button>
        <span aria-hidden="true">|</span>
        <button type="button" className="enigma-transition hover:text-[#F5F5F7]">
          Create Node
        </button>
      </div>
    </form>
  );
}
