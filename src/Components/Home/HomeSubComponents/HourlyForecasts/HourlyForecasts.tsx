import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as S from "./styles";
import { get12HoursForecast } from "../../../../api/AccuweatherAPI/AccuweatherAPI";
import { ConvertTime } from "../../../../Utils/TimeConverter";
import LeftArrow from "./Icons/arrow-square-left.svg";
import RightArrow from "./Icons/arrow-square-right.svg";
import EachHourItem from "./EachHourItem/EachHourItem";

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

  // Carousel functionality
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const next = () => {
    setActiveIndex(activeIndex === data.length - 1 ? 0 : activeIndex + 1);
  };

  const prev = () => {
    setActiveIndex(activeIndex === 0 ? data.length - 1 : activeIndex - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  const setActiveIndexOnClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <S.Carousel>
        <S.ContentWrapper>
          {data?.map((item: any, index: number) => {
            return (
              <EachHourItem
                isActive={activeIndex === index}
                index={index}
                key={index}
                hour={ConvertTime(new Date(item.DateTime))}
                weatherIcon={item.WeatherIcon}
                temperature={item.Temperature.Value}
                windSpeed={(item.Wind.Speed.Value * 1.6).toFixed(1)}
                onClick={setActiveIndexOnClick}
              />
            );
          })}
        </S.ContentWrapper>
        <S.ArrowWrapper>
          <S.LeftArrow src={LeftArrow} onClick={prev} />
          <S.RightArrow src={RightArrow} onClick={next} />
        </S.ArrowWrapper>
      </S.Carousel>
    </>
  );
};

export default HourlyForecasts;
