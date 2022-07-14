import React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../Common/Button";

type Inputs = {
  email: string;
  password: string;
};

const Input = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <StyledLabel>Email Account</StyledLabel>
        <StyledInput
          {...register("email")}
          type="email"
          placeholder="example@example.com..."
        />
      </InputWrapper>
      <InputWrapper>
        <StyledLabel>Password</StyledLabel>
        <StyledInput
          {...register("password")}
          type="password"
          placeholder="6 characters and digit numbers..."
        />
      </InputWrapper>
      <LoginButton variant="primary">Log in</LoginButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* margin: 90px 0 35px; */
  padding: 14px 24px;
  border-radius: 10px;
  background-color: #f2f2f2;
  width: 354px;
  margin: 0 auto;
  gap: 4px;
`;

const StyledLabel = styled.label`
  font-size: 1.4rem;
  line-height: 1.25;
  color: #838baa;
`;

const StyledInput = styled.input`
  border: none;
  background-color: #f2f2f2;
  font-size: 1.8rem;
  line-height: 1.5;
  width: 100%;

  &::placeholder {
    color: #bebebe;
  }
`;

const LoginButton = styled(Button)`
  margin-top: 8px;
`;

export default Input;
