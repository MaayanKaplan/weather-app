import * as S from "./styles";
import EmptyStateContainer from "../../Common/EmptyStateContainer/EmptyStateContainer";
import NoLocationImg from "../../Images/location.svg";
import { useGeoLocation } from "use-geo-location";
import { TailSpin } from "react-loader-spinner";

import {
  getGeoPosition,
  get5DaysForecast,
  dailyForecast,
} from "../../api/AccuweatherAPI/AccuweatherAPI";
import { useQuery } from "@tanstack/react-query";

import CurrentDayContainer from "./HomePageComponents/CurrentDay/CurrentDay";

const Home = () => {
  const { latitude, longitude, error, loading } = useGeoLocation();

  const { data: locationKey } = useQuery(
    [latitude, longitude],
    () => getGeoPosition(latitude, longitude),
    {
      cacheTime: 600,
      staleTime: 600,
    }
  );

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
      {loading ? (
        <S.LoadingContainer>
          <TailSpin width="80" height="80" color="#fff" />
          <S.LoadingText>Loading...</S.LoadingText>
        </S.LoadingContainer>
      ) : (
        <>
          <CurrentDayContainer
            cityTitle={locationKey?.AdministrativeArea.EnglishName}
            locationKey={locationKey?.Key}
          />
        </>
      )}
    </S.Container>
  );
};

export default Home;
