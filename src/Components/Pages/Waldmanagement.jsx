import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Footer from "./Footer";
import SidbarMobileHandler from "./Sidbar/SidbarMobileHandler";
import LoadTop from "../LoadTop";

const Waldmanagement = () => {
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
        Potenziale und Grenzen eines adaptiven Waldmanagements in Brandenburg
        unter Berücksichtigung der zukünftig erforderlichen Ökosystemleistungen
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <CardMedia
          component="img"
          src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/main-page-waldmanagement.jpg?raw=true"
          alt="image5"
          sx={{
            height: { xs: "200px", md: "400px" },
            width: "full",
            borderRadius: 0,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginY: 4,
        }}
      >
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Ziel des Moduls ist die Erprobung und Analyse adaptiver
          Waldmanagement-Verfahren in Brandenburger Kiefernwäldern und deren
          Effekt auf verschiedene Ökosystemleistungen (besonders im Fokus stehen
          Produktivität, Kohlenstoffspeicherung und Wasserhaushalt).
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Hierzu erfolgt der Aufbau eines regionalen Waldreallabors in
          Brandenburg. Auf der ca. 30 ha großen Kernfläche des Waldreallabors in
          der Schorfheide (Nordostbrandenburg) werden anhand real umgesetzter
          sowie simulierter Behandlungsvarianten (Variationen in
          Eingriffsstärke, -turnus, räumlichem Strukturdesign,
          Verjüngungssteuerung etc.) die Effekte unterschiedlicher
          Managementszenarien auf die Bestandesvitalität, -struktur und
          –produktivität, auf Holzernteverfahren{" "}
          <Link to="/holzbereitstellung#top" style={{ color: "#4169E1" }}>
            (Schnittstelle Modul B)
          </Link>{" "}
          sowie auf Holzqualität und -quantität{" "}
          <Link to="/holzverwendung#top" style={{ color: "#4169E1" }}>
            (Schnittstelle Modul C)
          </Link>{" "}
          und auf zukünftig relevante Waldökosystemleistungen in der Region
          Brandenburg-Berlin analysiert.
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Die auf der Kernfläche des Waldreallabors implementierten
          Managementszenarien bzw. die enthaltenen waldbaulichen Strategien
          werden durch kommunale und private Partnerbetriebe in Teilen
          wiederholt, in ihrer Praxistauglichkeit analysiert und mit den
          Ergebnissen aus der Kernfläche verglichen und bewertet. Das
          Zusammenspiel der Kernfläche des Projektes mit den Satellitenflächen
          der Partnerbetriebe stellt das Waldreallabor als Ganzes dar.
          Zusätzlich werden im sogenannten „Praxisnetzwerk“, das über
          Dachverbände und Netzwerke eine größere Zahl von Stakeholdern im
          Bereich Wald und Forst erreicht, Waldbesitzende in geringerer
          Intensität und Frequenz am Projekt beteiligt.
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Die Daten aus Messungen des Bestandesklimas, der Bodenfeuchte und
          -temperatur, des Streufalls, des Baumwachstums, der Totholz- und
          Vegetationsaufnahmen sowie der Verjüngung und zu Baummikrohabitaten
          werden ausgewertet. Diese Erhebungen lassen Auswirkung der
          Nutzungsintensitäten auf das Waldinnenklima, Biodiversität, den
          Kohlenstoffkreislauf und Wasserbereitstellung zu und werden mit
          Wiederholungsaufnahmen am Boden und einer Zeitreihenanalysen aus
          Fernerkundungsdaten kombiniert. Zusätzlich werden die erhobenen Daten
          in das Waldwachstumsmodell BWINPro eingebunden, um dieses
          weiterzuentwickeln.
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Die unterschiedlichen Waldbestände im Reallabor werden mit einem
          tragbaren SLAM-LiDAR-Scanner (PLS) vom Boden und mit einem RTK-UAV aus
          der Luft digital erfasst und diese digitalen Vollinventurdaten den
          weiteren Arbeitspaketen im Projekt zur Verfügung gestellt. Dabei
          liefert der PLS hochaufgelöste (~1cm) Punktewolken des Stammbereichs,
          der Bodenvegetation und der unteren Krone. Die Punktewolken der
          UAV-Aufnahmen komplettieren den oberen Kronenbereich und dienen zur
          Georeferenzierung der gesamten 3D Punktewolke. Durch
          Wiederholungsaufnahmen nach den durchgeführten
          Bewirtschaftungsmaßnahmen werden die Punktewolken um eine temporale
          Dimension erweitert (4D-Punktewolken). Diese ermöglichen die Analyse
          und Visualisierung von Zuwachs und Kronendynamiken sowie
          Verjüngungsmonitoring innerhalb der 4D Punktewolken anhand noch zu
          entwickelnder digitaler Algorithmik.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <CardMedia
            component="img"
            src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/Waldmanagement-lidar.jpg?raw=true"
            alt="Waldmanagement"
            sx={{
              height: { xs: "200px", md: "400px" },
              width: { xs: "full", md: "50%" },
              borderRadius: 0,
            }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Waldmanagement;
