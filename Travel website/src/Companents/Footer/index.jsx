import React from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import logostwo from "../../assets/Group.png";
import emoji from "../../assets/inputsfooter/emoji.png";
import './Footer.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box className="footer-container" >
      <Box className="footer-box">
        <Stack className="footer-content" gap='10%' flexDirection="row">
          <Stack flexDirection="column" gap="10px">
            <Typography className="footer-title" variant="h4">Subscribe Newsletter</Typography>
            <Stack flexDirection="column" gap="10px">
              <Typography variant="h6">The Travel</Typography>
              <Typography>
                Get inspired! Receive travel discounts, tips and behind the scenes stories.
              </Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center" gap="5px">
              <TextField className="footer-email-input" id="outlined-basic" label="Your email address" variant="outlined" />
              <Button className="footer-subscribe-button">
                Subscribe
              </Button>
            </Stack>
          </Stack>
          <Box>
            <img className="footer-emoji" src={emoji} alt="" />
          </Box>
        </Stack>
      </Box>
      <Stack className="footer-services">
      <Typography className='footer_text'>
        Since 2000, we have been wholesale and retail high-quality tourism services, international travel packages and other travel products at the most reasonable prices.
        </Typography>

      <Box>
        <h2>CUSTOMER SERVICES</h2>
        <ul>
      <li>

        <Link className='foter_servicelinks' to="/about">About</Link>
      </li>
      <li>
  
        <Link className='foter_servicelinks' to="/contact">Contact</Link>
      </li>
    </ul>
      </Box>

      </Stack>

      <Stack className="footer-bottom">
        <Stack flexDirection="column" gap="10px">
          <img className="footer-logo" src={logostwo} alt="" />
         
        </Stack>

      <Box>
        <Typography className='footer_coperright'>
        All rights reserved Global Travel© 2024
        </Typography>
      </Box>

      </Stack>
      <Box className="linesborders">
      </Box>
    </Box>
  );
};

export default Footer;
