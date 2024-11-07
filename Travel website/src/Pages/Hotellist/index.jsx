import React, { useState } from 'react';
import { Box, Stack, TextField, MenuItem } from "@mui/material";
import Hotelworld from "../../Companents/Hotelworld"; 
import Footer from "../../Companents/Footer";
import './hotellist.css'; // CSS dosyasını ekliyoruz

const Hotellist = () => {
  const [priceFilter, setPriceFilter] = useState('all'); // 'all', 'ucuz', 'bahali'
  const [daysValue, setDaysValue] = useState(''); // Varsayılan olarak boş
  const [starsValue, setStarsValue] = useState(''); // Varsayılan olarak boş

  const handleSearch = () => {
    // Arama fonksiyonu
    console.log("Searching for hotels...");
  };

  return (
    <>
      <Box className="filter-container" sx={{ backgroundColor: 'white', marginLeft: "10px", padding: "15px", marginTop: "20px" }}>
        <Stack flexDirection="row" gap="10px">
          <TextField
            select
            label="Amount"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            sx={{ width: '200px' }}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="ucuz">Cheap </MenuItem>
            <MenuItem value="bahali">Expensive </MenuItem>
          </TextField>

          <TextField
            select
            label="Number of days"
            value={daysValue}
            onChange={(e) => setDaysValue(e.target.value)}
            sx={{ width: '200px' }}
          >
            <MenuItem value="">All</MenuItem>
            {[1, 2, 3, 4, 5, 6, 7].map(day => (
              <MenuItem key={day} value={day}>{day}</MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Star Count"
            value={starsValue}
            onChange={(e) => setStarsValue(e.target.value)}
            sx={{ width: '200px' }}
          >
            <MenuItem value="">All</MenuItem>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(star => (
              <MenuItem key={star} value={star}>{star}</MenuItem>
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
