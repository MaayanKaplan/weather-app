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
} from "../../Common/Icon/Icon";
import Switch from "../../Common/Switch";
import LogoImg from "../../Images/logo.png";
import { NavBarItem } from "../../Common/NavBar/types";
import PopUp from "../../Common/PopUp/PopUp";
import { HeaderProps } from "./types";
import QuestionPopUp from "../PopUpVariants/QuestionPopUp/QuestionPopUp";
import CitySearch from "../CitySearch/CitySearch";
import { useAuthentication } from "../../api/AbraApi/Authentication";
import { useLocation, useNavigate } from "react-router-dom";
import { useToggleTheme } from "../../App";
import { useTheme } from "styled-components/macro";

const Header: React.FC<HeaderProps> = ({ className }) => {
  const theme = useTheme();
  const { toggleTheme } = useToggleTheme();

  const [isLogoutPopUpOpen, setIsLogoutPopUpOpen] = useState<boolean>(false);

  const navigate = useNavigate();
  const { logout } = useAuthentication();
  const handleLogout = () => {
    logout();
    setIsLogoutPopUpOpen(false);
    navigate("/login");
  };

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

  const location = useLocation();
  const currentLocation = location.pathname;

  const [currentSelectedItem, setCurrentSelectedItem] =
    useState<string>(currentLocation);

  return (
    <S.HeaderWrapper>
      <S.LeftSideContainer>
        <S.LogoWrapper>
          <S.Logo src={LogoImg} alt="logo" />
        </S.LogoWrapper>
        <S.StyledNavBar
          items={navBarItems}
          onClick={(currentLocation) => setCurrentSelectedItem(currentLocation)}
          selectedItem={currentSelectedItem}
        />
      </S.LeftSideContainer>

      <S.SearchInputContainer>
        <CitySearch />
      </S.SearchInputContainer>

      <S.RightSideContainer>
        <S.SwitchToMapButton
          variant="link"
          onClick={() => console.log("click")}
        >
          <S.ContentMapWrapper to={"/map"}>
            <S.IconWrapper>
              <IconMap />
            </S.IconWrapper>
            <S.Text>Switch to map</S.Text>
          </S.ContentMapWrapper>
        </S.SwitchToMapButton>
        <S.SwitchesWrapper>
          <Switch
            id={"temperature-id"}
            left={"F°"}
            right={"C°"}
            onChange={() => {}}
            checked={true}
          />

          <Switch
            id={"darkmode-id"}
            left={<IconDarkSun />}
            right={<IconDarkMoon />}
            onChange={toggleTheme}
            checked={theme.mode === "light"}
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
          title="Log out"
          onClose={() => setIsLogoutPopUpOpen(!isLogoutPopUpOpen)}
          isOpen={isLogoutPopUpOpen}
          setIsOpen={setIsLogoutPopUpOpen}
        >
          <QuestionPopUp
            description="You about to log out from WeatherApp. Are you sure you want to log out?"
            linkText="I want to stay"
            btnText="Yes, log out"
            yesClick={handleLogout}
            onClose={() => setIsLogoutPopUpOpen(!isLogoutPopUpOpen)}
          />
        </PopUp>
      )}
    </S.HeaderWrapper>
  );
};

export default Header;
