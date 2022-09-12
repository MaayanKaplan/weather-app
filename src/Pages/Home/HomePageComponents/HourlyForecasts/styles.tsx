import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  width: 100%;
  overflow-x: scroll;
  margin-bottom: 56px;
`;

export const EachHourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: #fff;
`;

export const Hour = styled.span`
  font-size: 2.4rem;
  line-height: 1.25;
`;

export const Temperature = styled.span`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
`;

export const TempSign = styled.span`
  font-size: 1.8rem;
  line-height: 1.25;
`;

export const IconWrapper = styled.div``;

export const WindWrapper = styled.div`
  display: flex;
`;

export const WindIcon = styled.img``;

export const WindText = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
`;
