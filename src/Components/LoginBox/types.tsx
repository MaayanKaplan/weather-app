import { ErrorMessage } from "@hookform/error-message";

export interface InputProps {
  value?: string;
  placeholder?: string;
  title?: string;
  error?: typeof ErrorMessage;
  // autenticationError?: typeof ErrorMessage;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autenticationError: any;
}

export interface FormData {
  email: string;
  password: string;
}
