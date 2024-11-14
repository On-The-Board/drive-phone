import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"

export async function POST(request: Request) {
    

        const body = await request.json();
        const [id, name, category, phoneIds, price, stock] = body
        const res = await prisma.piece.update({
            where: {
                id: id
            },
            data: {
                name: name,
                category: category,
                phoneIds: phoneIds,
                price: price,
                stock: stock, 
            }})
            return NextResponse.json(res);
}