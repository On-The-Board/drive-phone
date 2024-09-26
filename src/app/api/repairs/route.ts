import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getToken } from "next-auth/jwt"


export async function GET(req: NextRequest) {
  const token = await getToken({ req });
  if (!token || !token.admin)
    return NextResponse.error();
  const result = await prisma.repair.findMany({
    orderBy: {
      id: "desc",
    },
  });
  if (!result) return NextResponse.json({}, { status: 500 });

  return NextResponse.json({ message: result });
}
