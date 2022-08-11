import React from "react";
import { HeaderProps } from "./types";
import * as S from "./styles";

import HeaderLink from "../../Common/HeaderLink";
import {
  IconFavoritesOutline,
  IconHomeOutline,
  IconSearchWhite,
} from "../../Common/Icon/Icon";

const MobileHeader = () => {
  return (
    <S.HeaderWrapper>
      <S.NavBar>
        <S.NavButton>
          <S.IconWrapper>
            <IconFavoritesOutline />
          </S.IconWrapper>
          <HeaderLink to={"/favorites"}>Favorites</HeaderLink>
        </S.NavButton>
        <S.Separator />
        <S.NavButton>
          <S.IconWrapper>
            <IconSearchWhite />
          </S.IconWrapper>
          Search
        </S.NavButton>
        <S.Separator />
        <S.NavButton>
          <S.IconWrapper>
            <IconHomeOutline />
          </S.IconWrapper>
          <HeaderLink to={"/"}>Home</HeaderLink>
        </S.NavButton>
      </S.NavBar>
    </S.HeaderWrapper>
  );
};

export default MobileHeader;
