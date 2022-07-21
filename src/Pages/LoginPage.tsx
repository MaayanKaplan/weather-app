import React, { useState } from "react";
import styled from "styled-components";
import LoginBox from "../Components/LoginBox/LoginBox";
import { deviceSize } from "../Utils/constants";
import Logo from "../Common/Logo";

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
      <LoginLogo margin={"50px"} />
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
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(241deg, #47bfdf, #4a91ff),
    linear-gradient(to bottom, #fff, #fff);
  position: relative;

  @media (max-width: ${deviceSize.mobile}) {
    display: flex;
    flex-direction: column;
  }
`;

const LoginLogo = styled(Logo)`
  margin: 100px;
`;

export default LoginPage;
