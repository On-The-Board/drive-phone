import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request: Request, { params }: { params: { id: string } }) {
    const id = params.id;
    const device = await prisma.device.findUnique({
        where: {
            id
        }
    });
    return NextResponse.json(device);
}
