"use client"

import type { Dispatch, SetStateAction } from "react";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMemo, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import "leaflet-geosearch/dist/geosearch.css";
import Searchbar from "./searchbar";

type Position = { lat: number, lon: number };
export interface MapProps {
  startPoint: Position;
  endPoint: Position;
  pubKey?: string;
}

async function calculateRoute(startPoint: Position, endPoint: Position, setValue: Dispatch<SetStateAction<number>>) {
  try {
    const response = await fetch('/api/position', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        startPoint: startPoint,
        endPoint: endPoint
      })
    });
    const data = await response.json();
    setValue(data.message);
  } catch (error) {
    console.error('Error calculating route:', error);
  }
};

export default function Map(props: MapProps) {
  const provider = new OpenStreetMapProvider();
  const [travelTime, setTravelTime] = useState<number>(0);
  const [address, setAddress] = useState<string>('');
  const layerUrl = "https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token=".concat(props.pubKey as string)
  const centerPoint: Position = {
    lat: (props.startPoint.lat + props.endPoint.lat) / 2,
    lon: (props.startPoint.lon + props.endPoint.lon) / 2
  };

  calculateRoute(props.startPoint, props.endPoint, setTravelTime);
  useMemo(async () => {
    // https://smeijer.github.io/leaflet-geosearch/usage#results
    const newAddress = await provider.search({ query: address })
    // ...
    // props.endPoint.lat = newAddress.x
    // props.endPoint.lat = newAddress.y
  }, [address]);

  return (
    <div className="w-full p-4 text-black">
      <Searchbar value={address} setValue={setAddress}/>
      <MapContainer
        className="aspect-square w-full h-full rounded-lg mt-32"
        attributionControl={false}
        center={[centerPoint.lat, centerPoint.lon]}
        zoom={13}
      >
        <TileLayer url={layerUrl} />
        {/* DrivePhone Marker */}
        <Marker position={[props.startPoint.lat, props.startPoint.lon]}>
          <Popup>Camion de réparation Drive Phone.</Popup>
        </Marker>
        {/* Client Marker */}
        <Marker position={[props.endPoint.lat, props.endPoint.lon]}>
          <Popup>Votre adresse.</Popup>
        </Marker>
      </MapContainer>
      Temps de trajet: <strong>~{travelTime} minutes</strong>
    </div>
  );
};

