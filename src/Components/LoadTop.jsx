import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LoadTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#top") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{/* <div>This is a test</div>*/}</>;
};

export default LoadTop;
