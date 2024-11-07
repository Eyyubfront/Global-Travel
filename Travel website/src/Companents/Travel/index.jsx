import { Box, Button, Stack, Typography } from "@mui/material";
import './Travel.css'; // Import the CSS file

const Travel = ({ title, many, text, src }) => {
    return (
        <Stack flexDirection="row">
            <Box className="travel-box" sx={{ backgroundImage: `url(${src})` }}>
                <Stack className="travel-content" gap="10px" flexDirection="row">
                    <Stack gap="10px" flexDirection="column">
                        <Typography variant="h5" className="travel-title">
                            {title}
                        </Typography>
                        <Typography>
                            {text}
                        </Typography>
                    </Stack>
                    <Typography className="travel-many" variant="h5">
                        {many}
                    </Typography>
                </Stack>
                <Button className="travel-button">
                    Book Flight
                </Button>
            </Box>
        </Stack>
    );
}

export default Travel;
