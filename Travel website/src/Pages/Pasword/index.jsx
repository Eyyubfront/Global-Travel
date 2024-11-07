import { Box, Button, Stack, TextField, Typography, InputAdornment } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import loginphoto from "../../assets/loginphoto.png";
import { Link } from 'react-router-dom';
import './password.css'; // CSS dosyasını ekliyoruz

const Pasword = () => {
    return (
        <>
            <Link to="/logins" style={{ textDecoration: "none" }}>
                <Stack margin="10px 20px" flexDirection="row" gap="15px">
                    <KeyboardBackspaceIcon />
                    <Typography>Back to login</Typography>
                </Stack>
            </Link>

            <Stack justifyContent="space-between" className="login-container" alignItems="center" flexDirection="row">
                <Stack alignItems="center" margin="20px" flexDirection="column" gap="20px">
                    <Typography variant="h4">Forgot your password?</Typography>

                    <Box className="email-input">
                        <TextField
                            label="Email"
                            id="outlined-start-adornment"
                            style={{ width: "270px" }}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"></InputAdornment>,
                            }}
                        />
                    </Box>

                    <Link className="submit-button" to="/paswordnews" style={{ textDecoration: "none" }}>
                        <Button className="continue-login" sx={{ width: "300px", marginTop: "10px" }}>
                            Submit
                        </Button>
                    </Link>
                </Stack>

                <Box marginTop="30px">
                    <img className="login-image" src={loginphoto} alt="" />
                </Box>
            </Stack>
        </>
    );
};

export default Pasword;
