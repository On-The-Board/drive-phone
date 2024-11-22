"use client"
import * as React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { PrismaClient } from "@prisma/client"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Search from "@/components/searchbar"
import Navbar from "@/components/navbar/navbar"

export default function Devices () {
    const [search, setSearch] = useState("");
    const [splited, setSplited] = useState([])
    const [data, setData] = useState<any>([])
    const basic = [
        "apple_iphone_15_pro-12557",
        "apple_iphone_11-9848",
        "apple_iphone_12-10509",
        "xiaomi_redmi_note_12_pro-11955",
        "samsung_galaxy_s20-10081",
        "google_pixel_9_pro-13218"
        
    ]

    const fetchData = async () => {
        const result = await fetch(`/api/devices`).then((response) => response.json());
        setData(result)
    }
    useEffect(() => {
        fetchData()
    }, [])

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
    const tab = ["https://images.daisycon.io/mobile-device/?width=2000&height=2000&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+14+128gb&mobile_device_color=silver", "https://images.daisycon.io/mobile-device/?width=2000&height=2000&color=ffffff&mobile_device_brand=google&mobile_device_model=pixel+7+128gb&mobile_device_color=silver", "https://images.daisycon.io/mobile-device/?width=2000&height=2000&color=ffffff&mobile_device_brand=samsung&mobile_device_model=galaxy+s20+ultra+128gb&mobile_device_color=silver"]
    return(
        <>
            <Navbar back={true}/>
            <main className="bg-white flex flex-col justify-center pt-16 px-5">
                <Search value={search} setValue={setSearch} setValue2={setSplited} placeholder="Rechercher un SmartPhone"/>
                <div className={`grid grid-cols-2 lg:grid-cols-3 justify-center pt-8 lg:mx-[20vw] ${search == "" ? "" : null}`}>
                    {search != "" ? data.filter((device: any) => splited.length == 2 ? (device.id.includes(splited[0]) && device.id.includes(splited[1])) : device.id.includes(search.replaceAll(" ", "_").toLowerCase())).map((device: any) => (
                       <a className="text-black justify-center flex flex-col p-8" href={`/pieces/${device.id}`}>
                            <img src={device.img} alt={device.name} className="lg:w-56 lg:mx-auto"/>
                            <h2 className="text-center pt-5">{device.name}</h2>
                        </a>
                    )) : data.filter((device: any) => (device.id.includes(basic[0]) || device.id.includes(basic[1]) || device.id.includes(basic[2]) || device.id.includes(basic[3]) || device.id.includes(basic[4]) || device.id.includes(basic[5]))).map((device: any) => (
                        <a className="text-black justify-center flex flex-col p-8" href={`/pieces/${device.id}`}>
                             <img src={device.img} alt={device.name} className="lg:w-56 lg:mx-auto"/>
                             <h2 className="text-center pt-5">{device.name}</h2>
                         </a>
                     ))}
                </div>
                {/* <Carousel
                    plugins={[plugin.current]}
                    className={`w-full max-w-xs lg:max-w-[30vw] self-center h-full pt-40 ${search != "" ? " transition delay-200 hidden" : null}`}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    >
                    <CarouselContent>
                        {Array.from({ length: 3 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center ">
                                    <Image src={tab[index]} alt="phone" width={2000} height={2000} className="w-full"/>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel> */}
            </main> 
        </>
    )
}