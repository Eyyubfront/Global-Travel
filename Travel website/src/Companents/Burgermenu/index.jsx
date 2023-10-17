
import {
    Box,
    Dialog,
    IconButton,
    Menu,
    Button,

    Stack,
    Typography,
  } from "@mui/material";
  import { Link } from 'react-router-dom'
  import { Close, LineAxis } from "@mui/icons-material";
  import MenuIcon from "@mui/icons-material/Menu";
  import { useState } from "react";
  import FlightIcon from '@mui/icons-material/Flight';
  import BedIcon from '@mui/icons-material/Bed';

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <Close /> : <MenuIcon />}
          </IconButton>
          <Dialog  fullScreen open={open} onClose={() => setOpen(false)}>
            <Box sx={{background:"#5E3928",  color:"white"}} p={4} height="calc(100% - 50px)">
              <Stack flexDirection="row" justifyContent="flex-end">
                <IconButton
                  edge="end"
                  color="inherit"
                  onClick={() => setOpen(false)}
                >
                  <Close />
                </IconButton>
              </Stack>

              <Stack flexDirection="column" alignItems="center" gap="10px">

<Stack color="white" flexDirection="row" alignItems="center" gap="10px">
  <FlightIcon />
  <Typography>
    Find Flight
  </Typography>

</Stack>

<Stack color="white" flexDirection="row" alignItems="center" gap="10px">
  <BedIcon />
  <Typography>
    Find Stays
  </Typography>

</Stack>
</Stack>

<Stack flexDirection="column" alignItems="center" gap="10px" >
              <Button sx={{ color: "white", width: "50px" }} variant="text">
                Login
              </Button>



              <Button variant="text" sx={{ width: "100px", color: "black", backgroundColor: "white" }}>
                Sign up
              </Button>
            </Stack>

            <Box>
              <Link to="/">
              
             <Button sx={{color:"white",margin:"auto",display:"flex"}}>
              Home
             </Button>
              </Link>
            </Box>



            </Box>
          </Dialog>
        </Box>
      </>
    );
  };
  
  export default BurgerMenu;
  