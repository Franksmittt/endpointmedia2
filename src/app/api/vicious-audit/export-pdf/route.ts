import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

type PdfRequestBody = {
  reportId: string;
  fileName?: string;
};

export async function POST(request: NextRequest) {
  const contentType = request.headers.get('content-type') ?? '';
  if (!contentType.includes('application/json')) {
    return NextResponse.json({ error: 'Unsupported Media Type' }, { status: 415 });
  }

  let body: PdfRequestBody;
  try {
    body = (await request.json()) as PdfRequestBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  if (!body.reportId) {
    return NextResponse.json({ error: 'reportId is required.' }, { status: 400 });
  }

  try {
    const report = await prisma.auditReport.findUnique({
      where: { id: body.reportId },
    });
    if (!report) {
      return NextResponse.json({ error: 'Report not found.' }, { status: 404 });
    }
    if (report.blurState) {
      return NextResponse.json(
        { error: 'Report is locked. Unlock required before PDF export.' },
        { status: 403 }
      );
    }

    const reportData = report.rawAuditData as {
      auditedUrl?: string;
      summary?: { score?: number; criticalIssues?: number; warnings?: number };
      rawTechnicalEvidence?: Array<{ key: string; value: string }>;
    };
    const evidenceRows = (reportData.rawTechnicalEvidence ?? [])
      .map(
        (entry) =>
          `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:600;">${entry.key}</td><td style="padding:8px;border:1px solid #ddd;">${entry.value}</td></tr>`
      )
      .join('');

    const html = `<!doctype html>
<html>
  <head><meta charset="utf-8"/><title>Vicious Web Auditor Report</title></head>
  <body style="font-family:Arial,sans-serif;padding:24px;color:#111;">
    <h1 style="margin-bottom:4px;">Vicious Web Auditor - Full Diagnostics</h1>
    <p style="margin-top:0;color:#666;">Report ID: ${report.id}</p>
    <p><strong>Target URL:</strong> ${reportData.auditedUrl ?? report.targetUrl}</p>
    <p><strong>Score:</strong> ${reportData.summary?.score ?? '-'} / 100</p>
    <p><strong>Critical Issues:</strong> ${reportData.summary?.criticalIssues ?? '-'}</p>
    <p><strong>Warnings:</strong> ${reportData.summary?.warnings ?? '-'}</p>
    <h2 style="margin-top:24px;">Technical Evidence</h2>
    <table style="width:100%;border-collapse:collapse;font-size:12px;">
      <thead>
        <tr><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f7f7f7;">Key</th><th style="text-align:left;padding:8px;border:1px solid #ddd;background:#f7f7f7;">Value</th></tr>
      </thead>
      <tbody>${evidenceRows}</tbody>
    </table>
  </body>
</html>`;

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

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle' });
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: { top: '18px', right: '18px', bottom: '18px', left: '18px' },
    });
    await browser.close();

    const fileName = (body.fileName?.trim() || `vicious-web-audit-${report.id}`).replace(
      /[^a-z0-9\-_]/gi,
      '_'
    );
    return new Response(new Uint8Array(pdfBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}.pdf"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('PDF export failed:', error);
    return NextResponse.json(
      {
        error:
          'PDF export is unavailable in this runtime. Ensure chromium binary support in deployment.',
      },
      { status: 501 }
    );
  }
}

