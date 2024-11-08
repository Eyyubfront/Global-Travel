import { Route, Routes } from "react-router";
import LandingPages from "../Pages/Landingpages";
import Flightlist from "../Pages/Flightlist";
import Loginspage from "../Pages/Login";
import Signup from "../Pages/Signup";
import Pasword from "../Pages/Pasword";
import PaswordNew from "../Pages/PaswordNew";
import Hotellist from "../Pages/Hotellist";
import Hotellistabout from "../Pages/Hotellistabout";
import Myacaount from "../Pages/Myacount";
import CityDetail from "../Pages/CityDetail";
import Favourites from "../Pages/Favourites";
import Orders from "../Pages/Orders";
import HeadNav from "../Companents/HeadNav";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

const Routing = ({ user, setUser }) => {
    console.log('User:', user);
    console.log('SetUser:', setUser);
    return (
        <>
           <HeadNav user={user} setUser={setUser} />
            <Routes>
                <Route path="/" element={<LandingPages />} />
                <Route path="/flightlist" element={<Flightlist />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/logins" element={<Loginspage setUser={setUser} />} />
                <Route path="/signs" element={<Signup setUser={setUser} />} />
                <Route path="/pasword" element={<Pasword />} />
                <Route path="/paswordnews" element={<PaswordNew />} />
                <Route path="/hotellist" element={<Hotellist />} />
                <Route path="/hotellistabout/:id" element={<Hotellistabout />} />
                <Route path="/myacount" element={<Myacaount user={user} setUser={setUser}  />} />
                <Route path="/city/:id" element={<CityDetail />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </>
    );
};

export default Routing;
