import styled from "styled-components/macro";
import deviceSize from "../../../Utils/deviceSize";

export const Carousel = styled.div``;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 85px;
  margin-bottom: 59px;
  width: 100%;
  overflow-x: scroll;

  @media ${deviceSize.mobile} {
    gap: 11px;
    margin: 0 30px 60px 30px;
  }
`;

export const ArrowWrapper = styled.div`
  display: flex;
  margin-bottom: 156px;
  justify-content: end;
  gap: 22px;

  @media ${deviceSize.mobile} {
    display: none;
  }
`;

export const LeftArrow = styled.img`
  cursor: pointer;
`;

export const RightArrow = styled.img`
  cursor: pointer;
`;
