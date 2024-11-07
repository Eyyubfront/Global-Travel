import { Box, Stack, Typography, Container } from "@mui/material";
import HeadNav from "../../Companents/HeadNav";
import personback from "../../assets/personback.png";
import personjon from "../../assets/personjon.png";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Footer from "../../Companents/Footer";

import { useState, useEffect } from "react";
import "./myAccount.css"; // CSS dosyasını ekliyoruz

const MyAccount = ({ user }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (user) {
            setEmail(user.email || '');
            setName(user.name || '');
        }
    }, [user]);

    const changeData = (message, currentValue, setValue) => {
        const newValue = prompt(message, currentValue);
        if (newValue !== null) {
            setValue(newValue);
        }
    };

    return (
        <>
            <Box className="my-account-container" marginTop="15px">
                <Container>
                    <Stack>
                        <Box className="personjon-photo">
                            <img src={personjon} alt="" />
                        </Box>
                        <Typography className="jon-about-texts" variant="h4">
                            {name ? name.charAt(0).toUpperCase() : ''}
                        </Typography>
                        <Typography className="jon-about-texts-email">
                            {email}
                        </Typography>
                    </Stack>
                    <img className="person-back" src={personback} alt="" />

                    <Typography className="account-title" variant="h4" marginTop="15px">
                        Account
                    </Typography>

                    <Box className="account-info-box">
                        <Stack className="account-change" flexDirection="row" justifyContent="space-between" alignItems="center">
                            <Stack flexDirection="column" gap="10px">
                                <Typography variant="body1" color="darkgray">Email</Typography>
                                <Typography variant="h5">{email}</Typography>
                            </Stack>
                            <Stack className="change-button"
                                onClick={() => changeData('Enter your new email...', email, setEmail)}
                            >
                                <Box><BorderColorIcon /></Box>
                                <Typography>Change</Typography>
                            </Stack>
                        </Stack>

                        <Stack className="account-change" marginTop="10px" flexDirection="row" justifyContent="space-between" alignItems="center">
                            <Stack flexDirection="column" gap="10px">
                                <Typography variant="body1" color="darkgray">Password</Typography>
                                <Typography variant="h5">******</Typography>
                            </Stack>
                            <Stack className="change-button"
                                onClick={() => changeData('Enter your new password...', password, setPassword)}
                            >
                                <Box><BorderColorIcon /></Box>
                                <Typography>Change</Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default MyAccount;
