import React from "react";
import { useQuery } from "@tanstack/react-query";
import * as S from "./styles";
import { ModalProps } from "./types";
import { getAutoComplete } from "../../api/AccuweatherAPI";

const SearchModal: React.FC<ModalProps> = () => {
  // const { data, isLoading, isError } = useQuery(
  //   ["autocomplete"],
  //   () => getAutoComplete(value: string)
  // );

  return (
    <S.Container>
      {/* {data.map((item) => ( */}
      <p>{/* {item.LocalizedName}, {item.Country.LocalizedName} */}</p>
      {/* ))} */}
    </S.Container>
  );
};

export default SearchModal;
