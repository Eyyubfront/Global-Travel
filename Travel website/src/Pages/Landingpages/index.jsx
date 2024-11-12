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

        <Box className="landing-form" sx={{ padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
  <Stack className="boxicons" flexDirection="row" alignItems="center" gap="20px" justifyContent="center">
    {/* Find Flight Link */}
    <Link style={{ color: "#333", textDecoration: "none" }} to="/flightlist">
      <Stack gap="10px" alignItems="center" flexDirection="column">
        <Stack className="icon-text" flexDirection="row" alignItems="center" gap="8px">
          <FlightIcon sx={{ color: "#1a73e8", fontSize: "30px" }} />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>Find Flight</Typography>
        </Stack>
      </Stack>
    </Link>

    <Box className="divider" sx={{ height: "50px", width: "1px", backgroundColor: "#ccc" }} />

    {/* Find Stay Link */}
    <Link style={{ color: "#333", textDecoration: "none" }} to="/hotellist">
      <Stack className="icon-text" flexDirection="row" alignItems="center" gap="8px">
        <BedIcon sx={{ color: "#1a73e8", fontSize: "30px" }} />
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>Find Stays</Typography>
      </Stack>
    </Link>
  </Stack>

  <Box className="text-field-container" sx={{ marginTop: "30px" }}>
    <Stack alignItems="center" flexDirection="row" gap="30px">
      {/* Category Select */}
      <TextField
        className="txtsdpbox"
        id="filled-select-category"
        select
        label="Category"
        defaultValue={curiens[0].value}
        variant="filled"
        sx={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          width: "250px",
          "& .MuiFilledInput-root": {
            backgroundColor: "#e8f0fe",
          },
          "& .MuiInputLabel-root": { color: "#555" },
          "& .MuiSelect-root": { color: "#333" },
        }}
      >
        {curiens.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.md}
          </MenuItem>
        ))}
      </TextField>

      {/* Date Picker */}
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            sx={{
              backgroundColor: "#fff",
              borderRadius: "5px",
              width: "250px",
              "& .MuiFilledInput-root": {
                backgroundColor: "#e8f0fe",
              },
            }}
          />
        )}
      />
    </Stack>
  </Box>

  <Stack className="adpromo" flexDirection="row" alignItems="center" gap="20px" justifyContent="center" sx={{ marginTop: "30px" }}>
    <Link style={{ color: "black", textDecoration: "none" }} to="/flightlist">
      <Button
        className="show-flights-button"
        sx={{
          backgroundColor: "#1a73e8",
          color: "white",
          borderRadius: "5px",
          padding: "12px 25px",
          "&:hover": {
            backgroundColor: "#165a8d",
          },
        }}
      >
        <Stack flexDirection="row" gap="10px" alignItems="center">
          <SendIcon sx={{ color: "white" }} />
          <Typography sx={{ fontWeight: "bold" }}>Show Flights</Typography>
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
