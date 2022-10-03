import { useState, useEffect, useContext, createContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import GlobalStyles from "./GlobalStyle";
import styled, { ThemeProvider } from "styled-components/macro";
import { lightTheme, darkTheme, ThemesMode } from "./themes";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import Favorites from "./Pages/Favorites/Favorites";
import { AuthenticationProvider } from "./api/AbraApi/Authentication";
import { verifyToken } from "./api/AbraApi/verifyToken";
import Clouds from "./Components/Clouds/Clouds";
import { useQuery } from "@tanstack/react-query";
import Map from "./Pages/Map/Map";
import { useGeoLocation } from "use-geo-location";
import { getGeoPosition } from "./api/AccuweatherAPI/AccuweatherAPI";

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
  if (!context) throw new Error("Toggle theme context is not ready");
  return context;
};

const App: React.FC = () => {
  const [token, setToken] = useState<boolean>(false);
  const [theme, setTheme] = useState(lightTheme);

  const { isSuccess } = useQuery(["verifyToken"], () => verifyToken(), {
    cacheTime: 1000 * 60 * 15,
    staleTime: 1000 * 60 * 15,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      setToken(true);
    } else {
      setTimeout(() => {
        setToken(false);
      }, 1500);
    }
  }, [isSuccess, navigate]);

  const { latitude, longitude } = useGeoLocation();
  const { data: locationKey } = useQuery([latitude, longitude], () =>
    getGeoPosition(latitude, longitude)
  );

  console.log(locationKey);

  return (
    <ThemeProvider theme={theme}>
      <ThemeToggleContext.Provider
        value={{
          toggleTheme: () =>
            setTheme((theme) => {
              return theme.mode === ThemesMode.light ? darkTheme : lightTheme;
            }),
        }}
      >
        <BackgroundStyle>
          <GlobalStyles />
          <Clouds numClouds={15}></Clouds>
          <AuthenticationProvider>
            <Routes>
              {!token && (
                <Route>
                  <Route path="/login" element={<LoginPage />} />
                </Route>
              )}
              <Route element={<Layout />}>
                <Route
                  path="/"
                  element={<HomePage locationKey={locationKey} />}
                />
                <Route
                  path="/:locationKey/:cityName"
                  element={<HomePage locationKey={locationKey} />}
                />
                <Route path="/map" element={<Map />} />
                <Route
                  path="/favorites"
                  element={<Favorites locationKey={+locationKey?.Key} />}
                />
              </Route>
            </Routes>
          </AuthenticationProvider>
        </BackgroundStyle>
      </ThemeToggleContext.Provider>
    </ThemeProvider>
  );
};

export default App;
