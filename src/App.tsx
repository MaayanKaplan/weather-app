import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyle";
import styled, { ThemeProvider } from "styled-components/macro";
import { useDarkMode } from "./hooks/useDarkMode";
import { lightModeTheme, darkModeTheme } from "./themes";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
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

const App: React.FC = () => {
  const [token, setToken] = useState<boolean>(false);
  const [theme] = useDarkMode();
  const themeMode = theme === "light" ? lightModeTheme : darkModeTheme;

  const { isSuccess, data } = useQuery(["verifyToken"], () => {
    verifyToken();
  });

  console.log(data);
  console.log(isSuccess);

  useEffect(() => {
    if (isSuccess) setToken(true);
  }, [isSuccess]);

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <BackgroundStyle>
          <GlobalStyles />
          <Clouds numClouds={20}></Clouds>
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
      </ThemeProvider>
    </>
  );
};

export default App;
