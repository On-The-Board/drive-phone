import { prisma } from "../../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request, { params }: { params: { Id: string } }) {
    const id = params.Id;
    const device = await prisma.device.findUnique({
        where: {
            id
        }
    });
    return NextResponse.json(device);
}
