import React from "react";
import * as S from "./styles";
import { NavBarProps } from "./types";

const NavBar: React.FC<NavBarProps> = ({
  items,
  className,
  onClick,
  selectedItem,
}) => {
  return (
    <S.NavBarWrapper className={className}>
      {items.map((item) => {
        return (
          <S.NavBarItemWrapper key={item.id}>
            <S.NavBarButton variant="ghost" onClick={() => onClick(item.id)}>
              <S.ContentWrapper>
                <S.IconWrapper to={item.path}>
                  {selectedItem === item.id ? item.active : item.inactive}
                </S.IconWrapper>
                <S.Text to={item.path}>{item.text}</S.Text>
              </S.ContentWrapper>
            </S.NavBarButton>
            {selectedItem === item.id && <S.ActiveItem />}
          </S.NavBarItemWrapper>
        );
      })}
    </S.NavBarWrapper>
  );
};

export default NavBar;
