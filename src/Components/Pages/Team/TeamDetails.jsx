import React from "react";
import { Typography, Box, Card, CardContent, CardMedia } from "@mui/material";

const TeamDetails = ({ image, name, address, phone, email, page }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        mt: 3,
        gap: 2,
        width: "100%",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          margin: "auto",
          ":hover": { bgcolor: "#dadada" },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", sm: 150 },
            height: { md: 170 },
          }}
          image={
            image
              ? image
              : "https://github.com/FBerendt/wald-reallabor-photo/blob/main/blank-profile-image.png?raw=true"
          }
          alt={`${name}'s photo`}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <CardContent>
            {page && (
              <a href={page} target="_blank" className=" hover:text-blue-700">
                <Typography component="p" variant="h5">
                  {name}
                </Typography>
              </a>
            )}
            {!page && (
              <Typography component="p" variant="h5">
                {name}
              </Typography>
            )}
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {address}
            </Typography>
            {phone && (
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Tel. {phone}
              </Typography>
            )}
            {email && (
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                E-mail: {email}
              </Typography>
            )}
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default TeamDetails;
