import styled from "styled-components";
import Button from "../Common/Button";
import Input from "../Common/Input";
import { IconFacebookLogo } from "../Common/Icon";
import { IconGoogleLogo } from "../Common/Icon";

const LoginBox = () => {
  return (
    <Container>
      <StyledTitle>Log in</StyledTitle>
      <Input />

      <SeparatorWrapper>
        <Separator />
        <StyledDescription>Or log in with</StyledDescription>
        <Separator />
      </SeparatorWrapper>
      <ButtonsWrapper>
        <ButtonWrapper>
          <IconFacebookLogo />
          <Button variant="link">Log in with Facebook</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <IconGoogleLogo />
          <Button variant="link">Log in with Google</Button>
        </ButtonWrapper>
      </ButtonsWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 732px;
  height: 649px;
  /* margin: 116px 594px 0 402px; */
  padding: 54px;
  border-radius: 30px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;

  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  color: #444e72;
  text-align: center;
  margin-bottom: 54px;
`;

const SeparatorWrapper = styled.div`
  display: flex;
  /* margin-top: 48px; */
  gap: 16px;
  align-items: center;
`;

const Separator = styled.span`
  height: 2px;
  flex-grow: 1;
  /* transform: rotate(-360deg); */
  background-color: #f2f2f2;
`;

const StyledDescription = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 0 auto;
  margin-top: 52px;
  padding-bottom: 58px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  gap: 8px;
`;

export default LoginBox;
