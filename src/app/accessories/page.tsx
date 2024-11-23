"use client"

import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import magnifier from "@/icons/magnifier.svg";
import circle_cross from "@/icons/circle_cross.svg";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export default function Accessories() {
    const [search, setSearch] = useState("");
    const [pieces, setPieces] = useState([])
    const [iencli, setIencli] = useState([])
    const [devices, setDevices] = useState([])
    const getPieces = async () => {
        const response = await fetch(`/api/accessories`).then((response) => response.json());
        const res = await fetch("/api/devices").then((response) => response.json());
        setPieces(response);
        setIencli(response)
        setDevices(res)
    }
    useEffect(() => {
        getPieces()
    }, [])
    const router = useRouter();
    const refreshData = () => {
        router.refresh(router.asPathName)
    }
    const [value, setValue] = useState("")
    function searchClient(e: any){
        if(e.target.value.length > 0){
            setSearch(e.target.value)
            setIencli(pieces.filter((el: any) => el.name.toLowerCase().includes(e.target.value.toLowerCase().replaceAll(" ", "_")) || el.phoneIds[0].includes(e.target.value.toLowerCase().replaceAll(" ", "_")) || el.category.toLowerCase().includes(e.target.value.toLowerCase())))
        }else{
            setIencli(pieces)
        }
        refreshData()
    }
    return(
        <main className="text-black bg-white">
            <Navbar back={true}/>
            <div className="text-black px-3 lg:px-36 pt-16 lg:pt-24 max-w-screen">
                <div className="flex flex-row w-full justify-between">
                    <div className="relative h-12 lg:h-16 lg:mx-auto w-full lg:w-[60vw] lg:mt-12">
                        <input
                            onChange={(e) => searchClient(e)}
                            placeholder={"Rechercher ..."}
                            className="h-full w-full lg:max-w-[60vw] rounded-full bg-white border-2 shadow-md text-black p-5 pr-12 outline-none"
                        />
                        <Image
                            src={value ? circle_cross : magnifier}
                            alt="Search button"
                            className={`absolute right-1 h-12 w-12 top-0 lg:top-[15%] p-4 ${value ? "" : "pointer-events-none"}`}
                            onClick={value ? () => setValue("") : () => {}}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-5">
                    {iencli.map(c => (
                        <div>
                            <img src={c.img} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}