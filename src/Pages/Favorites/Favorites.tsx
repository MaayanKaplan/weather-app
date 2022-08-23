import { useEffect, useState } from "react";
import * as S from "./styles";
import { FavoritesProps } from "./types";
import SearchInput from "../../Common/SearchInput/SearchInput";
import { IconSearchWhite } from "../../Common/Icon/Icon";
import { getFavorites } from "../../hooks/getFavorites";
import IconFavoritesFull from "../../Common/Icon/Icons/fav-full.svg";

import EmptyStateImg from "../../Images/stars.svg";
import EmptyStateContainer from "../../Common/EmptyStateContainer/EmptyStateContainer";
import menuImg from "../../Images/menu.svg";
import PopUp from "../../Common/PopUp/PopUp";

import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const favorites = [1];

const Favorites = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLogoutPopUpOpen, setIsLogoutPopUpOpen] = useState<boolean>(false);
  const [isRemoveFromFavoritesOpen, setIsRemoveFromFavoritesOpen] =
    useState<boolean>(false);

  const openCloseLogout = () => {
    setIsLogoutPopUpOpen(true);
    setIsMenuOpen(false);
  };

  const openCloseRemoveFromFavorites = () => {
    setIsRemoveFromFavoritesOpen(true);
    setIsMenuOpen(false);
  };

  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery(["favorites"], () =>
    getFavorites()
  );

  console.log(data);

  if (isLoading) {
    <span>Loading</span>;
  }

  // if (data?.results.length === 0)
  if (favorites.length === 0)
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
                <S.Icon
                  onClick={() => setIsRemoveFromFavoritesOpen(true)}
                  src={IconFavoritesFull}
                />
              </S.FavoriteContainer>
            </S.Favorite>
            <S.Separator />
          </>
        )}
      </S.FavoritesWrapper>

      {isMenuOpen && (
        <PopUp
          menuMobile
          title="Menu"
          buttonAction={() => openCloseLogout()}
        ></PopUp>
      )}

      {isLogoutPopUpOpen && (
        <PopUp
          questionPopUp
          title="Log out"
          description="You about to log out from WeatherApp.
          Are you sure you want to log out?"
          linkText="I want to stay"
          btnText="Yes, log out"
          onClose={() => setIsLogoutPopUpOpen(false)}
          yesClick={() => navigate("/login")}
        />
      )}

      {isRemoveFromFavoritesOpen && (
        <PopUp
          questionPopUp
          title="Remove from favorites"
          description="Are you sure you want to remove Tel aviv Jaffo  from favorites list??"
          linkText="Keep it"
          btnText="Yes, remove"
          onClose={() => setIsRemoveFromFavoritesOpen(false)}
          yesClick={() => {}}
        />
      )}
    </S.MainContainer>
  );
};

export default Favorites;
