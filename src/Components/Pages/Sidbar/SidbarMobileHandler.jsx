import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

import SidebarMobile from "./SidebarMobile";

import adapt from "./../../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";

const SidbarMobileHandler = () => {
  const [open, setOpen] = useState(false);

  const handleopen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          width: "100%",
          px: 3,
          py: 1,
          mt: 1,
          justifyContent: "space-between",
          bgcolor: "#009688",
          borderRadius: 20,
          boxShadow: "2px 2px 2px",
        }}
      >
        <Link to="/#top">
          <img
            src={adapt}
            alt="adapt"
            style={{
              cursor: "pointer",
              width: "50px",
              height: "50px",
              height: "auto",
              border: "1px solid gray",
              borderRadius: "100%",
              boxShadow: "2px 1px 3px  darkred",
            }}
          />
        </Link>
        <Button onClick={handleopen}>
          <DensityMediumIcon style={{ color: "black" }} />
        </Button>
      </Box>
      <SidebarMobile onClose={handleClose} open={open} />
    </Box>
  );
};

export default SidbarMobileHandler;
