import { SignIn } from "@clerk/clerk-react";
import { Box, Typography } from "@mui/material";

const LoginPage = () => {

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography variant="h4" mb={3}>
        Login
      </Typography>
      <SignIn />
    </Box>
  );
};

export default LoginPage;
