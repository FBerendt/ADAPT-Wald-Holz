import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";

import Footer from "./Footer";
import SidbarMobileHandler from "./../Pages/Sidbar/SidbarMobileHandler";
import LoadTop from "../LoadTop";

const Regulus = () => {
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
        REGULUS
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <CardMedia
          component="img"
          src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/main-page-regulus.jpg?raw=true"
          alt="Regulus"
          sx={{
            maxHeight: { xs: "35vh", md: "35vh", lg: "35vh" },
            width: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Wälder leisten Herausragendes für unsere Lebensgrundlagen. Sie
          schützen Klima, Wasser und Biodiversität. Sie bieten Erholungsraum und
          liefern mit dem Rohstoff Holz eine Ressource mit zentraler Bedeutung
          für die Wirtschaft. Die aktuellen Herausforderungen für die Wälder
          durch Stürme, Trockenheit und Schädlinge sind mit wachsenden und immer
          vielfältigeren Ansprüchen der Gesellschaft verbunden. In der Folge
          stehen das Waldmanagement und die Holzwirtschaft vor drängenden
          Fragen, die nicht mehr durch sektorale Forschungsansätze bearbeitet
          werden können.
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Daher besteht das zentrale Anliegen der
          <a
            target="_blank"
            className="pointer text-blue-500 px-2"
            href="https://regulus-waldholz.de/ "
          >
            REGULUS-Forschung
          </a>
          darin, inter- und transdisziplinäre Forschung zu stärken und die
          Forschungslandschaft Wald und Holz aktiv zu gestalten, um
          zukunftsweisende Strategien für eine klimaschützende Wald- und
          Holzwirtschaft zu entwickeln. Derzeit wird in Deutschland in zehn
          regionalen
          <a
            target="_blank"
            className="pointer text-blue-500 px-2"
            href="https://regulus-waldholz.de/innovationsgruppen/ "
          >
            REGULUS-Innovationsgruppen
          </a>
          an konkreten Lösungskonzepten für eine nachhaltige und klimaschützende
          Wald- und Holzwirtschaft geforscht. Dabei werden klimaangepasste
          Wald-Holz-Managementsysteme und die Entwicklung multifunktionaler
          Wälder auf Schadflächen, Möglichkeiten zum Erhalt von
          Ökosystemleistungen unter Trockenstress und die stoffliche
          Altholznutzung erforscht. Darüber hinaus werden digitale Instrumente
          entwickelt, um die Dynamiken von Waldökosystemen zu verstehen..
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Derzeit wird in zehn regionalen REGULUS-Innovationsgruppen in ganz
          Deutschland inter- und transdisziplinär geforscht. Die
          unterschiedlichen REGULUS-Innovationsgruppen, zusammengesetzt aus
          verschiedenen Institutionen und Praxispartnern haben die Umsetzbarkeit
          und potenzielle Wirkung ihrer Arbeiten und Ergebnisse im Fokus. Die
          gezielte Förderung von Innovationsprozessen ist ein Merkmal, das durch
          die Vernetzung maßgeblich unterstützt wird. Auf der
          <a
            target="_blank"
            className="pointer text-blue-500 px-2"
            href="https://regulus-waldholz.de/innovationsgruppen/#standortkarte "
          >
            REGULUS-Standortkarte
          </a>
          sind alle Gruppen und die jeweiligen Beteiligungen aufgeführt..
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default Regulus;
