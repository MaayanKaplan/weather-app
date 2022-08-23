import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";
import Button from "../Button/Button";

export const Container = styled.div`
  position: relative;
  width: 502px;
  /* height: 308px; */

  padding: 32px 32px 48px 48px;
  border-radius: 30px;
  box-shadow: 0 4px 80px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;

  @media ${deviceSize.mobile} {
    width: 100%;
    padding: 40px 30px 0;
    box-shadow: 0 -7px 30px 0 rgba(0, 0, 0, 0.16);
    background-color: #fcfcfc;
    border-radius: 30px 30px 0 0;

    position: absolute;
    bottom: 0;
  }
`;

export const Title = styled.h1`
  margin: 16px 14px 16px 0;
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
  color: #444e72;

  @media ${deviceSize.mobile} {
    /* margin: 40px 30px 36px; */
    margin: 0;
  }
`;

export const CloseIcon = styled.img`
  position: absolute;
  height: 24px;
  width: 24px;
  top: 32px;
  right: 32px;
  cursor: pointer;

  @media ${deviceSize.mobile} {
    display: none;
  }
`;
