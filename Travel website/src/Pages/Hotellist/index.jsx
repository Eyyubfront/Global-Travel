import React, { useState } from 'react';
import { Box, Stack, TextField, MenuItem } from "@mui/material";
import Hotelworld from "../../Companents/Hotelworld"; 
import Footer from "../../Companents/Footer";
import { AttachMoney, CalendarToday, Star } from '@mui/icons-material';
import './hotellist.css'; 

const Hotellist = () => {
  const [priceFilter, setPriceFilter] = useState('all');
  const [daysValue, setDaysValue] = useState('');
  const [starsValue, setStarsValue] = useState('');

  const handleSearch = () => {
    console.log("Searching for hotels...");
  };

  return (
    <>
      <Box className="filter-container">
        <Stack flexDirection="row" gap="20px" justifyContent="center" alignItems="center">
          <TextField
            select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="filter-field"
            variant="outlined"
            InputProps={{
              startAdornment: <AttachMoney sx={{ color: '#8DD3BB', marginRight: '10px' }} />
            }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="ucuz">Cheap</MenuItem>
            <MenuItem value="bahali">Expensive</MenuItem>
          </TextField>

          <TextField
            select
            value={daysValue}
            onChange={(e) => setDaysValue(e.target.value)}
            className="filter-field"
            variant="outlined"
            InputProps={{
              startAdornment: <CalendarToday sx={{ color: '#8DD3BB', marginRight: '10px' }} />
            }}
          >
            <MenuItem value="">All</MenuItem>
            {[...Array(10).keys()].map(day => (
              <MenuItem key={day + 1} value={day + 1}>{day + 1}</MenuItem>
            ))}
          </TextField>

          <TextField
            select
            value={starsValue}
            onChange={(e) => setStarsValue(e.target.value)}
            className="filter-field"
            variant="outlined"
            InputProps={{
              startAdornment: <Star sx={{ color: '#8DD3BB', marginRight: '10px' }} />
            }}
          >
            <MenuItem value="">All</MenuItem>
            {[...Array(10).keys()].map(star => (
              <MenuItem key={star + 1} value={star + 1}>{star + 1} Star</MenuItem>
            ))}
          </TextField>
        </Stack>
      </Box>

      <Box sx={{ marginTop: '20px' }}>
        <Hotelworld priceFilter={priceFilter} daysValue={daysValue} starsValue={starsValue} />
      </Box>

      <Footer />
    </>
  );
}

export default Hotellist;
