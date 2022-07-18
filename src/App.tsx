import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";

const App: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  return (
    <>
      <Routes>
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
