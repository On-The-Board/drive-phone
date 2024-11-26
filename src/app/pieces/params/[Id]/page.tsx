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
    }
    interface iDevice {
        id: string
        brand_id: string
        name: string
        img: string
        description: string
    }
    const [piece, setPiece] = useState<iPiece>({id: "", name: "", category: "", phoneIds: [], price: 0, stock: 0})
    const [device, setDevice] = useState<iDevice>()
    const [pName, setPName] = useState<any>()
    const [pCategory, setPCategory] = useState<any>()
    const [pStock, setPStock] = useState<any>()
    const [pPrice, setPPrice] = useState<any>()
    const [p, setP] = useState<any>()
    const [ready, setReady] = useState(false)


    const fetchDevice = async() => {
        try {
            const res = await fetch(`/api/pieces/findUnique/${params.Id}`)
            const p = await res.json()
            setPiece(p)
            const dev = await fetch(`/api/devices/${p.phoneIds}`).then((response) => response.json())
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

    const updatePiece = async (id: any, price: any, stock: any, name: any, category: any) => {
        let body = {
            id, price, stock, name
        }

            await fetch(`/api/pieces/update`, {
                method: 'PATCH',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            })

        
    }

    const deletePiece = async (id:any) => {
        let body = {id}

        await fetch(`/api/pieces/delete`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(body)
        })
    }

    return(
        <main>
            <Navbar back={true}/>
            <div className="pt-16 lg:pt-24 lg:px-[20vw] text-black pb-[10vh]">
                <img src={device?.img} alt=""  className="mx-auto"/>
                <div className="grid grid-cols-2 pt-10 gap-4 lg:gap-10 p-5">
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm">Nom</label>
                        <input type="text" defaultValue={piece?.name} onChange={e => {setPName(e.target.value); setReady(true)}} className="outline-none border-b border-b-black bg-white" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm">Model</label>
                        <input type="text" defaultValue={device?.name} className="outline-none border-b border-b-black bg-white" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm">Catégorie</label>
                        <input type="text" defaultValue={piece?.category} onChange={e => {setPCategory(e.target.value); setReady(true)}} className="outline-none border-b border-b-black bg-white" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm">Stock</label>
                        <input type="text" defaultValue={piece?.stock} onChange={e => {setPStock(e.target.value); setReady(true)}} className={`${piece.stock >= 5 ? "outline-none border-b border-b-black bg-white" : "outline-none border-b border-b-black bg-white text-red-600"}`} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm">Prix (€)</label>
                        <input type="text" defaultValue={piece?.price} onChange={e => {setPPrice(e.target.value); setReady(true)}} className="outline-none border-b border-b-black bg-white"  />
                    </div>
                </div>
            </div>
            <div className="w-full flex">
                <button className="text-red-600 text-lg font-semibold mx-auto " onClick={() => deletePiece(piece?.id)}>
                    Supprimer
                </button>
            </div>
            <div className='w-full flex justify-center items-center fixed bottom-[5vh] left-0 bg-white'>
                <div className={`${ ready ? "text-blue-600 self-center align-middle flex text-lg font-semibold" : "text-gray-500 self-center align-middle flex text-lg font-semibold" }`}>
                    <button disabled={!ready} onClick={() => updatePiece(piece.id, parseInt(pPrice), parseInt(pStock), pName, pCategory)}>
                        Valider
                    </button>
                </div>
            </div>
        </main>
    )
}

