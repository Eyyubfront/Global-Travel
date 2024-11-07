import React from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logostwo from "../../assets/Group.png";
import emoji from "../../assets/inputsfooter/emoji.png";
import './Footer.css'; // Import the CSS file

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

      <Stack className="footer-bottom">
        <Stack flexDirection="column" gap="10px">
          <img className="footer-logo" src={logostwo} alt="" />
         
        </Stack>

      <Box>
        <Typography>
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
