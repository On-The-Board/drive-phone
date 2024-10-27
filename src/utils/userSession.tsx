
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Image from "next/image"
import { prisma } from "@/lib/prisma"

export async function userSession() {
    const session = await getServerSession(authOptions)
    const sessionId = session ? (session?.user.id):("undefined")
    const getSession = async () => {
        try{
            const data = await prisma.user.findUnique({
                where: {id: sessionId}
            })
            return data
        }
        catch (error) {
            throw error;
        }
    }
    const userSession = await getSession()
    return(userSession)
}