import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { deviceSize } from "../Utils/constants";

type LinkProps = {
  icon: React.ReactNode;
  variant?: string | undefined;
  children?: React.ReactNode;
  to: string;
};

const HeaderLink: React.FC<LinkProps> = ({ icon, variant, children, to }) => {
  return (
    <LinkWrapper variant={variant}>
      {icon}
      <StyledText to={to} variant={variant}>
        {children}
      </StyledText>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div<{ variant: string | undefined }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  /* text-decoration: ${(props) =>
    props.variant === "underline" ? "underline" : "none"}; */

  font-weight: ${(props) =>
    props.variant === "underline" ? "normal" : "bold"};

  @media (max-width: ${deviceSize.tablet}) {
    :first-child {
      margin-left: 32px;
    }
  }
`;

const StyledText = styled(NavLink)<{ variant: string | undefined }>`
  font-size: 1.8rem;
  line-height: 1.2;
  color: #fff;
  align-self: center;
  justify-self: center;
  text-decoration: none;

  border-bottom: ${(props) =>
    props.variant === "underline" ? "1px solid #fff" : "none"};

  @media (max-width: ${deviceSize.tablet}) {
    display: ${(props) => (props.variant === "underline" ? "none" : "block")};
  }
`;

export default HeaderLink;
