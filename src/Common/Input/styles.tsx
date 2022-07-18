import styled from "styled-components/macro";

interface Props {
  error?: string;
}

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: 32px; */
  margin-bottom: 32px;
`;

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

  ${(props) =>
    props.error
      ? `
    border: solid 1px #f0274b;
    ${StyledLabel} {
      color: #f0274b;
     } `
      : `
    :focus-within {
      border: solid 1px #222;
    }
  `}
`;

export const StyledLabel = styled.label`
  font-size: 1.4rem;
  line-height: 1.25;
  color: #838baa;
`;

export const StyledInput = styled.input`
  border: none;
  background-color: #f2f2f2;
  font-size: 1.8rem;
  line-height: 1.5;
  width: 100%;

  &::placeholder {
    color: #bebebe;
  }
`;

export const Error = styled.p`
  font-family: inherit;
  font-size: 1.4rem;
  line-height: 1.25;
  color: #f0274b;
  padding-top: 4px;
`;
