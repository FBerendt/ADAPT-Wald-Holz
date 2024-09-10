import React from "react";
import { Box } from "@mui/material";

import Footer from "./../Pages/Footer";
import BodyBlock from "./BodyBlock";
import CostumData from "./CostumData";
import SidbarMobileHandler from "./../Pages/Sidbar/SidbarMobileHandler";

const Blocks = () => {
  return (
    <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8 sm:px-4 md:px-0 flex flex-col items-center">
      <Box sx={{ width: "90%" }}>
        <SidbarMobileHandler />
      </Box>
      <div className="relative mt-12 w-full px-6 md:my-12">
        <Box
          sx={{
            border: "none",
            width: "full",
            height: { xs: "200px", md: "350px" },
          }}
        >
          <Box
            position="relative"
            className="sm:h-[200px] md:h-[350px] w-[100%]"
          >
            <iframe
              id="iframe"
              src="https://vr-easy.com/28146/"
              allow="xr-spatial-tracking"
              allowFullScreen
              frameBorder="0"
              className="h-[200px] md:h-[200px] lg:h-[350px] w-[100%]"
            ></iframe>
          </Box>
        </Box>
      </div>
      <Box
        sx={{
          display: { xs: "flex", lg: "grid" },
          justifyItems: "center",
          alignContent: "center",
          flexDirection: { xs: "column", lg: "unset" },
          gridTemplateColumns: "repeat(auto-fit, minmax(50%, 1fr))",
          width: "100%",
        }}
      >
        {CostumData.map((e, index) => (
          <div
            key={e.id}
            className={`${
              index % 2 === 0
                ? "w-full border md:border-t-0 md:border-l-0 md:border-r-2 pt-5 md:border-b-3 md:border-gray-300 "
                : "w-full border md:border-t-0 md:border-r-0 md:border-b-3 pt-5 md:border-gray-300"
            }
                ${
                  index === CostumData.length - 1 ||
                  index === CostumData.length - 2
                    ? "border-b-0"
                    : ""
                }
                `}
          >
            <BodyBlock data={e} index={index} />
          </div>
        ))}
      </Box>
      <Footer />
    </div>
  );
};

export default Blocks;
