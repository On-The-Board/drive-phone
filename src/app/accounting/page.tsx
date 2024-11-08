import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
//jsPDF utilise window, désactiver SSR pour résoudre window is not defined
import dynamic from "next/dynamic"
import Navbar from "@/components/navbar/navbar"
const ComptaNoSSR = dynamic(() => import("@/components/Compta"), {ssr: false})

export default async function Compta() {
    const session = await getServerSession(authOptions)
    const userSession = await prisma.user.findUnique({
        where: {id: session?.user.id}
    })
    if(userSession?.role == "master"){
        return(
            <>
                <Navbar back={true}/>
                <main className="px-5 lg:maxi-64 pt-12 lg:pt-20 text-black min-h-screen">
                    <h2 className="pt-12 text-2xl font-semibold text-center">Comptabilité</h2>
                    <ComptaNoSSR/>
                </main>
            </>
        ) 
    }
    else{
        return(redirect("/"))
    }
}