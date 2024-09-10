import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";
import LoadTop from "../LoadTop";
import Footer from "./Footer";

const Datenschutz = () => {
  return (
    <div className="w-full ml-4 md:ml-24 pr-4 md:pr-24 mb-8 ">
      <LoadTop />
      <Box sx={{ mt: { xs: 4, md: 8 }, mb: 4, width: "full" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2, fontFamily: "serif" }}
        >
          Datenschutz
        </Typography>
        <Typography variant="body1" paragraph fontFamily="serif">
          Wir freuen uns über Ihren Besuch auf unserer Website.
        </Typography>
        <Typography variant="body1" paragraph fontFamily="serif">
          Um Ihre Daten vor unerwünschten Zugriffen möglichst umfassend zu
          schützen, treffen wir technische und organisatorische Maßnahmen. Das
          ist die sicherste Form, Inhalte im Web anzubieten!
        </Typography>
        <Typography variant="body1" paragraph fontFamily="serif">
          Um Ihre Daten während der Nutzung unserer Webangebote zu schützen,
          setzen wir Verschlüsselungsverfahren ein. Ihre Angaben werden von
          Ihrem Rechner zu unserem Server und umgekehrt über das Internet
          mittels einer TLS-Verschlüsselung übertragen. Sie erkennen das daran,
          dass in der Statusleiste Ihres Browsers das Schloss-Symbol geschlossen
          ist und die Adresszeile mit https:// beginnt.
        </Typography>
        <Typography variant="body1" paragraph fontFamily="serif">
          Nachfolgend möchten wir Sie über den Umgang mit Ihren Daten gemäß
          Artikel 13 der Datenschutz-Grundverordnung (DSGVO) auf der Website von
          ADAPT-Wald-Holz informieren. Falls darüber hinaus Fragen offen
          bleiben, kontaktieren Sie uns bitte:{" "}
        </Typography>
        <Typography variant="body1" paragraph fontFamily="serif">
          Verantwortlicher für die Website: Dr. Ferréol Berendt{" "}
          <Link href="mailto:Ferreol.Berendt@hnee.de">
            (Ferreol.Berendt@hnee.de)
          </Link>
        </Typography>

        <Box mt={2} mb={4}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, fontFamily: "serif" }}
          >
            Datensparsamkeit
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Das wichtigste Prinzip ist die Datensparsamkeit. Wir haben unser
            Internet-Angebot grundsätzlich so gestaltet, dass dessen Nutzung
            anonym erfolgen kann.
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Wir setzen keine Cookies ein.
          </Typography>
        </Box>

        <Box mt={3} mb={2}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", fontFamily: "serif" }}
            paragraph
          >
            <strong>Welche Daten von Nutzer*innen werden gespeichert?</strong>
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Kontakt via E-Mail oder Telefon
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Nehmen Sie mit uns über E-Mail oder Telefon Verbindung auf, werden
            Ihre Angaben bei uns gespeichert, damit auf diese zur Bearbeitung
            und Beantwortung Ihrer Anfrage zurückgegriffen werden kann. Ohne
            Ihre Einwilligung werden diese Daten nicht an Dritte weitergegeben.
            Ihre Daten werden nur zur Beantwortung Ihrer Anfrage verarbeitet und
            spätestens nach einem Zeitraum von 24 Monaten gelöscht.
          </Typography>
        </Box>

        <Box mt={2} mb={2}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", fontFamily: "serif" }}
          >
            Weitere Inhalte der Datenschutzerklärung
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            <strong>Datenübermittlung an Dritte</strong>
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Wir übermitteln Ihre Daten nicht an Dritte.
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            <strong>Datenübermittlung in Drittländer</strong>
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Eine Datenübermittlung in Drittländer erfolgt nicht.
          </Typography>
        </Box>

        {/* <Box mt={2} mb={2}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
            Datenschutz
          </Typography>
        </Box>

        <Box mt={2} mb={2}>
          <Typography variant="body1" paragraph>
            Verantwortliche für die Website: Dr. Ferréol Berendt
          </Typography>
        </Box> */}

        <Box mt={2} mb={2}>
          {/* <Typography variant="h5" gutterBottom>
            Welche Nutzungsdaten werden gespeichert?
          </Typography> */}
          {/* <Typography variant="body1" paragraph>
            Bei Nutzungsdaten handelt es sich um Informationen, die
            grundsätzlich anonym erhoben und für die Entwicklung der Website
            genutzt werden. Wenn Sie unsere Website besuchen, werden auf unserem
            Webserver temporär sogenannte Nutzungsdaten zu statistischen Zwecken
            als Protokoll gespeichert – jedoch nur in anonymisierter Form. Die
            Daten helfen uns dabei, die Qualität unserer Website und Webdienste
            zu verbessern oder Angriffe auf unsere webbasierten Angebote
            lokalisieren zu können.
          </Typography> */}
          {/* <Typography variant="body1" paragraph>
            Dieser Datensatz besteht aus
          </Typography> */}
          {/* <List>
            <ListItem>
              <ListItemText primary="der Seite, von der aus die Datei angefordert wurde;" />
            </ListItem>
            <ListItem>
              <ListItemText primary="dem Namen der aufgerufenen Seite oder Datei;" />
            </ListItem>
            <ListItem>
              <ListItemText primary="dem Datum und der Uhrzeit der Abfrage;" />
            </ListItem>
            <ListItem>
              <ListItemText primary="der übertragenen Datenmenge;" />
            </ListItem>
            <ListItem>
              <ListItemText primary="dem Zugriffsstatus (Datei übertragen, Datei nicht gefunden);" />
            </ListItem>
            <ListItem>
              <ListItemText primary="der Beschreibung des Typs des verwendeten Webbrowsers;" />
            </ListItem>
            <ListItem>
              <ListItemText primary="der IP-Adresse des anfragenden Rechners, die so verkürzt wird, dass ein Personenbezug nicht mehr herstellbar ist." />
            </ListItem>
          </List> */}
          {/* <Typography variant="body1" paragraph>
            Die genannten Protokolldaten werden anonymisiert gespeichert.
          </Typography> */}
        </Box>

        <Box mt={2} mb={2}>
          <Typography variant="body1" paragraph fontFamily="serif">
            <strong> Rechte der Nutzer*in</strong>
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Bei Verarbeitung Ihrer personenbezogenen Daten gewährt die DSGVO
            Ihnen als Nutzer*in bestimmte Rechte, über die wir Sie an dieser
            Stelle aufklären.
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            <strong>Auskunftsrecht (Art. 15 DSGVO)</strong>
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob Daten
            verarbeitet werden, die Sie personenbezogen betreffen; ist dies der
            Fall, so haben Sie ein Recht auf Auskunft über diese
            personenbezogenen Daten und auf die in Art. 15 DSGVO im einzelnen
            aufgeführten Informationen.
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            <strong>
              Recht auf Berichtigung und Löschung (Art. 16 und 17 DSGVO)
            </strong>
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Sie haben das Recht, unverzüglich die Berichtigung Sie betreffender
            unrichtiger personenbezogener Daten und gegebenenfalls die
            Vervollständigung unvollständiger personenbezogener Daten zu
            verlangen. Sie haben zudem das Recht, zu verlangen, dass Sie
            betreffende personenbezogene Daten unverzüglich gelöscht werden,
            sofern einer der in Art. 17 DSGVO im einzelnen aufgeführten Gründe
            zutrifft, zum Beispiel, wenn die Daten für die verfolgten Zwecke
            nicht mehr benötigt werden.
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            <strong>
              Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
            </strong>
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Sie haben das Recht, für die Dauer einer etwaigen Prüfung die
            Einschränkung der Verarbeitung zu verlangen, wenn eine der in Art.
            18 DSGVO aufgeführten Voraussetzungen gegeben ist, zum Beispiel,
            wenn Sie Widerspruch gegen die Verarbeitung eingelegt haben.
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            <strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong>
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            In bestimmten Fällen, die in Art. 20 DSGVO im einzelnen aufgeführt
            werden, haben Sie das Recht, die Sie betreffenden personenbezogenen
            Daten in einem strukturierten, gängigen und maschinenlesbaren Format
            zu erhalten beziehungsweise die Übermittlung dieser Daten an einen
            Dritten zu verlangen.
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            <strong>Widerspruchsrecht (Art. 21 DSGVO)</strong>
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Daten auf Grundlage von Art. 6 Abs. 1 lit. f erhoben
            (Datenverarbeitung zur Wahrung berechtigter Interessen), steht Ihnen
            das Recht zu, aus Gründen, die sich aus Ihrer besonderen Situation
            ergeben, jederzeit gegen die Verarbeitung Widerspruch einzulegen.
            Wir verarbeiten die personenbezogenen Daten dann nicht mehr, es sei
            denn, es liegen nachweisbar zwingende schutzwürdige Gründe für die
            Verarbeitung vor, die die Interessen, Rechte und Freiheiten der
            betroffenen Person überwiegen, oder die Verarbeitung dient der
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
          </Typography>
        </Box>

        <Box mt={2} mb={2}>
          <Typography variant="body1" paragraph fontFamily="serif">
            <strong> Beschwerderecht bei einer Aufsichtsbehörde</strong>
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Sie haben gem. Art. 77 DSGVO das Recht auf Beschwerde bei einer
            Aufsichtsbehörde, wenn Sie der Ansicht sind, dass die Verarbeitung
            der Sie betreffenden Daten gegen datenschutzrechtliche Bestimmungen
            verstößt. Das Beschwerderecht kann insbesondere bei einer
            Aufsichtsbehörde in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres
            Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes geltend
            gemacht werden.
          </Typography>
        </Box>

        <Box mt={2} mb={2}>
          <Typography variant="body1" paragraph fontFamily="serif">
            <strong>Kontaktdaten Datenschutz</strong>
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Falls Sie noch weitere Fragen zum Thema Datenschutz bei uns haben,
            beantworten wir diese gerne. Sie können unseren Ansprechpartner per
            Mail kontaktieren.
          </Typography>
          <Typography variant="body1" paragraph fontFamily="serif">
            Haben Sie vielen Dank für Ihr Interesse an diesem wichtigen Thema.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Datenschutz;
