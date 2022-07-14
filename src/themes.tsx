export interface Theme {
  black: string;
  white: string;
  primary: string;
  secondary: string;
  fadeText: string;
  gray: string;
  grayBg: string;
  errorRed: string;
  yellow: string;
}

const lightModeTheme = {
  black: "#222",
  white: "#fff",
  primary: "#48bae4",
  secondary: "#444e72",
  fadeText: "#838BAA",
  gray: "#BEBEBE",
  grayBg: "#F2F2F2",
  errorRed: "#F0274B",
  yellow: "#FFD130",
};

const darkMode = {
  primary: "#1a2b55",
};

const darkModeTheme = { ...lightModeTheme, ...darkMode };

export default lightModeTheme;
