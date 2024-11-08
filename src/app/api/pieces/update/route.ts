import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"

export const POST = async(request: Request) => {
    
    try{
        const body = await request.json();
        const [id, name, category, phoneIds, price, stock] = body
        const res = await prisma.piece.update({
            where: {id},
            data: {
                name,
                category,
                phoneIds,
                price,
                stock, 
            }})
            return NextResponse.json(res);
    } catch (err) {
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }
}