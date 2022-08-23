export type PopUpProps = {
  title: string;
  children?: React.ReactNode;

  className?: string;

  menuMobile?: boolean;
  questionPopUp?: boolean;

  description?: string;
  btnText?: string;
  linkText?: string;

  onClose?: () => void;
  yesClick?: () => void;
  buttonAction?: () => void;
};
