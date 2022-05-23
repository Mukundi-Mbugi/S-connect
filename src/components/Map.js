import React from "react";
import Popup from "./PopupBox";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

function Map() {
  return (
    <MapContainer
      center={[-1.3010975850975184, 36.78443503498357]}
      zoom={13}
      scrollWheelZoom={true}
      className="leaflet-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-1.3010975850975184, 36.78443503498357]}>
        <Popup />
      </Marker>
    </MapContainer>
  );
}

export default Map;
