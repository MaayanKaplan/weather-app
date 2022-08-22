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
import { useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { InputProps } from "./types";

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

  const navigate = useNavigate();

  const { login, logout, loginInProgress, authenticationError } =
    useAuthentication((lastLocation: string) => {
      if (!lastLocation) navigate("/");
      else navigate(lastLocation);
    });

  const onSubmit = async (data: any) => {
    login(data.email, data.password);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <S.Title>Log in</S.Title>

      {authenticationError && (
        <NotificationBox severity="error">
          {authenticationError}
        </NotificationBox>
      )}

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            {...register("email", { required: true })}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            // ref={ref}
            type="email"
            placeholder="example@example.com"
            title="Email Account"
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
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            {...register("password", { required: true })}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            // ref={ref}
            placeholder="6 characters and digit numbers"
            title="Password"
            type="password"
            error={
              errors.password?.message &&
              touchedFields.password &&
              errors.password.message
            }
          />
        )}
      />

      <S.LoginButton
        type="submit"
        variant="primary"
        disabled={!isValid || loginInProgress}
        onClick={handleSubmit(onSubmit)}
      >
        {loginInProgress ? (
          <TailSpin width="22" height="22" color="fff"></TailSpin>
        ) : (
          "Log in"
        )}
      </S.LoginButton>
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
