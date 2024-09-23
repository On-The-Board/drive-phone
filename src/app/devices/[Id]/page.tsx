"use client"
import { ComboboxDemo } from "@/components/Combobox";
import Navbar from "@/components/navbar/navbar";
import { Skeleton } from "@/components/ui/skeleton";
import phone from "@/icons/smartphone.png"
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";



const Device: NextPage<any> = ({ params }: { params: { Id: string } }) => {
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
    return(
        <>
            <Navbar back={true}/>
            <main className="h-screen flex flex-col">
                { device.img == "" ? <div className="p-20 pb-16 pt-36 flex w-full items-center"><Skeleton className="w-[170px] h-[304px] mx-auto rounded-lg"/></div> : <img src={device.img} alt=""  className="p-20 pb-16 pt-36"/>}
                <div className="px-12 text-black text-lg font-semibold grid grid-cols-3">
                    <div className="col-start-1 col-end-2">
                        <p className="py-[1rem]">Model :</p>
                        <p className="py-[1rem]">Stockage :</p>
                        <p className="py-[1rem]">Couleur :</p>
                    </div>
                    {device.name == "" ? (
                        <div className="col-span-2">
                            <div className="py-[1rem]">
                                <Skeleton className="w-full h-[1.75rem]"/>
                            </div>
                            <div className="py-[1rem]">
                                <Skeleton className="w-full h-[1.75rem]"/>
                            </div>
                            <div className="py-[1rem]">
                                <Skeleton className="w-full h-[1.75rem]"/>
                            </div>
                        </div>
                    ): (
                        <div className="col-span-2">
                            <details className='flex flex-col collapse collapse-arrow'>
                                <summary className="font-medium collapse-title">{device.name}</summary>
                                <p className="text-sm lg:text-sm mx-2 collapse-content">
                                    Hello
                                </p>
                            </details>
                            <details className='flex flex-col collapse collapse-arrow'>
                                <summary className="font-medium collapse-title">128GB</summary>
                                <p className="text-sm lg:text-sm mx-2 collapse-content">
                                    Hello
                                </p>
                            </details>
                            <details className='flex flex-col collapse collapse-arrow'>
                                <summary className="font-medium collapse-title">Noir</summary>
                                <p className="text-sm lg:text-sm mx-2 collapse-content">
                                    Hello
                                </p>
                            </details>
                        </div>
                    )}
                </div>
                <div className='w-full flex justify-center items-center pt-16 fixed bottom-16 left-0'>
                    <a href={`/pieces/${deviceId}`} className="text-blue-600 self-center align-middle flex text-lg font-semibold">
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

export default Device