import styled from "styled-components/macro";
import deviceSize from "../../../Utils/deviceSize";

export const Container = styled.div`
  max-width: 1180px;
  height: 602px;
  margin: 24px 0 85px 0;
  padding: 35px 96px 16px 95px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3);
  color: #fff;

  z-index: 1;
  position: relative;

  @media ${deviceSize.tablet} {
    margin: 24px auto 85px auto;
  }

  @media ${deviceSize.mobile} {
    background-color: transparent;
    padding: 35px 30px 16px 30px;
    margin: 0%;
  }
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
  color: #fff;

  @media ${deviceSize.mobile} {
    color: #444e72;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 100%;
  /* display: flex; */
  /* gap: 193px; */

  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
  column-gap: 20%; */
  column-gap: 90px;
  grid-template-columns: repeat(5, 1fr);
  /* grid-template-rows: min-content 250px 250px 66px; */

  @media ${deviceSize.mobile} {
    gap: 60px;
  }
`;

export const EachDayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  :hover {
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

export const Day = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  margin-bottom: 6px;

  @media ${deviceSize.mobile} {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 27px;
    color: #444e72;
  }
`;

export const Date = styled.span`
  font-size: 1.8rem;
  line-height: 1.5;
  margin-bottom: 24px;

  @media ${deviceSize.mobile} {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.25;
    color: #bebebe;
  }
`;

export const IconSun = styled.img`
  margin-bottom: 370px;
  @media ${deviceSize.mobile} {
    width: 14px;
    height: 14px;
  }
`;

export const IconMoon = styled.img`
  @media ${deviceSize.mobile} {
    width: 14px;
    height: 14px;
  }
`;

export const ChartWrapper = styled.div`
  /* max-width: 970px; */
  z-index: 1000;
  position: absolute;
  top: 150px;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  gap: 207px;

  @media ${deviceSize.mobile} {
    gap: 75px;
  }
`;
