"use client"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

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
    function searchClient(e){
        if(e.target.value.length > 0){
            setIencli(client.filter((el) => el.name.toLowerCase().includes(e.target.value.toLowerCase()) || el.phoneIds.toLowerCase().includes(e.target.value.toLowerCase()) || el.category.toLowerCase().includes(e.target.value.toLowerCase())))
        }else{
            setIencli(client)
        }
        refreshData()
    }
    return(
        <div className="text-black px-3 lg:px-36 pt-10 max-w-screen">
            <div className="flex flex-row w-full justify-between">
                <div className="flex w-full">
                    <input type="text"  placeholder="Rechercher..." className="w-full bg-white border-b border-b-black placeholder:text-black Shadow p-2" onChange={(e) => searchClient(e)}/>
                </div>
            </div>
            <div className="flex flex-col gap-5 Shadow mt-5 rounded-xl p-5">
                <ul>
                    <li className='my-2 flex  justify-between items-center'>
                        <div className="hidden lg:grid grid-cols-4 justify-between w-full">
                            <p>Nom</p>
                            <p>Fidélité</p>
                            <p>Téléphone</p>
                            <p>Email</p>
                        </div>
                    </li>
                    {iencli.map(c => (
                        <li className='my-2 flex  justify-between items-center border-b' onClick={() => document.getElementById(c.id).showModal()}>
                            <div className="flex flex-row lg:grid-cols-4 gap-y-2 lg:gap-y-0 justify-between w-full">
                                <p>{c.name}</p>
                                <p className="flex flex-row gap-2">{c.category}</p>
                                <p>{c.phoneIds}</p>
                                <p className="overflow-x-scroll">{c.price}€</p>
                            </div>
                            <dialog id={c.id} className="modal">
                                        <div className="modal-box bg-white gap-y-3 flex flex-col">
                                            <div className="w-full">
                                                <p className="w-full">Nom : <input type="text" defaultValue={c.name}className="w-fit bg-white"/></p>
                                            </div>
                                            <div className="w-full">
                                                <p className="w-full">Category : <input type="text" defaultValue={c.category} className="w-fit bg-white"/></p>
                                            </div>
                                            <div className="w-full">
                                                <p className="w-full">Telephones : <input type="text" defaultValue={c.phoneIds} className="w-fit bg-white"/></p>
                                            </div> 
                                            <div className="w-full">
                                                <p className="w-full inline-block">Prix : <input type="text" defaultValue={c.price} className="w-fit bg-white"/>€</p>
                                            </div>
                                            <div className="flex justify-end">
                                                <button className="btn btn-sm bg-petrole text-white hover:bg-white hover:border hover:border-petrole hover:text-petrole">Valider</button>
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