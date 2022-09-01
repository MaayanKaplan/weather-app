import { useEffect, useState } from "react";
import * as S from "./styles";
import { FavoritesProps } from "./types";
import SearchInput from "../../Common/SearchInput/SearchInput";
import PopUp from "../../Common/PopUp/PopUp";
import QuestionPopUp from "../../Components/PopUpVariants/QuestionPopUp/QuestionPopUp";
import EmptyStateContainer from "../../Common/EmptyStateContainer/EmptyStateContainer";

import { IconSearchWhite } from "../../Common/Icon/Icon";
import IconFavoritesFull from "../../Common/Icon/Icons/fav-full.svg";
import EmptyStateImg from "../../Images/stars.svg";

import { getFavorites } from "../../api/AbraApi/getFavorites";

import { useQuery } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";

const favorites = [1];

const Favorites = () => {
  const [isRemoveFromFavoritesOpen, setIsRemoveFromFavoritesOpen] =
    useState<boolean>(false);

  const { data, isLoading, isError, error } = useQuery(["favorites"], () =>
    getFavorites()
  );

  // console.log(data);

  if (isLoading) {
    <TailSpin width="70" height="70" color="fff"></TailSpin>;
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

  // if (data?.results)
  return (
    <S.MainContainer>
      <S.TitleWrapper>
        <S.StyledTitle>Favorites</S.StyledTitle>
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

      {isRemoveFromFavoritesOpen && (
        <PopUp
          title="Remove from favorites"
          onClose={() => setIsRemoveFromFavoritesOpen(false)}
          isOpen={isRemoveFromFavoritesOpen}
          setIsOpen={setIsRemoveFromFavoritesOpen}
        >
          <QuestionPopUp
            removeFromFavotires
            description="Are you sure you want to remove Tel aviv Jaffo  from favorites list?"
            linkText="Keep it"
            onClose={() => setIsRemoveFromFavoritesOpen(false)}
            yesClick={() => {}}
          />
        </PopUp>
      )}
    </S.MainContainer>
  );
};

export default Favorites;
