"use client"
import Navbar from "@/components/navbar/navbar";
import { useEffect, useState } from "react";


export default function Piece({ params }){
    
    const [piece, setPiece] = useState({id: "", name: "", category: "", phoneIds: [], price: 0, stock: 0, description: ""})
    const [device, setDevice] = useState()
    const [pName, setPName] = useState()
    const [pCategory, setPCategory] = useState()
    const [pStock, setPStock] = useState()
    const [pPrice, setPPrice] = useState()
    const [pDescription, setPDescription] = useState()
    const [pId, setPId] = useState()
    const [ready, setReady] = useState(false)


    const fetchDevice = async() => {
        try {
            const res = await fetch(`/api/accessories/${params.Id}`)
            const p = await res.json()
            setPiece(p)
            const dev = await fetch(`/api/devices/${p.phoneId}`).then((response) => response.json())
            setDevice(dev)
            setPId(p.id)
            setPName(p.name)
            setPCategory(p.category)
            setPStock(p.stock)
            setPPrice(p.price)
            setPDescription(p.description)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchDevice()
    }, [])

    const updateAccessorie = async (id, price, stock, description, phoneId, img, name) => {
        let body = {
            id, price, stock, description, phoneId, img, name
        }

            await fetch(`/api/accessories/update`, {
                method: 'PATCH',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            })

        
    }

    const deletePiece = async (id) => {

        let body = {
            id
        }

        await fetch(`/api/accessories/delete`, {
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
                        <input type="text" defaultValue={piece?.name} onChange={e => setPName(e.target.value)} className="outline-none border-b border-b-black bg-white" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="text-sm">Model</label>
                        <input type="text" defaultValue={device?.name} className="outline-none border-b border-b-black bg-white" />
                    </div>
                    <div className="flex flex-col col-span-2 h-fit">
                        <label htmlFor="" className="text-sm">Description</label>
                        <input type="text" defaultValue={piece?.description} onChange={e => {setPDescription(e.target.value); setReady(true)}} className="outline-none border-b border-b-black bg-white"  />
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
                    <button disabled={!ready} onClick={() => updateAccessorie(piece.id, parseInt(pPrice), parseInt(pStock), pDescription, piece.phoneId, device.img, piece.name)}>
                        Valider
                    </button>
                </div>
            </div>
        </main>
    )
}

