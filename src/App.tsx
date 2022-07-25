import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
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
    </>
  );
};

export default App;
