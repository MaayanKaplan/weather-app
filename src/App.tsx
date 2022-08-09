import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components/macro";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Favorites from "./Pages/Favorites";

const BackgroundStyle = styled.div`
  background-image: linear-gradient(241deg, #47bfdf, #4a91ff),
    linear-gradient(to bottom, #fff, #fff);
  height: 100vh;
`;

const App: React.FC = () => {
  const [text, setText] = useState<string>("");

  return (
    <>
      <BackgroundStyle>
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
          <Route
            path="/login"
            element={
              <LoginPage
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                title={"Email account"}
                placeholder="6 characters and digit numbers"
                email={text}
                password={text}
              />
            }
          />
        </Routes>
      </BackgroundStyle>
    </>
  );
};

export default App;
