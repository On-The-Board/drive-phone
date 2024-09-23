"use client"
import { use, useEffect, useState } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar/navbar"

if (typeof window === 'undefined') {
    console.log('The window object is not available in this environment.');
  } else {
    console.log(window.localStorage); // This will throw an error on the server side
  }

export default function Checkout(){
    const deviceId = window.localStorage.getItem("deviceId")
    // const fetchInfo = async() =>{
    //     const result = await 
    //     setDeviceId(result ? result : "")
    // }
    // useEffect(() => {
    //     fetchInfo()
    // }, [deviceId])

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