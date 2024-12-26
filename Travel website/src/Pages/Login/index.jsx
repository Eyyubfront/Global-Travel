import { Box, Button, Stack, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import loginphoto from "../../assets/loginphoto.png"; 
import "./login.css";

const Loginspage = ({ setUser }) => {
    const location = useLocation();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(""); 
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const handleLogin = () => {
    
        const { email: registeredEmail, password: registeredPassword, name: registeredName, emailFirstLetter } = location.state || {};
    
 ğ
        if (!email.trim() || !password.trim()) {
            setError("Please fill in both email and password");
            return;
        }
    
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address");
            return;
        }
    
        if (password.includes(" ")) {
            setError("Password cannot contain spaces");
            return;
        }
    
        if (password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }
    
        
        if (email === registeredEmail && password === registeredPassword) {
        
            localStorage.setItem("user", JSON.stringify({ email, name: registeredName || 'Guest', emailFirstLetter }));
            setUser({ email, name: registeredName || 'Guest', emailFirstLetter });
    
      
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
