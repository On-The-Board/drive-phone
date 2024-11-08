
import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function PATCH(request: Request) {
    const id = await request.json()
    const meetings = await prisma.order.update({
        where: {
            id: id
        },
        data: {
            status: "finalized"
        }
    });
    return NextResponse.json(meetings);
}

