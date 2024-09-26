import Navbar from "@/components/navbar/navbar";
import { MapProps } from "@/components/MapCard";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function GPS(){
    const MapCard = useMemo(() => dynamic(
        () => import('@/components/MapCard'),
        {
            ssr: false,
            loading: () => <p>Loading map...</p>
        }
    ), []);

    const mapPosition: MapProps = {
        startPoint: [45.7580950620, 4.8336065221],
        endPoint: [45.7626429025, 4.8292450576]
    }

    return (
        <main className="mt-16">
            <Navbar back={true}/>
            <MapCard 
                startPoint={mapPosition.startPoint}
                endPoint={mapPosition.endPoint}
                pubKey={process.env.JAWG_IO_PUBLIC}
            />
        </main>
    )
}