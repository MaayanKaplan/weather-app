import React, { useState } from "react";
import * as S from "./styles";
import { SearchProps } from "./types";
import { getAutoComplete } from "../../api/axios";

const SearchInput: React.FC<SearchProps> = ({ placeholder, variant, icon }) => {
  const [value, setValue] = useState("");

  const inputValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
    return value;
  };

  getAutoComplete(value);

  return (
    <S.InputWrapper variant={variant}>
      <S.Input
        placeholder={placeholder}
        variant={variant}
        onChange={inputValue}
      />
      <div>{icon}</div>
    </S.InputWrapper>
  );
};

export default SearchInput;
