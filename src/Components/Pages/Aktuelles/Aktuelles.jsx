import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

import Footer from "../Footer";
import LoadTop from "../../LoadTop";
import SidbarMobileHandler from "../Sidbar/SidbarMobileHandler";
import AktuellesData from "../../blocks/AktuellesData";
import AktuellesBlocks from "./AktuellesBlocks";

const Aktuelles = () => {
  return (
    <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8 sm:px-4 md:px-0 flex flex-col items-center">
      <LoadTop />
      <Box sx={{ width: "90%" }}>
        <SidbarMobileHandler />
      </Box>

      <Typography
        variant="h5"
        sx={{
          my: { xs: 4, md: 8 },
          fontWeight: "bold",
          color: "#2b2b2b",
          textAlign: { xs: "center", md: "start" },
        }}
      >
        AKTUELLES
      </Typography>

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
        {AktuellesData.map((e, index) => (
          <div
            key={e.id}
            className={`${
              index % 2 === 0
                ? "w-full border md:border-t-0 md:border-l-0 md:border-r-2 pt-5 md:border-b-3 md:border-gray-300 "
                : "w-full border md:border-t-0 md:border-r-0 md:border-b-3 pt-5 md:border-gray-300"
            }
                ${
                  index === AktuellesData.length - 1 ||
                  index === AktuellesData.length - 2
                    ? "border-b-0"
                    : ""
                }
                `}
          >
            <AktuellesBlocks data={e} index={index} />
          </div>
        ))}
      </Box>
      <Footer />
    </div>
  );
};

export default Aktuelles;
