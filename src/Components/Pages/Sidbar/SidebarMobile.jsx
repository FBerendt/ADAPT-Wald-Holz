import React from "react";
import { Close } from "@mui/icons-material";
import { Box, Button, Dialog, Divider, List, ListItem } from "@mui/material";

import LoadTop from "../../LoadTop";
import DetailsSidebar from "./DetailsSidebar";

const SidebarMobile = (props) => {
  const { onClose, open } = props;

  return (
    <div>
      <LoadTop />
      <Dialog onClose={onClose} open={open} className="bg-gray-500 opacity-98">
        <Box
          sx={{
            px: 4,
            display: "flex",
            justifyContent: "space-between",
            my: 1,
          }}
        >
          <ListItem>
            <img
              onClick={onClose}
              src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/final_wortbildmarke_logo.jpg?raw=true"
              alt="adapt"
              style={{
                cursor: "pointer",
                width: "25%",
                height: "auto",
                border: "1px solid gray",
                borderRadius: "100%",
                boxShadow: "2px 1px 3px  darkred",
              }}
            />
          </ListItem>

          <Button
            onClick={onClose}
            sx={{
              color: "gray",
              backgroundColor: "none",
              "&:hover": {
                color: "#4169E1",
                backgroundColor: "none",
              },
            }}
          >
            <Close fontSize="large" />
          </Button>
        </Box>
        <Box
          color={"success"}
          sx={{
            px: 4,
          }}
        >
          <List sx={{ mt: 0 }}>
            <Divider />
            <DetailsSidebar />
          </List>
        </Box>
      </Dialog>{" "}
    </div>
  );
};

export default SidebarMobile;
