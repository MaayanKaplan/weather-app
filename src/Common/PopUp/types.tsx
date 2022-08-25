export type PopUpProps = {
  className?: string;
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;

  menuMobile?: boolean;
  questionPopUp?: boolean;

  description?: string;
  btnText?: string;
  linkText?: string;

  yesClick?: () => void;
  buttonAction?: () => void;
};
