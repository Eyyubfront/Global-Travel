import React, { useState } from 'react';
import { Box, Stack, TextField, MenuItem, Slider } from "@mui/material";
import Worldtravel from "../../Companents/Worldtravel"; 
import Footer from "../../Companents/Footer";
import "./flightlist.css"
const Flightlist = () => {
  const [priceFilter, setPriceFilter] = useState('all'); // 'all', 'ucuz' veya 'bahali'
  const [priceValue, setPriceValue] = useState(1000); // Varsayılan maksimum fiyat
  const [daysValue, setDaysValue] = useState(''); // Varsayılan olarak boş

  const handlePriceChange = (event) => {
    setPriceValue(event.target.value);
  };

  const handleDaysChange = (value) => {
    setDaysValue(value);
  };

  return (
    <>
  

      <Box className="filter-container" >
        <Stack className='textfiledflight' flexDirection="row" gap="10px">
          <TextField
            select
            className='valutextfiled'
            label="Amount"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="ucuz">Cheap</MenuItem>
            <MenuItem value="bahali">Expensive</MenuItem>
          </TextField>
       
          <TextField
            select
            label="Number of days"
            value={daysValue}
            onChange={(e) => handleDaysChange(e.target.value)}
            className='valutextfiled'
          >
            <MenuItem value="">All</MenuItem> {/* Varsayılan boş seçenek */}
            {[1, 2, 3, 4, 5, 6, 7].map(day => (
              <MenuItem key={day} value={day}>{day}</MenuItem>
            ))}
          </TextField>
        </Stack>
      </Box>

     
      <Worldtravel 
        priceFilter={priceFilter} 
        priceValue={priceValue} 
        daysValue={daysValue} 
      />

      <Footer />
    </>
  );
};

export default Flightlist