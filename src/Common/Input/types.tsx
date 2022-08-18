import React from "react";

export interface InputProps {
  value?: string;
  placeholder?: string;
  title?: string;
  error?: string | any;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormInputs {
  email: string;
  password: string;
}
