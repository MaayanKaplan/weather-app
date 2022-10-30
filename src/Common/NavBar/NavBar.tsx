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
            <S.NavBarButton variant="ghost" onClick={() => onClick(item.path)}>
              <S.ContentWrapper>
                <S.IconWrapper to={item.path}>
                  {selectedItem === item.path ? item.active : item.inactive}
                </S.IconWrapper>
                <S.Text to={item.path}>{item.text}</S.Text>
              </S.ContentWrapper>
            </S.NavBarButton>
            {selectedItem === item.path && <S.ActiveItem />}
          </S.NavBarItemWrapper>
        );
      })}
    </S.NavBarWrapper>
  );
};

export default NavBar;
