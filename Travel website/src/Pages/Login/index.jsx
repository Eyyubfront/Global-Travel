import { Box, Button, Stack, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Checkbox } from "@mui/material";
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import loginphoto from "../../assets/loginphoto.png"; // You can replace with your own image
import "./login.css";

const Loginspage = ({ setUser }) => {
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(""); // Hata mesajı için state
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        const { email: registeredEmail, password: registeredPassword, name: registeredName, emailFirstLetter } = location.state || {};
    
        if (!email || !password) {
            setError("Please fill in both email and password");
            return;
        }
    
        if (email === registeredEmail && password === registeredPassword) {
            // Kullanıcıyı localStorage'a kaydediyoruz
            localStorage.setItem("user", JSON.stringify({ email, name: registeredName || 'Guest', emailFirstLetter }));
            setUser({ email, name: registeredName || 'Guest', emailFirstLetter }); // Kullanıcıyı state'e kaydediyoruz
            navigate('/');
        } else {
            setError("Email or password is incorrect!");
        }
    };
    
    return (
        <Box className="login-container">
            <Box className="login-image">
                <img src={loginphoto} alt="Login" />
            </Box>
            <Box className="login-form">
                <Typography variant="h4" className="login-title">Login</Typography>
                <TextField
                    className="input-field"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <FormControl className="input-field" variant="outlined" fullWidth margin="normal">
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
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
                
                {/* Hata mesajını burada gösteriyoruz */}
                {error && <Typography color="error" sx={{ marginTop: "10px" }}>{error}</Typography>}

                <Button onClick={handleLogin} className="login-button">Login</Button>
                <Stack direction="row" gap="8px" alignItems="center" justifyContent="center" className="signup-link">
                    <Typography>Don’t have an account?</Typography>
                    <Link to="/signs">
                        <Typography color="red">Sign up</Typography>
                    </Link>
                </Stack>
            </Box>
        </Box>
    );
};

export default Loginspage;
