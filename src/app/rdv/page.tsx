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

export default function RDV () {
    const [search, setSearch] = useState("");
    const [data, setData] = useState<any>([])

    const fetchData = async () => {
        const result = await fetch(`/api/devices`).then((response) => response.json());
        setData(result)
    }
    useEffect(() => {
        fetchData()
    }, [])

    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
    )
    const tab = ["https://images.daisycon.io/mobile-device/?width=2000&height=2000&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+14+128gb&mobile_device_color=silver", "https://images.daisycon.io/mobile-device/?width=2000&height=2000&color=ffffff&mobile_device_brand=google&mobile_device_model=pixel+7+128gb&mobile_device_color=silver", "https://images.daisycon.io/mobile-device/?width=2000&height=2000&color=ffffff&mobile_device_brand=samsung&mobile_device_model=galaxy+s20+ultra+128gb&mobile_device_color=silver"]
    return(
        <main className="bg-white flex flex-col justify-center pt-16 px-5">
            <Search value={search} setValue={setSearch} placeholder="Rechercher un SmartPhone"/>
            <div className="grid grid-cols-2 hidden">
                {data.map((device: any) => (
                    <div className="text-black">
                        <img src={device.img} alt="" className="p-5" />
                    </div>
                ))}
            </div>
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-xs self-center h-full pt-40"
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
            </Carousel>
        </main> 
    )
}