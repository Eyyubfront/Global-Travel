import { Box, Button, Stack, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Checkbox } from "@mui/material";
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import loginphoto from "../../assets/loginphoto.png";
import "./login.css"; // CSS dosyasını ekliyoruz

const Loginspage = ({ setUser }) => {
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleLogin = () => {
        console.log(location.state); // State'in içeriğini kontrol et
        const { email: registeredEmail, password: registeredPassword, name: registeredName } = location.state || {};

        console.log('Registered Email:', registeredEmail);
        console.log('Registered Password:', registeredPassword);
        console.log('Registered Name:', registeredName);
        
        if (email === registeredEmail && password === registeredPassword) {
            try {
                setUser({ email, name: registeredName || 'Guest' });
                navigate('/');
            } catch (error) {
                console.error("Error setting user:", error); // Hata mesajını göster
            }
        } else {
            alert("Email veya şifre yanlış!");
        }
    };

    return (
        <Stack className="login-container" alignItems="center" flexDirection="row" justifyContent="space-between">
            <Box className="login-image">
                <img src={loginphoto} alt="Login" />
            </Box>
            <Stack className="login-form" alignItems="center" gap="20px">
               
                <Typography variant="h4">Login</Typography>
                <Box >
                    <TextField
                        className="input-field"
                        id="outlined-basic"
                        label="Email"
                   
                        variant="outlined"
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
                <Stack className="remember-me" alignItems="center" flexDirection="row" gap="40px">
                    <Stack alignItems="center" flexDirection="row" gap="10px">
                        <Checkbox />
                        <Typography>Remember me</Typography>
                    </Stack>
                    <Link className="forgot-password" to="/pasword">
                        <Typography color="red">Forgot Password</Typography>
                    </Link>
                </Stack>
                <Button
                    onClick={handleLogin}
                    className="login-button"
                >
                    Login
                </Button>
                <Stack flexDirection="row" gap="3px">
                    <Typography>Don’t have an account?</Typography>
                    <Link to="/signs" className="signup-link">
                        <Typography color="red">Sign up</Typography>
                    </Link>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Loginspage;
