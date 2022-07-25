import React from "react";
import styled from "styled-components/macro";
import { IconSearchDark } from "./Icon";

type SearchProps = {
  placeholder: string;
};

const SearchInput: React.FC<SearchProps> = ({ placeholder }) => {
  return (
    <InputWrapper>
      <StyledInput placeholder={placeholder} />
      <IconSearchDark />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  width: 372px;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 12px 24px;
  border-radius: 15px;
  box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1),
    inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
  font-size: 1.8rem;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  font-weight: bold;

  ::placeholder {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.2;
    text-align: left;
    color: #bebebe;
    width: 100%;
  }
`;

export default SearchInput;
