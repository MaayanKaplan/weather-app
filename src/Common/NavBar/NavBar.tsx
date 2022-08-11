import React from "react";
import * as S from "./styles";
import { NavBarProps } from "./types";

const NavBar: React.FC<NavBarProps> = ({ items }) => {
  return (
    <S.NavBarWrapper>
      {items.map((item) => {
        return (
          <S.NavBarItemWrapper key={item.id}>
            <S.NavBarButton variant="ghost" onClick={() => {}}>
              {item.inactive}
              <span>{item.text}</span>
            </S.NavBarButton>
          </S.NavBarItemWrapper>
        );
      })}
    </S.NavBarWrapper>
  );
};

export default NavBar;
