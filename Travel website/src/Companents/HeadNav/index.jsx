
import { Box, Stack, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
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
            const initials = user.nameInitial || user.emailFirstLetter || '?';
            setUserInitials(initials);
        }
    }, [user]);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        setOpenLogoutDialog(false);
        navigate("/");
    };

    const handleProfileClick = () => {
        if (user) {
            navigate("/");
        }
    };

    const handleOpenLogoutDialog = () => {
        setOpenLogoutDialog(true);
    };

    const handleCloseLogoutDialog = () => {
        setOpenLogoutDialog(false);
    };

    return (
        <Stack className="header_container" padding="20px" flexDirection="row" justifyContent="space-between">
            <Link to="/" style={{ cursor: "pointer" }}>
                <Box>
                    <img src={globlack} alt="Logo" />
                </Box>
            </Link>

            <Stack className="headnavlinkspage" gap="30px" flexDirection="row" alignItems="center">
                <Link className="nav_head" to="/about" style={{ cursor: "pointer", color: "black", textDecoration: "none" }}>
                    <Typography variant="h6">
                        About
                    </Typography>
                </Link>
                <Link className="nav_head" to="/contact" style={{ cursor: "pointer", textDecoration: "none", color: "black" }}>
                    <Typography variant="h6">
                        Contact
                    </Typography>
                </Link>
            </Stack>

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
                            {userInitials}
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
                            <Button className="sign_btn" variant="text" sx={{ width: "100px", color: "white", backgroundColor: "black" }}>
                                Sign up
                            </Button>
                        </Link>
                    </>
                )}
            </Stack>

            <BurgerMenu />
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