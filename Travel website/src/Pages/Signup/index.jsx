import { SignUp, useUser } from "@clerk/clerk-react";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const { isSignedIn, user } = useUser();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSignedIn && user) {
            const userData = {
                id: user.id,
                name: user.fullName,
                email: user.primaryEmailAddress?.emailAddress || "",
            };
            dispatch(setUser(userData));
            navigate("/");
        }
    }, [isSignedIn, user, dispatch, navigate]);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh" flexDirection="column">
            <Typography variant="h4" mb={3}>Sign Up</Typography>
            <SignUp path="/signup" routing="path" afterSignUpUrl="/" /> 
        </Box>
    );
};

export default SignupPage;
