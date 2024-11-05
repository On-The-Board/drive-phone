import Navbar from "@/components/navbar/navbar";
import Params from "@/components/params";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Settings() {
    const session = await getServerSession(authOptions)
    const userSession = await prisma.user.findUnique({
        where: {id: session?.user.id || "undefined"}
    })
    if (userSession?.role == "master") {
        return (
            <main>
                <Navbar back={true}/>
                <section className="h-screen">
                    <Params/>
                </section>
            </main>
        )
    }
    else redirect("/")
}