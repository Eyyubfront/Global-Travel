import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"
import HeadNav from "../../Companents/HeadNav"
import personback from "../../assets/personback.png"
import personjon from "../../assets/personjon.png"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Footer from "../../Companents/Footer";
import BedIcon from '@mui/icons-material/Bed';
import FlightIcon from '@mui/icons-material/Flight';
import { Link } from "react-router-dom";
import emirates from "../../assets/emirates.png"
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import cvpark from "../../assets/cvpark.png"
const Acaountstays=()=>{
    return(
        <>
                    <Box>
            <HeadNav/>
        </Box>

        <Box>
            <Container>
            <Stack>
        <Box className="personjonphot" sx={{position:"absolute",zIndex:999,left:"50%",top:"68%"}}>
            <img  style={{height:"92px"}} src={personjon} alt="" />
        </Box>
<Typography className="jonabouttexts" variant="h4" sx={{position:"absolute",zIndex:999,fontFamily:"Montserrat",left:"48%",top:"84%"}}>
John Doe.
</Typography>
<Typography className="jonabouttextsz" sx={{position:"absolute",zIndex:999,fontFamily:"Montserrat",left:"48%",top:"90%"}}>
john.doe@gmail.com
</Typography>
        </Stack>
        <img className="persondback" style={{position:"relative"}} src={personback} alt="" />


        <Box  className="manytripsboxz" marginTop="15%" borderRadius='12px ' padding="5px" width="100%" sx={{boxShadow:"0px 4px 16px 0px rgba(17, 34, 17, 0.05)"}}>
<Stack className="manytrips" justifyContent="space-between" flexDirection="row" alignItems="center">
 <Link style={{textDecoration:"none",color:"black"}} to="/myacount">
 
<Typography>
Account
</Typography>
 </Link>

   <Stack flexDirection="column" gap="10px">

<Box className="manylinz" borderRight='1px solid' height="48px" width='1px'>

</Box>
<Box marginLeft="-20px" className="manylin" width="250px" border="1px solid #8DD3BB">

</Box>
   </Stack>
<Typography  className="acountcolor">
Tickets/Bookings
</Typography>
<Box className="manylinz" borderRight='1px solid' height="48px" width='1px'>

</Box>
<Link style={{textDecoration:"none",color:"black"}} to="/acaountpay">

<Typography>
Payment methods
</Typography>
</Link>
</Stack>
</Box>

<Typography marginTop="15px" className="boking" variant="h4">
Tickets/Bookings
</Typography>

<Box className="ticktetbox" height='40px' borderRadius="12px" sx={{boxShadow:"0px 4px 16px 0px rgba(17, 34, 17, 0.05)",width:"100%",padding:"10px"}}>
    <Stack gap="10%" alignItems="center" className="flightsboxsd" flexDirection="row" >

<Link style={{textDecoration:"none",color:"black"}} to="/acaounthistory">

        <Stack className="flightcenter" flexDirection="row" gap="10px">
<FlightIcon/>
<Typography>
Flights
</Typography>
        </Stack>
</Link>
      

    <Box className="manylinz" borderRight='1px solid' height="48px" width='1px'>

</Box>

<Stack flexDirection="column" gap="10px">

<Stack flexDirection="row" >
<BedIcon/>

<Typography>
Stays
</Typography>
        </Stack>
        <Box marginLeft="-30px" width="300px" border="1px solid #8DD3BB">

</Box>
</Stack>

    </Stack>
    
</Box>

<Stack flexDirection="column" gap="10px">

<Box

borderRadius="16px"
sx={{boxShadow:"0px 4px 16px 0px rgba(17, 34, 17, 0.05)",width:"95%",padding:"15px"}}
>
    <Stack className="ticketboxesd"  flexDirection="row" alignItems="center" justifyContent="space-between">
        <Box padding="5px" width="80px" borderRadius="10%" border='1px solid #8DD3BB'>
            <img style={{width:"70px"}} src={cvpark} alt="" />
        </Box>
        <Stack flexDirection="row" gap="10px">

        <Stack flexDirection="column" gap="10px">
<Typography color="darkgray">
Newark(EWR)
</Typography>
<Stack alignItems="center" flexDirection="row" gap="5px">
<Typography variant="h5">
12:00 pm
</Typography>
<Box  borderBottom="2px solid" width="30px">

</Box>
</Stack>
        </Stack>
   
        <Stack flexDirection="column" gap="10px">
<Typography color="darkgray">
Newark(EWR)
</Typography>
<Typography variant="h5">
6:00 pm
</Typography>
        </Stack>
        </Stack>


<Box className="ticklines" borderRight="1px solid #D7E2EE" height="50px">

</Box>


<Stack className="dateicont" flexDirection="row" gap="20px">

<Stack alignItems="center" flexDirection="row" gap="10px">
<Stack alignItems="center" flexDirection="column" gap="10px" >
    <DateRangeIcon/>
   <Stack flexDirection="column" gap="10px">
   <Typography variant="p" color="darkgray">
   Date
        </Typography>
        <Typography variant="h6">
        12-11-22
        </Typography>
   </Stack>
</Stack>


</Stack>


<Stack alignItems="center" flexDirection="row" gap="10px">
<Stack alignItems="center" flexDirection="column" gap="10px" >
    <AccessAlarmIcon/>
   <Stack flexDirection="column" gap="10px">
   <Typography variant="p" color="darkgray">
   Flight time
        </Typography>
        <Typography variant="h6">
        Newark(EWR)
        </Typography>
   </Stack>
</Stack>


</Stack>
</Stack>


<Box height="40px" borderRadius="4px" sx={{backgroundColor:"#8DD3BB",color:"black" }}>
    <Button sx={{color:"black"}}>
        Dowland Ticket
    </Button>
</Box>





    </Stack>
</Box>


<Box

borderRadius="16px"
sx={{boxShadow:"0px 4px 16px 0px rgba(17, 34, 17, 0.05)",width:"95%",padding:"15px"}}
>
    <Stack className="ticketboxesd"  flexDirection="row" alignItems="center" justifyContent="space-between">
        <Box padding="5px" width="80px" borderRadius="10%" border='1px solid #8DD3BB'>
            <img style={{width:"70px"}} src={cvpark} alt="" />
        </Box>
        <Stack flexDirection="row" gap="10px">

        <Stack flexDirection="column" gap="10px">
<Typography color="darkgray">
Newark(EWR)
</Typography>
<Stack alignItems="center" flexDirection="row" gap="5px">
<Typography variant="h5">
12:00 pm
</Typography>
<Box  borderBottom="2px solid" width="30px">

</Box>
</Stack>
        </Stack>
   
        <Stack flexDirection="column" gap="10px">
<Typography color="darkgray">
Newark(EWR)
</Typography>
<Typography variant="h5">
6:00 pm
</Typography>
        </Stack>
        </Stack>


<Box className="ticklines" borderRight="1px solid #D7E2EE" height="50px">

</Box>


<Stack className="dateicont" flexDirection="row" gap="20px">

<Stack alignItems="center" flexDirection="row" gap="10px">
<Stack alignItems="center" flexDirection="column" gap="10px" >
    <DateRangeIcon/>
   <Stack flexDirection="column" gap="10px">
   <Typography variant="p" color="darkgray">
   Date
        </Typography>
        <Typography variant="h6">
        12-11-22
        </Typography>
   </Stack>
</Stack>


</Stack>


<Stack alignItems="center" flexDirection="row" gap="10px">
<Stack alignItems="center" flexDirection="column" gap="10px" >
    <AccessAlarmIcon/>
   <Stack flexDirection="column" gap="10px">
   <Typography variant="p" color="darkgray">
   Flight time
        </Typography>
        <Typography variant="h6">
        Newark(EWR)
        </Typography>
   </Stack>
</Stack>


</Stack>
</Stack>


<Box height="40px" borderRadius="4px" sx={{backgroundColor:"#8DD3BB",color:"black" }}>
    <Button sx={{color:"black"}}>
        Dowland Ticket
    </Button>
</Box>





    </Stack>
</Box>


<Box

borderRadius="16px"
sx={{boxShadow:"0px 4px 16px 0px rgba(17, 34, 17, 0.05)",width:"95%",padding:"15px"}}
>
    <Stack  className="ticketboxesd" flexDirection="row" alignItems="center" justifyContent="space-between">
        <Box padding="5px" width="80px" borderRadius="10%" border='1px solid #8DD3BB'>
            <img style={{width:"70px"}} src={cvpark} alt="" />
        </Box>
        <Stack flexDirection="row" gap="10px">

        <Stack flexDirection="column" gap="10px">
<Typography color="darkgray">
Newark(EWR)
</Typography>
<Stack alignItems="center" flexDirection="row" gap="5px">
<Typography variant="h5">
12:00 pm
</Typography>
<Box  borderBottom="2px solid" width="30px">

</Box>
</Stack>
        </Stack>
   
        <Stack flexDirection="column" gap="10px">
<Typography color="darkgray">
Newark(EWR)
</Typography>
<Typography variant="h5">
6:00 pm
</Typography>
        </Stack>
        </Stack>


<Box className="ticklines" borderRight="1px solid #D7E2EE" height="50px">

</Box>


<Stack className="dateicont" flexDirection="row" gap="20px">

<Stack alignItems="center" flexDirection="row" gap="10px">
<Stack  alignItems="center" flexDirection="column" gap="10px" >
    <DateRangeIcon/>
   <Stack flexDirection="column" gap="10px">
   <Typography variant="p" color="darkgray">
   Date
        </Typography>
        <Typography variant="h6">
        12-11-22
        </Typography>
   </Stack>
</Stack>


</Stack>


<Stack alignItems="center" flexDirection="row" gap="10px">
<Stack  alignItems="center" flexDirection="column" gap="10px" >
    <AccessAlarmIcon/>
   <Stack flexDirection="column" gap="10px">
   <Typography variant="p" color="darkgray">
   Flight time
        </Typography>
        <Typography variant="h6">
        Newark(EWR)
        </Typography>
   </Stack>
</Stack>


</Stack>
</Stack>


<Box height="40px" borderRadius="4px" sx={{backgroundColor:"#8DD3BB",color:"black" }}>
    <Button sx={{color:"black"}}>
        Dowland Ticket
    </Button>
</Box>





    </Stack>
</Box>
</Stack>




            </Container>
        </Box>

        <Footer/>
        
        
        </>
    )
}
export default Acaountstays