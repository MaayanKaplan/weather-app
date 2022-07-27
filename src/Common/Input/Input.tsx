import * as S from "./styles";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  title,
  type = "text",
  // value,
  // onChange,
  placeholder,
  error,
}) => {
  return (
    <>
      <S.InputWrapper error={error}>
        <S.StyledLabel>{title}</S.StyledLabel>
        <S.StyledInput
          type={type}
          placeholder={placeholder}
          // value={value}
          // onChange={onChange}
        />
      </S.InputWrapper>
      <S.ErrorWrapper>{error && <S.Error>{error}</S.Error>}</S.ErrorWrapper>
    </>
  );
};

export default Input;
