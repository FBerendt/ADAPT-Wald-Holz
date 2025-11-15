import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

const PublicationsBlockes = ({ data }) => {
  return (
    <Box sx={{ my: 4, px: 4 }}>
      <Card
        sx={{
          maxWidth: "auto",
          margin: "auto",
        }}
      >
        {data.imageLink && (
          <CardMedia
            component="img"
            image={data.imageLink}
            alt="image"
            sx={{
              marginBottom: 3,
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
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="p"
            sx={{ fontWeight: "bold" }}
          >
            {data.PaperTitle}
          </Typography>

          <Typography
            gutterBottom
            variant="h6"
            component="p"
            style={{ marginTop: 15, color: "#654321" }}
          >
            {data.authors}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {data.textOne}
          </Typography>
          <div className="flex gap-2 mt-3">
            <Typography>DOI: </Typography>
            <Typography>
              <a
                href={data.doi}
                className="text-blue-500 hover:text-blue-700 hover:underline"
                target="blank"
              >
                {data.doi}
              </a>
            </Typography>
          </div>
          {data.dataDoi && (
            <div className="flex gap-2 mt-1">
              <Typography>Datensatz: </Typography>
              <Typography>
                <a
                  href={data.dataDoi}
                  className="text-blue-500 hover:text-blue-700 hover:underline"
                  target="blank"
                >
                  {data.dataDoi}
                </a>
              </Typography>
            </div>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default PublicationsBlockes;
