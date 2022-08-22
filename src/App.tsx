import { Routes, Route } from "react-router-dom";
import styled from "styled-components/macro";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites/Favorites";
import { AuthenticationProvider } from "./api/Authentication";

const BackgroundStyle = styled.div`
  background-image: linear-gradient(241deg, #47bfdf, #4a91ff),
    linear-gradient(to bottom, #fff, #fff);
  height: 100vh;
  height: 100%;
`;

const App: React.FC = () => {
  return (
    <>
      <BackgroundStyle>
        <AuthenticationProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="*" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthenticationProvider>
      </BackgroundStyle>
    </>
  );
};

export default App;
