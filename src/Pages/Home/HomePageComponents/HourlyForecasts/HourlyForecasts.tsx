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
import WindIcon from "./Icons/windIcon.svg";

import Carousel from "../../../../Common/Carousel/Carousel";

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
    <>
      <Carousel show={3}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        {/* {data?.map((item: any) => {
          return (
            <S.EachHourWrapper>
              <S.Hour>hello</S.Hour>
              <S.Temperature>{item.Temperature.Value}</S.Temperature>
              <S.IconWrapper>
                {(() => {
                  switch (item.WeatherIcon) {
                    case 1: //Sunny
                      return <IconSun />;
                    case 2: //Sunny
                      return <IconSun />;
                    case 15: //Storm
                      return <IconStorm />;
                    case 7: //Cloudy
                      return <IconCloud />;
                    case 18: //Rain
                      return <IconRain />;
                    case 22: //Snow
                      return <IconSnow />;
                    case 33: //Clear
                      return <IconSun />;
                    case 34: //Mostly Clear
                      return <IconSunCloud />;
                    default:
                      return;
                  }
                })()}
              </S.IconWrapper>
              <S.WindWrapper>
                <S.WindIcon src={WindIcon} />
                <S.WindText>
                  {(item.Wind.Speed.Value * 1.6).toFixed(1)} km/h
                </S.WindText>
              </S.WindWrapper>
            </S.EachHourWrapper>
          );
        })} */}
      </Carousel>
    </>
  );
};

export default HourlyForecasts;
