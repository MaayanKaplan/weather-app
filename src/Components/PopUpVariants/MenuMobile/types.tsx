import React from "react";

export type MenuMobileProps = {
  icon?: React.ReactNode;
  linkText?: string;
  degreesSwitch?: React.ReactNode;
  modeSwitch?: React.ReactNode;
  degreesTitle?: string;
  modeTitle?: string;
  buttonAction?: () => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
