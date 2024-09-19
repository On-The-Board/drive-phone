import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const response = await prisma.device.findMany({
        take: 10,
        skip: Number(request.nextUrl.searchParams.get("page")) * 10
    });
    return NextResponse.json(response);
}