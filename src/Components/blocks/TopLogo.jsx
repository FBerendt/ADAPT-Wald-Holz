import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import adapt from "./../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";

const TopLogo = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "start" },
        }}
      >
        <Link to="/#top">
          <img src={adapt} alt="adapt" className="w-60" />
        </Link>
      </Box>
    </Box>
  );
};

export default TopLogo;
