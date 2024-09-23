"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar/navbar"

export default function Checkout(){
    const deviceId = localStorage.getItem("deviceId")
    interface iDevice {
        id: string
        brand_id: string
        name: string
        img: string
        description: string
    }
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
            <main className="h-screen pt-16">
                <div className="" id="service">
                    <div className="flex flex-row" id="device">
                        <img src={device.img} alt="" width={230} height={304}/>
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