import * as S from "./styles";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  title,
  type = "text",
  onChange,
  placeholder,
  error,
  name,
}) => {
  return (
    <>
      <S.InputWrapper error={error}>
        <S.Label>{title}</S.Label>
        <S.Input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
        />
      </S.InputWrapper>
      <S.ErrorWrapper>{error && <S.Error>{error}</S.Error>}</S.ErrorWrapper>
    </>
  );
};

export default Input;
