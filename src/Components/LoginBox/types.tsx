import { FieldErrorsImpl } from "react-hook-form";

export interface InputProps {
  value: string;
  placeholder?: string;
  title?: string;
  // error?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  email: string;
  password: string;
}
