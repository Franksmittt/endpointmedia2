'use client';

import { useEffect, useRef } from 'react';

const TARGET_TEXT = 'ENIGMA';
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const DURATION_MS = 1500;
const HOLD_MS = 5000;
const MIN_SCRAMBLE_MS = 300;
const POWER = 1.8;

function buildLockTimes(): number[] {
  const remaining = DURATION_MS - MIN_SCRAMBLE_MS;
  return TARGET_TEXT.split('').map((_, index) => {
    const x = index / (TARGET_TEXT.length - 1);
    return MIN_SCRAMBLE_MS + remaining * Math.pow(x, POWER);
  });
}

export function EnigmaCipherTitle() {
  const cipherRef = useRef<HTMLHeadingElement>(null);
  const lockTimesRef = useRef(buildLockTimes());

  useEffect(() => {
    const cipherEl = cipherRef.current;
    if (!cipherEl) return;

    let frameId = 0;
    let holdTimeoutId = 0;

    const playAnimationCycle = () => {
      let startTimestamp: number | null = null;

      const animateScramble = (timestamp: number) => {
        if (startTimestamp === null) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;

        let output = '';
        let allLocked = true;

        for (let i = 0; i < TARGET_TEXT.length; i += 1) {
          if (elapsed >= lockTimesRef.current[i]) {
            output += TARGET_TEXT[i];
          } else {
            allLocked = false;
            output += CHARS[Math.floor(Math.random() * CHARS.length)];
          }
        }

        cipherEl.textContent = output;

        if (allLocked || elapsed >= DURATION_MS) {
          cipherEl.textContent = TARGET_TEXT;
          holdTimeoutId = window.setTimeout(playAnimationCycle, HOLD_MS);
        } else {
          frameId = window.requestAnimationFrame(animateScramble);
        }
      };

      frameId = window.requestAnimationFrame(animateScramble);
    };

    frameId = window.requestAnimationFrame(playAnimationCycle);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(holdTimeoutId);
    };
  }, []);

  return (
    <h1
      ref={cipherRef}
      className="enigma-text-gradient w-full font-sans text-5xl font-black tracking-[0.2em]"
    >
      ENIGMA
    </h1>
  );
}
