import styled from "styled-components/macro";

export const EachHourWrapper = styled.div<{ isActive: boolean }>`
  min-height: 164px;
  min-width: 120px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  justify-content: space-between;
  padding: 20px 0;
  border-radius: 20px;
  color: #fff;
  ${({ isActive }) =>
    isActive &&
    `
      background-color: rgba(255, 255, 255, 0.3);
    `}

  :hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`;

export const Hour = styled.span`
  font-size: 2.4rem;
  line-height: 1.25;
`;

export const TempWrapper = styled.div`
  display: flex;
`;
export const Temperature = styled.span`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
`;

export const TempSign = styled.span`
  font-size: 1.8rem;
  line-height: 1.5;
`;

export const IconWrapper = styled.div``;

export const WindWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const WindIcon = styled.img`
  align-self: start;
`;

export const WindText = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;
`;
