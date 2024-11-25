import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"

export async function PATCH(request: Request) {
    

        const body = await request.json();

        const res = await prisma.piece.update({
            where: {
                id: body.id
            },
            data: {
                name: body.name,
                category: body.category,
                price: body.price,
                stock: body.stock, 
            }})
            return NextResponse.json(res);
}