import React from "react";
import Button from "./Common/Button";
import Switch from "./Common/Switch";

const App: React.FC = () => {
  return (
    <>
      <Button variant="primary" disabled>
        Log in
      </Button>
      <Switch />
    </>
  );
};

export default App;
