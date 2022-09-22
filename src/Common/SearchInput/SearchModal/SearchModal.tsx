import * as React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as S from "./styles";
import { ModalProps } from "./types";
import { getSearchAutoComplete } from "../../../api/AccuweatherAPI/AccuweatherAPI";
import EmptyStateContainer from "../../EmptyStateContainer/EmptyStateContainer";
import CityImg from "../../../Images/city.svg";
import { TailSpin } from "react-loader-spinner";

import { useDebounce } from "../../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

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

const SearchModal: React.FC<ModalProps> = ({ searchValue, onClose }) => {
  const navigate = useNavigate();
  const debouncedSearch = useDebounce(searchValue, 300);
  const client = useQueryClient();

  const result = client.getQueryData(["Autocomplete", searchValue], {
    exact: true,
  });

  // return from autoComplete func.
  const { data, isLoading } = useQuery(
    ["autocomplete", result ? searchValue : debouncedSearch],
    () => getSearchAutoComplete(result ? searchValue : debouncedSearch),
    {
      enabled: !!searchValue,
      cacheTime: 6000,
      staleTime: 6000,
    }
  );

  // navigates to home page
  const handleSelect = (key: string, cityName: string) => {
    navigate(`/${key}/${cityName}`);
    onClose();
  };

  // return ReactDOM.createPortal(
  return (
    <S.Container>
      {isLoading && (
        <S.LoadingContainer>
          <TailSpin
            width="80"
            height="80"
            // color={`${({ theme: DefaultTheme }) => theme.primary}` as string}
            color="#47bfdf"
          />
          <S.LoadingText>Loading...</S.LoadingText>
        </S.LoadingContainer>
      )}
      {data && data.length > 0 && (
        <S.List>
          {data.map((city: City) => (
            <S.ItemWrapper>
              <S.ListItem
                key={city.Key}
                onClick={() => handleSelect(city.Key, city.LocalizedName)}
              >
                <S.City>{city.LocalizedName}, </S.City>
                <S.Country>{city.Country.LocalizedName}</S.Country>
              </S.ListItem>
            </S.ItemWrapper>
          ))}
        </S.List>
      )}
      {!isLoading && data && data.length === 0 && (
        <EmptyStateContainer
          // textColor="dark"
          img={CityImg}
          description={`We couldn't find any city named "${searchValue}", please try again.`}
        />
      )}
    </S.Container>
  );
};

export default SearchModal;
