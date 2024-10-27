import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function Orders() {
    const session = await getServerSession(authOptions)
    const userSession = await prisma.user.findUnique(
        {
            where : {id: session?.user.id}
        }
    )
    const orders = await prisma.order.findMany()

    if (userSession?.role == "master"){
        return(
            <main>
                <h1>Orders</h1>
                
            </main>
        )
    }
    else redirect("/")
}