import { useSelector, useDispatch } from 'react-redux';
import { setUser, removeUser } from '../features/userSlice';
import { Routes, Route } from 'react-router-dom';
import HeadNav from '../Companents/HeadNav';
import LandingPages from '../Pages/Landingpages';
import Flightlist from '../Pages/Flightlist';
import Loginspage from '../Pages/Login';
import Signup from '../Pages/Signup';
import Hotellist from '../Pages/Hotellist';
import Hotellistabout from '../Pages/Hotellistabout';
import CityDetail from '../Pages/CityDetail';
import Favourites from '../Pages/Favourites';
import Orders from '../Pages/Orders';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const Routing = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const setUserHandler = (user) => {
        dispatch(setUser(user));
    };

    const removeUserHandler = () => {
        dispatch(removeUser());
    };

    return (
        <>
            <HeadNav user={user} setUser={setUserHandler} />
            <Routes>
                <Route path="/" element={<LandingPages />} />
                <Route path="/flightlist" element={<Flightlist />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/logins" element={<Loginspage setUser={setUserHandler} />} />
                <Route path="/signs" element={<Signup setUser={setUserHandler} />} />
                <Route path="/hotellist" element={<Hotellist />} />
                <Route path="/hotellistabout/:id" element={<Hotellistabout />} />
                <Route path="/city/:id" element={<CityDetail />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
        </>
    );
};

export default Routing;
