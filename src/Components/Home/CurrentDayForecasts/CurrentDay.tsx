import * as React from "react";
import * as S from "./styles";
import { CurrentDayProps } from "./types";
import SunCloudImg from "../../../Images/sun-cloud.svg";
import { IconFavoritesDark } from "../../../Common/Icon/Icon";
import { useAddAndRemoveFavorites } from "../../../api/AbraApi/getFavorites";
// import WeatherIcons from "../../../../Utils/WeatherIcons/WeatherIcons";
import { format } from "date-fns";

const CurrentDay: React.FC<CurrentDayProps> = ({ cityTitle, data }) => {
  const [isAddToFavorites, setIsAddToFavorites] =
    React.useState<boolean>(false);

  const { mutate, isSuccess } = useAddAndRemoveFavorites();

  const AddToFavoritesSuccess = () => {
    mutate({
      key: data.locationKey,
      title: cityTitle,
      city: cityTitle,
      country: cityTitle,
    });
    setIsAddToFavorites(true);
    setTimeout(() => {
      setIsAddToFavorites(false);
    }, 1500);
  };

  const today = new Date();
  const hour = Number(format(today, "h"));

  return (
    <S.CurrentDayContainer>
      <S.InfoWrapper>
        <S.CityTitle>{cityTitle}</S.CityTitle>
        <S.TemperatureWrapper>
          <S.Image src={SunCloudImg} alt="Sun and cloud image" />
          {/* <S.WeatherImage>
            {WeatherIcons(data?.DailyForecasts[0].Day.Icon)}
          </S.WeatherImage> */}
          <S.DegreesContainer>
            <S.MinTemp>
              {data?.DailyForecasts[0].Temperature.Minimum?.Value}
              <S.DegreesSignBig>°</S.DegreesSignBig>
            </S.MinTemp>
            <S.TempSeparator>-</S.TempSeparator>
            <S.MaxTemp>
              {data?.DailyForecasts[0].Temperature.Maximum?.Value}
              <S.DegreesSignSmall>°</S.DegreesSignSmall>
            </S.MaxTemp>
          </S.DegreesContainer>
        </S.TemperatureWrapper>
        <S.WeatherText>
          {(hour >= 6 && format(today, "aaa") === "am") ||
          (hour < 6 && format(today, "aaa") === "pm")
            ? data?.DailyForecasts[0].Day.IconPhrase
            : data?.DailyForecasts[0].Night.IconPhrase}
        </S.WeatherText>
        <S.Date>{format(today, `EEEE, dd-MMM-yyyy, h:maaa `)}</S.Date>
      </S.InfoWrapper>
      <S.AddFavButton variant="white" onClick={() => AddToFavoritesSuccess()}>
        <S.BtnIconWrapper>
          <IconFavoritesDark />
          Add to favorites
        </S.BtnIconWrapper>
      </S.AddFavButton>

      {isAddToFavorites && (
        <S.AddFavNotification severity={"success"}>
          {cityTitle} has added to favorites
        </S.AddFavNotification>
      )}
    </S.CurrentDayContainer>
  );
};

export default CurrentDay;
