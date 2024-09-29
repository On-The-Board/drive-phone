import Navbar from "@/components/navbar/navbar";
import { MapProps } from "@/components/MapCard";
import dynamic from "next/dynamic";

export default function GPS(){
    const MapCard = dynamic(
        () => import('@/components/MapCard'),
        {
            ssr: false,
            loading: () => <p>Loading map...</p>
        }
    );

    const mapPosition: MapProps = {
        startPoint: { lat: 43.952597866362154, lon: 4.952597866362154 },
        endPoint: { lat: 43.952597866362154, lon: 4.985059116210714 }
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