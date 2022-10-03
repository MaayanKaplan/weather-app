import * as React from "react";
import * as S from "./styles";
import { EachHourProps } from "./types";
import WindIcon from "../Icons/windIcon.svg";
import WeatherIcons from "../../../../Utils/WeatherIcons/WeatherIcons";

export const HourInfoContainer = ({
  isActive,
  index,
  key,
  hour,
  temperature,
  weatherIcon,
  windSpeed,
  onClick,
}: EachHourProps) => {
  const itemRef: React.RefObject<HTMLDivElement> = React.useRef(null);

  const onClickHandler = () => {
    onClick(index);
  };

  React.useEffect(() => {
    if (isActive)
      itemRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
  }, [isActive]);

  return (
    <S.EachHourWrapper
      isActive={isActive}
      key={key}
      ref={itemRef}
      onClick={onClickHandler}
    >
      <S.Hour>{index === 0 ? "Now" : `${hour}`}</S.Hour>
      <S.TempWrapper>
        <S.Temperature>{temperature}</S.Temperature>
        <S.TempSign>°</S.TempSign>
      </S.TempWrapper>
      <S.IconWrapper>{WeatherIcons(weatherIcon)}</S.IconWrapper>
      <S.WindWrapper>
        <S.WindIcon src={WindIcon} />
        <S.WindText>{windSpeed} km/h</S.WindText>
      </S.WindWrapper>
    </S.EachHourWrapper>
  );
};

export default HourInfoContainer;
