import styled from "styled-components/macro";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Components/Header/Header";
import MobileHeader from "../Components/MobileHeader/MobileHeader";
import PopUp from "../Common/PopUp/PopUp";
import menuImg from "../Images/menu.svg";
import QuestionPopUp from "../Components/PopUpVariants/QuestionPopUp/QuestionPopUp";
import MenuMobile from "../Components/PopUpVariants/MenuMobile/MenuMobile";

import { useMedia } from "../hooks/useMedia";
import { useAuthentication } from "../api/AbraApi/Authentication";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLogoutPopUpOpen, setIsLogoutPopUpOpen] = useState<boolean>(false);

  const openCloseLogout = () => {
    setIsLogoutPopUpOpen(true);
    setIsMenuOpen(false);
  };

  const isMobile = useMedia();

  const navigate = useNavigate();
  const { logout } = useAuthentication(() => {
    navigate("/login");
  });

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
            description="You about to log out from WeatherApp.
                   Are you sure you want to log out?"
            linkText="I want to stay"
            btnText="Yes, log out"
            yesClick={logout}
            onClose={() => setIsLogoutPopUpOpen(false)}
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
