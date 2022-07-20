import { useForm, SubmitHandler } from "react-hook-form";
import * as S from "./styles";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  title,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  email,
  password,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputProps>();
  const onSubmit: SubmitHandler<InputProps> = (data) => console.log(data);

  return (
    <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <S.InputWrapper error={error}>
        <S.StyledLabel>{title}</S.StyledLabel>
        <S.StyledInput
          {...register("email", { required: true })}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </S.InputWrapper>
      {error && <S.Error>{error}</S.Error>}
    </S.FormWrapper>
  );
};

export default Input;
