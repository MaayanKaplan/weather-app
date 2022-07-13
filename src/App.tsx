import React from "react";
import Button from "./Common/Button";
import WarningBox from "./Common/WarningBox";

const App: React.FC = () => {
  return (
    <>
      <Button variant="primary" disabled>
        Log in
      </Button>
      {/* <WarningBox /> */}
    </>
  );
};

export default App;
