import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { SearchProps } from "./types";
import { getAutoComplete } from "../../api/axios";
import { useQuery } from "@tanstack/react-query";

const SearchInput: React.FC<SearchProps> = ({ placeholder, variant, icon }) => {
  const [value, setValue] = useState("");

  // const queryResult = useQuery(["Autocomplete"], getAutoComplete(value));

  const inputValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    // console.log(e.target.value);
    return value;
  };

  // useEffect(() => {
  //   getAutoComplete(value);
  // }, [value]);

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
