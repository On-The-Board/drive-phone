import Nodeposit from "@/components/noDeposit"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Page() {
    const session = await getServerSession(authOptions)
    const userSession = await prisma.user.findUnique({
        where: {id: session?.user.id || "undefined"}
    })
    if (userSession?.role == "master") {
    return(
        <>
            <Nodeposit/>
        </>
    )}
    else redirect("/")
}