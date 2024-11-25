import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request: Request, { params }: { params: { Id: string } }) {
    const id = params.Id;
    const device = await prisma.accesorie.findUnique({
        where: {
            id
        }
    });
    return NextResponse.json(device);
}
