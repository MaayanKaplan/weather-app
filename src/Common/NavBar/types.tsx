export type NavBarItem = {
  id: string;
  text: string;
  icon?: JSX.Element;
  inactive?: JSX.Element;
};

export type NavBarProps = {
  items: NavBarItem[];
};
