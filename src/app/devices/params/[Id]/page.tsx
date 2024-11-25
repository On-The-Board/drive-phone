"use client"
import { ComboboxDemo } from "@/components/Combobox";
import Navbar from "@/components/navbar/navbar";
import { Skeleton } from "@/components/ui/skeleton";
import phone from "@/icons/smartphone.png"
import { NextPage } from "next";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import * as Switch from "@radix-ui/react-switch";


const Device: NextPage<any> = ({ params }: { params: { Id: string } }) => {
    interface iDevice {
        id: string
        brand_id: string
        name: string
        img: string
        description: string
        active: boolean
    }
    interface UserProps {
        id: string,
        phone: string,
        email?: string,
        username: string,
        role: string,
      }
    const deviceId = params.Id
    const [device, setDevice] = useState<iDevice>({id: "", brand_id: "", name: "", img: "", description: "", active: true})
    const fetchDevice = async() => {
        const response = await fetch(`/api/devices/${deviceId}`).then((response) => response.json())
        setDevice(response)
    }
    useEffect(() => {
        fetchDevice()
    }, [])

    const [user, setUser] = useState<UserProps>()
    async function getUserSession() {
        const session = await getSession()
        const userSession = await fetch(`/api/user/${session?.user.id}`).then((response) => response.json())
        setUser(userSession)
    }
    useEffect(() => {
        getUserSession()
    }, [])

    
    const [active, setActive] = useState(device.active)
    
    const updateActive = async () => {
        let body = {
            id: device.id,
            brand_id: device.brand_id,
            description: device.description,
            name: device.name,
            img: device.img,
            active: active
        }
        try {
            await fetch(`/api/devices/activate`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body)
            })
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <>
            <Navbar back={true}/>
            <main className="h-screen flex flex-col lg:flex-row lg:mx-[20vw]">
                { device.img == "" ? <div className="p-20 pb-16 pt-36 flex w-full items-center"><Skeleton className="w-[170px] h-[304px] mx-auto rounded-lg"/></div> : <img src={device.img} alt=""  className="p-20 pb-16 pt-36 lg:w-[20vw] lg:h-fit lg:mx-auto lg:self-center lg:pt-0"/>}
                <div className="px-12 text-black text-lg font-semibold grid grid-cols-3 lg:self-center">
                    <div className="col-start-1 col-end-2">
                        <p className="py-[1rem]">Model :</p>                    </div>
                    {device.name == "" ? (
                        <div className="col-span-2">
                            <div className="py-[1rem]">
                                <Skeleton className="w-full h-[1.75rem]"/>
                            </div>
                        </div>
                    ): (
                        <div className="col-span-2">
                            <p className="py-[1rem]">{device.name}</p>
                        </div>
                    )}
                </div>

                <div className="w-full px-12 py-[1rem] flex items-center justify-between">
                    <label
                        className=" leading-none text-black font-semibold"
                        htmlFor="airplane-mode"
                    >
                        Afficher cet Appareil ?
                    </label>
                    <Switch.Root
                        className="relative h-[25px] w-[42px] cursor-default rounded-full bg-gray-600 self-center shadow-[0_2px_10px] shadow-blackA4 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-blue-600"
                        id="airplane-mode"
                        defaultChecked={device.active}
                        onClick={() => {setActive(!active); console.log(active)}}
                    >
                        <Switch.Thumb className="block size-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
                    </Switch.Root>
                </div>
                <div className='w-full flex justify-center items-center pt-16 fixed bottom-[5vh] left-0'>
                    <div className="text-blue-600 self-center align-middle flex text-lg font-semibold">
                        <button onClick={() => {updateActive()}}>
                            Valider
                        </button>
                    </div>
                </div>
            </main>
        </>
    )

}


export default Device