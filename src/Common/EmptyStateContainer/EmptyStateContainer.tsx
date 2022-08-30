import * as S from "./styles";
import { Props } from "./types";

const EmptyStateContainer: React.FC<Props> = ({
  title,
  description,
  img,
  // dark,
}) => {
  return (
    <S.MainEmptyContainer>
      <S.EmptyStateContainer>
        <S.EmptyStateImg src={img} />
        <S.EmptyStateTitle>{title}</S.EmptyStateTitle>
        <S.EmptyStateDescription>{description}</S.EmptyStateDescription>
      </S.EmptyStateContainer>
    </S.MainEmptyContainer>
  );
};

export default EmptyStateContainer;
