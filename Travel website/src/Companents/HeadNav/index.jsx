import BedIcon from '@mui/icons-material/Bed';
import FlightIcon from '@mui/icons-material/Flight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Stack, Typography, Button } from "@mui/material";
import BurgerMenu from "../../Companents/Burgermenu";
import globlack from "../../assets/globblack.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HeadNav = ({ user, setUser }) => {
    const [open, setOpen] = useState(false);

    const handleLogout = () => {
        setUser(null); 
    };
    const userInitial = user ? user.email.charAt(0).toUpperCase() : '';

    return (
        <Stack padding="20px" flexDirection="row" justifyContent="space-between">
            <Stack className="iconsonesd" flexDirection="row" alignItems="center" gap="10px">
                <Stack gap="10px" alignItems="center" flexDirection="column">
                    <Link style={{ cursor: "pointer", textDecoration: "none" }} to="/flightlist">
                        <Stack color="black" flexDirection="row" alignItems="center" gap="10px">
                            <FlightIcon />
                            <Typography>Find Flight</Typography>
                        </Stack>
                    </Link>
                </Stack>
                <Box border="2px solid black" height="30px"></Box>
                <Link style={{ cursor: "pointer", textDecoration: "none" }} to="/hotellist">
                    <Stack color="black" flexDirection="row" alignItems="center" gap="10px">
                        <BedIcon />
                        <Typography>Find Hotels</Typography>
                    </Stack>
                </Link>
            </Stack>

            <Link to="/" style={{ cursor: "pointer" }}>
                <Box>
                    <img src={globlack} alt="" />
                </Box>
            </Link>

            <Stack className="iconsonesd" flexDirection="row" alignItems="center" gap="10px">
                <Link to="/orders" style={{ cursor: "pointer", textDecoration: "none" }}>
                    <Box color="black">
                        <Typography>Orders</Typography>
                    </Box>
                </Link>

                <Box border="1px solid" height="20px"></Box>
                <Link to="/favourites" style={{ cursor: "pointer", textDecoration: "none" }}>
                    <Stack color="black" flexDirection="row" alignItems="center" gap="10px">
                        <FavoriteBorderIcon />
                        <Typography>Favourites</Typography>
                    </Stack>
                </Link>

                <Box border="1px solid black" height="20px"></Box>

                {user ? (
                    <>
                        <Typography variant="h6" sx={{ marginRight: 2 }}>{userInitial}</Typography>
                    </>
                ) : (
                    <>
                        <Link style={{ textDecoration: "none" }} to="/logins">
                            <Button sx={{ color: "black", width: "50px" }} variant="text">
                                Login
                            </Button>
                        </Link>
                        <Link style={{ textDecoration: "none" }} to="/signs">
                            <Button variant="text" sx={{ width: "100px", color: "white", backgroundColor: "black" }}>
                                Sign up
                            </Button>
                        </Link>
                    </>
                )}
            </Stack>

            <BurgerMenu />
        </Stack>
    );
}

export default HeadNav;
