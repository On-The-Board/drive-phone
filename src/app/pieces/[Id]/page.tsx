"use client"
import Navbar from "@/components/navbar/navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { NextPage } from "next";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";


const Pieces: NextPage<any> = ({ params }: { params: { Id: string } }) => {
    interface iDevice {
        id: string
        brand_id: string
        name: string
        img: string
        description: string
    }
    const deviceId = params.Id
    const [device, setDevice] = useState<iDevice>({id: "", brand_id: "", name: "", img: "", description: ""})
    interface iPiece {
        id: string
        name:  string
        category:  string
        phoneIds:   string[]
        price:  number
        stock:  number
    }
    const [pieces, setPieces] = useState<any>([])
    const fetchDevice = async() => {
        const response = await fetch(`/api/devices/${deviceId}`).then((response) => response.json())
        const res = await fetch(`/api/pieces/${deviceId}`).then((response) => response.json())
        setDevice(response)
        console.log(res)
        setPieces(res)
    }
    useEffect(() => {
        fetchDevice()
    }, [])
    
    const piece = [
        {category: "Face avant", name: "Ecran", price: "163,79"},
        {category: "Face avant", name: "Caméra avant", price: "163,79"},
        {category: "Face avant", name: "Capteur Face ID", price: "163,79"},
        {category: "Face arrière", name: "Vitre arrière", price: "163,79"},
        {category: "Face arrière", name: "Caméra", price: "163,79"},
        {category: "Face arrière", name: "Flash", price: "163,79"},
        {category: "Contour", name: "Nettoyage Port Lightning", price: "163,79"},
        {category: "Contour", name: "Boutons Volume", price: "163,79"},
        {category: "Contour", name: "Boutons Marche/Arret", price: "163,79"},
        {category: "Contour", name: "Micro", price: "163,79"},
        {category: "Intérieur", name: "CPU (Processeur)", price: "163,79"},
        {category: "Intérieur", name: "Batterie", price: "163,79"},
        {category: "Intérieur", name: "Carte Mère", price: "163,79"},
        {category: "Intérieur", name: "Capteur GPS", price: "163,79"},
    ]
    const focus = [
        "Face avant",
        "Face arrière",
        "Contour",
        "Intérieur"
    ]

    const [view, setView] = useState(focus[0])
    return(
        <>
            <Navbar back={true}/>
            <main className="h-screen flex flex-col lg:flex-row lg:mx-[20vw]">
                { device.img == "" ? <div className="p-20 pb-16 pt-36 flex w-full items-center"><Skeleton className="w-[170px] h-[304px] mx-auto rounded-lg"/></div> : <div className="w-full lg:w-[70%] flex"><img src={device.img} alt=""  className="p-20 pb-16 pt-36 lg:w-[20vw] w-full lg:h-fit lg:mx-auto lg:self-center lg:pt-0"/></div>}
                <div className="flex flex-col w-full lg:flex-col lg:self-center lg:w-[30%]">
                    <div className="flex flex-row overflow-x-auto whitespace-nowrap w-full px-36 h-fit self-center">
                        {focus.map((title) => (
                            <p key={title} id={title} className={`text-black px-5 ${view == title ? "font-semibold justify-center" : "text-gray-500 text-sm"}`} onClick={() => {setView(title)}}>
                                {title}
                            </p>
                        ))}
                    </div>
                    <div className="text-black px-5 pt-5 overflow-auto h-fit pb-16 self-center lg:w-full w-full">
                        {pieces.filter((piece: iPiece) => piece.category == view).map((piece: iPiece) => (
                            <div className="flex flex-row border-b h-10 items-center justify-between" key={piece.name}>
                                <div>
                                    <p>{piece.name}</p>
                                </div>
                                <div className="flex flex-row">
                                    <p>{piece.price}€</p>
                                    <input type="checkbox" className="ml-2 accent-blue-600"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full flex justify-center items-center fixed bottom-16 left-0'>
                    <a href={`/calendar`} className="text-blue-600 self-center align-middle flex text-lg font-semibold">
                        <button>
                            Valider
                            <img src="/icons/arrow_left.png" alt="" />
                        </button>
                    </a>
                </div>
            </main>
        </>
    )
}

export default Pieces