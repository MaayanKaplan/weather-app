import React from "react";
import { HeaderProps } from "./types";
import * as S from "./styles";
import Button from "../../Common/Button/Button";
import HeaderLink from "../../Common/HeaderLink";
import {
  IconFavoritesOutline,
  IconHomeOutline,
  IconSearchWhite,
} from "../../Common/Icon";

const MobileHeader = () => {
  return (
    <S.HeaderWrapper>
      <S.NavBar>
        <Button variant="ghost">
          <HeaderLink to={"/favorites"} icon={<IconFavoritesOutline />}>
            Favorites
          </HeaderLink>
        </Button>
        <Button variant="ghost">
          <IconSearchWhite />
          Search
        </Button>
        <Button variant="ghost">
          <HeaderLink to={"/"} icon={<IconHomeOutline />}>
            Home
          </HeaderLink>
        </Button>
      </S.NavBar>
    </S.HeaderWrapper>
  );
};

export default MobileHeader;
