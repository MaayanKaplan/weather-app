import * as S from "./styles";
import { DailyProps } from "./types";
import { getDailyForecast } from "../../../../api/AccuweatherAPI/AccuweatherAPI";
import { useQuery } from "@tanstack/react-query";
import { format, addDays } from "date-fns";
import WeatherIcons from "../../../../Utils/WeatherIcons/WeatherIcons";

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

  const today = new Date();
  const tomorrow = addDays(today, 1);
  const afterTomorrow = addDays(today, 2);
  const in3Days = addDays(today, 3);
  const in4Days = addDays(today, 4);

  const nextDaysOfWeek = [
    format(tomorrow, "EEE"),
    format(afterTomorrow, "EEE"),
    format(in3Days, "EEE"),
    format(in4Days, "EEE"),
  ];

  const fourDaysView = data?.DailyForecasts.slice(1, 5);

  return (
    <S.Container>
      {fourDaysView?.map((item: any) => {
        return (
          <S.EachDayWrapper>
            <S.Title>
              {nextDaysOfWeek[fourDaysView.indexOf(item)]}
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
        );
      })}
    </S.Container>
  );
};

export default DailyForecasts;
