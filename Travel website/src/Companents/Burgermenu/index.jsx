import { Box, Dialog, IconButton, Button, Stack, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { Close, Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
const BurgerMenu = ({ user, setUser }) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Box className="burger_menu">
                <IconButton onClick={() => setOpen(!open)}>
                    {open ? <Close /> : <MenuIcon />}
                </IconButton>
                <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
                    <Box sx={{ backgroundColor: "#fff", color: "#333",marginTop:"60px" }}>
                      

                        <Stack className="burger_container" flexDirection="column" alignItems="center" gap="20px" padding={2}>
                      
                            <Link className="nav_head" to="/about" style={{ cursor: "pointer", textDecoration: "none", color: "black" }}>
                                <Typography variant="h6">
                                    About
                                </Typography>
                            </Link>
                            <Link className="nav_head" to="/contact" style={{ cursor: "pointer", textDecoration: "none", color: "black" }}>
                                <Typography variant="h6">
                                    Contact
                                </Typography>
                            </Link>
                            <Box border="1px solid #ccc" width="100%" marginTop="20px" />

                            <Stack flexDirection="column" alignItems="center" gap="20px">
                                {user ? (
                                    <>
                                        <Typography variant="h6">{user.nameInitial || '?'}</Typography>
                                        <Link to="/myaccount" style={{ textDecoration: "none" }}>
                                            <Button sx={{ color: "black" }}>Profile</Button>
                                        </Link>
                                        <Button sx={{ color: "black" }} onClick={() => setUser(null)}>
                                            Logout
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/logins" style={{ textDecoration: "none" }}>
                                            <Button sx={{ color: "black" }}>Login</Button>
                                        </Link>
                                        <Link to="/signs" style={{ textDecoration: "none" }}>
                                            <Button variant="outlined" sx={{ width: "120px", color: "black", borderColor: "black" }}>
                                                Sign up
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </Stack>

                            <Box border="1px solid #ccc" width="100%" marginTop="20px" />
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <Button sx={{ color: "black" }}>Home</Button>
                            </Link>
                        </Stack>
                    </Box>
                </Dialog>
            </Box>
        </>
    );
};

export default BurgerMenu;