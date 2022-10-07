import React, { Dispatch } from "react";

export interface ModalProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  onClose: Dispatch<void>;
}
