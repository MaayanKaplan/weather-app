import React, { useState } from "react";
// import { SearchProps } from "./types";
import SearchInput from "../../Common/SearchInput/SearchInput";
import SearchModal from "../../Common/SearchModal/SearchModal";
import useWithOverlay from "../../hooks/useWithOverlay";
import { IconSearchDark } from "../../Common/Icon/Icon";

const CitySearch: React.FC = () => {
  const OverlaySearchModal = useWithOverlay(SearchModal);
  const [searchValue, setSearchValue] = useState<string>("");
  // Portal
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const isOpen = !!searchValue && isFocused;
  const handleOpen = (state: boolean) => () => {
    setIsFocused(state);
  };
  return (
    <>
      <SearchInput
        variant={"full"}
        placeholder={"Try “Tel Aviv - Jaffa”..."}
        inputValue={inputValue}
        handleOpen={handleOpen(true)}
        icon={<IconSearchDark />}
      />

      <OverlaySearchModal
        isVisible={isOpen}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        onClickOverlay={handleOpen(false)}
        onClose={handleOpen(false)}
      />
    </>
  );
};

export default CitySearch;
