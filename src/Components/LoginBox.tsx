import styled from "styled-components";
import Button from "../Common/Button";
import Input from "../Common/Input";

const LoginBox = () => {
  return (
    <Container>
      <StyledTitle>Log in</StyledTitle>
      <Input />
      <Button variant="primary">Log in</Button>
      <ButtonsWrapper>
        <Button variant="link">Log in with Facebook</Button>
        <Button variant="link">Log in with Google</Button>
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

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 0 auto;
  margin-top: 52px;
`;

export default LoginBox;
