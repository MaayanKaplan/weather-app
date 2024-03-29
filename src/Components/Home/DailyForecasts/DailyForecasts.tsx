import * as S from "./styles";
import { DailyProps } from "./types";
import WeatherIcons from "../../../Utils/WeatherIcons/WeatherIcons";
import { nextDaysOfWeek } from "../../../Utils/TimeConverter";
import { useMedia } from "../../../hooks/useMedia";

const DailyForecasts: React.FC<DailyProps> = ({ data }) => {
  const fourDaysView = data?.DailyForecasts.slice(1, 5);

  const isMobile = useMedia();

  return (
    <S.Container>
      {fourDaysView?.map((item: any, index: number) => {
        return (
          <>
            <S.EachDayWrapper key={index}>
              {isMobile ? (
                <>
                  <S.TitleWrapper>
                    <S.TempIcon> {WeatherIcons(item.Day.Icon)}</S.TempIcon>
                    <S.Title>
                      {nextDaysOfWeek[fourDaysView.indexOf(item) + 1]}
                      {" - "}
                      {item.Day.IconPhrase}
                    </S.Title>
                  </S.TitleWrapper>

                  <S.TempWrapper>
                    <S.TempMin>{item.Temperature.Minimum.Value}</S.TempMin>
                    <S.DegreesSign>°</S.DegreesSign>
                    <S.TempMax>-{item.Temperature.Maximum.Value}</S.TempMax>
                  </S.TempWrapper>
                </>
              ) : (
                <>
                  <S.TitleWrapper>
                    <S.Title>
                      {nextDaysOfWeek[fourDaysView.indexOf(item) + 1]}
                      {" - "}
                      {item.Day.IconPhrase}
                    </S.Title>
                  </S.TitleWrapper>
                  <S.TempWrapper>
                    <S.TempIcon> {WeatherIcons(item.Day.Icon)}</S.TempIcon>
                    <S.TempMin>{item.Temperature.Minimum.Value}</S.TempMin>
                    <S.DegreesSign>°</S.DegreesSign>
                    <S.TempMax>-{item.Temperature.Maximum.Value}</S.TempMax>
                  </S.TempWrapper>
                </>
              )}
            </S.EachDayWrapper>
          </>
        );
      })}
    </S.Container>
  );
};

export default DailyForecasts;
