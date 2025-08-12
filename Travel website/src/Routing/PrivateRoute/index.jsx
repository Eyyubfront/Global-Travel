import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (!user?.id) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
