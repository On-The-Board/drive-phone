"use client"
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
        <>
            <img src={device.img} alt="" />
        </>
    )
}

export default Device