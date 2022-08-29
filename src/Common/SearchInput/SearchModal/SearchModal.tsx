import React from "react";
import ReactDOM from "react-dom";
import { useQuery } from "@tanstack/react-query";
import * as S from "./styles";
import { ModalProps } from "./types";
import { getSearchAutoComplete } from "../../../api/AccuweatherAPI";
import EmptyStateContainer from "../../EmptyStateContainer/EmptyStateContainer";
import CityImg from "../../../Images/city.svg";

export interface City {
  Key: string;
  LocalizedName: string;
  Country: {
    ID: string;
    LocalizedName: string;
  };
}

const SearchModal: React.FC<ModalProps> = ({ searchValue, isOpen }) => {
  // return from autoComplete func.
  const { data, isLoading } = useQuery(["autocomplete", searchValue], () =>
    getSearchAutoComplete(searchValue)
  );
  if (!isOpen) return null;

  if (data?.length === 0)
    return (
      <EmptyStateContainer
        img={CityImg}
        description={`We couldn't find any city named "${searchValue}", please try again.`}
      />
    );

  return ReactDOM.createPortal(
    <S.Container>
      {data && data.length > 0 && (
        <S.List>
          {data.map((city: City) => (
            <S.ListItem key={city.Key}>
              <S.City>{city.LocalizedName}, </S.City>
              <S.Country>{city.Country.LocalizedName}</S.Country>
            </S.ListItem>
          ))}
        </S.List>
      )}
    </S.Container>,
    document.getElementById("portal") as HTMLElement
  );
};

export default SearchModal;
