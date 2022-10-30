import * as React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as S from "./styles";
import { ModalProps } from "./types";
import { getSearchAutoComplete } from "../../api/AccuweatherAPI/AccuweatherAPI";
import EmptyStateContainer from "../../Components/EmptyStateContainer/EmptyStateContainer";
import CityImg from "../../Images/city.svg";
import { TailSpin } from "react-loader-spinner";
import { useDebounce } from "../../hooks/useDebounce";

export interface City {
  Key: string;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
}

export interface DefaultTheme {
  primary: string;
}

const SearchModal: React.FC<ModalProps> = ({
  searchValue,
  setSearchValue,
  onClose,
}) => {
  const debouncedSearch = useDebounce(searchValue, 300);
  const client = useQueryClient();

  const result = client.getQueryData(["Autocomplete", searchValue], {
    exact: true,
  });

  // return from autoComplete func.
  const { data, isLoading, isError } = useQuery(
    ["autocomplete", result ? searchValue : debouncedSearch],
    () => getSearchAutoComplete(result ? searchValue : debouncedSearch),
    {
      enabled: !!searchValue,
    }
  );

  return (
    <S.Container>
      {isError && <S.StyledErrorMessage />}
      {isLoading && (
        <S.LoadingContainer>
          <TailSpin width="80" height="80" color="#47bfdf" />
          <S.LoadingText>Loading...</S.LoadingText>
        </S.LoadingContainer>
      )}
      {data && data.length > 0 && (
        <S.List>
          {data.map((city: City) => (
            <S.ItemWrapper to={`/${city.Key}/${city.LocalizedName}`}>
              <S.ListItem key={city.Key} onClick={() => onClose()}>
                <S.City>{city.LocalizedName}, </S.City>
                <S.Country>{city.Country.LocalizedName}</S.Country>
              </S.ListItem>
            </S.ItemWrapper>
          ))}
        </S.List>
      )}
      {!isLoading && data && data.length === 0 && (
        <EmptyStateContainer
          color="dark"
          img={CityImg}
          description={`We couldn't find any city named "${searchValue}", please try again.`}
        />
      )}
    </S.Container>
  );
};

export default SearchModal;
