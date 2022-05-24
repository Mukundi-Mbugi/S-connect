import React, {useEffect} from "react";
import "../App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({lat,long}) {
  useEffect(()=>{
    fetch("http://localhost:3000/students")
    .then(res=>res.json())
    .then(students=>console.log(students))
  },[])
  return (
    <MapContainer center={[-1.3034532, 36.7927116]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lat, long]}>
    <Popup>
      <p>students</p>           
    </Popup>
  </Marker>
</MapContainer>
  );
}

export default Map;
