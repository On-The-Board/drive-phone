import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function DELETE(request: Request) {
    const id = await request.json()
    const orders = await prisma.order.delete({
        where: {
            id: id
        }
    });
    return NextResponse.json(orders);
}

