"use client"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import magnifier from "@/icons/magnifier.svg";
import circle_cross from "@/icons/circle_cross.svg";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export function Pieces(){
    const [pieces, setPieces] = useState([])
    const [iencli, setIencli] = useState([])
    const getPieces = async () => {
        const response = await fetch(`/api/pieces`).then((response) => response.json());
        setPieces(response);
        setIencli(response)
    }
    useEffect(() => {
        getPieces()
    }, [])
    const router = useRouter();
    const refreshData = () => {
        router.refresh(router.asPathName)
    }
    const [value, setValue] = useState("")
    function searchClient(e){
        if(e.target.value.length > 0){
            setIencli(pieces.filter((el) => el.name.toLowerCase().includes(e.target.value.toLowerCase()) || el.phoneIds.includes(e.target.value) || el.category.toLowerCase().includes(e.target.value.toLowerCase())))
        }else{
            setIencli(pieces)
        }
        refreshData()
    }

    const [Pname, setPname] = useState("")
    const [Pcategory, setPcategory] = useState("")
    const [Pprice, setPprice] = useState(0)
    const [Pstock, setPstock] = useState(0)

    const updateData = async (el) => {
        Pcategory == "" ? setPcategory(el.category) : null; 
        Pprice == 0 ? setPprice(el.price) : null; 
        Pname == "" ? setPname(el.name) : null;
        Pstock == 0 ? setPstock(el.stock) : null;
        let body = {
            id: el.id,
            name: Pname,
            category: Pcategory,
            phoneIds: [],
            price: Number(Pprice),
            stock: Number(Pstock)
        }
        try {
            await fetch(`/api/pieces/update`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            })
        }
        catch (err) {
            console.error(err)
        }
        setPname("")
        setPcategory("")
        setPprice(0)
        setPstock(0)
    }
    return(
        <div className="text-black px-3 lg:px-36 pt-16 lg:pt-24 max-w-screen">
            <div className="flex flex-row w-full justify-between">
            <div className="relative h-12 lg:h-16 lg:mx-auto w-full lg:w-[60vw] lg:mt-12">
                <input
                    onChange={(e) => searchClient(e)}
                    placeholder={"Rechercher ..."}
                    className="h-full w-full lg:max-w-[60vw] rounded-full bg-white border-2 shadow-md text-black p-5 pr-12 outline-none"
                />
                <Image
                    src={value ? circle_cross : magnifier}
                    alt="Search button"
                    className={`absolute right-1 h-12 w-12 top-0 lg:top-[15%] p-4 ${value ? "" : "pointer-events-none"}`}
                    onClick={value ? () => setValue("") : () => {}}
                />
                </div>
                {/* <div className="flex w-full">
                    <input type="text"  placeholder="Rechercher..." className="w-full bg-white border-b border-b-black placeholder:text-black Shadow p-2" onChange={(e) => searchClient(e)}/>
                </div> */}
            </div>
            <div className="flex flex-col gap-5 Shadow mt-5 rounded-xl p-5">
                <ul>
                    <li className='my-2 flex justify-between items-center'>
                        <div className="hidden lg:grid grid-cols-4 justify-between w-full border-b">
                            <p>Nom</p>
                            <p>Categorie</p>
                            <p>Stock</p>
                            <p>Prix</p>
                        </div>
                    </li>
                    {iencli.map(c => (
                        <li className='my-2 flex mt-5 justify-between items-center border-b' onClick={() => document.getElementById(c.id).showModal()}>
                            <div className="flex flex-row lg:grid lg:grid-cols-4 gap-y-2 lg:gap-y-0 justify-between w-full">
                                <p>{c.name}</p>
                                <p className="flex flex-row gap-2">{c.category}</p>
                                {c.stock <= 5 ? <p className="text-red-600">{c.stock} !</p> : <p>{c.stock}</p>}
                                <p className="overflow-x-scroll">{c.price}€</p>
                            </div>
                            <dialog id={c.id} className="modal">
                                        <div className="modal-box bg-white gap-y-3 flex flex-col">
                                            <div className="w-full">
                                                <p className="w-full">Nom : <input type="text" defaultValue={c.name}className="w-fit bg-white" onChange={(e) => setPname(e.target.value)}/></p>
                                            </div>
                                            <div className="w-full">
                                                <p className="w-full">Category : <input type="text" defaultValue={c.category} className="w-fit bg-white" onChange={(e) => setPcategory(e.target.value)}/></p>
                                            </div>
                                            <div className="w-full">
                                                <p className="w-full">Telephones : <input type="text" defaultValue={c.phoneIds} className="w-fit bg-white" onChange={(e) => setPcategory(e.target.value)}/></p>
                                            </div> 
                                            <div className="w-full">
                                                <p className="w-full inline-block">Prix : <input type="text" defaultValue={c.price} className="w-fit bg-white" onChange={(e) => setPprice(e.target.value)}/>€</p>
                                            </div>
                                            <div className="w-full">
                                                <p className="w-full inline-block">Stock : <input type="text" defaultValue={c.stock} className="w-fit bg-white" onChange={(e) => setPstock(e.target.value)}/></p>
                                            </div>
                                            <div className="flex justify-end">
                                                <button className="btn btn-sm bg-petrole text-white hover:bg-white hover:border hover:border-petrole hover:text-petrole" onClick={() => {updateData(c);}}>Valider</button>
                                            </div>
                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}