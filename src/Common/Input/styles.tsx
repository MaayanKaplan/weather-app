import styled from "styled-components/macro";

interface Props {
  error?: string;
}

export const InputWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px 24px;
  border-radius: 10px;
  background-color: #f2f2f2;
  width: 354px;
  margin: 0 auto;
  gap: 4px;
  border: solid 1px transparent;
  /* margin-bottom: 32px; */

  ${(props) =>
    props.error
      ? `
    border: solid 1px #f0274b;
    background-color: #fff;
    ${Label} {
      color: #f0274b;
     }
     ${Input} {
      background-color: #fff
     }
     
     `
      : `
    :focus-within {
      border: solid 1px #222;
      background-color: #fff;
    }
  `}
`;

export const Label = styled.label`
  font-size: 1.4rem;
  line-height: 1.25;
  color: #838baa;
`;

export const Input = styled.input<Props>`
  border: none;
  background-color: #f2f2f2;
  font-size: 1.8rem;
  line-height: 1.5;
  width: 100%;

  :focus {
    outline: none;
    background-color: #fff;
  }

  &::placeholder {
    color: #bebebe;
    /* background-color: ${(props) =>
      props.error ? "#fff" : "transparent"}; */
    background-color: transparent;
  }
`;

export const ErrorWrapper = styled.div`
  min-height: 32px;
  width: 354px;
  margin: 0 auto;
`;

export const Error = styled.p`
  font-family: inherit;
  font-size: 1.4rem;
  line-height: 1.25;
  color: #f0274b;
  padding-top: 4px;
`;
