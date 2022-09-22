import * as S from "./styles";
import EmptyStateContainer from "../../Common/EmptyStateContainer/EmptyStateContainer";
import NoLocationImg from "../../Images/location.svg";
import { useGeoLocation } from "use-geo-location";
import { TailSpin } from "react-loader-spinner";

import { getGeoPosition } from "../../api/AccuweatherAPI/AccuweatherAPI";
import { useQuery } from "@tanstack/react-query";

import CurrentDayContainer from "./HomePageComponents/CurrentDayForecasts/CurrentDay";
import DailyForecasts from "./HomePageComponents/DailyForecasts/DailyForecasts";
import HourlyForecasts from "./HomePageComponents/HourlyForecasts/HourlyForecasts";
import FiveDaysForecast from "./HomePageComponents/FiveDaysForecast/FiveDaysForecats";
import { useParams } from "react-router-dom";

import { useMedia } from "../../hooks/useMedia";
import { IconMapDark } from "../../Common/Icon/Icon";

const Home = () => {
  const { latitude, longitude, error, loading } = useGeoLocation();
  const params = useParams();
  console.log(params);

  const { data: locationKey } = useQuery(
    [latitude, longitude],
    () => getGeoPosition(latitude, longitude),
    {
      cacheTime: 600,
      staleTime: 600,
    }
  );

  // use data from the geo location and use it in enabled next query with !!(turns it to boolean)

  const isMobile = useMedia();

  return (
    <S.Container>
      {error && (
        <S.ErrorWrapper>
          <EmptyStateContainer
            img={NoLocationImg}
            title="Set up location"
            description="To identify your location please allow
          WeatherApp to know your location."
          />
        </S.ErrorWrapper>
      )}
      {loading && (
        <S.LoadingContainer>
          <TailSpin width="80" height="80" color="#fff" />
          <S.LoadingText>Loading...</S.LoadingText>
        </S.LoadingContainer>
      )}
      {params.locationKey ? (
        <S.DataContainer>
          <CurrentDayContainer
            cityTitle={params?.cityName}
            locationKey={+params?.locationKey}
          />
          <DailyForecasts locationKey={+params?.locationKey} />
          {isMobile && (
            <S.FiveDaysForecastButton variant="ghost" onClick={() => {}}>
              5 Days Forecast
            </S.FiveDaysForecastButton>
          )}
          <HourlyForecasts locationKey={+params?.locationKey} />

          {!isMobile && <FiveDaysForecast locationKey={+params?.locationKey} />}
          {isMobile && (
            <S.MapButton variant="white" onClick={() => {}}>
              <S.BtnContentWrapper>
                <S.BtnIconWrapper>
                  <IconMapDark />
                </S.BtnIconWrapper>
                <S.BtnText>Map</S.BtnText>
              </S.BtnContentWrapper>
            </S.MapButton>
          )}
        </S.DataContainer>
      ) : (
        <S.DataContainer>
          <CurrentDayContainer
            cityTitle={locationKey?.AdministrativeArea.EnglishName}
            locationKey={locationKey?.Key}
          />
          <DailyForecasts locationKey={locationKey?.Key} />
          {isMobile && (
            <S.FiveDaysForecastButton variant="ghost" onClick={() => {}}>
              5 Days Forecast
            </S.FiveDaysForecastButton>
          )}
          <HourlyForecasts locationKey={locationKey?.Key} />

          {!isMobile && <FiveDaysForecast locationKey={locationKey?.Key} />}
          {isMobile && (
            <S.MapButton variant="white" onClick={() => {}}>
              <S.BtnContentWrapper>
                <S.BtnIconWrapper>
                  <IconMapDark />
                </S.BtnIconWrapper>
                <S.BtnText>Map</S.BtnText>
              </S.BtnContentWrapper>
            </S.MapButton>
          )}
        </S.DataContainer>
      )}
    </S.Container>
  );
};

export default Home;
