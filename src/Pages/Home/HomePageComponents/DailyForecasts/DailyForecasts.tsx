import * as S from "./styles";
import { DailyProps } from "./types";
import { getDailyForecast } from "../../../../api/AccuweatherAPI/AccuweatherAPI";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

const DailyForecasts: React.FC<DailyProps> = ({ locationKey }) => {
  const { data, isSuccess } = useQuery(
    [locationKey],
    async () => {
      const test = await getDailyForecast(locationKey);
      return test;
      // console.log(test);
    },
    {
      cacheTime: 0,
      staleTime: 600,
    }
  );

  console.log(data);

  // const temp = data.slice(2, -1);
  const temp = data?.DailyForecasts.slice(1, 5);

  // console.log(temp.length);

  return (
    <S.Container>
      {temp?.map((item: any) => {
        return (
          <S.EachDayWrapper>
            <S.Title>{item.Day.IconPhrase}</S.Title>
          </S.EachDayWrapper>
        );
      })}
    </S.Container>
  );
};

export default DailyForecasts;
