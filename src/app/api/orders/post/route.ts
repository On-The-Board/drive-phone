import { prisma } from "@/lib/prisma"
import { NextApiRequest, NextApiResponse } from "next"
import { NextResponse, NextRequest } from "next/server";
import { uuid } from "uuidv4";

export const POST = async(request: Request) => {

    //Create Post
    try {
        const body = await request.json();
        const { userId,
            name, 
            date,
            phone,
            phoneId,
            phoneName,
            piecesId,
            address,
            zipCode,
            city,
            status,
            total,
            subtotal} = body
        const id = uuid()

        const result = await prisma.order.create({
            data: {
                id,
                userId,
                name,
                date,
                phoneId,
                phone,
                phoneName,
                piecesId,
                address,
                city,
                zipCode,
                status,
                total,
                subtotal
            },
        })
        return NextResponse.json(result)
    } catch (err) {
        return NextResponse.json({message: "POST Error", err}, {status: 500})
    }

}