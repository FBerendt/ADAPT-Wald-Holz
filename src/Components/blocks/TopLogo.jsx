import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

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
          <img
            src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/final_wortbildmarke_logo.jpg?raw=true"
            alt="adapt"
            className="w-60"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default TopLogo;
