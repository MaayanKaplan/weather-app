import React from "react";
import { useQuery } from "@tanstack/react-query";
import * as S from "./styles";
import { ModalProps } from "./types";
import { getAutoComplete } from "../../api/AccuweatherAPI";
import EmptyStateContainer from "../EmptyStateContainer/EmptyStateContainer";
import CityImg from "../../Images/city.svg";

const array: [] = [];

const SearchModal: React.FC<ModalProps> = ({ value }) => {
  const { data, isLoading, isError } = useQuery(["autocomplete"], () =>
    getAutoComplete(value)
  );

  if (array.length === 0)
    return <EmptyStateContainer img={CityImg} description="fvdfdf" />;

  return (
    <S.Container>
      {/* {data.map((item) => ( */}
      <p>{/* {item.LocalizedName}, {item.Country.LocalizedName} */}</p>
      {/* ))} */}
    </S.Container>
  );
};

export default SearchModal;
