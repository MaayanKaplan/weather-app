import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import * as S from "./styles";
import { ModalProps } from "./types";

const SearchModal: React.FC<ModalProps> = ({ data }) => {
  return (
    <S.Container>
      {data.map((item) => (
        <p>
          {item.LocalizedName}, {item.Country.LocalizedName}
        </p>
      ))}
    </S.Container>
  );
};

export default SearchModal;
