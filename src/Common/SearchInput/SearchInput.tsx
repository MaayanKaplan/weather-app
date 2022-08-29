import React, { useState } from "react";
import * as S from "./styles";
import { SearchProps } from "./types";
import SearchModal from "./SearchModal/SearchModal";

const SearchInput: React.FC<SearchProps> = ({ placeholder, variant, icon }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  // Portal
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const onFocus = () => {
    if (searchValue.length >= 2) setIsFocused(true);
  };
  const onBlur = () => setIsFocused(false);

  const inputValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
    // console.log(value);
    return searchValue;
  };

  return (
    <>
      <S.InputWrapper variant={variant}>
        <S.Input
          placeholder={placeholder}
          variant={variant}
          onChange={inputValue}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <div>{icon}</div>
      </S.InputWrapper>

      <SearchModal isOpen={isFocused} searchValue={searchValue} />
    </>
  );
};

export default SearchInput;
