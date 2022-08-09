import * as S from "./styles";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  title,
  type = "text",
  // value,
  onChange,
  placeholder,
  error,
  name,
  register,
  ...rest
}) => {
  console.log(register);

  return (
    <>
      <S.InputWrapper error={error}>
        <S.Label htmlFor={title}>{title}</S.Label>
        <S.Input
          type={type}
          name={name}
          placeholder={placeholder}
          ref={register}
          onChange={onChange}
        />
      </S.InputWrapper>
      <S.ErrorWrapper>{error && <S.Error>{error}</S.Error>}</S.ErrorWrapper>
    </>
  );
};

export default Input;
