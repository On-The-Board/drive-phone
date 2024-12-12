import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    const meetings = await prisma.order.findMany();
    return NextResponse.json(meetings);
}

