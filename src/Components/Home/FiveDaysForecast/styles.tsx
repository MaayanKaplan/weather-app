import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 1180px;
  height: 602px;
  margin: 24px 0 85px 0;
  padding: 35px 96px 16px 95px;
  border-radius: 20px;
  /* -webkit-filter: blur(1px); */
  /* filter: blur(1px); */
  background-color: rgba(255, 255, 255, 0.3);
  color: #fff;
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
  color: #fff;
`;

export const ContentWrapper = styled.div`
  min-width: 1180px;
  /* 
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 193px; */

  display: flex;
  gap: 193px;
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
`;

export const Date = styled.span`
  font-size: 1.8rem;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const Icon = styled.img``;

export const ChartWrapper = styled.div``;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  gap: 207px;
`;
