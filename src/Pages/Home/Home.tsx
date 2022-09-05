import * as S from "./styles";
import EmptyStateContainer from "../../Common/EmptyStateContainer/EmptyStateContainer";
import NoLocationImg from "../../Images/location.svg";

import { useGeoLocation } from "use-geo-location";
import { TailSpin } from "react-loader-spinner";

import {
  getGeoPositionKey,
  get5DaysForecast,
} from "../../api/AccuweatherAPI/AccuweatherAPI";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { latitude, longitude, loading, error, timestamp, googleMapsResults } =
    useGeoLocation();

  console.log(loading);
  console.log(error);

  const lat = latitude;
  const lng = longitude;

  const { data } = useQuery(["LocationKey"], () => getGeoPositionKey(lat, lng));
  const locationKey = data;

  const { data, isLoading } = useQuery([
    "5daysForecase",
    () => get5DaysForecast(locationKey),
  ]);

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
      {loading && (
        <S.LoadingContainer>
          <TailSpin width="80" height="80" color="#fff" />
          <S.LoadingText>Loading...</S.LoadingText>
        </S.LoadingContainer>
      )}
      ;<div>hello</div>
    </S.Container>
  );
};

export default Home;
