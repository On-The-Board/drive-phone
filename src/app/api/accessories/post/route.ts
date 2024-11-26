import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse, NextRequest } from "next/server";
import { v4 } from "uuid";

export const POST = async(request: Request) => {

    //Create Post
    try {
        const body = await request.json();
        const { name, price, stock, img, phoneId, description } = body
        const id = v4()

        const result = await prisma.accesorie.create({
            data: {
                id,
                name,
                phoneId,
                price,
                stock, 
                description,
                img
            },
        })
        return NextResponse.json(result)
    } catch (err) {
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }

}