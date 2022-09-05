import * as S from "./styles";
import { CurrentDayProps } from "./types";
import SunCloudImg from "../../../../Images/sun-cloud.svg";
import { IconFavoritesDark } from "../../../../Common/Icon/Icon";

import { useQuery } from "@tanstack/react-query";
import { dailyForecast } from "../../../../api/AccuweatherAPI/AccuweatherAPI";

const CurrentDay: React.FC<CurrentDayProps> = ({ cityTitle, locationKey }) => {
  const { data } = useQuery([locationKey], () => dailyForecast(locationKey), {
    cacheTime: 600,
    staleTime: 600,
  });
  const hour = 12;

  console.log(data);
  console.log(data?.DailyForecasts[0].Minimum?.Value);

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
          {hour >= 6 && hour < 18
            ? data?.DailyForecasts[0].Day.IconPhrase
            : data?.DailyForecasts[0].Night.IconPhrase}
        </S.WeatherText>
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
