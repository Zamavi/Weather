import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [51.505, -0.09]; // Change to your desired location

const MapComponent = () => {
  return (
    <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Welcome to this location!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
