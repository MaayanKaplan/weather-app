import React, { useState } from "react";
import * as S from "./styles";
import LogoImage from "../../Images/logo.png";
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
import NavLink from "../../Common/NavLink";
import SearchInput from "../../Common/SearchInput";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);
  return (
    <S.HeaderWrapper>
      <S.LogoWrapper src={LogoImage} alt="App's logo"></S.LogoWrapper>
      <S.NavWrapper>
        <NavLink icon={<IconHomeFull />} text="Home">
          Home
        </NavLink>
        {/* <NavLink icon={<IconFavoritesOutline />}>Favorites</NavLink> */}
      </S.NavWrapper>
      <SearchInput placeholder={"Try “Tel Aviv - Jaffa”..."} />
      {/* <NavLink icon={<IconMap />}>Switch to map</NavLink> */}
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

      {/* <NavLink icon={<IconLogout />} variant={"underline"}>
        Log out
      </NavLink> */}
    </S.HeaderWrapper>
  );
};

export default Header;
