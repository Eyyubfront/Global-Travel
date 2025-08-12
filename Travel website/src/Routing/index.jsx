import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import HeadNav from "../Companents/HeadNav";
import LandingPages from "../Pages/Landingpages";
import Flightlist from "../Pages/Flightlist";
import Hotellist from "../Pages/Hotellist";
import Hotellistabout from "../Pages/Hotellistabout";
import CityDetail from "../Pages/CityDetail";
import Favourites from "../Pages/Favourites";
import Orders from "../Pages/Orders";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import LoginPage from "../Pages/Login";
import SignupPage from "../Pages/Signup";
import PrivateRoute from "./PrivateRoute";

const Routing = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <HeadNav user={user} />
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/flightlist" element={<Flightlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup/*" element={<SignupPage />} />
        <Route path="/login/*" element={<LoginPage />} />

        <Route path="/hotellist" element={<Hotellist />} />
        <Route path="/hotellistabout/:id" element={<Hotellistabout />} />
        <Route path="/city/:id" element={<CityDetail />} />

        <Route
          path="/favourites"
          element={
            <PrivateRoute>
              <Favourites />
            </PrivateRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Routing;
