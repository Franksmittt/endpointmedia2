import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'build/**',
      'coverage/**',
      'next-env.d.ts',
      'public/**',
      // CJS stub for tsx CLI (server-only mock) — not app code
      'scripts/mock-server-only.cjs',
    ],
  },
];

export default eslintConfig;
