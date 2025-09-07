import React from 'react';
import cardsone from "../../assets/showcards/airport.png";
import cardstwo from "../../assets/showcards/hotel.jpg";
import { Box, Button, Stack, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import './Showcards.css'; 
import { Link } from 'react-router-dom';

const Showcards = () => {
  return (
    <>
      <Stack className="showcards-container" flexDirection="row"  justifyContent="center" gap="13%">
        <Box className="hotels-card" sx={{ backgroundImage: `url(${cardsone})` }}>
          <Stack className="card-content" flexDirection="column"gap="20px" >
          
            <Link style={{ textDecoration: "none" }} to="/flightlist">
              <Button className="card-button" >
                <Stack color="black" alignItems="center" flexDirection="row" gap="10px">
                  <SendIcon className='sendbtn' />
                  <Typography className='seetext'>Show Flights</Typography>
                </Stack>
              </Button>
            </Link>
          </Stack>
        </Box>

        <Box className="hotels-card" sx={{ backgroundImage: `url(${cardstwo})` }}>
          <Stack className="card-content" gap="20px" flexDirection="column" >
       
            <Link style={{ textDecoration: "none" }} to="/hotellist">
              <Button className="card-button" >
                <Stack  alignItems="center"  color="black" flexDirection="row" gap="10px">
                  <SendIcon className='sendbtn' />
                  <Typography className='seetext'>Show Hotels</Typography>
                </Stack>
              </Button>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default Showcards;