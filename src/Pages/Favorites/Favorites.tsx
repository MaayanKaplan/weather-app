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

import { getFavorites } from "../../api/AbraApi/Favorites";

import { useQuery } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";

const Favorites = () => {
  const [isRemoveFromFavoritesOpen, setIsRemoveFromFavoritesOpen] =
    useState<boolean>(false);

  const { data, isLoading, isError, error } = useQuery(["favorites"], () =>
    getFavorites()
  );

  if (isLoading) {
    <TailSpin width="70" height="70" color="fff"></TailSpin>;
  }

  if (data?.results.length === 0)
    return (
      <EmptyStateContainer
        title="My Favorites"
        description="Favorites list is empty."
        img={EmptyStateImg}
      />
    );

  console.log(data?.results[0].city);

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
            {data.results.map((item: any) => {
              return (
                <>
                  <S.Favorite>
                    <S.FavoriteContainer>
                      <S.EachCityWrapper>
                        <S.CityName>{item.city}</S.CityName>
                        <S.CountryName>{item.country}</S.CountryName>
                      </S.EachCityWrapper>
                      <S.Icon
                        onClick={() => setIsRemoveFromFavoritesOpen(true)}
                        src={IconFavoritesFull}
                      />
                    </S.FavoriteContainer>
                  </S.Favorite>
                  <S.Separator />
                </>
              );
            })}
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
            description={`Are you sure you want to remove ${data?.results[0].city}  from favorites list?`}
            linkText="Keep it"
            btnText="Yes, remove"
            onClose={() => setIsRemoveFromFavoritesOpen(false)}
            yesClick={() => {}}
          />
        </PopUp>
      )}
    </S.MainContainer>
  );
};

export default Favorites;
