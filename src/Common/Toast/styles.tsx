import styled from "styled-components/macro";
import { NotificationProps } from "./types";

const successStyle = () => {
  return `
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.16);
  color: #fff
  font-size: 2rem;
  font-weight: 300;
  `;
};

const errorStyle = () => {
  return `
  background-color: #ffe7e7;
  color: #4d4d4d;
  font-size: 1.4rem;
  margin-bottom: 32px;
  padding: 24px;
  `;
};

export const ToastWrapper = styled.div<NotificationProps>`
  width: 354px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;

  ${(props) => {
    if (props.severity === "success") {
      return successStyle();
    } else {
      return errorStyle();
    }
  }}
`;

export const Icon = styled.img``;

export const StyledDescription = styled.p`
  line-height: 1.25;
`;
