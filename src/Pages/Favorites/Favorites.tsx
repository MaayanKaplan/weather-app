import { useMemo, useState } from "react";
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

  const { data, fetchNextPage, hasNextPage, isLoading, isError } =
    useInfiniteQuery(
      ["favorites"],
      ({ pageParam = FAV_URL }) => getFavorites(pageParam),
      {
        getNextPageParam: (lastPage) => lastPage.next || undefined,
      }
    );

  const favorites = useMemo(
    () => (data ? data.pages.flatMap((page) => page.results) : []),
    [data]
  );

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

  const filtered = favorites?.filter((fav) =>
    fav.city.toLowerCase().includes(searchValue.toLowerCase())
  );

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

      {isLoading && (
        <S.LoadingContainer>
          <TailSpin width="80" height="80" color="#fff" />
          <S.LoadingText>Loading...</S.LoadingText>
        </S.LoadingContainer>
      )}

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
            <>
              {filtered.map((item: any) => {
                return (
                  <>
                    <S.Favorite key={item.key!}>
                      <S.FavoriteContainer>
                        <S.EachCityWrapper to={`/${item.key}/${item.city}`}>
                          <S.CityName>{item.city}</S.CityName>
                          <S.CountryName>{item.country}</S.CountryName>
                        </S.EachCityWrapper>
                        <S.Icon
                          onClick={() => handleClickOnFav(item.key)}
                          src={IconFavoritesFull}
                        />
                      </S.FavoriteContainer>
                    </S.Favorite>
                    <S.Separator />
                  </>
                );
              })}
            </>
          </InfiniteScroll>
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
