import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next"


export async function GET(request: Request) {
    const res = await prisma.user.findMany({
        where: {
            role: "client"
        }

    }
    );
    return NextResponse.json(res);
}

