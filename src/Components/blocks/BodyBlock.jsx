import { useNavigate } from "react-router-dom";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

const BodyBlock = ({ data }) => {
  const navigate = useNavigate();

  const panoClickHandler = () => {
    navigate(data.navigate, {
      state: {
        title: data.title,
      },
    });
  };

  return (
    <Box sx={{ my: 4, px: 4 }}>
      <Card sx={{ maxWidth: "auto", margin: "auto" }}>
        <CardMedia
          component="img"
          image={data.image}
          alt="image"
          onClick={panoClickHandler}
          sx={{
            height: "250px",
            cursor: "pointer",
            overflow: "hidden",
            display: "inline-grid",
            "&:hover": {
              transform: "scale(1.05)",
              transformOrigin: "40% 20%",
            },
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.text}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            <Button
              variant="contained"
              onClick={panoClickHandler}
              sx={{ bgcolor: "#009688", ":hover": { bgcolor: "#4db6ac" } }}
            >
              Mehr Informationen
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BodyBlock;
