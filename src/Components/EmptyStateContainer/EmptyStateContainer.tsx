import * as S from "./styles";
import { Props } from "./types";

const EmptyStateContainer: React.FC<Props> = ({
  title,
  description,
  img,
  color = "#fff",
}) => {
  return (
    <S.MainEmptyContainer>
      <S.EmptyStateContainer>
        <S.EmptyStateImg src={img} />
        <S.EmptyStateTitle>{title}</S.EmptyStateTitle>
        <S.EmptyStateDescription color={color}>
          {description}
        </S.EmptyStateDescription>
      </S.EmptyStateContainer>
    </S.MainEmptyContainer>
  );
};

export default EmptyStateContainer;
