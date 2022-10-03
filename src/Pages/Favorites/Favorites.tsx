import { useEffect, useState } from "react";
import * as S from "./styles";
import SearchInput from "../../Common/SearchInput/SearchInput";
import PopUp from "../../Common/PopUp/PopUp";
import QuestionPopUp from "../../Components/PopUpVariants/QuestionPopUp/QuestionPopUp";
import EmptyStateContainer from "../../Common/EmptyStateContainer/EmptyStateContainer";

import { IconSearchWhite } from "../../Common/Icon/Icon";
import IconFavoritesFull from "../../Common/Icon/Icons/fav-full.svg";
import EmptyStateImg from "../../Images/stars.svg";

import {
  getFavorites,
  useAddAndRemoveFavorites,
} from "../../api/AbraApi/getFavorites";

import { useQuery } from "@tanstack/react-query";
import { TailSpin } from "react-loader-spinner";

const Favorites = (locationKey: any) => {
  const [isRemoveFromFavoritesOpen, setIsRemoveFromFavoritesOpen] =
    useState<boolean>(false);
  const [removeSuccess, setRemoveSuccess] = useState<boolean>(false);

  const { data, isLoading, isError, error } = useQuery(["favorites"], () =>
    getFavorites()
  );

  // console.log(typeof +locationKey.locationKey);

  console.log(locationKey.locationKey);

  const { mutate, isSuccess } = useAddAndRemoveFavorites();
  const handleRemoveFavorite = () => {
    mutate({
      key: locationKey.locationKey,
      // title: cityTitle,
      // city: cityTitle,
      // country: cityTitle,
    });
    setIsRemoveFromFavoritesOpen(false);
    setRemoveSuccess(true);
    setTimeout(() => {
      setRemoveSuccess(false);
    }, 1500);
  };

  console.log(data);

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

      {removeSuccess && (
        <S.RemoveFavNotification severity={"success"}>
          It has been removed from favorites
        </S.RemoveFavNotification>
      )}

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
            yesClick={() => {
              handleRemoveFavorite();
            }}
          />
        </PopUp>
      )}
    </S.MainContainer>
  );
};

export default Favorites;
