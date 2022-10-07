import * as React from "react";
import * as S from "./styles";
import { SearchProps } from "./types";

const SearchInput: React.FC<SearchProps> = ({
  placeholder,
  variant,
  icon,
  inputValue,
  handleOpen,
}) => {
  return (
    <>
      <S.InputWrapper variant={variant}>
        <S.Input
          placeholder={placeholder}
          variant={variant}
          onChange={inputValue}
          onFocus={handleOpen}
        />
        <div>{icon}</div>
      </S.InputWrapper>
    </>
  );
};

export default SearchInput;
