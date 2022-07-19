import React from "react";
import styled from "styled-components/macro";

type LinkProps = {
  icon: React.ReactNode;
  text?: string;
  variant?: string;
  children?: React.ReactNode;
};

const NavLink: React.FC<LinkProps> = ({ icon, variant, children }) => {
  return <LinkWrapper>{icon}</LinkWrapper>;
};

const LinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
interface Props {
  variant: string;
  children: React.ReactNode;
}
const StyledText = styled.a<LinkProps>`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.2;
  color: #fff;
  align-self: center;
  justify-self: center;
  /* 
  ${(props) => {
    if (props.variant === "underline") {
      return `
        text-decoration: underline;
        font-weight: normal;
      `;
    }
  }} */
`;

export default NavLink;
