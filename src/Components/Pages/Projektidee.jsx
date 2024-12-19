import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

import Footer from "./Footer";
import LoadTop from "../LoadTop";
import SidbarMobileHandler from "./Sidbar/SidbarMobileHandler";

import image1 from "./../../assets/page1.jpg";

const Projektidee = () => {
  return (
    <Box className="w-full ml-4 md:ml-24 pr-4 md:pr-24">
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
        Adaptives Waldressourcen-Management für eine zukunftsfähige
        Holzwirtschaft in der Region Brandenburg-Berlin
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", marginY: 4 }}>
        <CardMedia
          component="img"
          src={image1}
          alt="image1"
          sx={{
            height: { xs: "200px", md: "400px" },
            width: "full",
            borderRadius: 0,
          }}
        />
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 4 }}
      >
        <Typography variant="h6" sx={{ textAlign: { md: "justify" } }}>
          Die Projektidee
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Im Projekt ADAPT-Wald-Holz wird ein adaptives, also anpassungsfähiges,
          Wald-Holz-Managementsystem für die Region Brandenburg-Berlin am
          Beispiel der Waldkiefer entwickelt. Im Fokus steht eine ökosystem- und
          ressourcenschonende regionale Wertschöpfungskette – von der
          Waldbewirtschaftung über die Holzbereitstellung bis hin zur
          Holzverarbeitung. Im transdisziplinären Innovationsforum werden
          gemeinsam mit der Praxis Forschungsbedarfe identifiziert, bearbeitet
          und die Ergebnisse der Öffentlichkeit vermittelt.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
        <Typography variant="h6" sx={{ textAlign: { md: "justify" } }}>
          Wälder schützen und Kiefernholz nachhaltig nutzen
        </Typography>
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Die Erhaltung der Wälder und deren erforderliche Anpassung an den
          Klimawandel sind Schlüsselaufgaben im integrativen Klimaschutz. Hinzu
          kommt eine möglichst langfristige Kohlenstoffbindung durch die
          Erhöhung und Verlängerung der stofflichen Nutzung von Holz. Die Region
          Brandenburg-Berlin, mit ihren historisch bedingten kieferndominierten
          Wäldern, ist durch den Klimawandel und die Extremwetterereignisse der letzten
          Jahre besonders gefährdet. Vor dem Hintergrund zurückgehender
          Nadelholzbestände und einer gleichzeitig steigenden Nachfrage nach
          Holz, ist in der Projektregion eine enge Verzahnung von adaptivem
          Waldmanagement und effizienter stofflicher Holznutzung von enormer
          Bedeutung. Im Verbundprojekt ADAPT-Wald-Holz wird daher ein
          transdisziplinär arbeitendes Waldreallabor eingerichtet, um den
          Einfluss unterschiedlicher Waldbewirtschaftungsstrategien auf
          zentrale Ökosystemleistungen zu untersuchen: Holzproduktion
          (Nutzung), Kohlenstoffbindung (Klimaschutz) sowie Grund- und
          Trinkwasserbereitstellung (Wasserhaushalt). Die regionale
          Wertschöpfung von Kiefernholz im Holzbau soll durch eine möglichst
          passgenaue, kundenspezifische Holzbereitstellung gestärkt werden. Die
          Entwicklung neuer Verwendungsmöglichkeiten für regionale Holzprodukte,
          die Weiterentwicklung von Normen zum konstruktiven Holzbau und der
          Ausbau eines interdisziplinären Dialogs (zwischen Forstwirtschaft,
          Materialwissenschaft, Design, Architektur und Bauingenieurswesen) legen
          den Grundstein für die Steigerung der Holzbauquote in Brandenburg-Berlin.
        </Typography>

        <Typography variant="h6" sx={{ textAlign: { md: "justify" } }}>
          Der Nachwuchs schafft Innovationen
        </Typography>

        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify" }, mb: 1 }}
        >
          Die Innovationsgruppe, bestehend aus wissenschaftlichen
          Nachwuchskräften, wird räumlich zusammengeführt und bildet ein agiles
          transdisziplinäres Forschungsteam. Die Forscherinnen und Forscher
          generieren Werkzeuge, die der Wald- und Holzwirtschaft entlang der
          gesamten Wertschöpfungskette eine Anpassung an die Herausforderungen
          des Klimawandels ermöglichen. Das öffnet neue Wege der Kooperation
          zwischen den Verbundpartnern sowie mit den Praxispartnern. Durch die
          Forschungsumgebung Waldreallabor und die räumlich zusammengeführte
          Innovationsgruppe entstehen Synergien zwischen Akteuren der Wald- und
          Holzforschung in Brandenburg. Diese Synergien sind die Grundlage für
          die langfristige Etablierung der Forschungsgruppe und weitere,
          dauerhaft angelegte Forschungs- und Transferaktivitäten.
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default Projektidee;
