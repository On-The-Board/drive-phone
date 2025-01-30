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
    const [deviced, setDeviced] = useState(false)
    if(!deviced){
        localStorage.setItem("deviceId", deviceId)
        setDeviced(true)
    }
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
        setPieces(res)
    }
    useEffect(() => {
        fetchDevice()
    }, [])
    
    const focus = [
        "Face avant",
        "Face arrière",
        "Contour",
        "Intérieur"
    ]

    const [view, setView] = useState(focus[0])
    const [selectedPieces, setSelectedPieces] = useState<any>([])
    const [prices, setPrices] = useState<any>([])
    const [ready, setReady] = useState(false)

    async function addPiece(piece: any) {
        if (selectedPieces.includes(piece.id)){
            const index = selectedPieces.indexOf(piece.id)
            selectedPieces.splice(index, 1)
            setSelectedPieces(selectedPieces)
            const indexPrice = prices.indexOf(piece.price)
            prices.splice(index, 1)
            setPrices(prices)
        }else {
            selectedPieces.push(piece.id)
            setSelectedPieces(selectedPieces)
            prices.push(piece.price)
            setPrices(prices)
        }
        selectedPieces.length > 0 ? setReady(true) : setReady(false)
    }
    return(
        <main className="h-screen overflow-hidden content-center">
            <Navbar back={true}/>
            <div className="flex flex-col lg:flex-row lg:mx-[20vw] my-auto">
                { device.img == "" ? <div className="p-20 pb-12 pt-16 flex w-full items-center"><Skeleton className="w-[170px] h-[304px] mx-auto rounded-lg"/></div> : <div className="w-full lg:w-[70%] flex"><img src={device.img} alt=""  className="p-20 pb-12 pt-16 w-80 lg:w-[20vw] mx-auto lg:h-fit lg:mx-auto lg:self-center lg:pt-0"/></div>}
                <div className="flex flex-col w-full lg:flex-col lg:self-center lg:w-[30%]">
                    <div className="flex flex-row pb-4 overflow-x-auto whitespace-nowrap w-full px-10 h-fit">
                        {/* {focus.map((title) => (
                            <p key={title} id={title} className={`text-black px-5 ${view == title ? "font-semibold justify-center" : "text-gray-500 text-sm"}`} onClick={() => {setView(title)}}>
                                {title}
                            </p>
                        ))} */}
                        <a href="tel:0761707524" className="text-blue-600 leading-3">Besoin d'aide ? <br /><span className="text-sm">Contactez nous au 07 61 70 75 24</span></a>
                    </div>
                    <div className="no-scrollbar text-black px-5 pt-5 overflow-scroll h-fit max-h-48 lg:max-h-fit pb-16 self-center lg:w-full w-full">
                        {pieces.filter((piece: iPiece) => piece).map((piece: iPiece) => (
                            <label htmlFor={piece.id} className="flex flex-row border-b h-10 items-center justify-between my-4" key={piece.name}>
                                <div>
                                    <p className="leading-5">{piece.name}</p>
                                </div>
                                <div className="flex flex-row">
                                    <p>{piece.price}€</p>
                                    <input type="checkbox" defaultChecked={selectedPieces.includes(piece.id) ? true : false} id={piece.id} className="ml-2 accent-blue-600" onChange={(e) => addPiece(piece)}/>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
                <div className='w-full flex justify-center items-center fixed bottom-[5vh] left-0'>
                    <a href={`/calendar`} className={`${ ready ? "text-blue-600 self-center align-middle flex text-lg font-semibold" : "text-gray-500 self-center align-middle flex text-lg font-semibold" }`}>
                        <button disabled={!ready} onClick={() => {localStorage.setItem("pieces", JSON.stringify(selectedPieces)); localStorage.setItem("prices", JSON.stringify(prices))}}>
                            Valider
                        </button>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Pieces