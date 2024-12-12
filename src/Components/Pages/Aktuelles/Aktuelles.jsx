import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

import Footer from "../Footer";
import LoadTop from "../../LoadTop";
import SidbarMobileHandler from "../Sidbar/SidbarMobileHandler";
import AktuellesData from "../../blocks/AktuellesData";
import AktuellesBlocks from "./AktuellesBlocks";

import aktuelles from "./../../../assets/Aktuelles.jpg";

const Aktuelles = () => {
  return (
    <Box className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8">
      <LoadTop />
      <SidbarMobileHandler />
      <Typography
        variant="h5"
        sx={{
          my: { xs: 4, md: 8 },
          fontWeight: "bold",
          color: "#2b2b2b",
          textAlign: { xs: "center", md: "start" },
        }}
      >
        AKTUELLES
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginY: 4 }}>
        <CardMedia
          component="img"
          src={aktuelles}
          alt="image7"
          sx={{
            height: { xs: "200px", md: "600px" },
            width: "full",
            borderRadius: 0,
          }}
        />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 4 }}
      >
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Im Projekt ADAPT-Wald-Holz entwickelt eine Nachwuchsgruppe ein
          adaptives Wald-Holz-Managementsystem für die Region Brandenburg-Berlin
          am Beispiel Waldkiefer. Im Fokus steht eine ökosystem- und
          ressourcenschonende regionale Wertschöpfungskette - von der
          Waldbewirtschaftung über die Holzbereitstellung bis zur
          Holzverarbeitung.
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Im Projekt wird ein Wald-Reallabor eingerichtet, zur Entwicklung und
          Simulation neuartiger Waldbewirtschaftungsansätze. In einem zweiten
          Arbeitspaket werden bestehende Holzernte- und Logistikkonzepte
          technologisch und im Hinblick auf neuartige Möglichkeiten der
          Datenweitergabe und –verknüpfung weiterentwickelt. Schließlich werden
          neue Verwendungsansätze für Kiefernholz zur Steigerung der regionalen
          Wertschöpfung dieses Rohstoffs insb. im Bausektor entwickelt. Diese
          Untersuchungen werden flankiert durch den Aufbau eines InnoForums mit
          Praxisakteuren, zum Transfer der im Wald-Reallabor und der weiteren
          Holzbereitstellungs- und -verwertungskette erprobten Ansätze in die
          Praxis.
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mt: 1 }}
        >
          <u>Wissenschaftl. Projektkoordination</u>: Dr. Ferréol Berendt
          (Ferreol.Berendt[at]hnee.de)
        </Typography>
        <Typography variant="body2" sx={{ textAlign: { md: "justify" } }}>
          <u>Gesamtprojektleitung</u>: Prof. Dr. Tobias Cremer
        </Typography>
        <Typography variant="body2" sx={{ textAlign: { md: "justify" } }}>
          <u>Nachwuchsgruppe</u>: Tobias Bender, Ramazan Bülbül, Maximilian
          Jakob, Dr. Julia Kaplick, Tina Krüger, Alexa Michel, Stephan Playfair,
          Dr. Friedrich Reppe
        </Typography>
        <Typography variant="body2" sx={{ textAlign: { md: "justify" } }}>
          <u>Teilprojektleitung</u>: Prof. Dr. Jan-Peter Mund (HNEE), Prof. Dr.
          Alexander Pfriem (HNEE), Prof. Dr. Ulrich Schwarz (HNEE), Prof. Dr.
          Peter Spathelf (HNEE), Prof. Dr.-Ing. Karola Dierichs (MPIKG), Dr.
          Tanja Sanders (Thünen-Institut), Dr. Ulrike Hagemann (LFE), Prof. Dr.
          Jens Schröder (LFE), Prof. Dr. Gunnar Lischeid (ZALF)
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 2 }}
        >
          <u>Laufzeit, Förderkennzeichen und Projektvolumen</u>: 02/2023 bis
          01/2028; FKZ: 033L301A; 2.56 Mio. € (HNEE- Anteil: 1.13 Mio. €)
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ textAlign: { md: "justify", fontWeight: 700 }, my: 2 }}
          >
            <u>AKTUELLES:</u>:
          </Typography>
          <hr className="w-4/6 border-[1.2px] border-black" />
        </Box>
      </Box>
      <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8 sm:px-4 md:px-0 flex flex-col items-center">
        <Box sx={{ width: "90%" }}></Box>
        <Box
          sx={{
            display: { xs: "flex", lg: "grid" },
            justifyItems: "center",
            alignContent: "center",
            flexDirection: { xs: "column", lg: "unset" },
            gridTemplateColumns: "repeat(auto-fit, minmax(50%, 1fr))",
            width: "100%",
          }}
        >
          {AktuellesData.map((e, index) => (
            <div
              key={e.id}
              className={`${
                index % 2 === 0
                  ? "w-full border md:border-t-0 md:border-l-0 md:border-r-2 pt-5 md:border-b-3 md:border-gray-300 "
                  : "w-full border md:border-t-0 md:border-r-0 md:border-b-3 pt-5 md:border-gray-300"
              }
                ${
                  index === AktuellesData.length - 1 ||
                  index === AktuellesData.length - 2
                    ? "border-b-0"
                    : ""
                }
                `}
            >
              <AktuellesBlocks data={e} index={index} />
            </div>
          ))}
        </Box>
        <Footer />
      </div>
    </Box>
  );
};

export default Aktuelles;
