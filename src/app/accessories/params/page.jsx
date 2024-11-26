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
    function searchClient(e){
        if(e.target.value.length > 0){
            setSearch(e.target.value)
            setIencli(pieces.filter((el) => el.name.toLowerCase().includes(e.target.value.toLowerCase().replaceAll(" ", "_")) || el.phoneId.includes(e.target.value.toLowerCase().replaceAll(" ", "_"))))
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
                <div id="filters" className="w-full justify-between flex flex-row pt-10">
                <select name="" id="" className=" bg-white w-[30vw] rounded-full border-2 shadow-md text-sm p-2" onChange={e => {e.target.value == "" ? setIencli(pieces) : setIencli(pieces.filter(i => i.name == e.target.value))}}>
                    <option value="">Accessoire</option>
                    <option value="Coque">Coque</option>
                    <option value="Vitre Protection">Vitre Protection</option>
                    <option value="Chargeur">Chargeur</option>
                </select>
                <select name="" id="" className="mx-auto bg-white w-[25vw] rounded-full border-2 shadow-md text-sm p-2" onChange={e => {e.target.value == "" ? setIencli(pieces) : setIencli(pieces.filter(p => p.phoneId == e.target.value))}}>
                    <option value="">Model</option>
                    {devices.map(b => (
                        <option value={b.id}>{b.name}</option>
                    ))}
                </select>
                <a href="/accessories/params/add" className="rounded-full border-2 shadow-md w-10 h-10 content-center text-center text-xl">
                    +
                </a>
            </div>
                <div className="flex flex-col">
                <div className={ "flex flex-col gap-5 Shadow mt-5 rounded-xl p-5"}>
                <ul>
                    <li className='my-2 flex justify-between items-center'>
                        <div className="hidden lg:grid grid-cols-5 justify-between w-full border-b">
                            <p>Appareil</p>
                            <p>Nom</p>
                            <p>Categorie</p>
                            <p>Stock</p>
                            <p>Prix</p>
                        </div>
                    </li>
                    {iencli.map(c => (
                        <a href={`/accessories/params/${c.id}`} className='my-2 flex mt-5 justify-between items-center border-b' onClick={() => {setPname(c.name); setPcategory(c.category); setPprice(c.price); setPstock(c.stock); setPpId(c.phoneId)}}>
                            <div className="flex lg:grid lg:grid-cols-5 gap-y-2 gap-x-2 lg:gap-y-0 lg:justify-between w-full text-sm lg:text-base">
                                <p className="hidden lg:flex flex-row content-center"><img src={devices.filter((d) => d.id == c.phoneId).map((d) => d.img)} width={50} height={50} alt=""  className="flex w-5 mr-5 py-2"/>{devices.filter((d) => d.id == c.phoneId).map((d) => d.name)}</p>
                                <p className="hidden lg:flex content-center">{c.name}</p>
                                <p className="hidden lg:flex flex-row gap-2">{c.category}</p>
                                {c.stock <= 5 ? <p className="text-red-600 content-center hidden lg:flex">{c.stock} !</p> : <p className="hidden lg:flex">{c.stock}</p>}
                                <p className="overflow-x-scroll hidden lg:flex">{c.price}€</p>
                                <div className="lg:hidden">
                                    <img src={devices.filter((d) => d.id == c.phoneId).map((d) => d.img)} width={80} height={80} alt=""  className="flex w-10 mr-5 py-2"/>
                                </div>
                                <div className="lg:hidden flex flex-col text-start h-full">
                                    <p className="content-center w-[70vw]">{c.name + " "}<span className="text-blue-600"> {devices.filter((d) => d.id == c.phoneId).map((d) => d.name)}</span></p>
                                    <div className="flex flex-row gap-2 pt-1">
                                        {c.stock <= 5 ? <p className="bg-gray-200 rounded-sm text-xs p-0.5 text-red-600 content-center">stock: {c.stock}!</p> : <p className="bg-gray-200 rounded-sm text-xs p-0.5">stock: {c.stock}</p>}
                                        <p className="bg-gray-200 rounded-sm text-xs p-0.5">{c.price}€</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </ul>
            </div>
                </div>
            </div>
        </main>
    )
}