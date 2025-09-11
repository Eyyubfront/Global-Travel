
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();

  
  if (!isLoaded) return null;

  if (!isSignedIn) {
    console.log("Redirecting to login");
    console.log("a")
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
