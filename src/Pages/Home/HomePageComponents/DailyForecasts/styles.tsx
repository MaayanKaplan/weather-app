import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 35px 70px;
  border-radius: 20px;
  border: solid 1px #fff;
  color: #fff;

  display: flex;
  justify-content: space-between;
  margin-bottom: 140px;
`;

export const EachDayWrapper = styled.div``;

export const Title = styled.h3`
  font-size: 2.4rem;
  line-height: 1.25;
  margin-bottom: 40px;
`;

export const TempWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TempIcon = styled.div`
  /* align-self: center; */
  margin-right: 4px;
`;

export const TempMin = styled.span`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
`;
export const TempMax = styled.span`
  font-size: 2.4rem;
  font-weight: 500;
  line-height: 1.25;
  align-self: flex-end;
`;

export const DegreesSign = styled.span`
  font-size: 2rem;
  align-self: flex-start;
`;
