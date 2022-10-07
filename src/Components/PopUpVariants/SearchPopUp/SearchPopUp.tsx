import * as S from "./styles";
import { Props } from "./types";
import CitySearch from "../../CitySearch/CitySearch";
import EmptyStateContainer from "../../EmptyStateContainer/EmptyStateContainer";
import { IconArrow } from "../../../Common/Icon/Icon";

import { useMedia } from "../../../hooks/useMedia";
import CityImg from "../../../Images/city.svg";

const SearchPopUp: React.FC<Props> = ({ onClose }) => {
  const isMobile = useMedia();
  return (
    <S.Container>
      <S.BackIcon onClick={onClose}>
        <IconArrow />
      </S.BackIcon>
      <S.SearchWrapper>
        <CitySearch />
      </S.SearchWrapper>
      <S.EntryState>
        <EmptyStateContainer
          img={CityImg}
          description="Please search any city in the search button."
          color={"dark"}
        />
      </S.EntryState>
    </S.Container>
  );
};

export default SearchPopUp;
