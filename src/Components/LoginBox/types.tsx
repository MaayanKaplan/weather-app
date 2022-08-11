import { ErrorMessage } from "@hookform/error-message";

export interface InputProps {
  value?: string;
  placeholder?: string;
  title?: string;
  error?: typeof ErrorMessage;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  // email: string;
  // password: string;
}

export interface FormData {
  email: string;
  password: string;
}
