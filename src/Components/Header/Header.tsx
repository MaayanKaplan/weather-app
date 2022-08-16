import React, { useState } from "react";
import * as S from "./styles";
import {
  IconHomeFull,
  IconHomeOutline,
  IconFavoritesOutline,
  IconFavoritesFull,
  IconMap,
  IconLogout,
  IconDarkSun,
  IconDarkMoon,
  IconSearchDark,
  IconSearchWhite,
} from "../../Common/Icon/Icon";
import Switch from "../../Common/Switch";
import HeaderLink from "../../Common/HeaderLink";
import SearchInput from "../../Common/SearchInput/SearchInput";
import LogoImg from "../../Images/logo.png";
import { NavBarItem } from "../../Common/NavBar/types";
import NavBar from "../../Common/NavBar/NavBar";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  const navBarItems: NavBarItem[] = [
    {
      id: "Home",
      active: <IconHomeFull />,
      inactive: <IconHomeOutline />,
      text: "Home",
      path: "/",
    },
    {
      id: "Favorites",
      active: <IconFavoritesFull />,
      inactive: <IconFavoritesOutline />,
      text: "Favorites",
      path: "/favorites",
    },
  ];

  const [currentSelectedItem, setCurrentSelectedItem] = useState<string>(
    navBarItems[0].id
  );
  return (
    <S.HeaderWrapper>
      <S.LeftSideContainer>
        <S.LogoWrapper>
          <S.Logo src={LogoImg} alt="logo" />
        </S.LogoWrapper>
        <S.StyledNavBar
          items={navBarItems}
          onClick={(id) => setCurrentSelectedItem(id)}
          selectedItem={currentSelectedItem}
        />
      </S.LeftSideContainer>

      <S.SearchInputContainer>
        <S.StyledSearchInput
          variant={"full"}
          placeholder={"Try “Tel Aviv - Jaffa”..."}
          icon={<IconSearchDark />}
        />
      </S.SearchInputContainer>
      <S.RightSideContainer>
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
      </S.RightSideContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
