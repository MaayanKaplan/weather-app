import { ButtonProps } from "./types";
import * as S from "./styles";

const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  disabled,
  onClick,
  className,
}) => {
  return (
    <S.ButtonWrapper
      className={className}
      variant={variant}
      disabled={disabled}
      onClick={() => onClick()}
    >
      <S.TextContainer>{children}</S.TextContainer>
    </S.ButtonWrapper>
  );
};

export default Button;
