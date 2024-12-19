import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

import Footer from "./Footer";
import LoadTop from "../LoadTop";
import SidbarMobileHandler from "./Sidbar/SidbarMobileHandler";

const InnoForum = () => {
  return (
    <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8">
      <LoadTop />
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
          InnoForum Wald und Holz
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginY: 4,
          }}
        >
          <CardMedia
            component="img"
            src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/main-page-innoForum.jpg?raw=true"
            alt="InnoForum"
            sx={{
              height: { xs: "200px", md: "400px" },
              width: "full",
              borderRadius: 0,
            }}
          />
          <span className="text-end pr-6 italic pt-1 text-[9px] font-[#716653]">
            ©HNEE, Ulrich Wessollek
          </span>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          my: 4,
        }}
      >
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Das regionale Forschungscluster Wald-Holz am Standort Eberswalde
          liefert durch seine Vernetzung mit Schlüsselakteuren der
          brandenburgischen Wald- und Holzwirtschaft die Basis für erfolgreichen
          Wissenstransfer und damit für eine Transformation der Wald- und
          Holzwirtschaft.
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Mit dem Aufbau eines Innovationsforums (InnoForum Wald und Holz), in
          dem forst- und holzwirtschaftliche mit nicht-forstlichen Akteuren
          zusammenarbeiten, wird eine transfer-freundliche Umgebung langfristig
          in der Region etabliert. Dabei werden Rahmenbedingungen für eine
          übertragbare, kohärente Strategie zur Lenkung der Stoffströme von Holz
          entwickelt. Zielgröße ist der größtmögliche volkswirtschaftliche und
          ökologische Nutzen, vor allem für die in den nächsten zwei bis drei
          Jahrzehnten in Brandenburg weiterhin dominierende Waldkiefer. Im
          InnoForum Wald und Holz werden die gewonnenen Erkenntnisse mit
          Akteuren der Wald- und Holzwirtschaft sowie weiteren
          Interessensgruppen diskutiert, während gleichzeitig Forschungs- und
          Diskussionsbedarfe der Praxisakteure in das Vorhaben transdisziplinär
          zurückgeführt und dort integriert und bearbeitet werden..
        </Typography>
      </Box>
      <Footer />
    </div>
  );
};

export default InnoForum;
