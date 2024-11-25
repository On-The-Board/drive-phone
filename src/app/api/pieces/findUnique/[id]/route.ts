import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const pieces = await prisma.piece.findUnique({
        where:
        {
            id
        }
    });
    return NextResponse.json(pieces);
}

