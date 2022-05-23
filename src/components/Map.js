import React from "react";
import "../App.css";
import Popup from "./PopupBox";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Map({ lat, long }) {
  return (
    <MapContainer
      center={[-1.30006,36.78229]}
      zoom={13}
      scrollWheelZoom={true}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]}>
        <Popup />
      </Marker>
    </MapContainer>
  );
}

export default Map;
