import React from 'react';
import { Stack, Typography, Box, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import './Perfecttrip.css'; // Import the CSS file

const Perfecttrip = ({ src, title, id }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/city/${id}`);
    };

    return (
        <Box className="perfecttrip-container" onClick={handleClick}>
            <Stack flexWrap="wrap" flexDirection="row" alignItems="center" gap="10px">
                <Box>
                    <img src={src} className="perfecttrip-image" alt={title} />
                </Box>
                <Stack flexDirection="column" gap="10px">
                    <Typography className="perfecttrip-title">
                        {title}
                    </Typography>
                    <Button className="perfecttrip-button">
                        View Deals
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Perfecttrip;
