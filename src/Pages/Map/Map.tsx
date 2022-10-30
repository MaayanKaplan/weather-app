import * as React from "react";
import { useJsApiLoader, GoogleMap, OverlayView } from "@react-google-maps/api";
import { useGeoLocation } from "use-geo-location";
import { useInfiniteQuery, useQueries, useQuery } from "@tanstack/react-query";
import { getFavorites } from "../../api/AbraApi/getFavorites";
import {
  getFiveDaysForecast,
  getGeoPosition,
  getLocation,
  getTodaysForecast,
} from "../../api/AccuweatherAPI/AccuweatherAPI";
import WeatherIcons from "../../Utils/WeatherIcons/WeatherIcons";
import Marker from "./Marker";
import { format } from "date-fns";

const Map: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
  });

  const { latitude, longitude } = useGeoLocation();
  const center = { lat: latitude, lng: longitude };
  const { data: locationKey } = useQuery([latitude, longitude], () =>
    getGeoPosition(latitude, longitude)
  );

  const { data: todaysWeather } = useQuery([locationKey], () =>
    getFiveDaysForecast(locationKey?.Key)
  );

  // // Fetching fav.
  // const FAV_URL = "https://weather-abra.herokuapp.com/api/favorites/";

  // const { data } = useInfiniteQuery(
  //   ["favorites"],
  //   ({ pageParam = FAV_URL }) => getFavorites(pageParam),
  //   {
  //     getNextPageParam: (lastPage) => lastPage.next || undefined,
  //   }
  // );

  // const favorites = React.useMemo(
  //   () => (data ? data.pages.flatMap((page) => page.results) : []),
  //   [data]
  // );

  // const favKeys = favorites.map((fav) => fav.key);

  // const results = useQueries({
  //   queries: favKeys.map((favKey) => {
  //     return {
  //       queryKey: ["favKeys"],
  //       queryFn: () => getLocation(favKey),
  //       enabled: !!favKeys,
  //     };
  //   }),
  // });

  // console.log(results);

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
      {center.lat && (
        <OverlayView position={center} mapPaneName="markerLayer">
          <Marker data={todaysWeather} />
        </OverlayView>
      )}
      {/* {results! &&
        results?.map((item) => {
          return (
            <OverlayView
              position={{
                lat: item?.data?.data.GeoPosition.Latitude,
                lng: item?.data?.data.GeoPosition.Longitude,
              }}
              mapPaneName="markerLayer"
            >
              <Marker />
            </OverlayView>
          );
        })} */}
    </GoogleMap>
  );
};

export default Map;
