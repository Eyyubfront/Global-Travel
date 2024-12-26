import { Box, Button, Stack, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Checkbox } from "@mui/material";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import loginphoto from "../../assets/loginphoto.png"; 
import './signup.css'; 

const Signup = ({ setUser }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const handleSignup = () => {
        if (!email.trim() || !password.trim() || !name.trim()) {
            setError("Please fill in all fields");
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
    
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter");
            return;
        }
    
        const nameInitial = name.charAt(0).toUpperCase();
        const emailFirstLetter = email.charAt(0).toUpperCase();
        const userData = { email, name, password, nameInitial, emailFirstLetter };
    
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    
      
        navigate('/logins', { state: userData });
    };
    

    return (
        <Box className="signup-container">
            <Box className="signup-image">
                <img src={loginphoto} alt="Signup" />
            </Box>
            <Stack className="signup-form" alignItems="center" margin="20px" flexDirection="column" gap="20px">
                <Typography variant="h4" className="signup-title">Sign Up</Typography>
                <Stack className="inputs-column" flexDirection="column" gap="30px" width="100%">
                    <TextField
                        label="Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        className="input-field"
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        className="input-field"
                    />
                    <FormControl variant="outlined" fullWidth className="input-field">
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
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                </Stack>
                <Stack className="agree" flexDirection="row" alignItems="center" gap="10px">
                    <Checkbox />
                    <Typography>I agree to all the Terms and Privacy Policies</Typography>
                </Stack>
                
                {error && <Typography color="error" sx={{ marginTop: "10px" }}>{error}</Typography>}

                <Button
                    onClick={handleSignup}
                    className="create-button"
                    sx={{ width: "100%", textAlign: "center", marginTop: "10px" }}
                >
                    Create Account
                </Button>
                <Stack flexDirection="row" gap="3px" justifyContent="center">
                    <Typography>Already have an account?</Typography>
                    <Link to="/logins" style={{ textDecoration: "none" }}>
                        <Typography color="red">Login</Typography>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Signup;
