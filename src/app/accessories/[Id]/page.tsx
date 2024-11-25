"use client"
import Navbar from "@/components/navbar/navbar";
import { useEffect, useState } from "react";


export default function Piece({ params }: { params: { Id: string } }){
    interface iPiece {
        id: string
        name:  string
        category:  string
        phoneIds:   string[]
        price:  number
        stock:  number
        description: string
    }
    interface iDevice {
        id: string
        brand_id: string
        name: string
        img: string
        description: string
    }
    const [piece, setPiece] = useState<iPiece>({id: "", name: "", category: "", phoneIds: [], price: 0, stock: 0, description: ""})
    const [device, setDevice] = useState<iDevice>()
    const [pName, setPName] = useState<any>()
    const [pCategory, setPCategory] = useState<any>()
    const [pStock, setPStock] = useState<any>()
    const [pPrice, setPPrice] = useState<any>()
    const [p, setP] = useState<any>()
    const [ready, setReady] = useState(false)


    const fetchDevice = async() => {
        try {
            const res = await fetch(`/api/accessories/${params.Id}`)
            const p = await res.json()
            setPiece(p)
            const dev = await fetch(`/api/devices/${p.phoneId}`).then((response) => response.json())
            setDevice(dev)
            setPName(p.name)
            setPCategory(p.category)
            setPStock(p.stock)
            setPPrice(p.price)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchDevice()
    }, [])

    return(
        <main>
            <Navbar back={true}/>
            <div className="pt-16 lg:pt-24 lg:px-[20vw] text-black pb-[10vh] w-full">
                <img src={device?.img} alt=""  className="mx-auto"/>
                <p className="mx-auto text-center pt-5 text-lg font-semibold w-full">{piece.name + " " + device?.name}</p>
                <p className="px-5 pt-5">{piece.description}</p>
                <p className="px-5 pt-5">Prix : {piece.price}€</p>
            </div>
        </main>
    )
}

