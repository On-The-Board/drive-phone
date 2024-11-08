"use client"

import { prisma } from "@/lib/prisma"
import { format } from "date-fns";
import { useEffect, useState } from "react"

interface iDevice {
    id: string
    brand_id: string
    name: string
    img: string
    description: string
}

export default function Orders(){
    const [meetings, setMeetings] = useState<any>([]);
    const getMeetings = async () => {
        const response = await fetch(`/api/orders`).then((response) => response.json());
        setMeetings(response);
    }
    useEffect(() => {
      getMeetings()
    }, [])

    const [selectedMeet, setSelectedMeet] = useState<any>("")
    const [device, setDevice] = useState<iDevice>({id: "", brand_id: "", name: "", img: "", description: ""})
    const selectMeet = async (meet: any) => {
        setSelectedMeet(meet)
        const response = await fetch(`/api/devices/${meet.phoneId}`).then((response) => response.json())
        setDevice(response)
    }
    return(
        <main className="min-h-screen text-black pt-16 lg:pt-24 lg:px-[20vw]">
            <div className={selectedMeet != "" ? "w-full h-[40vh] px-5 border-b border-b-black" : "hidden"}>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center">
                        <img src={device.img} alt=""  className="w-10"/>
                        <p className="ml-5">
                            {device.name}
                        </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <p className="">
                            {selectedMeet.status}
                        </p>
                        {selectedMeet.status == "in process" ? <div className="w-2 h-2 border rounded-full bg-orange-400 ml-5"/> : selectedMeet.status == "finalized" ? <div className="w-2 h-2 border rounded-full bg-green-500 ml-5"/> : selectedMeet.status == "aborted" ? <div className="w-2 h-2 border rounded-full bg-red-500 ml-5"/> : <div className="w-2 h-2 border rounded-full bg-gray-200 ml-5"/> }
                    </div>
                </div>
                <div className="pt-5 flex flex-row items-center">
                    <p>
                        {selectedMeet.name}
                    </p>
                    <p className="ml-5">
                        {selectedMeet.address} <br /> {selectedMeet.zipCode}, {selectedMeet.city}
                    </p>
                    <p className="ml-5">
                        {selectedMeet.phone}
                    </p>
                </div>
                <div className="pt-5 ">
                    <p>
                        Total : {selectedMeet.total} €
                    </p>

                </div>
            </div>
            <div>
                <ul className="">
                    {meetings.map((meet: any) => (
                        <li className="w-full border-b grid grid-cols-4 h-fit py-2 px-5" onClick={() => selectMeet(meet)}>
                            <div className="flex flex-col">
                                <p>
                                    {format(meet.date, "HH:mm")}
                                </p>
                                <p>
                                    {format(meet.date, "dd/MM")}
                                </p>
                            </div>
                            <div>
                                {meet.name}
                            </div>
                            <div>
                                {meet.phoneName}
                            </div>
                            <div className="content-center ml-auto">
                                {meet.status == "in process" ? <div className="w-2 h-2 border rounded-full bg-orange-400"/> : meet.status == "finalized" ? <div className="w-2 h-2 border rounded-full bg-green-500"/> : meet.status == "aborted" ? <div className="w-2 h-2 border rounded-full bg-red-500"/> : <div className="w-2 h-2 border rounded-full bg-gray-200"/> }
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}