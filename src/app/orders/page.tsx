import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Orders from "@/components/Orders";


export default async function OrdersList() {
    const session = await getServerSession(authOptions)
    const userSession = await prisma.user.findUnique(
        {
            where : {id: session?.user.id}
        }
    )

    if (userSession?.role == "master"){
        return(
            <>
                <Orders/>
            </>
        )
    }
    else redirect("/")
}