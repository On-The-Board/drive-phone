import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const response = await prisma.accesorie.findMany();
    return NextResponse.json(response);
}