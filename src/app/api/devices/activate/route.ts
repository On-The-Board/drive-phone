import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"

export async function PUT(request: Request) {
        const body = await request.json();

        const res = await prisma.device.updateMany({
            where: {
                id: body.id
            },
            data: {
                active: body.active
            }})
        return NextResponse.json(res);
}