import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LoadTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#top") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      {/* <h1>Iman Page</h1> */}
      {/* Page content */}
    </>
  );
};

export default LoadTop;
