import React, { useCallback, useRef, useState } from "react";
import * as S from "./styles";
import { SearchProps } from "./types";
import SearchModal from "./SearchModal/SearchModal";
import WithOverlay from "../../hooks/WithOverlay";

const OverlaySearchModal = WithOverlay(SearchModal);

const SearchInput: React.FC<SearchProps> = ({ placeholder, variant, icon }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  // Portal
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const isOpen = !!searchValue && isFocused;
  const handleOpen = (state: boolean) => () => setIsFocused(state);
  return (
    <>
      <S.InputWrapper variant={variant}>
        <S.Input
          placeholder={placeholder}
          variant={variant}
          onChange={inputValue}
          onFocus={handleOpen(true)}
        />
        <div>{icon}</div>
      </S.InputWrapper>

      <OverlaySearchModal
        isVisible={isOpen}
        searchValue={searchValue}
        onClickOverlay={handleOpen(false)}
        onClose={handleOpen(false)}
        // onClickOutside={handleClickOutside}
      />
    </>
  );
};

export default SearchInput;
