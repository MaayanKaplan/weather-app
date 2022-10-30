import styled from "styled-components/macro";
import deviceSize from "../../../Utils/deviceSize";

export const Container = styled.div`
  padding: 35px 70px;
  border-radius: 20px;
  border: solid 1px #fff;
  color: #fff;

  display: flex;
  justify-content: space-between;
  margin-bottom: 140px;

  @media ${deviceSize.mobile} {
    border: none;
    flex-direction: column;
    gap: 11px;
    padding: 0 30px;
    margin-bottom: 50px;
  }
`;

export const EachDayWrapper = styled.div`
  @media ${deviceSize.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Title = styled.h3`
  font-size: 2.4rem;
  line-height: 1.25;
  margin-bottom: 40px;

  @media ${deviceSize.mobile} {
    display: flex;
    font-size: 1.8rem;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: unset;
  }
`;

export const TempIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 4px;
`;

export const TempWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TempMin = styled.span`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
  align-self: center;

  @media ${deviceSize.mobile} {
    font-size: 1.8rem;
    line-height: 1.2;
  }
`;
export const TempMax = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.25;
  align-self: flex-end;
  margin-bottom: 3px;

  @media ${deviceSize.mobile} {
    font-size: 1.6rem;
    align-self: center;
    text-align: right;
    margin-bottom: unset;
  }
`;

export const DegreesSign = styled.span`
  font-size: 2rem;
  align-self: flex-start;

  @media ${deviceSize.mobile} {
    font-size: 1.4rem;
    line-height: 1.25;
    align-self: center;
  }
`;
