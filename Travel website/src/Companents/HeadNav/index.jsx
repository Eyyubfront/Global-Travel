import BedIcon from '@mui/icons-material/Bed';
import FlightIcon from '@mui/icons-material/Flight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Stack, Typography } from "@mui/material";
import BurgerMenu from "../../Companents/Burgermenu";
import globlack from "../../assets/globblack.png";
import personjon from "../../assets/personjon.png";
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCardIcon from '@mui/icons-material/AddCard';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const HeadNav = () => {
    const[open,SetOpen]=useState(false)
    return (
        <>

            <Stack padding="20px"  flexDirection="row" justifyContent="space-between">

                <Stack className="iconsonesd" flexDirection="row" alignItems="center" gap="10px">
                    <Stack gap="10px" alignItems="center" flexDirection="column">

                        <Stack color="black" flexDirection="row" alignItems="center" gap="10px">
                            <FlightIcon />
                            <Typography>
                                Find Flight
                            </Typography>

                        </Stack>

                        <Box position="absolute" top="74px" border="2px solid green" width="100px">

                        </Box>

                    </Stack>


                    <Stack color="black" flexDirection="row" alignItems="center" gap="10px">
                        <BedIcon />
                        <Typography>
                            Find Stays
                        </Typography>

                    </Stack>
                </Stack>


                <Box>
                    <img src={globlack} alt="" />
                </Box>

                <Stack className="iconsonesd" flexDirection="row" alignItems="center" gap="10px" >
                    <Stack flexDirection="row" alignItems="center" gap="10px" >
                        <FavoriteBorderIcon />
                        <Typography>
                            Favourites
                        </Typography>
                    </Stack>

                    <Box
                        border="1px solid"
                        height="20px"
                    >

                    </Box>

                    <Stack flexDirection="row" alignItems="center" gap="10px" >

                        {
                            open && <Box className="personboxs"  width="200px" boxShadow="0px 4px 16px 0px rgba(17, 34, 17, 0.05)" sx={{background:"#FFF"}} padding="20px">

                            <Stack flexDirection="row" gap="10px">
                                <img src={personjon} alt="" />
                                <Typography>
                                    Jon D.
                                </Typography>
                            </Stack>
                            <Box marginTop="14px" border="1px solid darkgray" width="200px">

                            </Box>

                            <Stack marginTop="15px" justifyContent="space-between" flexDirection="row">
                                <Link style={{textDecoration:"none",color:"black"}} to="/myacount">
                                
                                <Stack flexDirection="row" gap="15px">
                                    <PersonIcon />
                                    <Typography>
                                        My account
                                    </Typography>
                                </Stack>
                                </Link>
                                <ChevronRightIcon />
                            </Stack>


                            <Stack marginTop="15px" justifyContent="space-between" flexDirection="row">
                                <Stack flexDirection="row" gap="15px">
                                    <SettingsIcon />
                                    <Typography>
                                        Settings
                                    </Typography>
                                </Stack>
                                <ChevronRightIcon />
                            </Stack>



                            <Stack marginTop="15px" justifyContent="space-between" flexDirection="row">
                                <Stack flexDirection="row" gap="15px">
                                    <AddCardIcon />
                                    <Typography>
                                        Settings
                                    </Typography>
                                </Stack>
                                <ChevronRightIcon />
                            </Stack>
                            <Box marginTop="14px" border="1px solid darkgray" width="200px">

                            </Box>

                            <Stack marginTop="15px" justifyContent="space-between" flexDirection="row">
                                <Stack flexDirection="row" gap="15px">
                                    <LogoutIcon />
                                    <Typography>
                                        Settings
                                    </Typography>
                                </Stack>
                                <ChevronRightIcon />
                            </Stack>


                        </Box>
                        }
                        <Box onClick={(()=>SetOpen(!open))} className="personshov">

                            <img src={personjon} alt="" />
                        </Box>





                        <Typography >
                            Jon D.
                        </Typography>
                    </Stack>
                </Stack>






                <BurgerMenu />
            </Stack>


        </>
    )
}
export default HeadNav