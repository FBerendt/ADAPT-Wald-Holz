import React from "react";
import { Link } from "react-router-dom";

import { Box, Divider, Grid } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ width: "100%", mt: 8, pb: 5, px: { xs: 2, md: 0 } }}>
      <Divider />
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ py: { sm: 2, lg: 6 } }}
      >
        <Grid item xs={6} sm={4} md={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 3, md: 2 },
            }}
          >
            <a
              target="_blank"
              className="pointer text-[#4169E1] px-2"
              href="https://www.hnee.de"
            >
              <img
                src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/footer-HNEE-logo.jpg?raw=true"
                alt="hnee"
                style={{
                  // width: "180px",
                  height: { sm: "140px", md: "100px" },
                  objectFit: "contain",
                }}
              />
            </a>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              target="_blank"
              className="pointer text-[#4169E1] px-2"
              href="https://forst.brandenburg.de/lfb/de/ueber-uns/landeskompetenzzentrum-lfe"
            >
              <img
                src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/footer-lefForst-logo.jpg?raw=true"
                alt="lefForst"
                style={{
                  width: "130px",
                  height: { sm: "100px", md: "100px" },
                  objectFit: "contain",
                }}
              />
            </a>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              mt: { md: 3 },
            }}
          >
            <a
              target="_blank"
              className="pointer text-[#4169E1] px-2"
              href="https://www.mpikg.mpg.de"
            >
              <img
                src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/footer-mpl-logo.jpg?raw=true"
                alt="mpl"
                style={{
                  width: "300px",
                  height: { sm: "100px", md: "140px" },
                  objectFit: "contain",
                }}
              />
            </a>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <a
              target="_blank"
              className="pointer text-[#4169E1] px-2"
              href="https://www.zalf.de/de/Seiten/ZALF.aspx"
            >
              <img
                src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/footer-zalf-logo.jpg?raw=true"
                alt="zalf"
                style={{
                  width: "100px",
                  height: { sm: "100px", md: "140px" },
                  objectFit: "contain",
                }}
              />
            </a>
          </Box>
        </Grid>
        <Grid item xs={10} sm={10} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              target="_blank"
              className="pointer px-2"
              href="https://www.thuenen.de/de/fachinstitute/waldoekosysteme"
            >
              <img
                src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/footer-thunen-logo.png?raw=true"
                alt="thunen"
                className="sm:h-[80px] md:h-[100px] object-fill"
              />
            </a>
          </Box>
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ py: { sm: 2, md: 3 } }}
      >
        <Grid item xs={6} sm={4} md={3}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <a
              target="_blank"
              className="pointer text-[#4169E1] px-2"
              href="https://www.bmbf.de/bmbf/de/home/home_node.html"
            >
              <img
                src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/footer-bmbfGef%C3%B6rdert-logo.jpg?raw=true"
                alt="bmbfGefördert"
                style={{
                  width: "180px",
                  height: { sm: "100px", md: "140px" },
                  objectFit: "contain",
                }}
              />
            </a>
          </Box>
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Box sx={{ textAlign: "center" }}>
            <a
              target="_blank"
              className="pointer text-[#4169E1] px-2"
              href="https://www.fona.de/de/"
            >
              <img
                src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/footer-fona-logo.jpg?raw=true"
                alt="FONA"
                style={{
                  width: "180px",
                  height: { sm: "100px", md: "140px" },
                  objectFit: "contain",
                }}
              />
            </a>
          </Box>
        </Grid>
        <Grid item xs={4} sm={4} md={2}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Link to="/regulus#top">
              <img
                src="https://github.com/FBerendt/wald-reallabor-photo/blob/main/footer-regulus_logo.png?raw=true"
                alt="regulus"
                style={{
                  height: { sm: "100px", md: "150px" },
                  objectFit: "contain",
                }}
              />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
