import Button from "../../Common/Button/Button";
import Input from "../../Common/Input/Input";
import { IconFacebookLogo } from "../../Common/Icon";
import { IconGoogleLogo } from "../../Common/Icon";
import { useState } from "react";
import { InputProps } from "./types";
import * as S from "./styles";

const LoginBox: React.FC<InputProps> = ({
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
    <S.Container>
      <S.StyledTitle>Log in</S.StyledTitle>
      <Input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        title={"Email account"}
        placeholder="example@example.com"
        email={text}
        password={text}
      ></Input>
      <Input
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        title={"Password"}
        placeholder="6 characters and digit numbers"
        email={text}
        password={text}
      ></Input>

      <S.LoginButton onClick={() => console.log("test")} variant="primary">
        Log in
      </S.LoginButton>
      <S.DividerWrapper>
        <S.Divider />
        <S.StyledDescription>Or log in with</S.StyledDescription>
        <S.Divider />
      </S.DividerWrapper>
      <S.ButtonsWrapper>
        <S.ButtonWrapper>
          <IconFacebookLogo />
          <Button onClick={() => console.log("Facebook")} variant="link">
            Log in with Facebook
          </Button>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <IconGoogleLogo />
          <Button onClick={() => console.log("Google")} variant="link">
            Log in with Google
          </Button>
        </S.ButtonWrapper>
      </S.ButtonsWrapper>
    </S.Container>
  );
};

export default LoginBox;
