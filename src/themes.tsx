export enum ThemesMode {
  light = "light",
  dark = "dark",
}

export interface Theme {
  mode: ThemesMode;
  black: string;
  white: string;
  header: string;
  primary: string;
  secondaryBG: string;
  secondary: string;
  fadeText: string;
  gray: string;
  grayBg: string;
  errorRed: string;
  yellow: string;
}

// export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
//   body {
//     background: ${({ theme }) => theme.primary};
//     transition: background 0.2s ease-in, color 0.2s ease-in;
//   }
// `;

export const lightTheme: Theme = {
  mode: ThemesMode.light,
  black: "#222",
  white: "#fff",
  header: "#48bae4",
  primary: "#48bae4",
  secondaryBG: "#4a91ff",
  secondary: "#444e72",
  fadeText: "#838BAA",
  gray: "#BEBEBE",
  grayBg: "#F2F2F2",
  errorRed: "#F0274B",
  yellow: "#FFD130",
};

const darkMode = {
  mode: ThemesMode.dark,
  header: "#1a2b55",
  primary: "#191634",
  secondaryBG: "#1e437c",
};

export const darkTheme: Theme = { ...lightTheme, ...darkMode };

export default lightTheme;
