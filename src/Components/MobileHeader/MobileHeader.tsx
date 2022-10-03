import { useState } from "react";
import * as S from "./styles";
import PopUp from "../../Common/PopUp/PopUp";
import SearchPopUp from "../PopUpVariants/SearchPopUp/SearchPopUp";
import {
  IconFavoritesOutline,
  IconHomeOutline,
  IconSearchWhite,
} from "../../Common/Icon/Icon";

const MobileHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <>
      <S.HeaderWrapper>
        <S.NavBar>
          <S.BtnWrapper>
            <S.NavButton variant="ghost" onClick={() => {}}>
              <S.ContentWrapper>
                <S.IconWrapper to={"/favorites"}>
                  <IconFavoritesOutline />
                </S.IconWrapper>
                <S.Text to={"/favorites"}>Favorites</S.Text>
              </S.ContentWrapper>
            </S.NavButton>
          </S.BtnWrapper>
          <S.Separator />
          <S.BtnWrapper>
            <S.NavButton variant="ghost" onClick={() => setIsSearchOpen(true)}>
              <IconSearchWhite />
              Search
            </S.NavButton>
          </S.BtnWrapper>

          <S.Separator />
          <S.BtnWrapper>
            <S.NavButton variant="ghost" onClick={() => {}}>
              <S.IconWrapper to={"/"}>
                <IconHomeOutline />
              </S.IconWrapper>
              <S.Text to={"/"}>Home</S.Text>
            </S.NavButton>
          </S.BtnWrapper>
        </S.NavBar>
      </S.HeaderWrapper>

      {isSearchOpen && (
        <PopUp
          onClose={() => setIsSearchOpen(false)}
          isOpen={isSearchOpen}
          setIsOpen={setIsSearchOpen}
        >
          <SearchPopUp onClose={() => setIsSearchOpen(false)} />
        </PopUp>
      )}
    </>
  );
};

export default MobileHeader;
