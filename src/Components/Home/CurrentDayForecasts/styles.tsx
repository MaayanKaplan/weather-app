import styled from "styled-components/macro";
import Button from "../../../Common/Button/Button";
import Toast from "../../../Common/Toast/Toast";
import deviceSize from "../../../Utils/deviceSize";

export const CurrentDayContainer = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  margin-bottom: 88px;

  @media ${deviceSize.mobile} {
    justify-content: center;
    margin-bottom: unset;
  }
`;

export const InfoWrapper = styled.div`
  @media ${deviceSize.mobile} {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 113px 57px 48px 57px;
  }
`;

export const CityTitle = styled.h1`
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-size: 5rem;
  font-weight: 900;
  line-height: 1.2;

  @media ${deviceSize.mobile} {
    font-size: 3.2rem;
    font-weight: bold;
    text-align: center;
  }
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const WeatherImage = styled.div`
  width: 180px;
  height: 180px;
  @media ${deviceSize.mobile} {
    width: 120px;
    height: 100px;
    align-self: end;
  }
`;

export const Image = styled.img`
  @media ${deviceSize.mobile} {
    width: 120px;
    height: 100px;
    align-self: end;
  }
`;

export const DegreesContainer = styled.div``;

export const MinTemp = styled.span`
  font-size: 13rem;

  @media ${deviceSize.mobile} {
    font-size: 8rem;
  }
`;

export const MaxTemp = styled.span`
  font-size: 5rem;

  @media ${deviceSize.mobile} {
    font-size: 3.6rem;
  }
`;

export const DegreesSignBig = styled.span`
  font-size: 7.2rem;
  align-self: start;

  @media ${deviceSize.mobile} {
    font-size: 4.8rem;
  }
`;
export const DegreesSignSmall = styled.span`
  font-size: 3.2rem;

  @media ${deviceSize.mobile} {
    font-size: 2.4rem;
  }
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

  @media ${deviceSize.mobile} {
    font-size: 2.4rem;
    text-align: center;
  }
`;

export const Date = styled.p`
  text-shadow: -2px 3px 1px rgba(0, 0, 0, 0.1),
    -1px 1px 2px rgba(255, 255, 255, 0.25);
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.25;

  @media ${deviceSize.mobile} {
    font-size: 1.4rem;
    text-align: center;
  }
`;

export const AddFavButton = styled(Button)`
  padding: 16px 24px;
  align-self: end;

  @media ${deviceSize.mobile} {
    display: none;
  }
`;

export const BtnIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const AddFavNotification = styled(Toast)`
  position: absolute;
  top: 600px;
  /* left: auto;
  right: auto; */
  display: flex;
  align-self: center;
  margin: 0 auto;
  /* margin-top: 80px; */
  /* margin: 80px auto 0 auto; */
  width: 434px;
  height: 86px;
  font-size: 2rem;
  font-weight: 300;
`;
