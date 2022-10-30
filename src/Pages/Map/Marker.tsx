import styled from "styled-components/macro";

import { format } from "date-fns";
import WeatherIcons from "../../Utils/WeatherIcons/WeatherIcons";

interface MarkerProps {
  data: any;
}

const Marker = ({ data }: MarkerProps) => {
  const today = new Date();
  const hour = Number(format(today, "h"));

  console.log(data?.DailyForecasts[0].Temperature.Minimum);
  return (
    <MarkerContainer>
      <IconWrapper>
        {hour >= 6 || hour < 6
          ? WeatherIcons(data?.DailyForecasts[0].Day.Icon)
          : WeatherIcons(data?.DailyForecasts[0].Night.Icon)}
      </IconWrapper>
      <TempWrapper>
        {data?.DailyForecasts[0].Temperature.Maximum.Value}°-
        {data?.DailyForecasts[0].Temperature.Minimum.Value}°
      </TempWrapper>
    </MarkerContainer>
  );
};

export default Marker;

const MarkerContainer = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8);
  background-color: #fff;
  box-shadow: inset 2px -3px 6px rgba(0, 0, 0, 0.1),
    inset -6px 4px 4px rgba(255, 255, 255, 0.1);
  filter: drop-shadow(0px 2px 60px rgba(0, 0, 0, 0.3));
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const IconWrapper = styled.div``;

const TempWrapper = styled.span`
  font-size: 1.8rem;
`;
