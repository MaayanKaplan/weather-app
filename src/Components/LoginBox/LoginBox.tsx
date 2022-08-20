// import { useState } from "react";
import Button from "../../Common/Button/Button";
import Input from "../../Common/Input/Input";
import NotificationBox from "../../Common/NotificationBox/NotificationBox";
import { IconFacebookLogo, IconGoogleLogo } from "../../Common/Icon/Icon";
import { FormData } from "./types";
import * as S from "./styles";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthentication } from "../../api/Authentication";

// import { useNavigate } from "react-router-dom";

const validationSchema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email address. Please try again.")
      .required("Email is a required field."),
    password: yup
      .string()
      .required("Invalid password. Please try again.")
      .min(8, "Should be 8 characters minimum."),
  })
  .required();

const LoginBox = () => {
  const {
    handleSubmit,
    register,

    control,
    formState: { errors, isValid, touchedFields },
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  const [login, autenticationError] = useAuthentication();

  const onSubmit = async (data: any) => {
    login(data.email, data.password);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <S.Title>Log in</S.Title>

      {autenticationError && (
        <NotificationBox severity="error">{autenticationError}</NotificationBox>
      )}

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            {...register("email", { required: true })}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type="email"
            placeholder="example@example.com"
            title="Email Account"
            // error={errors?.email?.message}
            error={
              errors.email?.message &&
              touchedFields.email &&
              errors.email.message
            }
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            {...register("password", { required: true })}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            placeholder="6 characters and digit numbers"
            title="Password"
            type="password"
            // error={errors?.password?.message}
            error={
              errors.password?.message &&
              touchedFields.password &&
              errors.password.message
            }
          />
        )}
      />

      <Button
        type="submit"
        variant="primary"
        disabled={!isValid}
        onClick={() => {}}
      >
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
