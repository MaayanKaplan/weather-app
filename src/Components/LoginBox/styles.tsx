import styled from "styled-components/macro";
import Button from "../../Common/Button/Button";

export const Container = styled.div`
  width: 732px;
  height: 649px;
  /* margin: 116px 594px 0 402px; */
  padding: 54px;
  border-radius: 30px;
  box-shadow: 0 4px 40px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;

  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const StyledTitle = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  color: #444e72;
  text-align: center;
  margin-bottom: 54px;
`;

export const DividerWrapper = styled.div`
  display: flex;
  margin-top: 48px;
  gap: 16px;
  align-items: center;
`;

export const Divider = styled.span`
  height: 2px;
  flex-grow: 1;
  background-color: #f2f2f2;
`;

export const StyledDescription = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 0 auto;
  margin-top: 52px;
  padding-bottom: 58px;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 0;
  gap: 8px;
`;

export const LoginButton = styled(Button)`
  margin-top: 8px;
  margin-bottom: 48px;
`;
