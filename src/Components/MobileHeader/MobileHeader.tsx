import { useState } from "react";
import { HeaderProps } from "./types";
import * as S from "./styles";
import PopUp from "../../Common/PopUp/PopUp";

import {
  IconFavoritesOutline,
  IconHomeOutline,
  IconSearchWhite,
} from "../../Common/Icon/Icon";

const MobileHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <S.HeaderWrapper>
      <S.NavBar>
        <S.NavButton variant="ghost" onClick={() => console.log("click")}>
          <S.ContentWrapper>
            <S.IconWrapper to={"/favorites"}>
              <IconFavoritesOutline />
            </S.IconWrapper>
            <S.Text to={"/favorites"}>Favorites</S.Text>
          </S.ContentWrapper>
        </S.NavButton>
        <S.Separator />
        <S.NavButton
          variant="ghost"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <IconSearchWhite />
          Search
        </S.NavButton>
        <S.Separator />
        <S.NavButton variant="ghost" onClick={() => console.log("click")}>
          <S.IconWrapper to={"/"}>
            <IconHomeOutline />
          </S.IconWrapper>
          <S.Text to={"/"}>Home</S.Text>
        </S.NavButton>
      </S.NavBar>
    </S.HeaderWrapper>
  );
};

export default MobileHeader;
