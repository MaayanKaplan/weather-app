import styled from "styled-components/macro";
import Button from "../../../Common/Button/Button";

export const Description = styled.p`
  margin: 24px 42px 80px 32px;
  font-size: 1.8rem;
  line-height: 1.5;
  color: #444e72;
`;

export const Link = styled.button`
  /* margin: 64px 24px 16px 14px; */
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  color: #444e72;
  text-decoration: underline;
  display: inline-block;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  /* margin-left: 175px; */
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const PopUpButton = styled(Button)`
  padding: 16px 24px;
  margin: 0;
`;
