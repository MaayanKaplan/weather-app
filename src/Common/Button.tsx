import React from "react";
import styled from "styled-components";
import { Theme } from "../themes";

type ButtonVariants = "primary" | "white" | "ghost" | "link" | "nav-link";

interface Props {
  variant?: ButtonVariants;
  theme?: Theme;
}

const Button = styled.button<Props>`
  background: none;
  font-family: inherit;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 1.8rem;
  line-height: 1.2;
  cursor: pointer;
  /* padding: 16px 54px; */

  &:disabled {
    opacity: 0.4;
  }

  ${(props: Props) => {
    switch (props.variant) {
      case "white":
        return `
          padding: 16px 54px;
          box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
          background-color: #fff;
          color: #444e72;
          font-weight: bold;
        `;
      case "ghost":
        return `
        padding: 16px 24px;
        border: solid 1px #fff;
        font-weight: bold;
        color: #fff;
        `;
      case "link":
        return `
          text-decoration: underline;
          color: #222
        `;
      case "nav-link":
        return `
          color: #fff;
        `;
      case "primary":
      default:
        return `
          padding: 16px 146px;
          border-radius: 10px;
          box-shadow: -4px 8px 50px 4px rgba(0, 0, 0, 0.16), inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
          background-image: linear-gradient(to left, #47bfdf, #4a91ff);
          color: #fff;
          font-weight: bold;
        `;
    }
  }}
`;

export default Button;
