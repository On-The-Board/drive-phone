import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import {hash} from "bcrypt"
import { uuid } from "uuidv4";
import { redirect } from "next/navigation";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {email, phone, username, password} = body;
        const hashedPass = await hash(password, 10)
        const id = uuid()
        const newUser = await prisma.user.create({
            data: {
                id,
                phone,
                username,
                email,
                password: hashedPass
            }
        })
        const { password: newUserPassword, ...rest} = newUser
        return (
            NextResponse.json({ user: rest, message: "Bv"}, {status: 201})
    )

    } catch (error) {
        return NextResponse.json({message: "POST Error", error}, {status: 500})
    }
}