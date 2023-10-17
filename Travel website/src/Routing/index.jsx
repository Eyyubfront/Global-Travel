import FlightNow from "../Pages/FlightNow"
import { Route, Routes } from "react-router"
import LandingPages from "../Pages/Landingpages"
import Flightlist from "../Pages/Flightlist"
import Flyemirates from "../Pages/Flyemirates"
import Bookingdetalone from "../Pages/Bookingdetalone"
import { Login } from "@mui/icons-material"
import Loginspage from "../Pages/Login"
import Signup from "../Pages/Signup"
import Pasword from "../Pages/Pasword"
import PaswordNew from "../Pages/PaswordNew"
import SucsesAcaunt from "../Pages/Sucsesacount"
import Hotelflow from "../Pages/Hotelflow"
import Hotellist from "../Pages/Hotellist"
import Hotellistabout from "../Pages/Hotellistabout"
import Hotelbook from "../Pages/Hotelbook"
import Myacaount from "../Pages/Myacount"
import AcaountHistory from "../Pages/Acaounthistory"
import Acaountstays from "../Pages/Acaountstays"
import AcaountPay from "../Pages/Acaountpay"
const Routing = () => {
    return (
        <>

            <Routes>
                <Route path="/" element={<LandingPages />} />
                <Route path="/flightnow" element={<FlightNow />} />
                <Route path="/flightlist" element={<Flightlist />} />
                <Route path="/flyemirates" element={<Flyemirates />} />
                <Route path="/bookone" element={<Bookingdetalone />} />
                <Route path="/logins" element={<Loginspage />} />
                <Route path="/signs" element={<Signup />} />
                <Route path="/pasword" element={<Pasword />} />
                <Route path="/paswordnews" element={<PaswordNew />} />
                <Route path="/sucsesacaount" element={<SucsesAcaunt />} />
                <Route path="/hotelflow" element={<Hotelflow />} />
                <Route path="/hotellist" element={<Hotellist />} />
                <Route path="/hotellistabout" element={<Hotellistabout />} />
                <Route path="/hotelbook" element={<Hotelbook />} />
                <Route path="/myacount" element={<Myacaount />} />
                <Route path="/acaounthistory" element={<AcaountHistory />} />
                <Route path="/acaountstays" element={<Acaountstays />} />
                <Route path="/acaountpay" element={<AcaountPay />} />
             



            </Routes>


        </>
    )
}

export default Routing