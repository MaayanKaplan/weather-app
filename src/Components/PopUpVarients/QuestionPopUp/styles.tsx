import styled from "styled-components/macro";
import Button from "../../../Common/Button/Button";

export const Description = styled.p`
  margin: 24px 70px 80px 0;
  font-size: 1.8rem;
  line-height: 1.5;
  color: #444e72;
`;

export const Link = styled.button`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
  color: #444e72;

  text-decoration: underline;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
  margin: 0 30px 48px 0;
`;

export const PopUpButton = styled(Button)`
  padding: 16px 24px;
  margin: 0;
`;
