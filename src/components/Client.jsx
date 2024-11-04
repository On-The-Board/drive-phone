"use client"
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export function Client(){
    const [client, setClient] = useState([])
    const [iencli, setIencli] = useState([])
    const getClients = async () => {
        const response = await fetch(`/api/user/clients`).then((response) => response.json());
        setClient(response);
        setIencli(response)
    }
    useEffect(() => {
        getClients()
    }, [])
    const router = useRouter();
    const refreshData = () => {
        router.refresh(router.asPathName)
    }
    function searchClient(e){
        if(e.target.value.length > 0){
            setIencli(client.filter((el) => el.name.toLowerCase().includes(e.target.value.toLowerCase()) || el.email.toLowerCase().includes(e.target.value.toLowerCase()) || el.phone.toLowerCase().includes(e.target.value.toLowerCase())))
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
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-2 lg:gap-y-0 justify-between w-full">
                                <p>{c.username}</p>
                                <p className="flex flex-row gap-2">1 <span className="lg:hidden flex">passage(s)</span></p>
                                <p>{c.phone}</p>
                                <p className="overflow-x-scroll">{c.email}</p>
                            </div>
                            <dialog id={c.id} className="modal">
                                        <div className="modal-box bg-white gap-y-3 flex flex-col">
                                            <div className="w-full">
                                                <p className="w-full">Nom : <input type="text" defaultValue={c.username}className="w-full bg-white"/></p>
                                            </div>
                                            <div className="w-full">
                                                <p className="w-full">Email : <input type="text" defaultValue={c.email} className="w-full bg-white"/></p>
                                            </div>
                                            <div className="w-full">
                                                <p className="w-full">Tel : <input type="text" defaultValue={c.phone} className="w-full bg-white"/></p>
                                            </div> 
                                            <div className="w-full">
                                                <p className="w-full">Fideltité : <input type="text" defaultValue={c.fidelite} className="w-full bg-white"/></p>
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