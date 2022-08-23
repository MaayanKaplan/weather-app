import { useEffect, useState } from "react";
import * as S from "./styles";
import SearchInput from "../../Common/SearchInput/SearchInput";
import { IconSearchWhite } from "../../Common/Icon/Icon";
import { getFavorites } from "../../hooks/getFavorites";
import IconFavoritesFull from "../../Common/Icon/Icons/fav-full.svg";

import EmptyStateImg from "../../Images/stars.svg";
import EmptyStateContainer from "../../Common/EmptyStateContainer/EmptyStateContainer";
import menuImg from "../../Images/menu.svg";
// import PopUp from "../../Common/PopUp/PopUp";
import Switch from "../../Common/Switch";
import { useQuery } from "@tanstack/react-query";

import {
  IconLogoutDark,
  IconDarkMoon,
  IconDarkSun,
} from "../../Common/Icon/Icon";

const Favorites = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  const { data, isLoading, isError, error } = useQuery(["favorites"], () =>
    getFavorites()
  );

  console.log(data);

  if (isLoading) {
    <span>Loading</span>;
  }

  if (data?.results.length === 0)
    return (
      <EmptyStateContainer
        title="My Favorites"
        description="Favorites list is empty."
        img={EmptyStateImg}
      />
    );

  return (
    <S.MainContainer onClick={() => {}}>
      <S.TitleWrapper>
        <S.StyledTitle>Favorites</S.StyledTitle>
        <S.Menu src={menuImg} onClick={() => setIsMenuOpen(true)} />
      </S.TitleWrapper>
      <SearchInput
        variant="transparent"
        placeholder="Search from favorite..."
        icon={<IconSearchWhite />}
      />
      <S.FavoritesWrapper>
        {data?.results && (
          <>
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
          </>
        )}
      </S.FavoritesWrapper>

      {isMenuOpen && (
        <S.MenuPopUp
          menuMobile
          title="Menu"
          degreesTitle="Change degree"
          modeTitle="Change Mode"
          degreesSwitch={
            <Switch
              id={"temperature-id"}
              value={toggle}
              left={"F°"}
              right={"C°"}
              onChange={() => {
                setToggle(!toggle);
              }}
            />
          }
          modeSwitch={
            <Switch
              id={"darkmode-id"}
              value={toggle2}
              left={<IconDarkSun />}
              right={<IconDarkMoon />}
              onChange={() => {
                setToggle2(!toggle2);
              }}
            />
          }
          icon={<IconLogoutDark />}
          linkText="Log out"
        ></S.MenuPopUp>
      )}
    </S.MainContainer>
  );
};

export default Favorites;
