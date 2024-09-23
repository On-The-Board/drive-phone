"use client"
import { use, useEffect, useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar/navbar"
import { format, parseISO } from "date-fns"

export default function Checkout(){
    interface iDevice {
        id: string
        brand_id: string
        name: string
        img: string
        description: string
    }
    const [device, setDevice] = useState<iDevice>({id: "", brand_id: "", name: "", img: "", description: ""})
    const [adress, setAdress] = useState("")
    const [date, setDate] = useState("")
    const fetchDevice = async() => {
        const deviceId = localStorage.getItem("deviceId")
        const adressRes = localStorage.getItem("adressRes") || ""
        const dateRes = localStorage.getItem("dateRes") || ""
        const response = await fetch(`/api/devices/${deviceId}`).then((response) => response.json())
        setDevice(response)
        setAdress(adressRes)
        setDate(dateRes)
    }
    useEffect(() => {
        fetchDevice()
    }, [])
    return(
        <>
            <Navbar back={true}/>
            <main className="h-screen pt-24 px-5 text-black">
                <div className="" id="service">
                    <div className="flex flex-row justify-between w-full text-center pb-3" id="device">
                        <img src={device.img} alt="" className="w-9 h-12"/>
                        <p className="text-center my-auto font-semibold">{device.name}</p>
                    </div>
                    <div className="flex flex-row py-3 justify-between" id="date">
                        <p className="font-semibold">Date</p>
                        <p>{date ? format(date, "dd MMMM, HH:mm") : null}</p>
                    </div>
                    <div className="flex flex-row py-3" id="adress">
                        <p className="font-semibold">Adresse</p>
                        <p></p>
                    </div>
                    <div className="flex flex-row py-3  border-b border-b-black" id="pricing">
                        <p className="font-semibold">Total</p>
                        <p></p>
                    </div>
                </div>
                <div className="" id="user informations">
                    
                </div>
            </main>
        </>
    )
}