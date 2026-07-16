/**
 * HTML → PDF using the same playwright-core + @sparticuz/chromium-min
 * pattern as /api/vicious-audit/export-pdf.
 */

import 'server-only';

import { createHash } from 'crypto';
import { mkdir, writeFile, readFile } from 'fs/promises';
import path from 'path';
import os from 'os';

export function sha256Hex(input: string | Buffer): string {
  return createHash('sha256').update(input).digest('hex');
}

export async function htmlToPdfBuffer(html: string): Promise<Buffer> {
  const [{ chromium }, chromiumPkg] = await Promise.all([
    import('playwright-core'),
    import('@sparticuz/chromium-min'),
  ]);

  const executablePath = await chromiumPkg.default.executablePath();
  const browser = await chromium.launch({
    args: chromiumPkg.default.args,
    executablePath,
    headless: true,
  });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle' });
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '16px', right: '16px', bottom: '16px', left: '16px' },
    });
    return Buffer.from(pdfBuffer);
  } finally {
    await browser.close();
  }
}

export type StoredPdf = {
  pdfUrl: string | null;
  pdfStorageKey: string;
};

/**
 * Prefer Vercel Blob when BLOB_READ_WRITE_TOKEN is set.
 * Else write under OS tmp / .data (local) and serve via authenticated PDF route.
 */
export async function storeOnboardingPdf(
  submissionId: string,
  pdf: Buffer,
): Promise<StoredPdf> {
  const blobToken = (process.env.BLOB_READ_WRITE_TOKEN ?? '').trim();
  const fileName = `onboarding/${submissionId}.pdf`;

  if (blobToken) {
    const { put } = await import('@vercel/blob');
    const result = await put(fileName, pdf, {
      access: 'public',
      contentType: 'application/pdf',
      token: blobToken,
      addRandomSuffix: false,
      allowOverwrite: true,
    });
    return { pdfUrl: result.url, pdfStorageKey: result.pathname };
  }

  const dir =
    process.env.ONBOARDING_PDF_DIR?.trim() ||
    path.join(process.cwd(), '.data', 'onboarding-pdfs');
  await mkdir(dir, { recursive: true });
  const localPath = path.join(dir, `${submissionId}.pdf`);
  await writeFile(localPath, pdf);

  // Also mirror into tmp for serverless cold paths that share the instance.
  try {
    const tmpPath = path.join(os.tmpdir(), `onboarding-${submissionId}.pdf`);
    await writeFile(tmpPath, pdf);
  } catch {
    // non-fatal
  }

  return { pdfUrl: null, pdfStorageKey: localPath };
}

export async function readStoredPdf(storageKey: string): Promise<Buffer | null> {
  try {
    return await readFile(storageKey);
  } catch {
    return null;
  }
}
