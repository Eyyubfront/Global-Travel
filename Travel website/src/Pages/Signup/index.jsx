import { SignUp } from "@clerk/clerk-react";
import { Box, Typography } from "@mui/material";

const SignupPage = () => {

    return (
        <Box display="flex" justifyContent="center" alignItems="center"  flexDirection="column">
            <Typography variant="h4" mb={3}>Sign Up</Typography>
            <SignUp   /> 
        </Box>
    );
};

export default SignupPage;
