import { SetStateAction, Dispatch } from "react";

export type PopUpProps = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
