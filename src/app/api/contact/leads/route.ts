import 'server-only';

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

/**
 * GET /api/contact/leads
 * Authorization: Bearer <CONTACT_ADMIN_SECRET>
 * Returns the 50 most recent contact/audit leads so you can verify capture
 * even when inbox delivery fails.
 */
export async function GET(request: NextRequest) {
  const secret = (process.env.CONTACT_ADMIN_SECRET ?? '').trim();
  if (!secret) {
    return NextResponse.json(
      { error: 'CONTACT_ADMIN_SECRET is not configured' },
      { status: 503 }
    );
  }

  const auth = request.headers.get('authorization') ?? '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
  if (!token || token !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const leads = await prisma.contactLead.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        message: true,
        source: true,
        emailStatus: true,
        resendId: true,
        emailError: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ count: leads.length, leads });
  } catch (error) {
    console.error('Contact leads fetch failed:', error);
    return NextResponse.json(
      { error: 'Failed to load leads. Has the ContactLead migration been applied?' },
      { status: 500 }
    );
  }
}
