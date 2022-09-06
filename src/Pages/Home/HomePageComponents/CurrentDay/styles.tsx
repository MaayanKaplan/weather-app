import styled from "styled-components/macro";
import Button from "../../../../Common/Button/Button";

export const CurrentDayContainer = styled.div`
  margin: 120px 378px 0 370px;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

export const InfoWrapper = styled.div``;

export const CityTitle = styled.h1`
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-size: 5rem;
  font-weight: 900;
  line-height: 1.2;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img``;

export const DegreesContainer = styled.div``;

export const MinTemp = styled.span`
  font-size: 13rem;
`;

export const MaxTemp = styled.span`
  font-size: 5rem;
`;

export const DegreesSignBig = styled.span`
  font-size: 7.2rem;
  align-self: start;
`;
export const DegreesSignSmall = styled.span`
  font-size: 3.2rem;
`;

export const TempSeparator = styled.span`
  font-size: 5rem;
  margin-right: 8px;
`;

export const WeatherText = styled.h2`
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
  color: #fff;
`;

export const Date = styled.p`
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.25;
`;

export const AddFavButton = styled(Button)`
  padding: 16px 24px;
  align-self: end;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
