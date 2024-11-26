
import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";




export async function PATCH(request: Request) {

    try{

        const body = await request.json()
        
        const meetings = await prisma.data.update({
            where: {
                id: "deposit",
            },
            data: {
                num: body.deposit
            }
        });
        return NextResponse.json({ meetings});
    } catch(err){console.error(err)}
}

