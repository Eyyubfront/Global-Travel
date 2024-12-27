import React from 'react';
import hotelsone from "../../assets/showcards/hotelsone.png";
import hotelstwo from "../../assets/showcards/hotelstwo.png";
import { Box, Button, Stack, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import './Showcards.css'; 
import { Link } from 'react-router-dom';

const Showcards = () => {
  return (
    <>
      <Stack className="showcards-container" flexDirection="row"  justifyContent="center" gap="13%">
        <Box className="hotels-card" sx={{ backgroundImage: `url(${hotelsone})` }}>
          <Stack className="card-content" flexDirection="column"gap="20px" >
            <Typography className="card-title"  variant="h3">Flights</Typography>
            <Link style={{ textDecoration: "none" }} to="/flightlist">
              <Button className="card-button" >
                <Stack color="black" flexDirection="row" gap="10px">
                  <SendIcon className='sendbtn' />
                  <Typography className='seetext'>Show Flights</Typography>
                </Stack>
              </Button>
            </Link>
          </Stack>
        </Box>

        <Box className="hotels-card" sx={{ backgroundImage: `url(${hotelstwo})` }}>
          <Stack className="card-content" gap="20px" flexDirection="column" >
            <Typography className="card-title"   variant="h3">Hotels</Typography>
            <Link style={{ textDecoration: "none" }} to="/hotellist">
              <Button className="card-button" >
                <Stack color="black" flexDirection="row" gap="10px">
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