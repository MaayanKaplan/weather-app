import styled from "styled-components/macro";
import { NotificationProps } from "./types";

const successStyle = () => {
  return `
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.16);
  color: #fff
  `;
};

const errorStyle = () => {
  return `
  background-color: #ffe7e7;
  color: #4d4d4d;
  `;
};

export const NotificationBoxWrapper = styled.div<NotificationProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;

  ${(props) => {
    if (props.security === "success") {
      return successStyle();
    } else {
      return errorStyle();
    }
  }}
`;

export const IconWrapper = styled.div`
  height: 28px;
  width: 28px;
`;

export const StyledDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.25;
`;
