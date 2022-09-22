import { Dispatch } from "react";

export interface ModalProps {
  searchValue: string;
  onClose: Dispatch<void>;
}
