import React from "react";
import { Link } from "react-router-dom";
import { Box, CardMedia, Typography } from "@mui/material";

import Footer from "./Footer";
import SidbarMobileHandler from "./Sidbar/SidbarMobileHandler";

import image7 from "./../../assets/page7.jpg";
import LoadTop from "../LoadTop";

const Holzbereitstellung = () => {
  return (
    <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8">
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
        Holzernte-, Holzlogistik- und Datenaustauschkonzepte für die
        Holzbereitstellungskette
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <CardMedia
          component="img"
          src={image7}
          alt="image6"
          sx={{
            height: { xs: "200px", md: "400px" },
            width: { xs: "full", md: "full" },
            borderRadius: 0,
          }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 4 }}>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Kernstück der Bemühungen zur Optimierung der Rohstoffversorgung und
          des zugehörigen Datenaustauschs sowie zur Erhöhung von Transparenz und
          Vertrauen zwischen der Wald- und der Holzwirtschaft ist der Entwurf
          einer geeigneten interoperablen (Infra-)Struktur für Datenaustausch
          und Datenanalyse (i.W. Plattform). Als Bindeglied zwischen dem
          Waldmanagement (
          <Link to="/waldmanagement#top" style={{ color: "#4169E1" }}>
            Schnittstelle Modul A
          </Link>
          ) und der Holzverwendung (
          <Link to="/holzverwendung#top" style={{ color: "#4169E1" }}>
            Schnittstelle Modul C
          </Link>
          ) sollen relevante Daten aller Akteure gleichermaßen erfasst werden.
          Neben generierten Daten aus der Holzernte und -logistik (z. B.
          Holzvermessung) verbindet die Plattform insbesondere Daten aus dem
          digitalen Waldmonitoring und der Waldbewirtschaftung (
          <Link to="/waldmanagement#top" style={{ color: "#4169E1" }}>
            Schnittstelle Modul A
          </Link>
          ) sowie der Materialcharakterisierung (
          <Link to="/holzverwendung#top" style={{ color: "#4169E1" }}>
            Schnittstelle Modul C
          </Link>
          ).
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Es werden relevante Elemente der Holzbereitstellungskette detailliert
          untersucht und optimiert. So sollen die Einsatzmöglichkeiten von
          teilmechanisierten Holzernteverfahren unter wissenschaftlicher
          Begleitung tiefgehend untersucht und beispielhaft umgesetzt werden.
          Unter Zugrundelegung des Waldreallabor-Ansatzes werden auf dieser
          Basis in Abstimmung und unter maßgeblicher Beteiligung der
          Praxispartner des Projekts Holzernteansätze entwickelt und neue
          Einsatzbereiche in die Praxis umgesetzt. Diese Konzepte werden im
          praktischen Forstbetrieb umgesetzt und wissenschaftlich mittels
          Zeitstudien, ökonomischen Begleituntersuchungen und ergonomischen
          Untersuchungen ganzheitlich analysiert.
        </Typography>
      </Box>
      <Footer />
    </div>
  );
};

export default Holzbereitstellung;
