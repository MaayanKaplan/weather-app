import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";

export const Container = styled.div`
  position: relative;
  width: 502px;
  height: 308px;
  padding: 32px 32px 48px 48px;
  border-radius: 30px;
  box-shadow: 0 4px 80px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;

  @media ${deviceSize.mobile} {
    width: 414px;
    height: 340px;
    bottom: 0;
    padding: 40px 30px 48px;
    /* transform: rotate(-180deg); */
    box-shadow: 0 -7px 30px 0 rgba(0, 0, 0, 0.16);
    background-color: #fcfcfc;
    border-radius: 30px 30px 0 0;
  }
`;

export const Title = styled.h1`
  margin: 16px 14px 16px 0;
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.25;
  color: #444e72;
`;

export const Description = styled.p`
  margin: 16px 56px 48px 0;
  font-size: 1.8rem;
  line-height: 1.5;
  color: #444e72;
`;

export const Link = styled.a`
  margin: 64px 24px 16px 14px;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  color: #444e72;
`;

export const Icon = styled.img`
  position: absolute;
  height: 24px;
  width: 24px;
  top: 32px;
  right: 32px;
`;
