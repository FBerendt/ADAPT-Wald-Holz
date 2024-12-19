import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

const AktuellesBlocks = ({ data }) => {
  return (
    <Box sx={{ my: 4, px: 4 }}>
      <Card sx={{ maxWidth: "auto", margin: "auto" }}>
        {data.imageLink && (
          <CardMedia
            component="img"
            image={data.imageLink}
            alt="image"
            sx={{
              height: "350px",
              overflow: "hidden",
              objectFit: `${data.objectFit}`,
              objectPosition: `${data.objectPosition}`,
              "&:hover": {
                transform: "scale(1.05)",
                transformOrigin: "40% 20%",
              },
            }}
          />
        )}

        {data.videoLink && (
          <iframe
            className="w-[full] h-[350px] md:w-[650px] md:h-[350px]"
            src={data.videoLink}
            title="WSE 2023: ADAPT-Wald-Holz – On mechanic behavior of Scots Pine under the influence of climate change"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        <CardContent>
          <Typography gutterBottom variant="h6" component="p">
            {data.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.textOne}
          </Typography>
          {data.textTwo && (
            <Typography variant="body2" color="text.secondary">
              {data.textTwo}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default AktuellesBlocks;
