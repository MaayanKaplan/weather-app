export type PopUpProps = {
  title: string;
  description?: string;
  btnText?: string;
  linkText?: string;
  icon?: React.ReactNode;

  children?: React.ReactNode;
  degreesSwitch?: React.ReactNode;
  modeSwitch?: React.ReactNode;
  degreesTitle?: string;
  modeTitle?: string;
  className?: string;

  menuMobile?: boolean;
  regularPopUp?: boolean;
  onClose?: () => void;
};
