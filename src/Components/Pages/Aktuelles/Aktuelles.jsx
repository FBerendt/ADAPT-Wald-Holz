import React from "react";
import { Link } from "react-router-dom";
import { Box, CardMedia, Typography } from "@mui/material";

import Footer from "../Footer";
import LoadTop from "../../LoadTop";
import SidbarMobileHandler from "../Sidbar/SidbarMobileHandler";

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
            height: { xs: "200px", md: "400px" },
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
        <Typography
          variant="body2"
          sx={{ textAlign: { md: "justify", fontWeight: 700 }, mb: 2, mt: 2 }}
        >
          <u>AKTUELLES:</u>:
        </Typography>
        <Box sx={{ display: { xs: "block", md: "flex" }, gap: 6 }}>
          <CardMedia
            component="img"
            src="https://www.hnee.de/_obj/233CB5BD-9272-4218-A5A0-2EF26B40E2A3/inline/size/300x/BildHE.png"
            alt="aktuelles"
            sx={{
              height: { xs: "300px", md: "250px" },
              width: { xs: "400px", md: "300px" },
              borderRadius: 0,
            }}
          />
          <Box>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "justify" }, mb: 2, mt: { xs: 2, md: 0 } }}
            >
              Im ADAPT-Wald-Holz Reallabor läuft die Holzerntemaßnahme!
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "justify" }, mb: 2 }}
            >
              Verschiedene Holzernteverfahren, vor allem bei erweiterten und
              FSC-konformen Rückegassenabständen, kamen zum Einsatz. Wir sind
              auf die Daten und deren Auswertung gespannt.
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "justify" }, mb: 2 }}
            >
              Im Waldreallabor untersuchen Nachwuchswissenschaftlerinnen und
              -wissenschaftler verschiedene Bewirtschaftungsansätze aus
              verschiedensten Gesichtspunkten: z.B. Wasserhaushalt,
              Biodiversität, Holzproduktion, mechanische Holzeigenschaften.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            gap: 2,
            mt: { xs: 2, md: 6 },
          }}
        >
          <iframe
            className="w-[full] h-[300px] md:w-[650px] md:h-[370px]"
            src="https://www.youtube.com/embed/x2L_tD9kE8I"
            title="WSE 2023: ADAPT-Wald-Holz – On mechanic behavior of Scots Pine under the influence of climate change"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              flexDirection: "column",
              gap: { xs: 2, md: 0 },
              mt: { xs: 2, md: 0 },
              width: { lg: "50%" },
            }}
          >
            <Typography
              variant="body2"
              sx={{ textAlign: { md: "justify" }, fontWeight: "bold" }}
            >
              On mechanic behavior of Scots Pine under the influence of climatic
              change
            </Typography>
            <Typography variant="body2" sx={{ textAlign: { md: "justify" } }}>
              Our doctoral student Tobias Bender presents his work in this
              fantastic short viedeo!
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            my: { xs: 2, md: 4 },
          }}
        >
          <hr className="w-4/6 border-[1.2px] border-black" />
        </Box>
        <Box sx={{ display: { xs: "block", md: "flex" }, gap: 6 }}>
          <CardMedia
            component="img"
            src="https://www.hnee.de/_obj/AED8E96C-06D4-4E6B-9CBF-2F4D72E8D935/inline/size/258x/prop/IMG_0828.JPG"
            alt="aktuelles"
            sx={{
              height: "full",
              width: { xs: "400px", md: "260px" },
              borderRadius: 0,
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "start", md: "center" },
              flexDirection: "column",
              width: { lg: "50%" },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                textAlign: { xs: "start", md: "center" },
                mt: { xs: 2, md: 0 },
                fontWeight: "bold",
              }}
            >
              Kick-off-Treffen vom InnoForum Wald & Holz
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { xs: "start", md: "center" } }}
            >
              Am 13. Juni 2023 fand die Auftaktveranstaltung vom InnoForum Wald
              & Holz statt.
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: { xs: "start", md: "center" } }}
            >
              Mit Ansätzen aus dem Design Thinking haben Vertreter*innen der
              gesamten Forst-Holz-Kette das zukünftige Format vom InnoForum
              mitgestaltet!
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            my: { xs: 2, md: 4 },
          }}
        >
          <hr className="w-4/6 border-[1.2px] border-black" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <Typography variant="body2">
            Am 13. Februar 2023 fand das Projektauftakttreffen am Waldcampus der
            HNEE statt. Alle Projektpartner*innen, der Projektträger Jülich und
            das REGULUS-Querschnittsprojekt waren vertreten. Der Projektstart
            war ein voller Erfolg und die (Vor)Freude auf das Projekt riesig!
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { xs: "start", md: "center" },
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
            }}
          >
            <CardMedia
              component="img"
              src="https://www.hnee.de/_obj/3F82B1BA-DA83-4819-9B68-63029D679CA1/inline/size/581x/20230313-Kickoff-ADAPT-WaldUlrich_Wessollek-3384.jpg"
              alt="aktuelles"
              sx={{
                height: "full",
                width: { xs: "400px", md: "50%" },
                borderRadius: 0,
              }}
            />{" "}
            <iframe
              className="w-[full] h-[300px] md:w-[650px] md:h-[370px]"
              src="https://www.youtube.com/embed/Sv4CueQ_gLI"
              title="Prof. Tobias Cremer zum Start des Projektes ADAPT-Wald."
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Aktuelles;
