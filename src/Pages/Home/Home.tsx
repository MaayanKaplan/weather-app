import { useEffect, useState } from "react";
import * as S from "./styles";
import EmptyStateContainer from "../../Common/EmptyStateContainer/EmptyStateContainer";
import NoLocationImg from "../../Images/location.svg";

import { useGeoLocation } from "use-geo-location";
import { TailSpin } from "react-loader-spinner";

import {
  getGeoPositionKey,
  get5DaysForecast,
  searchByLocationKey,
} from "../../api/AccuweatherAPI/AccuweatherAPI";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const [zibi, setZibi] = useState({});
  const { latitude, longitude, error } = useGeoLocation();
  const lat = latitude;
  const lng = longitude;

  const { data: keyLocation } = useQuery(
    [lat, lng],
    () => getGeoPositionKey(lat, lng),
    { onSuccess: (data) => console.log({ dodo: data }) }
  );

  const { data, isLoading } = useQuery([keyLocation], () =>
    searchByLocationKey(keyLocation)
  );

  // const { data, isLoading } = useQuery([
  //   "5daysForecase",
  //   () => get5DaysForecast(locationKey.data),
  //   {
  //     cacheTime: 600,
  //     staleTime: 600,
  //   },
  // ]);
  console.log(data);
  console.log(isLoading);

  return (
    <S.Container>
      {error && (
        <S.Wrapper>
          <EmptyStateContainer
            img={NoLocationImg}
            title="Set up location"
            description="To identify your location please allow
          WeatherApp to know your location."
          />
        </S.Wrapper>
      )}
      {isLoading ? (
        <S.LoadingContainer>
          <TailSpin width="80" height="80" color="#fff" />
          <S.LoadingText>Loading...</S.LoadingText>
        </S.LoadingContainer>
      ) : (
        <div>hello</div>
      )}
    </S.Container>
  );
};

export default Home;
