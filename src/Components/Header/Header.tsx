import React, { useState } from "react";
import * as S from "./styles";
import LogoImage from "../../Images/moonlogo.svg";
import {
  IconHomeFull,
  IconFavoritesOutline,
  IconMap,
  IconLogout,
  IconC,
  IconF,
  IconDarkSun,
  IconDarkMoon,
} from "../../Common/Icon";
import Switch from "../../Common/Switch";
import HeaderLink from "../../Common/HeaderLink";
import SearchInput from "../../Common/SearchInput";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);
  return (
    <S.HeaderWrapper>
      <S.LogoWrapper>
        <S.Logo src={LogoImage} alt="App's logo" />
        <S.LogoText>WeatherApp</S.LogoText>
      </S.LogoWrapper>
      <S.NavWrapper>
        <HeaderLink to={"/"} icon={<IconHomeFull />}>
          Home
        </HeaderLink>
        <HeaderLink to={"/favorites"} icon={<IconFavoritesOutline />}>
          Favorites
        </HeaderLink>
      </S.NavWrapper>
      <SearchInput placeholder={"Try “Tel Aviv - Jaffa”..."} />
      <S.RightWrapper>
        <HeaderLink to={"/map"} icon={<IconMap />} variant={"underline"}>
          Switch to map
        </HeaderLink>
        <S.SwitchesWrapper>
          <Switch
            id={"degree-id"}
            value={toggle}
            left={"F"}
            right={"C"}
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

        <HeaderLink to={"/login"} icon={<IconLogout />} variant={"underline"}>
          Log out
        </HeaderLink>
      </S.RightWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
