import { useQuery } from "@tanstack/react-query";
import * as S from "./styles";
import { get12HoursForecast } from "../../../../api/AccuweatherAPI/AccuweatherAPI";
import { format } from "date-fns";
import {
  IconCloud,
  IconRain,
  IconStorm,
  IconSnow,
  IconSun,
  IconSunCloud,
} from "../Icons/Icons";

interface HourlyProps {
  locationKey: number;
}

const HourlyForecasts = ({ locationKey }: HourlyProps) => {
  const { data } = useQuery(
    ["Hourly", locationKey],
    async () => {
      const returnedData = await get12HoursForecast(locationKey);
      return returnedData;
    },
    {
      cacheTime: 0,
      staleTime: 600,
    }
  );
  console.log(data);

  return (
    <S.Container>
      {data?.map((item: any) => {
        return (
          <S.EachHourWrapper>
            <S.Hour>hello</S.Hour>
            <S.Temperature>{item.Temperature.Value}</S.Temperature>
            <S.IconWrapper>
              {(() => {
                switch (item.IconPhrase) {
                  case "Sunny":
                    return <IconSun />;
                  case "Storm":
                    return <IconStorm />;
                  case "Cloudy":
                    return <IconCloud />;
                  case "Clear":
                    return <IconSun />;
                  default:
                    return;
                }
              })()}
            </S.IconWrapper>
            <S.WindWrapper>
              <S.WindIcon />
              <S.WindText></S.WindText>
            </S.WindWrapper>
          </S.EachHourWrapper>
        );
      })}
    </S.Container>
  );
};

export default HourlyForecasts;
