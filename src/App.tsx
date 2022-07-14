import React from "react";
import Button from "./Common/Button";
import Switch from "./Common/Switch";
import LoginBox from "./Components/LoginBox";

const App: React.FC = () => {
  return (
    <>
      <Button variant="primary" disabled>
        Log in
      </Button>
      <Switch />
      <LoginBox />
    </>
  );
};

export default App;
