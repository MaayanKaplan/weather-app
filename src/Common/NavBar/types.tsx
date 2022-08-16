export type NavBarItem = {
  id: string;
  text: string;
  active?: JSX.Element;
  inactive?: JSX.Element;
  path: string;
};

export type NavBarProps = {
  items: NavBarItem[];
  selectedItem: string;
  onClick: (id: string) => void;
  className?: string;
};
