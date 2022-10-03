import styled from "styled-components/macro";
import deviceSize from "../../../../Utils/deviceSize";

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

  @media ${deviceSize.mobile} {
    min-width: 80px;
    min-height: 106px;
    gap: 4px;
  }
`;

export const Hour = styled.span`
  font-size: 2.4rem;
  line-height: 1.25;

  @media ${deviceSize.mobile} {
    font-size: 1.4rem;
  }
`;

export const TempWrapper = styled.div`
  display: flex;
`;
export const Temperature = styled.span`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;

  @media ${deviceSize.mobile} {
    font-size: 1.8rem;
    line-height: 1.2;
  }
`;

export const TempSign = styled.span`
  font-size: 1.8rem;
  line-height: 1.5;

  @media ${deviceSize.mobile} {
    font-size: 1.4rem;
    line-height: 1.25;
  }
`;

export const IconWrapper = styled.div`
  @media ${deviceSize.mobile} {
    width: 16px;
    height: 16px;
    margin-bottom: 25px;
  }
`;

export const WindWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const WindIcon = styled.img`
  align-self: start;

  @media ${deviceSize.mobile} {
    width: 16.5px;
    height: 16.2px;
  }
`;

export const WindText = styled.p`
  font-size: 1.8rem;
  line-height: 1.5;

  @media ${deviceSize.mobile} {
    font-size: 1.2rem;
    line-height: 1.25;
  }
`;
