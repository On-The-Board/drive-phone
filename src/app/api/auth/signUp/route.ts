import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface UserParams {
    username: string,
    email: string,
    password: string
}

export async function POST(request: Request, { params }: { params: UserParams }) {
    if (!params.email || !params.password || !params.username)
        return NextResponse.error();
    if (!params.email.match(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm))
        return NextResponse.json({ error: 'Email invalide' });
    if (!await prisma.user.findFirst({ where: { email: params.email } }))
        return NextResponse.json({ error: 'Email déja utilisée' });
    const user = await prisma.user.create({
        data: {
            email: params.email,
            username: params.username,
            password: params.password
        }
    });
    return NextResponse.json(user);
}