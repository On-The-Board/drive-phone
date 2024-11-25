import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma";


export default async function updateActive(id, active){
    const res = await prisma.device.update({
        where:{id: id},
        data:{active: active}
    })
    return NextResponse.json({res})
}