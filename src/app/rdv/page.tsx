"use client"
import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

export default function RDV (){
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
      )
    const tab = ["https://images.daisycon.io/mobile-device/?width=1000&height=1000&color=ffffff&mobile_device_brand=apple&mobile_device_model=iphone+14+128gb&mobile_device_color=silver", "https://images.daisycon.io/mobile-device/?width=1000&height=1000&color=ffffff&mobile_device_brand=google&mobile_device_model=pixel+7+128gb&mobile_device_color=silver", "https://images.daisycon.io/mobile-device/?width=1000&height=1000&color=ffffff&mobile_device_brand=samsung&mobile_device_model=galaxy+s20+ultra+128gb&mobile_device_color=silver"]
    return(
        <main className="bg-white flex justify-center">
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-xs"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                >
                <CarouselContent>
                    {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-2">
                                <Image src={tab[index]} alt="phone" width={800} height={800}/>
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