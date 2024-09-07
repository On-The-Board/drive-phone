"use client";
import Openrouteservice from "openrouteservice-js";
import Leaflet from "leaflet";
import * as ReactLeaflet from "react-leaflet";
import "leaflet/dist/leaflet.css";

const { MapContainer, TileLayer, Popup, Marker } = ReactLeaflet;

interface MapProps {
  start: [number, number]; // GPS Position
  end: [number, number]; // GPS Positon
}

export default function Map(props: MapProps) {
  return (
    <MapContainer
      className="aspect-square w-full h-full rounded-lg"
      attributionControl={false /* Type didn't exist but it work */}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* DrivePhone Marker */}
      <Marker position={props.start}>
        <Popup>Camion de réparation Drive Phone.</Popup>
      </Marker>
      {/* Client Marker */}
      <Marker position={props.end}>
        <Popup>Votre adresse.</Popup>
      </Marker>
    </MapContainer>
  );
}
