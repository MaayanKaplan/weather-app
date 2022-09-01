import * as S from "./styles";
import { Props } from "./types";
import SearchInput from "../../../Common/SearchInput/SearchInput";
import EmptyStateContainer from "../../../Common/EmptyStateContainer/EmptyStateContainer";
import { IconArrow, IconSearchDark } from "../../../Common/Icon/Icon";

const SearchPopUp: React.FC<Props> = ({ onClose }) => {
  return (
    <S.Container>
      <S.BackIcon onClick={onClose}>
        <IconArrow />
      </S.BackIcon>
      <S.SearchWrapper>
        <SearchInput
          variant={"full"}
          placeholder={"Try “Tel Aviv - Jaffa”..."}
          icon={<IconSearchDark />}
        />
      </S.SearchWrapper>
    </S.Container>
  );
};

export default SearchPopUp;
