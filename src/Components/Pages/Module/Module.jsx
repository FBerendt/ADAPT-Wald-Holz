import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import Footer from "../Footer";
import SidbarMobileHandler from "../Sidbar/SidbarMobileHandler";
import ImageViewerCustom from "./ImageViewerCustom";

const Module = () => {
  return (
    <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8">
      <SidbarMobileHandler />
      <Box>
        <Typography
          variant="h5"
          sx={{
            my: { xs: 4, md: 8 },
            fontWeight: "bold",
            color: "#2b2b2b",
            textAlign: { xs: "center", md: "start" },
          }}
        >
          Die Module
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <ImageViewerCustom
            image={
              "https://github.com/FBerendt/wald-reallabor-photo/blob/main/main-page-module.png?raw=true"
            }
          ></ImageViewerCustom>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 4 }}
      >
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Das innovative, regionale Forschungscluster Klima-Wald-Holz entsteht
          am Waldcampus Eberswalde. Alle Verbundpartner bringen ihre
          komplementären Kompetenzen in das Forschungscluster und die
          Innovationsgruppe ein und kooperieren in transdisziplinär
          zusammengesetzten Modulen. Die Vernetzung von Akteur*innen und von
          Daten nimmt dabei eine zentrale Rolle ein. Die geplanten
          Forschungsarbeiten sind in drei Hauptmodule unterteilt {""}
          <Link
            to="/holzverwendung#top"
            style={{
              color: "#4169E1",
            }}
          >
            {""}(A) Adaptives Waldmanagement,
          </Link>
          <Link
            to="/innoForum#top"
            style={{
              color: "#4169E1",
            }}
          >
            {""} (B) Holzernte, Logistik und Datenvernetzung sowie,{""}
          </Link>
          <Link
            to="/projektkonsortium#top"
            style={{
              color: "#4169E1",
            }}
          >
            {""} (C) Neuartige Holzverwendung {""}
          </Link>
          im Bauwesen.
        </Typography>
      </Box>
      <Footer />
    </div>
  );
};

export default Module;
