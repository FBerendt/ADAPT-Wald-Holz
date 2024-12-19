import React from "react";
import { Link } from "react-router-dom";
import { Box, CardMedia, Typography } from "@mui/material";

import LoadTop from "../LoadTop";
import Footer from "./Footer";
import SidbarMobileHandler from "./Sidbar/SidbarMobileHandler";

const Projektkonsortium = () => {
  return (
    <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8 ">
      <LoadTop />
      <SidbarMobileHandler />
      <Box>
        <Typography
          variant="h5"
          sx={{
            marginY: { xs: 4, md: 8 },
            fontWeight: "bold",
            color: "#2b2b2b",
            textAlign: { xs: "center", md: "start" },
          }}
        >
          Projektkonsortium
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "full",
          justifyContent: "center",
          flexDirection: "column",
          marginY: 4,
        }}
      >
        <CardMedia
          component="img"
          src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/main-page-hnee.jpg?raw=true"
          alt="image8"
          sx={{
            height: { xs: "200px", md: "400px" },
            width: "full",
            borderRadius: 0,
          }}
        />
        <span className="text-end pr-6 italic pt-1 text-[9px] font-[#716653]">
          © HNEE
        </span>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 4 }}
      >
        <Typography variant="body2" sx={{ textAlign: { md: "justify" } }}>
          Das innovative, regionale Forschungscluster entsteht am Waldcampus
          Eberswalde. Federführend verknüpft die{" "}
          <a
            target="_blank"
            className="pointer text-[#4169E1] px-2"
            href="https://www.hnee.de"
          >
            Hochschule für nachhaltige Entwicklung Eberswalde
          </a>{" "}
          (HNEE) die Eberswalder Forschungseinrichtungen HNEE und das
          <a
            target="_blank"
            className="pointer text-[#4169E1] px-2"
            href="https://www.thuenen.de/de/fachinstitute/waldoekosysteme"
          >
            Thünen-Institut für Waldökosysteme
          </a>
          mit den Erfahrungen und Kenntnissen des Wissenstransferpartners LFE
          <a
            target="_blank"
            className="pointer text-[#4169E1] px-2"
            href="https://forst.brandenburg.de/lfb/de/ueber-uns/landeskompetenzzentrum-lfe"
          >
            (Landeskompetenzzentrum Forst Eberswalde)
          </a>
          sowie des
          <a
            target="_blank"
            className="pointer text-[#4169E1] px-2"
            href="https://www.mpikg.mpg.de"
          >
            Max-Planck-Instituts für Kolloid- und Grenzflächenforschung
          </a>
          und des
          <a
            target="_blank"
            className="pointer text-[#4169E1] px-2"
            href="https://www.zalf.de/de/Seiten/ZALF.aspx"
          >
            Leibniz-Zentrums für Agrarlandschaftsforschung (ZALF) e.V.
          </a>
          in einer Innovationsgruppe aus Nachwuchswissenschaftler*innen. Alle
          Verbundpartner bringen ihre komplementären Kompetenzen in das
          Forschungscluster und die Innovationsgruppe ein und kooperieren in
          transdisziplinär zusammengesetzten{" "}
          <Link to="/module#top" style={{ color: "#4169E1" }}>
            Modulen
          </Link>
          .
        </Typography>
      </Box>
      <Footer />
    </div>
  );
};

export default Projektkonsortium;
