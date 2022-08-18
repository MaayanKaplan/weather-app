import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import MobileHeader from "../Components/MobileHeader/MobileHeader";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 900);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      <Outlet />
    </>
  );
};

export default Layout;
