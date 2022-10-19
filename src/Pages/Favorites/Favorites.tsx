import { useEffect, useState } from "react";
import * as S from "./styles";
import SearchInput from "../../Common/SearchInput/SearchInput";
import PopUp from "../../Common/PopUp/PopUp";
import QuestionPopUp from "../../Components/PopUpVariants/QuestionPopUp/QuestionPopUp";
import EmptyStateContainer from "../../Components/EmptyStateContainer/EmptyStateContainer";
import { IconSearchWhite } from "../../Common/Icon/Icon";
import IconFavoritesFull from "../../Common/Icon/Icons/fav-full.svg";
import EmptyStateImg from "../../Images/stars.svg";
import {
  getFavorites,
  useAddAndRemoveFavorites,
} from "../../api/AbraApi/getFavorites";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroller";
import { TailSpin } from "react-loader-spinner";
import ErrorMessage from "../../Common/ErrorMessage";

const Favorites = () => {
  const [isRemoveFromFavoritesOpen, setIsRemoveFromFavoritesOpen] =
    useState<boolean>(false);
  const [removeSuccess, setRemoveSuccess] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  // Fetching fav.
  const FAV_URL = "https://weather-abra.herokuapp.com/api/favorites/";

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  } = useInfiniteQuery(
    ["favorites"],
    ({ pageParam = FAV_URL }) => getFavorites(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage.next || undefined,
    }
  );

  // console.log(data?.pages[0].results);
  // console.log(data?.pages[0].results.length);
  // console.log(data?.pages);

  const { mutate } = useAddAndRemoveFavorites();

  const handleRemoveFavorite = (key: number) => {
    mutate({
      key: key,
    });
    setIsRemoveFromFavoritesOpen(false);
    setRemoveSuccess(true);
    setTimeout(() => {
      setRemoveSuccess(false);
    }, 1500);
  };

  const handleClickOnFav = (key: string) => {
    setIsRemoveFromFavoritesOpen(true);
    return localStorage.setItem("favKey", key);
  };

  // SEARCH filteredArray
  const inputValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
    return searchValue;
  };

  // console.log(searchValue);

  // const filteredArray = data?.results.filter((searchValue) => searchValue);
  // console.log(filteredArray);

  // console.log(inputValue);

  return (
    <S.MainContainer>
      <S.TitleWrapper>
        <S.StyledTitle>Favorites</S.StyledTitle>
      </S.TitleWrapper>
      <SearchInput
        variant={"transparent"}
        placeholder={"Search from favorite..."}
        icon={<IconSearchWhite />}
        inputValue={inputValue}
        handleOpen={() => {}}
      />

      {isError && <ErrorMessage />}
      {isLoading && <TailSpin width="70" height="70" color="fff"></TailSpin>}

      <S.FavoritesWrapper>
        {data?.pages[0].results.length === 0 ? (
          <EmptyStateContainer
            title="My Favorites"
            description="Favorites list is empty."
            img={EmptyStateImg}
          />
        ) : (
          <InfiniteScroll
            loadMore={() => fetchNextPage()}
            hasMore={hasNextPage}
          >
            {data?.pages.map((item: any) => {
              console.log(item.results);
              return (
                <>
                  <S.Favorite key={item.results.key!}>
                    <S.FavoriteContainer>
                      <S.EachCityWrapper>
                        <S.CityName>{item.results.city}</S.CityName>
                        <S.CountryName>{item.results.country}</S.CountryName>
                      </S.EachCityWrapper>
                      <S.Icon
                        onClick={() => handleClickOnFav(item.results.key)}
                        src={IconFavoritesFull}
                      />
                    </S.FavoriteContainer>
                  </S.Favorite>
                  <S.Separator />
                </>
              );
            })}
          </InfiniteScroll>
        )}

        {/* {searchValue &&
          filteredArray.map((item) => {
            return (
              <>
                <S.Favorite key={item.key}>
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
          })} */}
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
            description={`Are you sure you want to remove it from favorites list?`}
            linkText="Keep it"
            btnText="Yes, remove"
            onClose={() => setIsRemoveFromFavoritesOpen(false)}
            yesClick={() => {
              handleRemoveFavorite(+localStorage.getItem("favKey")!);
            }}
          />
        </PopUp>
      )}
    </S.MainContainer>
  );
};

export default Favorites;
