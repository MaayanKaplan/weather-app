import { ErrorMessage } from "@hookform/error-message";
import { RefCallBack } from "react-hook-form";

export interface InputProps {
  value?: string;
  placeholder?: string;
  title?: string;
  error?: typeof ErrorMessage;
  // autenticationError?: typeof ErrorMessage;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref: RefCallBack;
}

export interface FormData {
  email: string;
  password: string;
}
