import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function DELETE(request: Request) {
    const body = await request.json();

    const {id} = body;
    const pieces = await prisma.accesorie.delete({
        where:
        {
            id
        }
    });
    return NextResponse.json(pieces);
}

