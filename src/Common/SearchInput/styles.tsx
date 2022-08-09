import styled from "styled-components/macro";
import deviceSize from "../../Utils/deviceSize";

const getFullStyle = () => {
  return `
  box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1),
  inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
background-color: #fff;
margin: 20px 0;
    
  `;
};

const getTransparentStyle = () => {
  return `
  background-color: rgba(255, 255, 255, 0.3);
  margin: 24px 0 0 370px;

  @media ${deviceSize.tablet} {
    margin: 24px 0 0 50px;
  }
  
  `;
};

export const InputWrapper = styled.div<{ variant: string }>`
  width: 372px;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  border-radius: 15px;
  font-size: 1.8rem;

  ${(props) => {
    if (props.variant === "full") {
      return getFullStyle();
    } else {
      return getTransparentStyle();
    }
  }}
`;

export const Input = styled.input<{ variant: string }>`
  border: none;
  width: 100%;
  outline: none;
  font-weight: bold;
  background-color: transparent;

  ::placeholder {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.2;
    text-align: left;
    width: 100%;
    /* color: #bebebe; */
    color: ${(props) => (props.variant === "full" ? "#bebebe" : "#fff")};
  }
`;
