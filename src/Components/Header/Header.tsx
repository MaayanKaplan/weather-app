import React, { useState } from "react";
import * as S from "./styles";
import {
  IconHomeFull,
  IconFavoritesOutline,
  IconMap,
  IconLogout,
  IconDarkSun,
  IconDarkMoon,
} from "../../Common/Icon";
import Switch from "../../Common/Switch";
import HeaderLink from "../../Common/HeaderLink";
import SearchInput from "../../Common/SearchInput/SearchInput";
import LogoImg from "../../Images/logo.png";
import { IconSearchDark, IconSearchWhite } from "../../Common/Icon";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);
  return (
    <S.HeaderWrapper>
      <S.Logo src={LogoImg} alt="logo" />
      <S.NavWrapper>
        <HeaderLink to={"/"} icon={<IconHomeFull />}>
          Home
        </HeaderLink>
        <HeaderLink to={"/favorites"} icon={<IconFavoritesOutline />}>
          Favorites
        </HeaderLink>
      </S.NavWrapper>
      <SearchInput
        variant={"full"}
        placeholder={"Try “Tel Aviv - Jaffa”..."}
        icon={<IconSearchDark />}
      />
      <S.RightWrapper>
        <HeaderLink to={"/map"} icon={<IconMap />} variant={"underline"}>
          Switch to map
        </HeaderLink>
        <S.SwitchesWrapper>
          <Switch
            id={"degree-id"}
            value={toggle}
            left={"F°"}
            right={"C°"}
            onChange={() => {
              setToggle(!toggle);
            }}
          />

          <Switch
            id={"theme-id"}
            value={toggle2}
            left={<IconDarkSun />}
            right={<IconDarkMoon />}
            onChange={() => {
              setToggle2(!toggle2);
            }}
          />
        </S.SwitchesWrapper>
        <S.LastLinkWrapper>
          <HeaderLink
            mobile
            to={"/login"}
            icon={<IconLogout />}
            variant={"underline"}
          >
            Log out
          </HeaderLink>
        </S.LastLinkWrapper>
      </S.RightWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
