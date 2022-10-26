import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  OverlayView,
} from "@react-google-maps/api";
import { useGeoLocation } from "use-geo-location";

const GoogleMaps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
  });

  const { latitude, longitude } = useGeoLocation();
  const center = { lat: latitude, lng: longitude };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <GoogleMap
      center={center}
      zoom={10}
      mapContainerStyle={{ width: "100%", height: "100%" }}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      {center.lat && <Marker position={center} />}
    </GoogleMap>
  );
};

export default GoogleMaps;
