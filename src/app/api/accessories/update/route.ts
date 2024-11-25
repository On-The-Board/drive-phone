
import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";




export async function PATCH(request: Request) {

    try{

        const body = await request.json()
        
        const meetings = await prisma.accesorie.update({
            where: {
                id: body.id,
            },
            data: {
                stock: body.stock,
                price: body.price,
                description: body.description,
                phoneId: body.phoneId,
                img: body.img,
                name: body.name,
            }
        });
        return NextResponse.json({ meetings});
    } catch(err){console.error(err)}
}

