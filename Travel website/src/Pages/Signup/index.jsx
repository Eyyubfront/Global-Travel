import { Box, Button, Stack, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Checkbox } from "@mui/material";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import loginphoto from "../../assets/loginphoto.png";
import './signup.css'; // CSS dosyasını ekliyoruz

const Signup = ({ setUser }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSignup = () => {
        console.log("Kayıt bilgileri:", { email, password, name });
        navigate('/logins', { state: { email, password, name } }); // Buradaki bilgileri kontrol et
    };

    return (
        <Stack className="signup-container" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Box >
                <img className="login-image" src={loginphoto} alt="" />
            </Box>
            <Stack alignItems="center" margin="20px" flexDirection="column" gap="20px">
     
                <Typography variant="h4">Sign up</Typography>
                <Stack className="inputs-column" flexDirection="column" gap="30px">
                    <Box>
                        <TextField
                            label="Name"
                            className="input-field"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Email"
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Box>
                    <Box>
                        <FormControl className="input-field" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Box>
                </Stack>
                <Stack className="agree" alignItems="center" flexDirection="row" gap="10px">
                    <Checkbox />
                    <Typography>I agree to all the Terms and Privacy Policies</Typography>
                </Stack>
                <Button
                    onClick={handleSignup}
                    className="create-button"
                    sx={{ width: "500px", textAlign: "center", marginTop: "10px" }}
                >
                    Create account
                </Button>
                <Stack flexDirection="row" gap="3px">
                    <Typography>Already have an account?</Typography>
                    <Link to="/logins" style={{ textDecoration: "none" }}>
                        <Typography color="red">Login</Typography>
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Signup;
