import * as React from "react";
import * as S from "./styles";
import CurrentDayContainer from "./CurrentDayForecasts/CurrentDay";
import DailyForecasts from "./DailyForecasts/DailyForecasts";
import HourlyForecasts from "./HourlyForecasts/HourlyForecasts";
import FiveDaysForecast from "./FiveDaysForecast/FiveDaysForecats";
import { useMedia } from "../../hooks/useMedia";
import { IconMapDark, IconFavoritesOutline } from "../../Common/Icon/Icon";
import { useQuery } from "@tanstack/react-query";
import { getDailyForecast } from "../../api/AccuweatherAPI/AccuweatherAPI";
import FavImg from "../../Images/fav-outline.svg";

import { useAddAndRemoveFavorites } from "../../api/AbraApi/getFavorites";

interface HomeProps {
  params: {
    locationKey?: string;
    cityName?: string;
  };
  locationKey: {
    AdministrativeArea: { EnglishName: string };
    Key: number;
  };
}

const Home = ({ params, locationKey }: HomeProps) => {
  const isMobile = useMedia();
  const { data: geoLocationData } = useQuery([locationKey], () =>
    getDailyForecast(locationKey?.Key)
  );

  const { data: searchData } = useQuery([params], () =>
    getDailyForecast(+params?.locationKey!)
  );

  const { data } = useQuery([params, locationKey], () => {
    if (params.locationKey) {
      return getDailyForecast(+params.locationKey!);
    } else {
      return getDailyForecast(locationKey?.Key);
    }
  });

  console.log(data);

  // Add to favorites logic
  const [isAddToFavorites, setIsAddToFavorites] =
    React.useState<boolean>(false);

  const { mutate, isSuccess } = useAddAndRemoveFavorites();

  const AddToFavoritesSuccess = () => {
    mutate({
      key: data.locationKey,
      // title: cityTitle,
      // city: cityTitle,
      // country: cityTitle,
    });
    setIsAddToFavorites(true);
    setTimeout(() => {
      setIsAddToFavorites(false);
    }, 1500);
  };

  return (
    <>
      {isMobile && <S.FavButton src={FavImg} onClick={() => {}} />}

      {params.locationKey ? (
        <S.DataContainer>
          <CurrentDayContainer
            cityTitle={params?.cityName}
            data={searchData}
            isAddToFavorites={isAddToFavorites}
            AddToFavoritesSuccess={AddToFavoritesSuccess}
          />
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
            isAddToFavorites={isAddToFavorites}
            AddToFavoritesSuccess={AddToFavoritesSuccess}
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
