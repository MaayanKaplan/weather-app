import * as React from "react";
import * as S from "./styles";
import { EachHourProps } from "./types";
import {
  IconCloud,
  IconRain,
  IconStorm,
  IconSnow,
  IconSun,
  IconSunCloud,
} from "../../Icons/Icons";
import WindIcon from "../Icons/windIcon.svg";

export const EachHourItem = ({
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
      // index={index}
      ref={itemRef}
      onClick={onClickHandler}
    >
      <S.Hour>{hour}</S.Hour>
      <S.TempWrapper>
        <S.Temperature>{temperature}</S.Temperature>
        <S.TempSign>°</S.TempSign>
      </S.TempWrapper>
      <S.IconWrapper>
        {(() => {
          switch (weatherIcon) {
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
        <S.WindText>{windSpeed} km/h</S.WindText>
      </S.WindWrapper>
    </S.EachHourWrapper>
  );
};

export default EachHourItem;
