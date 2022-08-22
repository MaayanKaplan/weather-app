import { useEffect, useState } from "react";
import * as S from "./styles";
import SearchInput from "../../Common/SearchInput/SearchInput";
import { IconSearchWhite } from "../../Common/Icon/Icon";
import { getFavorites } from "../../hooks/getFavorites";
import IconFavoritesFull from "../../Common/Icon/Icons/fav-full.svg";
// import { abraGetFavorite } from "../../api/AbraAPI";
import EmptyStateImg from "../../Images/stars.svg";
import EmptyStateContainer from "../../Common/EmptyStateContainer/EmptyStateContainer";
import menuImg from "../../Images/menu.svg";
import PopUp from "../../Common/PopUp/PopUp";
import Switch from "../../Common/Switch";

import { IconLogout, IconDarkMoon, IconDarkSun } from "../../Common/Icon/Icon";

const favorites = [1];

const Favorites = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  // const token = localStorage.getItem("token") as string;

  // const result = getFavorites();
  // const favorites = async () => {
  //   const fav = await getFavorites();
  //   return fav.data;
  // };

  // useEffect(() => {
  //   getFavorites();
  // });

  if (favorites.length === 0)
    return (
      <EmptyStateContainer
        title="My Favorites"
        description="Favorites list is empty."
        img={EmptyStateImg}
      />
    );

  return (
    <S.MainContainer onClick={() => setIsMenuOpen(!isMenuOpen)}>
      <S.TitleWrapper>
        <S.StyledTitle>Favorites</S.StyledTitle>
        <S.Menu src={menuImg} onClick={() => setIsMenuOpen(true)} />
      </S.TitleWrapper>
      <SearchInput
        variant="transparent"
        placeholder="Search from favorite..."
        icon={<IconSearchWhite />}
      />
      {/* <button onClick={() => favorites()}>click</button> */}
      <S.FavoritesWrapper>
        <S.Favorite>
          <S.FavoriteContainer>
            <S.EachCityWrapper>
              <S.CityName>Jerusalem</S.CityName>
              <S.CountryName>Israel</S.CountryName>
            </S.EachCityWrapper>
            <S.Icon src={IconFavoritesFull} />
          </S.FavoriteContainer>
        </S.Favorite>
        <S.Separator />
      </S.FavoritesWrapper>

      {isMenuOpen && (
        <PopUp title="Menu">
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
        </PopUp>
      )}
    </S.MainContainer>
  );
};

export default Favorites;
