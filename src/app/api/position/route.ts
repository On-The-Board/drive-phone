import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const result = await prisma.repair.findFirst({
    orderBy: {
      id: "desc",
    },
    select: {
      position: true,
    },
  });
  if (!result) return NextResponse.json({}, { status: 500 });

  return NextResponse.json({ message: result.position });
}
