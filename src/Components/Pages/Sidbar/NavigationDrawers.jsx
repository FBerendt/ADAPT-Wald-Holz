import React, { useState } from "react";
import { Box, Button, Divider, List, ListItem } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Link } from "react-router-dom";

import LoadTop from "../../LoadTop";
import DetailsSidebar from "./DetailsSidebar";
import adapt from "./../../../assets/final_wortbildmarke_adaptwaldholz_2023.jpg";

const NavigationDrawers = () => {
  const [sideBarSize, setSideBarSize] = useState(true);

  const toggleSidebarSize = () => {
    setSideBarSize(!sideBarSize);
  };

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <LoadTop />
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          top: "35px",
          zIndex: 999,
        }}
      >
        {!sideBarSize && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column-reverse",
              justifyContent: "center",
            }}
          >
            <Link to="/#top">
              <img
                src={adapt}
                alt="adapt"
                style={{
                  cursor: "pointer",
                  width: "40px",
                  height: "auto",
                  border: "1px solid gray",
                  borderRadius: "100%",
                  boxShadow: "2px 1px 3px  darkred",
                  marginLeft: 15,
                }}
              />
            </Link>
            <Button
              onClick={toggleSidebarSize}
              sx={{
                color: "green",
                backgroundColor: "none",
                "&:hover": {
                  color: "#4169E1",
                  backgroundColor: "none",
                },
              }}
            >
              <DensityMediumIcon fontSize="large" />
            </Button>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          width: sideBarSize ? "300px" : "0",
          overflowX: "hidden",
          transition: "width 0.5s ease",
          position: "fixed",
          top: "10px",
          height: "calc(100% - 20px)",
          bgcolor: "lightgray",
          boxShadow: 3,
          p: 1,
        }}
      >
        <List sx={{ mt: 0 }}>
          <Box sx={{ display: "flex", my: 2 }}>
            <ListItem>
              <Link to="/#top">
                <img
                  src={adapt}
                  alt="adapt"
                  style={{
                    cursor: "pointer",
                    width: "35%",
                    height: "auto",
                    border: "1px solid gray",
                    borderRadius: "100%",
                    boxShadow: "2px 1px 3px  darkred",
                  }}
                />
              </Link>
            </ListItem>
            <Button
              onClick={toggleSidebarSize}
              sx={{
                color: "green",
                backgroundColor: "none",
                "&:hover": {
                  color: "#4169E1",
                  backgroundColor: "none",
                },
              }}
            >
              <DensityMediumIcon fontSize="large" />
            </Button>
          </Box>
          <Divider />
          <DetailsSidebar />
        </List>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          p: 1,
          marginLeft: sideBarSize ? "300px" : "0",
          transition: "margin-left 0.5s ease",
        }}
      ></Box>
    </Box>
  );
};

export default NavigationDrawers;
