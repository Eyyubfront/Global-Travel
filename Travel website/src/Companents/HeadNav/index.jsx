import { Box, Stack, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import BedIcon from '@mui/icons-material/Bed';
import FlightIcon from '@mui/icons-material/Flight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import globlack from "../../assets/globblack.png";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BurgerMenu from "../../Companents/Burgermenu";
import { MdAddShoppingCart } from "react-icons/md";
const HeadNav = ({ user, setUser }) => {
    const [userInitials, setUserInitials] = useState('');
    const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            // Eğer kullanıcı varsa, ismin baş harfini veya e-posta ilk harfini alıyoruz
            const initials = user.nameInitial || user.emailFirstLetter || '?';
            setUserInitials(initials); // Baş harfini güncelliyoruz
        }
    }, [user]);  // Burada 'user' değiştiğinde yeniden çalışacak
    const handleLogout = () => {
        localStorage.removeItem("user"); // Kullanıcıyı çıkış yaparken localStorage'dan sil
        setUser(null); // Kullanıcıyı state'ten sil
        setOpenLogoutDialog(false); // Modal'ı kapatıyoruz
        navigate("/");  // Anasayfaya yönlendiriyoruz
    };
    

    const handleProfileClick = () => {
        if (user) {
            navigate("/myacount");  // Profil sayfasına yönlendiriyoruz
        }
    };

    const handleOpenLogoutDialog = () => {
        setOpenLogoutDialog(true);
    };

    const handleCloseLogoutDialog = () => {
        setOpenLogoutDialog(false);
    };

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
                    <img src={globlack} alt="Logo" />
                </Box>
            </Link>

            <Stack className="iconsonesd" flexDirection="row" alignItems="center" gap="10px">
                <Link to="/orders" style={{ cursor: "pointer", textDecoration: "none" }}>
                    <Box color="black">
                        <MdAddShoppingCart style={{ fontSize: "24px" }} />
                    </Box>
                </Link>

                <Box border="1px solid" height="20px"></Box>
                <Link to="/favourites" style={{ cursor: "pointer", textDecoration: "none" }}>
                    <Stack color="black" flexDirection="row" alignItems="center" gap="10px">
                        <FavoriteBorderIcon />
                    </Stack>
                </Link>

                <Box border="1px solid black" height="20px"></Box>

                {user ? (
                    <>
                        <Typography
                            variant="h6"
                            sx={{ marginRight: 2, cursor: 'pointer' }}
                            onClick={handleProfileClick}
                        >
                            {userInitials} {/* Baş harfini göster */}
                        </Typography>
                        <Button sx={{ color: "black", cursor: "pointer" }} onClick={handleOpenLogoutDialog}>Logout</Button>
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

            {/* Logout Confirmation Dialog */}
            <Dialog
                open={openLogoutDialog}
                onClose={handleCloseLogoutDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to log out?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleCloseLogoutDialog} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleLogout} color="primary" autoFocus>
                        Logout
                    </Button>
                </DialogActions>
            </Dialog>
        </Stack>
    );
};

export default HeadNav;



