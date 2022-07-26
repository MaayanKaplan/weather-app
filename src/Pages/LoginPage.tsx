import React, { useState } from "react";
import styled from "styled-components";
import LoginBox from "../Components/LoginBox/LoginBox";
import deviceSize from "../Utils/deviceSize";
import LogoImg from "../Images/logo.png";

type PageProps = {
  value: string;
  placeholder?: string;
  title?: string;
  error?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  email: string;
  password: string;
};

const LoginPage: React.FC<PageProps> = ({
  title,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  email,
  password,
}) => {
  const [text, setText] = useState<string>("");
  return (
    <Container>
      <Logo src={LogoImg} alt="logo" />
      <LoginBox
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        title={"Email account"}
        placeholder="6 characters and digit numbers"
        email={text}
        password={text}
      ></LoginBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      241deg,
      ${(props) => props.theme.primary},
      #4a91ff
    ),
    linear-gradient(to bottom, #fff, #fff);

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${deviceSize.mobile} {
    display: flex;
    flex-direction: column;
    /* padding-top: 184px; */
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
    top: 56px;
    left: 122px;
    width: 148px;
    height: 97px;
  }
`;

export default LoginPage;
