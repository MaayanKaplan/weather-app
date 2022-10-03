import * as React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useGeoLocation } from "use-geo-location";
import "./style.css";

interface MapProps {
  lat: number;
  lng: number;
  zoomLevel: number;
}

const MY_API_KEY = "AIzaSyBMJI9xGgCIOZeSuRHjLla_4ljD8ueGlus";

const Map = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: MY_API_KEY });

  if (!isLoaded) return <div>Loading...</div>;

  return <MyMap />;
};

const MyMap = () => {
  const { latitude, longitude } = useGeoLocation();
  const center = React.useMemo(() => ({ lat: latitude!, lng: longitude! }), []);

  console.log(latitude, longitude);
  return (
    <GoogleMap
      zoom={8}
      center={{ lat: latitude!, lng: longitude! }}
      mapContainerClassName="map-container"
    >
      <Marker position={{ lat: latitude!, lng: longitude! }} />
    </GoogleMap>
  );
};

export default Map;
