import Navbar from "@/components/navbar/navbar"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { format, parseISO } from "date-fns"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
export default async function Compte() {
    const session = await getServerSession(authOptions)
    const userSession = await prisma.user.findUnique({
        where: {id: session?.user.id}
    })

    if(userSession?.role == "client"){
        return(
            <main className="min-h-screen bg-white text-black px-5 lg:px-36">
                <Navbar/>
                <h2 className="font-semibold text-2xl text-center pt-12">Mon Compte</h2>
                <div className="flex flex-col w-full lg:flex-row lg:gap-10 gap-5 mt-5 pb-12 lg:pb-0">
                    <div className="flex flex-col lg:w-[70%] w-full">
                        <h2 className="font-semibold text-xl">Mes rendez-vous</h2>
                    </div>
                    <div className="flex flex-col lg:w-[30%] w-full">
                        <h2 className="text-xl font-semibold">Mes Informations</h2>
                        <div className="flex flex-col rounded-lg Shadow p-8 mt-5 gap-y-3">
                            <div>
                                <p>Nom:</p>
                                <input type="text" name="" id="" className="w-full border rounded-lg p-3" defaultValue={userSession?.username}/>
                            </div>
                            <div>
                                <p>Email:</p>
                                <input type="text" className="w-full border rounded-lg p-3" defaultValue={userSession?.email} />
                            </div>
                            <div>
                                <p>Telephone:</p>
                                <input type="text" className="w-full border rounded-lg p-3" defaultValue={userSession?.phone}/>
                            </div>
                            <div className="self-end pt-2">
                                <button className="btn btn-sm bg-petrole text-white rounded-lg border border-petrole hover:border-petrole hover:bg-white hover:text-petrole">Valider</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
    if(userSession?.role == "master" || "employe"){
        return(
            redirect("/")
        )
    }
    return(
        redirect("/compte/connexion")
    )
}