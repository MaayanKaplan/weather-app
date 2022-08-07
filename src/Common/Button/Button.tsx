import { ButtonProps } from "./types";
import * as S from "./styles";

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  disabled = false,
  onClick,
}) => {
  return (
    <S.ButtonWrapper
      variant={variant}
      disabled={disabled}
      // onClick={() => onClick()}
    >
      <S.TextContainer>{children}</S.TextContainer>
    </S.ButtonWrapper>
  );
};

export default Button;
