import React from "react";
import { Box, Typography } from "@mui/material";

import Footer from "./../../Pages/Footer";
import TeamData from "./TeamData";
import TeamDetails from "./TeamDetails";
import SidbarMobileHandler from "../../Pages/Sidbar/SidbarMobileHandler";

const Team = () => {
  return (
    <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8">
      <SidbarMobileHandler />
      <Typography
        variant="h4"
        sx={{
          my: { xs: 4, md: 8 },
          fontWeight: "bold",
          color: "#2b2b2b",
          textAlign: { xs: "center", md: "start" },
        }}
      >
        Teammitglieder
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: "bold", mt: 8, mb: 2 }}>
        Wissenschaftl. Projektkoordination:
      </Typography>
      <Box>
        {TeamData.map((e) => {
          if (e.id === 1) {
            return e.people.map((j) => (
              <TeamDetails
                image={j.image}
                key={j.id}
                name={j.name}
                address={j.address}
                phone={j.phone}
                email={j.email}
                page={j.page}
              />
            ));
          }
          return null;
        })}
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bold", mt: 8, mb: 2 }}>
        Nachwuchsgruppe
      </Typography>
      <Box>
        {TeamData.map((e) => {
          if (e.id === 2) {
            return e.people.map((j) => (
              <TeamDetails
                image={j.image}
                key={j.id}
                name={j.name}
                address={j.address}
                phone={j.phone}
                email={j.email}
                page={j.page}
              />
            ));
          }
          return null;
        })}
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bold", mt: 8, mb: 2 }}>
        Gesamtprojektleitung
      </Typography>
      <Box>
        {TeamData.map((e) => {
          if (e.id === 3) {
            return e.people.map((j) => (
              <TeamDetails
                image={j.image}
                key={j.id}
                name={j.name}
                address={j.address}
                phone={j.phone}
                email={j.email}
                page={j.page}
              />
            ));
          }
          return null;
        })}
      </Box>
      <Typography variant="h5" sx={{ fontWeight: "bold", mt: 8, mb: 2 }}>
        Teilprojektleitung
      </Typography>
      <Box>
        {TeamData.map((e) => {
          if (e.id === 4) {
            return e.people.map((j) => (
              <TeamDetails
                image={j.image}
                key={j.id}
                name={j.name}
                address={j.address}
                phone={j.phone}
                email={j.email}
                page={j.page}
              />
            ));
          }
          return null;
        })}
      </Box>
      <Footer />
    </div>
  );
};

export default Team;
