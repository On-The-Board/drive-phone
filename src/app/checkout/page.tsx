"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar/navbar"

export default function Checkout(){
    interface iDevice {
        id: string
        brand_id: string
        name: string
        img: string
        description: string
    }
    const [device, setDevice] = useState<iDevice>({id: "", brand_id: "", name: "", img: "", description: ""})
    const fetchDevice = async() => {
        const response = await fetch(`/api/devices/${device.id}`).then((response) => response.json())
        setDevice(response)
    }
    useEffect(() => {
        fetchDevice()
    }, [])
    return(
        <>
            <Navbar back={true}/>
            <main className="h-screen">
                <div className="" id="service">
                    <div className="flex flex-row" id="device">
                        <Image src={device.img} alt=""/>
                        <p></p>
                    </div>
                    <div className="flex flex-row" id="date">
                        <p></p>
                        <p></p>
                    </div>
                    <div className="flex flex-row" id="adress">
                        <p></p>
                        <p></p>
                    </div>
                    <div className="flex flex-row" id="pricing">
                        <p></p>
                        <p></p>
                    </div>
                </div>
                <div className="" id="user informations">
                    
                </div>
            </main>
        </>
    )
}