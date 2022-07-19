import React, { useState } from "react";
import styled from "styled-components";
import LoginBox from "../Components/LoginBox/LoginBox";
import LogoImage from "../Images/logo.svg";
import { deviceSize } from "../Utils/constants";

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
      <StyledImage src={LogoImage} alt="App's logo" />
      <LoginBox
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        title={"Email account"}
        placeholder="6 charaters and digit numbers blabla"
        email={text}
        password={text}
      ></LoginBox>
    </Container>
  );
};

const Container = styled.div`
  width: 1920px;
  height: 1080px;
  background-image: linear-gradient(241deg, #47bfdf, #4a91ff),
    linear-gradient(to bottom, #fff, #fff);

  @media (max-width: ${deviceSize.mobile}) {
    width: 414px;
    height: 712px;
    display: flex;
    flex-direction: column;
  }
`;

const StyledImage = styled.img`
  margin-left: 74px;
  margin-bottom: 116px;
  display: inline-block;

  @media (max-width: ${deviceSize.mobile}) {
    margin: 0 122px 31px 144px;

    /* width: 148px;
    height: 97px; */
  } ;
`;

export default LoginPage;
