import * as S from "./styles";
import CurrentDayContainer from "../../Components/Home/HomeSubComponents/CurrentDayForecasts/CurrentDay";
import DailyForecasts from "../../Components/Home/HomeSubComponents/DailyForecasts/DailyForecasts";
import HourlyForecasts from "../../Components/Home/HomeSubComponents/HourlyForecasts/HourlyForecasts";
import FiveDaysForecast from "../../Components/Home/HomeSubComponents/FiveDaysForecast/FiveDaysForecats";
import { useMedia } from "../../hooks/useMedia";
import { IconMapDark } from "../../Common/Icon/Icon";

import { useQuery } from "@tanstack/react-query";
import { getDailyForecast } from "../../api/AccuweatherAPI/AccuweatherAPI";

interface HomeProps {
  params: any;

  // locationKey: number;

  locationKey: {
    AdministrativeArea: { EnglishName: string };
    Key: number;
  };
}

const Home = ({ params, locationKey }: HomeProps) => {
  const isMobile = useMedia();

  console.log(locationKey);

  const { data: geoLocationData } = useQuery(
    [locationKey],
    () => getDailyForecast(locationKey?.Key),
    {
      cacheTime: 600,
      staleTime: 600,
    }
  );

  const { data: searchData } = useQuery(
    [params],
    () => getDailyForecast(+params?.locationKey),
    {
      cacheTime: 600,
      staleTime: 600,
    }
  );

  console.log(geoLocationData);

  return (
    <>
      {params.locationKey ? (
        <S.DataContainer>
          <CurrentDayContainer cityTitle={params?.cityName} data={searchData} />
          <DailyForecasts data={searchData} />
          {isMobile && (
            <S.FiveDaysForecastButton variant="ghost" onClick={() => {}}>
              5 Days Forecast
            </S.FiveDaysForecastButton>
          )}
          <HourlyForecasts locationKey={+params?.locationKey} />

          {!isMobile && <FiveDaysForecast data={searchData} />}
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
            cityTitle={locationKey?.AdministrativeArea?.EnglishName}
            data={geoLocationData}
          />
          <DailyForecasts data={geoLocationData} />
          {isMobile && (
            <S.FiveDaysForecastButton variant="ghost" onClick={() => {}}>
              5 Days Forecast
            </S.FiveDaysForecastButton>
          )}
          <HourlyForecasts locationKey={locationKey?.Key} />

          {!isMobile && <FiveDaysForecast data={geoLocationData} />}
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
    </>
  );
};

export default Home;
