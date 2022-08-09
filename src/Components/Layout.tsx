import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import MobileHeader from "./MobileHeader/MobileHeader";
import deviceSize from "../Utils/deviceSize";

// interface Props {
//   breakPoints: {
//     min: number;
//     max: number;
//     name: string;
//     children: React.ReactNode;
//   }[];
// }
const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 128);
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
