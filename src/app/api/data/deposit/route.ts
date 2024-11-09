import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const response = await prisma.data.findUnique({
        where: {id: "deposit"}
    });
    return NextResponse.json(response);
}