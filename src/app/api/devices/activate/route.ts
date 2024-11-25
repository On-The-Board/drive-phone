import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"

export async function PUT(request: Request) {
        const body = await request.json();
        const [id, name, brand_id, description, img, active] = body
        const res = await prisma.device.updateMany({
            where: {
                id: id
            },
            data: {
                active
            }})
        return NextResponse.json(res);
}