"use client"
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
    const fetchDevice = async() => {
        const response = await fetch(`/api/devices/${deviceId}`).then((response) => response.json())
        setDevice(response)
    }
    useEffect(() => {
        fetchDevice()
    }, [])
    const pieces = [
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
        <main className="h-screen flex flex-col">
            <img src={device.img} alt=""  className="p-20 pb-16 pt-36"/>
            <div className="flex flex-row overflow-x-auto whitespace-nowrap w-full px-36">
                {/* {focus.map((title) => (
                    <p className="text-black">
                        {focus[0]}
                    </p>
                ))} */}
                {focus.map((title) => (
                    <p id={title} className={`text-black px-5 ${view == title ? "font-semibold justify-center" : "text-gray-500 text-sm"}`} onClick={() => {setView(title)}}>
                        {title}
                    </p>
                ))}
            </div>
            <div className="text-black px-5 pt-5 overflow-auto h-40">
                {pieces.filter((piece) => piece.category == view).map((piece) => (
                    <div className="flex flex-row border-b h-10 items-center justify-between">
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
            <a href={`/calendar`} className="text-blue-600 self-center align-middle h-36 flex text-lg font-semibold">
                <button>
                    Valider
                    <img src="/icons/arrow_left.png" alt="" />
                </button>
            </a>
        </main>
    )
}

export default Pieces