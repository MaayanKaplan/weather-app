import * as S from "./styles";
import { CurrentDayProps } from "./types";
import SunCloudImg from "../../../../Images/sun-cloud.svg";
import { IconFavoritesDark } from "../../../../Common/Icon/Icon";

import { useQuery } from "@tanstack/react-query";
import { dailyForecast } from "../../../../api/AccuweatherAPI/AccuweatherAPI";
import { format } from "date-fns";

const CurrentDay: React.FC<CurrentDayProps> = ({ cityTitle, locationKey }) => {
  const { data } = useQuery([locationKey], () => dailyForecast(locationKey), {
    cacheTime: 600,
    staleTime: 600,
  });

  const date = new Date();
  const hour = Number(format(date, "h"));

  return (
    <S.CurrentDayContainer>
      <S.InfoWrapper>
        <S.CityTitle>{cityTitle}</S.CityTitle>
        <S.TemperatureWrapper>
          <S.Image src={SunCloudImg} alt="Sun and cloud image" />
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
          {(hour >= 6 && format(date, "aaa") === "am") ||
          (hour < 6 && format(date, "aaa") === "pm")
            ? data?.DailyForecasts[0].Day.IconPhrase
            : data?.DailyForecasts[0].Night.IconPhrase}
        </S.WeatherText>
        <S.Date>
          {format(date, "EEEE")}, {format(date, "dd")}-{format(date, "	MMM")}-
          {format(date, "	yyyy")}, {format(date, "h")}:{format(date, "m")}
          {format(date, "aaa")}
        </S.Date>
      </S.InfoWrapper>
      <S.AddFavButton variant="white" onClick={() => {}}>
        <S.Wrapper>
          <IconFavoritesDark />
          Add to favorites
        </S.Wrapper>
      </S.AddFavButton>
    </S.CurrentDayContainer>
  );
};

export default CurrentDay;
