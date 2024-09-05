import React from "react";
import imgBl1 from "./../../assets/IMG_1593.jpg";
import { CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const BlockOne = () => {
  return (
    <div className="md:my-12 w-full">
      <Link
        target="_blank"
        to="https://vr-easy.com/tour/hneeberswalde/240524-adaptwaldholz/"
      >
        <div className="relative mt-12 w-full px-6">
          <CardMedia
            sx={{
              height: { xs: "200px", md: "350px" },
              width: "full",
              borderRadius: 0,
            }}
            component="img"
            image={imgBl1}
            title="text"
            alt="text"
          />

          <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Alfa Slab One",
                color: "black",
                opacity: "85%",
                fontSize: { xs: 16, md: 25, lg: 45 },
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "white",
              }}
            >
              ADAPT-Wald-Holz
            </Typography>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlockOne;
