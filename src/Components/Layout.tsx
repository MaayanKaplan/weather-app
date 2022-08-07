import React from "react";
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
  // const breakPoints = [
  //   { min: 0, max: 414, name: "mobile" },
  //   { min: 415, max: 10000, name: "desktop" },
  // ];
  return (
    <>
      {/* {deviceSize.desktop && <Header />} */}
      {deviceSize.mobile && <MobileHeader /> && <Header />}
      {/* {breakPoints.name === "desktop" && <Header />}
      {breakPoints.name === "mobile" && <MobileHeader />} */}
      {/* <Header /> */}
      <Outlet />
    </>
  );
};

export default Layout;
