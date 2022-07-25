import React from "react";
import styled from "styled-components/macro";
import MoonImage from "../Images/moonlogo.svg";
import { deviceSize } from "../Utils/constants";

const Logo = () => {
  return (
    <LogoWrapper className="logo">
      <LogoImage src={MoonImage} alt="Moon Image" />
      <LogoText>WeatherApp</LogoText>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  height: 71.8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const LogoImage = styled.img`
  width: 42px;
  height: 42px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: ${deviceSize.tablet}) {
    width: 31px;
    height: 31px;
  }
`;

const LogoText = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  font-weight: 900;

  @media (max-width: ${deviceSize.tablet}) {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export default Logo;
