import React from "react";

export interface InputProps {
  // value: string;
  placeholder?: string;
  title?: string;
  error?: string;
  type?: string;
  name?: string;
  data?: string;
  register: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormInputs {
  email: string;
  password: string;
}
