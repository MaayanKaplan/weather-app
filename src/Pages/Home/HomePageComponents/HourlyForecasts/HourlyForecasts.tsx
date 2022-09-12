import { useState } from "react";
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
import LeftArrow from "./Icons/arrow-square-left.svg";
import RightArrow from "./Icons/arrow-square-right.svg";

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
  const [current, setCurrent] = useState<any>(0);
  const length = data?.length;
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }

  let settings = {
    // draggable: false,
    slideToShow: 6,
    // autoplay: false,
    // dots: true,
    // lazyLoad: "ondemand",
    // arrows: true,
  };

  return (
    <>
      <S.Carousel {...settings}>
        <S.ContentWrapper
        // style={{ transform: `translateX(-${current}%)` }}
        >
          {data?.map((item: any, index: number) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && (
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
                )}
              </div>
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
