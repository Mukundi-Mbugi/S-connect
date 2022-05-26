import "../App.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerIcon from "./MarkerIcon";

function Map({ students }) {
  return (
    <MapContainer
      center={[-1.3034532, 36.7927116]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerIcon students={students} />
    </MapContainer>
  );
}

export default Map;
