import React from "react";
import { Typography, Box, Link } from "@mui/material";

import Footer from "../../../Components/Pages/Footer";
import SidbarMobileHandler from "../../Pages/Sidbar/SidbarMobileHandler";

const Imprint = () => {
  return (
    <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8">
      <SidbarMobileHandler />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 3,
          gap: 2,
        }}
      >
        <Box sx={{ mt: 5 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", mb: 2 }}
            gutterBottom
          >
            Impressum
          </Typography>
          <address>
            <Typography variant="body1" gutterBottom>
              <strong>ADAPT-Wald-Holz</strong>
              <br />
              Dr. Ferréol Berendt
              <a
                style={{ color: "blue" }}
                target="blank"
                href="http://maps.google.com/?q=1200 Schicklerstr. 5, 16225 Eberswalde"
              >
                <br />
                Hochschule für nachhaltige Entwicklung Eberswalde
                <br />
                Schicklerstr. 5<br />
                16225 Eberswalde
                <br />
              </a>
              Tel.{" "}
              <a style={{ color: "blue" }} href="tel:+497612033681">
                +49 3334 657 414
              </a>
              <br />
              Kontakt per{" "}
              <a
                style={{ color: "blue" }}
                href="mailto:Ferreol.Berendt@hnee.de"
              >
                E-Mail
              </a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              Verantwortlicher für die Website: Dr. Ferréol Berendt
              <br />
            </Typography>
          </address>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, mt: 2 }}>
            Haftungshinweis
          </Typography>
          <Typography variant="body1">
            Wir bemühen uns, auf unserer Website richtige, aktuelle und
            vollständige Informationen bereitzustellen und behalten uns vor, die
            Informationen jederzeit ohne vorherige Ankündigung zu ändern oder zu
            ergänzen.
          </Typography>
          <Typography variant="body1">
            Wir übernehmen keine Gewähr für die Aktualität, Richtigkeit und
            Vollständigkeit der Informationen. Dies gilt auch für die Inhalte
            externer Websites, auf die in dieser Website über Hyperlinks direkt
            oder indirekt verwiesen wird und auf deren Inhalt und Gestaltung wir
            keinen Einfluss haben.
          </Typography>
          <Typography variant="body1">
            Der Inhalt dieser Website ist urheberrechtlich geschützt. Er darf
            frei verwendet werden, solange der Verfasser und die Quelle
            eindeutig benannt werden und ein Backlink zur Quelle{" "}
            <Link
              href="http://www.Wald-Reallabor.de"
              target="_blank"
              rel="noopener"
            >
              www.Wald-Reallabor.de{" "}
            </Link>
            im Rahmen der Verwendung angebracht wird.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2, mb: 2 }}>
            Urheberrecht
          </Typography>
          <Typography variant="body1">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
            Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
            Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie trotzdem auf eine
            Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
            werden wir derartige Inhalte umgehend entfernen.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Imprint;
