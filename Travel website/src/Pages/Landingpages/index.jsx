import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  MenuItem,
  Grid,
} from "@mui/material";
import landingone from "../../assets/landingone.png";
import FlightIcon from "@mui/icons-material/Flight";
import BedIcon from "@mui/icons-material/Bed";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import Perfecttrip from "../../Companents/Perfectrip";
import SendIcon from "@mui/icons-material/Send";
import Footer from "../../Companents/Footer";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { cities } from "../../data/cities";
import Showcards from "../../Companents/Showcards";
import "./landing.css";


const LandingPages = () => {
  return (
    <>
      <Box>
        <Box
          className="landing-banner"
          style={{ backgroundImage: `url(${landingone})` }}
        >
          <Stack gap="10px" textAlign="center" flexDirection="column">
            <Typography className="landing-title" variant="h5">
              Helping Others
            </Typography>
            <Typography className="landing-main-title" variant="h2">
              Live & Travel
            </Typography>
            <Typography className="landing-subtitle">
              Special offers to suit your plan
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Box>
        <Stack
          className="plantrip"
          flexDirection="row"
          padding="20px"
          justifyContent="space-between"
        >
          <Stack flexDirection="column" gap="10px">
            <Typography className="acountcent" variant="h4">
              Flight
            </Typography>
            <Typography className="acountcent">Search Flights</Typography>
          </Stack>

          <Link style={{ textDecoration: "none" }} to="/flightlist">
            <Button className="see-more-button">See more places</Button>
          </Link>
        </Stack>
      </Box>

      <Box>
        <Stack
          justifyContent="center"
          gap="30px"
          flexDirection="row"
          flexWrap="wrap"
        >
          {cities.map((city) => (
            <Grid key={city.id} item xs={12} sm={4} md={4}>
              <Perfecttrip id={city.id} title={city.title} src={city.img} />
            </Grid>
          ))}
        </Stack>
      </Box>

      <Showcards />
      <Footer />
    </>
  );
};

export default LandingPages;
