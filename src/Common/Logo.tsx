import React from "react";
import styled from "styled-components/macro";
import MoonImage from "../Images/moonlogo.svg";
import { deviceSize } from "../Utils/constants";

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoImage src={MoonImage} alt="Moon Image" />
      <LogoText>WeatherApp</LogoText>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  height: 71.8px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const LogoImage = styled.img`
  width: 48px;
  height: 51px;
  justify-content: center;
  align-items: center;
  margin: 0 31px;

  @media (max-width: ${deviceSize.tablet}) {
    width: 36px;
    height: 36px;
  }
`;

const LogoText = styled.h1`
  color: #fff;

  @media (max-width: ${deviceSize.tablet}) {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export default Logo;
