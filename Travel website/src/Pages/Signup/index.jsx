import { Box, Button, Stack, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Checkbox } from "@mui/material";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import loginphoto from "../../assets/loginphoto.png"; // Kullanıcı fotoğrafını ekleyin
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
        navigate('/logins', { state: { email, password, name } });
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
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
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
