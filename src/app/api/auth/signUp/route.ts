import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import {uuid} from "uuidv4"

interface UserParams {
    username: string,
    email: string,
    password: string
    phone:      string
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
            id: uuid(),
            email: params.email,
            username: params.username,
            phone: params.phone,
            password: params.password
        }
    });
    return NextResponse.json(user);
}