import React from "react";
import styled from "styled-components/macro";
import { IconWarning } from "./Icon";

type NotificationProps = {
  errorDescription: string;
  children?: React.ReactNode;
  // icon: React.ReactNode;
};

const NotificationBox: React.FC<NotificationProps> = ({
  errorDescription,
  // icon,
  children,
}) => {
  return (
    <StyledWarningBox>
      <IconWrapper>
        <IconWarning />
      </IconWrapper>
      <StyledDescription>{errorDescription}</StyledDescription>
    </StyledWarningBox>
  );
};

const StyledWarningBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px;
  border-radius: 10px;
  background-color: #ffe7e7;
  margin: 0 auto;
  text-align: center;
  width: 354px;
`;

const IconWrapper = styled.div`
  height: 28px;
  width: 28px;
`;

const StyledDescription = styled.p`
  font-size: 1.4rem;
  line-height: 1.25;
  color: #4d4d4d;
`;

export default NotificationBox;
