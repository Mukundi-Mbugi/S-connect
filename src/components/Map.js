import React, {useEffect, useState} from "react";
import "../App.css";
import { MapContainer, TileLayer} from "react-leaflet";
import MarkerIcon from "./MarkerIcon";

function Map({lat,long}) {
  const [students, setStudents] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/students")
    .then(res=>res.json())
    .then(students=>setStudents(students))
  },[])
  
  return (
    <MapContainer center={[-1.3034532, 36.7927116]} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <MarkerIcon students={students} />
  {/* <StudentPopup students={students} />  */}
</MapContainer>
  );
}

export default Map;
