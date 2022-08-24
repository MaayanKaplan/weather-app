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
} from "../../Common/Icon/Icon";
import Switch from "../../Common/Switch";
import LogoImg from "../../Images/logo.png";
import { NavBarItem } from "../../Common/NavBar/types";
import PopUp from "../../Common/PopUp/PopUp";
import { HeaderProps } from "./types";
import { useNavigate } from "react-router-dom";

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  const [isLogoutPopUpOpen, setIsLogoutPopUpOpen] = useState<boolean>(false);

  const navigate = useNavigate();

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
        <S.SwitchToMapButton
          variant="link"
          onClick={() => console.log("click")}
        >
          <S.ContentWrapper>
            <S.IconWrapper>
              <IconMap />
            </S.IconWrapper>
            <S.Text>Switch to map</S.Text>
          </S.ContentWrapper>
        </S.SwitchToMapButton>
        <S.SwitchesWrapper>
          <Switch
            id={"temperature-id"}
            value={toggle}
            left={"F°"}
            right={"C°"}
            onChange={() => {
              setToggle(!toggle);
            }}
          />

          <Switch
            id={"darkmode-id"}
            value={toggle2}
            left={<IconDarkSun />}
            right={<IconDarkMoon />}
            onChange={() => {
              setToggle2(!toggle2);
            }}
          />
        </S.SwitchesWrapper>

        <S.LogoutButton
          variant="link"
          onClick={() => setIsLogoutPopUpOpen(true)}
        >
          <S.ContentWrapper>
            <S.IconWrapper>
              <IconLogout />
            </S.IconWrapper>
            <S.Text> Log out</S.Text>
          </S.ContentWrapper>
        </S.LogoutButton>
      </S.RightSideContainer>

      {isLogoutPopUpOpen && (
        <PopUp
          questionPopUp
          title="Log out"
          description="You about to log out from WeatherApp. Are you sure you want to log out?"
          linkText="I want to stay"
          btnText="Yes, log out"
          onClose={() => setIsLogoutPopUpOpen(false)}
          yesClick={() => {
            navigate("/login");
          }}
        />
      )}
    </S.HeaderWrapper>
  );
};

export default Header;
