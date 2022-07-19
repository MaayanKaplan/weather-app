import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import Header from "./Components/Header/Header";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");

  return (
    <>
      <Routes>
        <Route path="*" element={<Header />} />
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
