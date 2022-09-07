import { useState, useEffect, useContext, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyle";
import styled, { ThemeProvider } from "styled-components/macro";
import { lightTheme, darkTheme, ThemesMode } from "./themes";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home/Home";
import Favorites from "./Pages/Favorites/Favorites";
import { AuthenticationProvider } from "./api/AbraApi/Authentication";
import { verifyToken } from "./api/AbraApi/verifyToken";
import Clouds from "./Components/Clouds/Clouds";
import { useQuery } from "@tanstack/react-query";

export interface DefaultTheme {
  primary: string;
}

const BackgroundStyle = styled.div<{ theme: DefaultTheme }>`
  background-image: linear-gradient(
      241deg,
      ${({ theme }) => theme.primary},
      ${({ theme }) => theme.secondaryBG}
    ),
    linear-gradient(to bottom, #fff, #fff);

  transition: background-image 0.2s ease-in, color 0.2s ease-in;
  height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

const ThemeToggleContext =
  createContext<{ toggleTheme: VoidFunction } | null>(null);

export const useToggleTheme = () => {
  const context = useContext(ThemeToggleContext);
  if (!context) throw new Error("Toggle theme context ios not ready");
  return context;
};

const App: React.FC = () => {
  const [token, setToken] = useState<boolean>(false);
  const [theme, setTheme] = useState(lightTheme);
  const { isSuccess, data } = useQuery(["verifyToken"], verifyToken);

  useEffect(() => {
    if (isSuccess) setToken(true);
    // else {
    //   // setToken(false);
    //   navigate("/login");
    // }
  }, [isSuccess, data]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeToggleContext.Provider
        value={{
          toggleTheme: () =>
            setTheme((theme) => {
              console.log(theme);
              return theme.mode === ThemesMode.light ? darkTheme : lightTheme;
            }),
        }}
      >
        <BackgroundStyle>
          <GlobalStyles />
          <Clouds numClouds={15}></Clouds>
          <AuthenticationProvider>
            <Routes>
              {!token && <Route path="/login" element={<LoginPage />} />}
              <Route element={<Layout />}>
                <Route path="*" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
              </Route>
            </Routes>
          </AuthenticationProvider>
        </BackgroundStyle>
      </ThemeToggleContext.Provider>
    </ThemeProvider>
  );
};

export default App;
