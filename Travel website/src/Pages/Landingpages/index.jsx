import { Box, Button, Stack, TextField, Typography, MenuItem, Grid } from "@mui/material";
import landingone from "../../assets/landingone.png";
import FlightIcon from '@mui/icons-material/Flight';
import BedIcon from '@mui/icons-material/Bed';
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Perfecttrip from "../../Companents/Perfectrip";
import SendIcon from '@mui/icons-material/Send';
import Footer from "../../Companents/Footer";
import { DatePicker } from '@mui/x-date-pickers-pro';
import { cities } from '../../data/cities';
import Showcards from "../../Companents/Showcards";
import "./landing.css";
import airplane from "../../assets/airplane.png"

const curiens = [
  { id: 1, value: 'rayon1', md: 'Foreign Tours' },
];

const LandingPages = ({ user, setUser }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <Box>
        <Box className="landing-banner" style={{ backgroundImage: `url(${landingone})` }}>
          <div className="App" >
            <img src={airplane} alt="Uçak" className="airplane" />
        </div>
          <Stack gap="10px" textAlign="center" flexDirection="column">
            <Typography className="landing-title" variant="h5">Helping Others</Typography>
            <Typography className="landing-main-title" variant="h2">Live & Travel</Typography>
            <Typography className="landing-subtitle">Special offers to suit your plan</Typography>
          </Stack>

          <Box className="landing-form" >
            <Stack className="boxicons" flexDirection="row" alignItems="center" gap="10px">
              <Link style={{ color: "black", textDecoration: "none" }} to="/flightlist">
                <Stack gap="10px" alignItems="center" flexDirection="column">
                  <Stack className="icon-text" flexDirection="row" alignItems="center" gap="10px">
                    <FlightIcon />
                    <Typography>Find Flight</Typography>
                  </Stack>
                </Stack>
              </Link>

              <Box className="divider" />

              <Link style={{ color: "black", textDecoration: "none" }} to="/hotellist">
                <Stack className="icon-text" flexDirection="row" alignItems="center" gap="10px">
                  <BedIcon />
                  <Typography>Find Stays</Typography>
                </Stack>
              </Link>
            </Stack>

            <Box className="text-field-container">
              <Stack alignItems="center" flexDirection="row" gap="20px">
                <TextField
                  className="txtsdpbox"
                  id="filled-select-currency"
                  select
                  label="Category Flight"
                  defaultValue={curiens[0].value}
                  variant="filled"
                >
                  {curiens.map((option) => (
                    <MenuItem key={option.id} value={option.value}>
                      {option.md}
                    </MenuItem>
                  ))}
                </TextField>
                <DatePicker
                  label="Select Date"
                  value={selectedDate}
                  onChange={(newValue) => setSelectedDate(newValue)}
                  renderInput={(params) => <TextField {...params} variant="filled" />}
                />
              </Stack>
            </Box>

            <Stack className="adpromo" flexDirection="row" alignItems="center" gap="10px">
              <Link style={{ color: "black", textDecoration: "none" }} to='/flightlist'>
                <Button className="show-flights-button">
                  <Stack color="black" flexDirection="row" gap="10px">
                    <SendIcon />
                    <Typography>Show Flights</Typography>
                  </Stack>
                </Button>
              </Link>
            </Stack>
          </Box>
     
        </Box>
      </Box>


      <Box>
        <Stack className="plantrip" flexDirection="row" padding="20px" justifyContent="space-between">
          <Stack flexDirection="column" gap="10px">
            <Typography className="acountcent" variant="h4">Flight</Typography>
            <Typography className="acountcent">Search Flights</Typography>
          </Stack>

          <Link style={{ textDecoration: "none" }} to="/flightlist">
            <Button className="see-more-button">See more places</Button>
          </Link>
        </Stack>
      </Box>

      <Box>
        <Stack justifyContent="center" gap="30px" flexDirection="row" flexWrap="wrap">
          {cities.map((city) => (
            <Grid key={city.id} item xs={12} sm={4} md={4}>
              <Perfecttrip
                id={city.id}
                title={city.title}
                src={city.img}
              />
            </Grid>
          ))}
        </Stack>
      </Box>

      <Showcards />
      <Footer />
    </>
  );
}

export default LandingPages;
