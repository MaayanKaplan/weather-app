import React from "react";
import { HeaderProps } from "./types";
import * as S from "./styles";
import Button from "../../Common/Button/Button";
import { NavLink } from "react-router-dom";

const MobileHeader: React.FC<HeaderProps> = ({ children }) => {
  return (
    <S.HeaderWrapper>
      <S.NavBar>
        {/* <NavLink to="/favorites">
          <Button variant="ghost" onClick={() => onClick()}>
            Favorites
          </Button>
        </NavLink>
        <Button variant="ghost" onClick={() => onClick()}>
          Favorites
        </Button>
        <Button variant="ghost" onClick={() => onClick()}>
          Favorites
        </Button> */}
      </S.NavBar>
    </S.HeaderWrapper>
  );
};

export default MobileHeader;
