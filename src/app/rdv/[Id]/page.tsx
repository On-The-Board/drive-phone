"use client"
import { ComboboxDemo } from "@/components/Combobox";
import { NextPage } from "next";
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
        <main className="h-screen flex flex-col">
            <img src={device.img} alt=""  className="p-20 pb-16 pt-36"/>
            <div className="px-12 text-black text-lg font-semibold grid grid-cols-3">
                <div className="col-start-1 col-end-2">
                    <p className="py-[1rem]">Model :</p>
                    <p className="py-[1rem]">Stockage :</p>
                    <p className="py-[1rem]">Couleur :</p>
                </div>
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
            </div>
            <a href={`/pieces/${deviceId}`} className="text-blue-600 self-center align-middle h-full flex text-lg font-semibold">
                <button>
                    Valider
                    <img src="/icons/arrow_left.png" alt="" />
                </button>
            </a>
        </main>
    )
}

export default Device