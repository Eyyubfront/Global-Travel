import React, { useState } from 'react';
import { Box, Stack, TextField, MenuItem } from "@mui/material";
import Worldtravel from "../../Companents/Worldtravel"; 
import Footer from "../../Companents/Footer";
import { AttachMoney, CalendarToday } from '@mui/icons-material'; 
import "./flightlist.css";

const Flightlist = () => {
  const [priceFilter, setPriceFilter] = useState('all');
  const [priceValue, setPriceValue] = useState(1000); 
  const [daysValue, setDaysValue] = useState('');

  const handlePriceChange = (event) => {
    setPriceValue(event.target.value);
  };

  const handleDaysChange = (value) => {
    setDaysValue(value);
  };

  return (
    <>
      <Box className="filter-container">
        <Stack className='textfiledflight' flexDirection="row" gap="20px" justifyContent="center">
          
          <TextField
            select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className='valutextfiled'
            InputProps={{
              startAdornment: <AttachMoney sx={{ color: '#8DD3BB', marginRight: '10px' }} />
            }}
            variant="outlined"
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="ucuz">Cheap</MenuItem>
            <MenuItem value="bahali">Expensive</MenuItem>
          </TextField>

          <TextField
            select
            value={daysValue}
            onChange={(e) => handleDaysChange(e.target.value)}
            className='valutextfiled'
            InputProps={{
              startAdornment: <CalendarToday sx={{ color: '#8DD3BB', marginRight: '10px' }} />
            }}
            variant="outlined"
          >
            <MenuItem value="">All</MenuItem>
            {[...Array(10).keys()].map(day => ( 
              <MenuItem key={day + 1} value={day + 1}>{day + 1}</MenuItem>
            ))}
          </TextField>

        </Stack>
      </Box>

      <Worldtravel priceFilter={priceFilter} priceValue={priceValue} daysValue={daysValue} />
      <Footer />
    </>
  );
};

export default Flightlist;
