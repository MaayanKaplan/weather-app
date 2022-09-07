import styled from "styled-components/macro";
import { ButtonProps } from "./types";

const getWhiteStyle = () => {
  return `
  padding: 16px 54px;
  box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: #444e72;
  font-weight: bold;
  }
   `;
};

const getPrimaryStyle = () => {
  return `
  border-radius: 10px;
  box-shadow: -4px 8px 50px 4px rgba(0, 0, 0, 0.16), inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(to left, #47bfdf, #4a91ff);
  color: #fff;
  font-weight: bold;
  display: flex;
  margin: 0 auto;
  
  `;
};

const getLinkStyle = () => {
  return `
    color: #222;
    text-decoration: underline;

    `;
};

const getGhostStyle = () => {
  return `
  padding: 16px 24px;
  border: solid 1px #fff;
  font-weight: bold;
  color: #fff;
  }
    `;
};

export const TextContainer = styled.span``;

export const ButtonWrapper = styled.button<ButtonProps>`
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;

  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 1.8rem;
  line-height: 1.2;

  ${(props) => {
    switch (props.variant) {
      case "white":
        return getWhiteStyle();
      case "ghost":
        return getGhostStyle();
      case "link":
        return getLinkStyle();
      case "primary":
      default:
        return getPrimaryStyle();
    }
  }}
  &:disabled ${TextContainer} {
    opacity: 0.4;
  }
`;
