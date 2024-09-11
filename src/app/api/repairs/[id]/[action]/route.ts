import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const result = await prisma.repair.findFirst({
    where: {
      id: params.id,
    },
  });
  if (!result) return NextResponse.json({}, { status: 500 });

  return NextResponse.json({ message: result.position });
}

enum Action {
  Delete = "delete",
  Toggle = "toggle",
}

interface Parameters {
  id: string;
  action: Action;
}

export async function POST(req: Request, { params }: { params: Parameters }) {
  switch (params.action) {
    case Action.Delete: {
      prisma.repair.delete({
        where: {
          id: params.id,
        },
      });
    }
    case Action.Toggle: {
      prisma.repair.update({
        where: {
          id: params.id,
        },
        data: {
          active: true,
        },
      });
    }
  }

  return NextResponse.json({}, { status: 200 });
}
