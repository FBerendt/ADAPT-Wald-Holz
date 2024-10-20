import React from "react";
import { Box, Divider, Grid } from "@mui/material";

import bmbfGefördert from "./../../assets/BMBF_gefördert_deutsch.jpg";
import bmfFONA from "./../../assets/BMBF_FONA_Logo_4c.jpg";
import zalf from "./../../assets/logo-zalf-deutsch.jpg";
import lefForst from "./../../assets/LFE forst_logo_4c_normal_lang.jpg";
import hnee from "./../../assets/HNEE_Logo_Dt_gruen.jpg";
import Tu from "./../../assets/Tu.png";
import mpl from "./../../assets/MPI_Logo_Kolloid-und Grenzflächenforschung_DE_CMYK_black.jpg";
import regulus from "./../../assets/logo-regulus_mit_subline.png";
import { Link } from "react-router-dom";

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
                src={hnee}
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
                src={lefForst}
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
                src={mpl}
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
                src={zalf}
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
                src={Tu}
                alt="thuenen"
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
                src={bmbfGefördert}
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
                src={bmfFONA}
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
                src={regulus}
                alt="regulus"
                style={{
                  // width: "170px",
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
