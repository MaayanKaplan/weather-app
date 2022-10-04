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
  min-width: 1180px;
  display: flex;
  gap: 193px;

  @media ${deviceSize.mobile} {
    gap: 60px;
  }
`;

export const EachDayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* :hover {
    width: 146px;
    height: 570px;
    padding: 19px 50px 34px 49px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.3);
  } */
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

export const Icon = styled.img`
  @media ${deviceSize.mobile} {
    width: 14px;
    height: 14px;
  }
`;

export const ChartWrapper = styled.div``;

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
