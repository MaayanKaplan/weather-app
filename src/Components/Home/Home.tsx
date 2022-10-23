import * as React from "react";
import * as S from "./styles";
import CurrentDayContainer from "./CurrentDayForecasts/CurrentDay";
import DailyForecasts from "./DailyForecasts/DailyForecasts";
import HourlyForecasts from "./HourlyForecasts/HourlyForecasts";
import FiveDaysForecast from "./FiveDaysForecast/FiveDaysForecats";
import { useMedia } from "../../hooks/useMedia";
import { IconMapDark } from "../../Common/Icon/Icon";
import { useQuery } from "@tanstack/react-query";
import { getDailyForecast } from "../../api/AccuweatherAPI/AccuweatherAPI";
import FavImg from "../../Images/fav-outline.svg";
import { useAddAndRemoveFavorites } from "../../api/AbraApi/getFavorites";
import PopUp from "../../Common/PopUp/PopUp";
import ErrorMessage from "../../Common/ErrorMessage";
import { useNavigate } from "react-router-dom";

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
  const [isForecastOpen, setIsForecastOpen] = React.useState<boolean>(false);
  const handleOpenPopUp = () => {
    setIsForecastOpen(true);
  };
  const isMobile = useMedia();

  const { data, isError, error } = useQuery([params, locationKey], () => {
    if (params?.locationKey) {
      return getDailyForecast(+params?.locationKey);
    } else {
      return getDailyForecast(locationKey?.Key);
    }
  });

  // Add to favorites logic
  const [isAddToFavorites, setIsAddToFavorites] =
    React.useState<boolean>(false);

  const { mutate, isSuccess } = useAddAndRemoveFavorites();

  const AddToFavoritesSuccess = () => {
    mutate({
      key: params?.locationKey ? +params?.locationKey : locationKey?.Key,
      title: params.locationKey
        ? params?.cityName
        : locationKey?.AdministrativeArea?.EnglishName,
      city: params.locationKey
        ? params?.cityName
        : locationKey?.AdministrativeArea?.EnglishName,
      country: params.locationKey
        ? params?.cityName
        : locationKey?.AdministrativeArea?.EnglishName,
    });
    setIsAddToFavorites(true);
    setTimeout(() => {
      setIsAddToFavorites(false);
    }, 1500);
  };

  const navigate = useNavigate();

  if (isError) return <ErrorMessage />;

  return (
    <>
      <S.FavButton src={FavImg} onClick={AddToFavoritesSuccess} />

      <S.DataContainer>
        <CurrentDayContainer
          data={data}
          isAddToFavorites={isAddToFavorites}
          AddToFavoritesSuccess={AddToFavoritesSuccess}
          cityTitle={
            params.locationKey
              ? params?.cityName
              : locationKey?.AdministrativeArea?.EnglishName
          }
        />
        <DailyForecasts data={data} />

        <S.FiveDaysForecastButton variant="ghost" onClick={handleOpenPopUp}>
          5 Days Forecast
        </S.FiveDaysForecastButton>

        <HourlyForecasts
          locationKey={
            params.locationKey ? +params?.locationKey : locationKey?.Key
          }
        />

        {!isMobile ? (
          <FiveDaysForecast data={data} />
        ) : (
          isForecastOpen && (
            <PopUp
              onClose={() => setIsForecastOpen(false)}
              isOpen={isForecastOpen}
              setIsOpen={setIsForecastOpen}
            >
              <FiveDaysForecast data={data} />
            </PopUp>
          )
        )}
        {isMobile && (
          <S.MapButton
            variant="white"
            onClick={() => {
              navigate("/map");
            }}
          >
            <S.BtnContentWrapper>
              <S.BtnIconWrapper>
                <IconMapDark />
              </S.BtnIconWrapper>
              <S.BtnText>Map</S.BtnText>
            </S.BtnContentWrapper>
          </S.MapButton>
        )}
      </S.DataContainer>
    </>
  );
};

export default Home;
