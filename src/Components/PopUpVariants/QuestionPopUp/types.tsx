export type QuestionProps = {
  description?: string;
  btnText?: string;
  linkText?: string;
  onClose?: () => void;
  yesClick?: () => void;
  logout?: boolean;
  removeFromFavotires?: boolean;
};
