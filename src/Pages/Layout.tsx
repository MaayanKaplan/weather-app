import styled from "styled-components/macro";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import MobileHeader from "../Components/MobileHeader/MobileHeader";
import PopUp from "../Common/PopUp/PopUp";
import menuImg from "../Images/menu.svg";
import QuestionPopUp from "../Components/PopUpVariants/QuestionPopUp/QuestionPopUp";
import MenuMobile from "../Components/PopUpVariants/MenuMobile/MenuMobile";

import { useMedia } from "../hooks/useMedia";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLogoutPopUpOpen, setIsLogoutPopUpOpen] = useState<boolean>(false);

  const openCloseLogout = () => {
    setIsLogoutPopUpOpen(true);
    setIsMenuOpen(false);
  };

  const isMobile = useMedia();

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      {isMobile && <Menu src={menuImg} onClick={() => setIsMenuOpen(true)} />}

      {isMenuOpen && (
        <PopUp
          title="Menu"
          onClose={() => setIsMenuOpen(false)}
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
        >
          <MenuMobile buttonAction={() => openCloseLogout()} />
        </PopUp>
      )}

      {isLogoutPopUpOpen && (
        <PopUp
          title="Log out"
          onClose={() => setIsLogoutPopUpOpen(false)}
          isOpen={isLogoutPopUpOpen}
          setIsOpen={setIsLogoutPopUpOpen}
        >
          <QuestionPopUp
            logout
            description="You about to log out from WeatherApp.
                   Are you sure you want to log out?"
            linkText="I want to stay"
          />
        </PopUp>
      )}

      <Outlet />
    </>
  );
};

export default Layout;

const Menu = styled.img`
  position: absolute;
  top: 11px;
  right: 30px;
  cursor: pointer;
`;
