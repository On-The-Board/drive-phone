// import { prisma } from "@/lib/prisma";
import type { MapProps } from "@/components/MapCard";
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequestQuery } from "next/dist/server/api-utils";

export async function POST(req: NextRequest) {
  const body: MapProps = await req.json();
  if (!body)
    return NextResponse.error();

  const openRouteServiceRes = await fetch(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${process.env.OPEN_ROUTE_SERVICE_API}&start=${body.startPoint[0]},${body.startPoint[1]}&end=${body.endPoint[0]},${body.endPoint[1]}`);
  const openRouteServiceData = await openRouteServiceRes.json();

  let durationInSeconds = 3600;
  try {
    durationInSeconds = openRouteServiceData.features[0].properties.summary.duration;
  } catch(error) {}

  const durationInMinutes = Math.round(durationInSeconds / 60);

  return NextResponse.json({ message: durationInMinutes });
}
