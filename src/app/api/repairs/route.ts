import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  req.text;
  const result = await prisma.repair.findMany({
    orderBy: {
      id: "desc",
    },
  });
  if (!result) return NextResponse.json({}, { status: 500 });

  return NextResponse.json({ message: result });
}
