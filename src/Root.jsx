import React from "react";
import { Outlet } from "react-router-dom";

import NavigationDrawers from "./Components/Pages/Sidbar/NavigationDrawers";

const Root = () => {
  return (
    <div className="flex w-full h-full">
      <p>This is a test for ERR 404</p>
      {/* <NavigationDrawers />
      <Outlet /> */}
    </div>
  );
};

export default Root;
