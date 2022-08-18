import * as S from "./styles";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  title,
  type,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  ...props
}) => {
  return (
    <>
      <S.InputWrapper error={error}>
        <S.Label htmlFor={type}>{title}</S.Label>
        <S.Input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      </S.InputWrapper>
      <S.ErrorWrapper>{error && <S.Error>{error}</S.Error>}</S.ErrorWrapper>
    </>
  );
};

export default Input;
