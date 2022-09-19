import * as S from "./styles";
import { DailyProps } from "./types";
import { getDailyForecast } from "../../../../api/AccuweatherAPI/AccuweatherAPI";
import { useQuery } from "@tanstack/react-query";
import WeatherIcons from "../../../../Utils/WeatherIcons/WeatherIcons";
import { nextDaysOfWeek } from "../../../../Utils/TimeConverter";

const DailyForecasts: React.FC<DailyProps> = ({ locationKey }) => {
  const { data } = useQuery(
    [locationKey],
    async () => {
      const returnedData = await getDailyForecast(locationKey);
      return returnedData;
    },
    {
      cacheTime: 0,
      staleTime: 600,
    }
  );

  const fourDaysView = data?.DailyForecasts.slice(1, 5);

  return (
    <S.Container>
      {fourDaysView?.map((item: any, index: number) => {
        return (
          <>
            <S.EachDayWrapper key={index}>
              <S.Title>
                {nextDaysOfWeek[fourDaysView.indexOf(item) + 1]}
                {" - "}
                {item.Day.IconPhrase}
              </S.Title>
              <S.TempWrapper>
                <S.TempIcon> {WeatherIcons(item.Day.Icon)}</S.TempIcon>
                <S.TempMin>{item.Temperature.Minimum.Value}</S.TempMin>
                <S.DegreesSign>°</S.DegreesSign>
                <S.TempMax>-{item.Temperature.Maximum.Value}</S.TempMax>
              </S.TempWrapper>
            </S.EachDayWrapper>
          </>
        );
      })}
    </S.Container>
  );
};

export default DailyForecasts;
