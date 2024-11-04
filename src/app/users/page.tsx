import {Client} from "@/components/Client"
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar/navbar";
export default async function Clients(){
    const session = await getServerSession(authOptions)
    const userSession = await prisma.user.findUnique({
        where: {id: session?.user.id || "undefined"}
    })
    if(userSession?.role == "master"){
        return(
        
            <>
                <Navbar back={true}/>
                <main className="min-h-screen max-w-screen pt-5">
                    <Client/>
                </main>
            </>
        )
    }
    else{
        return(redirect("/"))
    }
}