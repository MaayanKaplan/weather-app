export type InputVariants = "full" | "transparent";

export type SearchProps = {
  placeholder: string;
  variant: InputVariants;
  icon: React.ReactNode;
  inputValue: React.ChangeEventHandler<HTMLInputElement> | any;
  handleOpen: () => void;
};
