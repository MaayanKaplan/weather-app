import Button from "../../Common/Button/Button";
import Input from "../../Common/Input/Input";
import { IconFacebookLogo } from "../../Common/Icon";
import { IconGoogleLogo } from "../../Common/Icon";
import { InputProps, FormInputs } from "./types";
import * as S from "./styles";

import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = yup.object().shape({
  password: yup.string().required("Invalid password. Please try again.").min(8),
  email: yup
    .string()
    .email()
    .required("Invalid email address. Please try again."),
});

const LoginBox: React.FC<InputProps> = ({
  title,
  type = "text",
  onChange,
  placeholder,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, touchedFields, isDirty, isValid },
  } = useForm<FormInputs>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  console.log(touchedFields);

  const onSubmit = (data: FormInputs) => console.log(data);

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <S.StyledTitle>Log in</S.StyledTitle>
      <Input
        register={{ ...register("email", { required: true }) }}
        // type={"email"}
        name="email"
        title={"Email account"}
        placeholder="example@example.com"
        error={
          touchedFields.email && errors.email?.message
            ? errors.email.message
            : undefined
        }
        // error={"Invalid email address."}
      />
      <Input
        register={{
          ...register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Invalid password. Please try again.",
            },
          }),
        }}
        type={"password"}
        name="password"
        title={"Password"}
        placeholder="6 characters and digit numbers"
        error={
          touchedFields.password && errors.password?.message
            ? errors.password.message
            : undefined
        }
        // error={"Invalid email address."}
      />

      <Button type="submit" variant="primary" disabled={!isValid}>
        Log in
      </Button>
      <S.DividerWrapper>
        <S.Divider />
        <S.StyledDescription>Or log in with</S.StyledDescription>
        <S.Divider />
      </S.DividerWrapper>
      <S.ButtonsWrapper>
        <S.ButtonWrapper>
          <IconFacebookLogo />
          <Button onClick={() => console.log("Facebook")} variant="link">
            Log in with Facebook
          </Button>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <IconGoogleLogo />
          <Button onClick={() => console.log("Google")} variant="link">
            Log in with Google
          </Button>
        </S.ButtonWrapper>
      </S.ButtonsWrapper>
    </S.FormContainer>
  );
};

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label htmlFor="email">First Name</label>
//         <input placeholder="email" {...register("email", { required: true })} />
//         {errors.email?.message && touchedFields.email && (
//           <p>{errors.email.message}</p>
//         )}
//       </div>

//       <div>
//         <label htmlFor="password">Last Name</label>
//         <input
//           placeholder="luo"
//           {...register("password", { required: true })}
//         />
//         {errors.password?.message && touchedFields.password && (
//           <p>{errors.password.message}</p>
//         )}
//       </div>

//       <input disabled={!isValid} type="submit" />
//     </form>
//   );
// };

export default LoginBox;
