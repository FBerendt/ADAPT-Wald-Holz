import React from "react";
import { Link } from "react-router-dom";
import { Box, Divider, List, ListItem, ListItemText } from "@mui/material";

const DetailsSidebar = () => {
  return (
    <>
      <Box>
        <Link to="/projektidee#top">
          <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
            <ListItemText primary="Die Projektidee" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/module#top">
          <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
            <ListItemText primary="Die Module" />
          </ListItem>
        </Link>
        <List sx={{ pl: 4 }}>
          <Link to="/waldmanagement#top">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="Waldmanagement" />
            </ListItem>
          </Link>
          <Link to="/holzbereitstellung#top">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="Holzbereitstellung" />
            </ListItem>
          </Link>
          <Link to="/holzverwendung#top">
            <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
              <ListItemText primary="Holzverwendung" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <Link to="/innoForum#top">
          <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
            <ListItemText primary="InnoForum Wald und Holz" />
          </ListItem>
        </Link>
        <Divider />
        <a
          href="https://vr-easy.com/tour/hneeberswalde/240524-adaptwaldholz/"
          target="blank"
        >
          <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
            <ListItemText primary="360° Virtual Tour" />
          </ListItem>
        </a>
        <Divider />
        <Link to="/team#top">
          <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
            <ListItemText primary="Teammitglieder" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/projektkonsortium#top">
          <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
            <ListItemText primary="Projektkonsortium" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/regulus#top">
          <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
            <ListItemText primary="REGULUS" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/imprint#top">
          <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
            <ListItemText primary="Impressum" />
          </ListItem>
        </Link>
        <Divider />
        <Link to="/datenschutz#top">
          <ListItem button sx={{ ":hover": { color: "#039be5" } }}>
            <ListItemText primary="Datenschutz" />
          </ListItem>
        </Link>
      </Box>
    </>
  );
};

export default DetailsSidebar;
