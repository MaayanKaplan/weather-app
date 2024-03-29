// import React, { useState } from "react";
import styled from "styled-components";
import LoginBox from "../Components/LoginBox/LoginBox";
import deviceSize from "../Utils/deviceSize";
import LogoImg from "../Images/logo.png";

const LoginPage = () => {
  return (
    <Container>
      <Logo src={LogoImg} alt="logo" />
      <LoginBox />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${deviceSize.tablet} {
    height: 100vh;
  }
  @media ${deviceSize.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 122px;
  height: 79px;
  position: absolute;
  top: 20px;
  left: 74px;

  @media ${deviceSize.tablet} {
    left: 50px;
  }

  @media ${deviceSize.mobile} {
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    width: 148px;
    height: 97px;
  }
`;

export default LoginPage;
