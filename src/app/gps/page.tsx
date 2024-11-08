"use client"
import Navbar from "@/components/navbar/navbar";
import { useState } from "react";

export default function GPS(){
    const [address, setAddress] = useState("")
    const [zip, setZip] = useState("")
    const [town, setTown] = useState("")
    const [isIdentified, setIsIdentified] = useState(false)
    const Identify = async() => {
        if(address.length >= 2 && zip.length >= 2 && town.length > 2){
            setIsIdentified(true)
        }
        else{
            setIsIdentified(false)
        }
    }
    return (
        <main className="mt-16 max-h-screen h-full flex flex-col">
            <Navbar back={true}/>
            <div className="w-full px-5 pt-12 lg:pt-20 overflow-hidden text-black flex h-full my-auto">
                <div className="self-center lg:mx-auto ">
                    <div className="flex flex-col">
                        <label htmlFor="">Adresse</label>
                        <input type="text" className="bg-white border-b border-b-black" onBlur={() => Identify()} onChange={(e) => {localStorage.setItem("address", e.target.value); setAddress(e.target.value); Identify()}}/>
                    </div>   
                    <div className="flex flex-row gap-5 pt-8">
                        <div className="flex flex-col max-w-[40vw]">
                            <label htmlFor="">Code Postal</label>
                            <input type="number" className="bg-white border-b border-b-black" onBlur={() => Identify()} onChange={(e) => {localStorage.setItem("zipcode", e.target.value); setZip(e.target.value); Identify()}}/>
                        </div>
                        <div className="flex flex-col max-w-[40vw]">
                            <label htmlFor="">Ville</label>
                            <input type="text" className="bg-white border-b border-b-black" onBlur={() => Identify()} onChange={(e) => {localStorage.setItem("city", e.target.value); setTown(e.target.value); Identify()}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center fixed bottom-16 left-0'>
                <a href={`${isIdentified ? "/checkout" : ""}`} className={`${!isIdentified ? "text-gray-500 cursor-not-allowed self-center align-middle flex text-lg font-semibold" : "text-blue-600 self-center align-middle flex text-lg font-semibold"}`}>
                    <button>
                        Valider
                        <img src="/icons/arrow_left.png" alt="" />
                    </button>
                </a>
            </div>
        </main>
    )
}