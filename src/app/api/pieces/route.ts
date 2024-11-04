import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request) {
    const pieces = await prisma.piece.findMany();
    return NextResponse.json(pieces);
}

