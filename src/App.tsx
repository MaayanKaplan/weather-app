import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components/macro";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites/Favorites";
import { AuthenticationProvider } from "./api/Authentication";
import Clouds from "./Components/Clouds/Clouds";

const BackgroundStyle = styled.div`
  background-image: linear-gradient(241deg, #47bfdf, #4a91ff),
    linear-gradient(to bottom, #fff, #fff);
  height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;
`;

const App: React.FC = () => {
  const [token, setToken] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setToken(true);
  }, []);

  return (
    <>
      <BackgroundStyle>
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
    </>
  );
};

export default App;
