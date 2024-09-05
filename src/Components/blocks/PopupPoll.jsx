import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const PopupPoll = () => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  const OpenPpoupHandle = () => {
    setOpen(false);
    window.open(
      "https://eberswalde.questionpro.eu/a/TakeSurvey?tt=jhEcTexfto0dNLD1VJG%2BfQ%3D%3D&lcfpn=false",
      "_blank"
    );
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ px: 5 }}>Hallo</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ px: 5 }}>
          Möchten Sie an unserer Umfrage teilnehmen?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Button
          onClick={OpenPpoupHandle}
          sx={{
            color: "white",
            bgcolor: "#009688",
            width: "30%",
            ":hover": { bgcolor: "#009688", opacity: "70%" },
          }}
        >
          Ja
        </Button>
        <Button
          onClick={handleClose}
          sx={{
            color: "white",
            bgcolor: "red",
            width: "30%",
            ":hover": { bgcolor: "red", opacity: "70%" },
          }}
        >
          Nein
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PopupPoll;
