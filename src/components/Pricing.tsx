import { prisma } from "@/lib/prisma"


export default async function Params(){
    const deposit = await prisma.data.findUnique({
        where:{id:"deposit"}
    })
    const workforce = await prisma.data.findUnique({
        where:{id:"workforce"}
    })

    return(
        <div className="w-full p-5 pt-12 lg:pt-20 text-black">
            <div className="flex flex-col text-xl font-semibold uppercase text-blue-600 content-center w-full">
                <p className="w-full flex justify-between pt-10">
                    <label htmlFor=""  className="">Main d'oeuvre :</label>
                    <span>
                        <input type="number" name="" id="" className="text-end bg-white w-10 outline-none" defaultValue={workforce?.decimal}/>
                        €
                    </span>
                </p>
                <p className="w-full flex justify-between pt-10">
                    <label htmlFor=""  className="">Accomptes :</label>
                    <span>
                        <input type="number" name="" id="" className="text-end bg-white w-10 outline-none" defaultValue={deposit?.num}/>
                        %
                    </span>
                </p>
            </div>
            <button className={`"bg-blue-600 text-white border-none rounded-lg h-10 w-24 fixed bottom-5 right-5"`}>Valider</button>
        </div>
    )
}