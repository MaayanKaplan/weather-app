import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import deviceSize from "../Utils/deviceSize";
import customMedia from "../Utils/mediaQuery";

type LinkProps = {
  icon?: React.ReactNode;
  variant?: string | undefined;
  children?: React.ReactNode;
  to: string;
  mobile?: boolean;
};

const HeaderLink: React.FC<LinkProps> = ({
  icon,
  variant,
  children,
  to,
  mobile,
}) => {
  return (
    <LinkWrapper to={to} variant={variant}>
      <IconWrapper to={to}>{icon}</IconWrapper>
      <StyledText to={to} variant={variant}>
        {children}
      </StyledText>
    </LinkWrapper>
  );
};

const LinkWrapper = styled.div<{
  variant: string | undefined;
  to: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  /* text-decoration: ${(props) =>
    props.variant === "underline" ? "underline" : "none"}; */

  font-weight: ${(props) =>
    props.variant === "underline" ? "normal" : "bold"};

  ${customMedia.between("tablet", "desktop")`  
  `}
`;

const StyledText = styled(NavLink)<LinkProps>`
  /* font-size: 1.8rem; */
  font-size: ${(props) => (props.mobile === true ? "1.4rem" : "1.8rem")};
  line-height: 1.2;
  color: #fff;
  align-self: center;
  justify-self: center;
  text-decoration: none;

  border-bottom: ${(props) =>
    props.variant === "underline" ? "1px solid #fff" : "none"};

  @media ${deviceSize.tablet} {
    display: ${(props) => (props.variant === "underline" ? "none" : "block")};
  }

  ${customMedia.between("tablet", "desktop")`  

  `}
`;

const IconWrapper = styled(NavLink)<{ to: string }>``;

export default HeaderLink;
