// my-app/app/api/increment-views/route.ts

import { NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(req: Request) {
  const { id } = await req.json();

  try {
    await client
      .patch(id)
      .setIfMissing({ views: 0 })
      .inc({ views: 1 })
      .commit();

    return NextResponse.json({ success: true });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
