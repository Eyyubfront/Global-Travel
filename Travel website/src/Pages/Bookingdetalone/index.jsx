
import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"
import BurgerMenu from "../../Companents/Burgermenu";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FlightIcon from '@mui/icons-material/Flight';
import BedIcon from '@mui/icons-material/Bed';
import globlack from "../../assets/globblack.png"
import personjon from "../../assets/personjon.png"
import flyemirates from "../../assets/emirates.png"
import WifiIcon from '@mui/icons-material/Wifi';
import PersonIcon from '@mui/icons-material/Person';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import plane from "../../assets/emiratesplane.png"
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import Footer from "../../Companents/Footer";
import HeadNav from "../../Companents/HeadNav";

const Bookingdetalone=()=>{
    return(
        <>

             <HeadNav/>
       <Box>

        <Container>

        <Stack marginTop="20px" flexDirection="row" gap="15px">

<Typography sx={{fontFamily:"Montserrat"}} color="red">
Turkey
</Typography>
<Box>
    <ArrowRightAltIcon/>
</Box>

<Typography  sx={{fontFamily:"Montserrat"}} color="red">
Istanbul
</Typography>
<Box>
    <ArrowRightAltIcon/>
</Box>
<Typography>
CVK Park Bosphorus Hotel Istanbul
</Typography>


        </Stack>



        <Stack className="booksonerespcolumn" gap="20px" flexDirection="row">


<Stack flexDirection="column">


<Box className="retrunsboxs" width="80%" marginTop="20px" height="174px" padding="40px" borderRadius="12px" sx={{boxShadow:"0px 4px 16px 0px rgba(17, 34, 17, 0.05)"}}>

<Stack className="returntexts" flexDirection="row" justifyContent="space-between">
<Typography variant="h5">
Return Wed, Dec 8
</Typography>
<Stack flexDirection="column" gap="5px">
<Typography color="red" variant="h5">
$240
</Typography>
<Typography variant="h5">
2h 28m
</Typography>
</Stack>

</Stack>

<Stack className="emiratesandicons" flexDirection="row" justifyContent="space-between">

<Box padding="10px" width="240px" border="1px solid #8DD3BB">
<Stack gap="10px" flexDirection="row">

<img style={{width:"100px"}} src={flyemirates} alt="" />
<Stack flexDirection="column">
<Typography>
Emirates
</Typography>
<Typography color="darkgray">
Airbus A320
</Typography>
</Stack>
</Stack>
</Box>



<Stack flexDirection="row" gap="10px" alignItems="center"> 
<WifiIcon/>
<Box borderRight="2px solid" width="1px" height="38px">

</Box>
<PersonIcon/>
<Box borderRight="2px solid" width="1px" height="38px">

</Box>

<AirplanemodeActiveIcon/>
<Box borderRight="2px solid" width="1px" height="38px">

</Box>

<FastfoodIcon/>


</Stack>
</Stack>

<Stack className="planepm" marginTop="20px" flexDirection="row" justifyContent="space-between" >
    <Typography>
    12:00 pm
    </Typography>
    <Typography color="darkgray">
    Newark(EWR)
    </Typography>

<Stack  flexDirection="row" gap="5px">
<HorizontalRuleRoundedIcon/>
<AirplanemodeActiveIcon/>
<HorizontalRuleRoundedIcon/>
</Stack>

<Typography>
    12:00 pm
    </Typography>
    <Typography color="darkgray">
    Newark(EWR)
    </Typography>

</Stack>



</Box>




<Box
borderRadius="12px"
marginTop="10px"
padding="25px"
boxShadow="0px 4px 16px 0px rgba(17, 34, 17, 0.05)"
>


<Box
className="payboxs"
borderRadius="12px"
sx={{backgroundColor:"#8DD3BB",color:"black"}}
padding="15px"
>
    <Stack className="paytwotexts"  flexDirection="row" justifyContent="space-between">

    <Stack flexDirection="column" gap="10px">
        <Typography variant="h5">
        Pay in full
        </Typography>
        <Typography variant="h8" >
        Pay the total and you are all set
        </Typography>
    </Stack>
    <Box color="white" padding="10px" border="2px solid" width="16px" height="15px" borderRadius="55%">
        <Box border="2px solid" width="14px" height="14px" borderRadius="55%"></Box>
    </Box>
    </Stack>



</Box>

<Stack className="paytwotexts" marginTop="10px" alignItems="center" flexDirection="row" justifyContent="space-between">

    <Stack flexDirection="column">
<Typography variant="h5">
Pay part now, part later
</Typography>
<Typography className="restexts" width="70%">
Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.
</Typography>
<Link style={{color:"black"}}   >
    More info
</Link>
    </Stack>

    <Box color="black" padding="4px" border="2px solid" width="16px" height="15px" borderRadius="55%">

    </Box>
</Stack>
</Box>


<Box
borderRadius="12px"
marginTop="10px"
padding="25px"
boxShadow="0px 4px 16px 0px rgba(17, 34, 17, 0.05)">
<Typography className="logintexts" variant="h4">
Login or Sign up to book
</Typography>
<Box className="textsfiledboxs">

<TextField className="phonetextfiled" sx={{width:"100%",marginTop:"10px"}} id="outlined-basic" label="Phone Number" variant="outlined" />
</Box>
<Typography className="standarttexts" marginTop="5px">
We’ll call or text you to confirm your number. Standard message and data rates apply. Privacy Policy
</Typography>
<Link to="/logins" style={{textDecoration:"none"}}>

<Button className="contunibtn" sx={{backgroundColor:"#8DD3BB",color:"black",width:"100%",textAlign:"center",marginTop:"10px"}}>
Continue
</Button>
</Link>
<Stack justifyContent="center" marginTop="10px" alignItems="center" flexDirection="row" gap="10px">
<Box className="orline" width="100%" borderBottom="2px solid">

</Box>
<Typography>
Or
</Typography>
<Box className="orline"  width="100%" borderBottom="2px solid">

</Box>
</Stack>

<Stack flexDirection="row" justifyContent="space-between">
    <Box className="iconboxsd" height="40px" textAlign="center" width="150px" border="1px solid #8DD3BB">
<FacebookIcon sx={{color:"blue"}}/>
    </Box>

    <Box className="iconboxsd" height="40px" textAlign="center" width="150px" border="1px solid #8DD3BB">
<YouTubeIcon sx={{color:"red"}}/>
    </Box>


    <Box className="iconboxsd" height="40px" textAlign="center" width="150px" border="1px solid #8DD3BB">
<WhatsAppIcon sx={{color:"green"}}/>
    </Box>
</Stack>


<Box marginTop="10px" padding="10px"  border="1px solid #8DD3BB " width="100%">
    <Stack justifyContent="center" alignItems="center" textAlign="center" flexDirection="row" gap="10px">
<EmailIcon/>
<Typography>
Continue with email
</Typography>
    </Stack>
</Box>



</Box>






</Stack>







<Box
className="econmy"
borderRadius="12px"
boxShadow="0px 4px 16px 0px rgba(17, 34, 17, 0.05)"
width="40%"
height='70%'
padding="10px"

>
    <Stack flexDirection="column" >

<Stack flexDirection="row" gap="25px">

    <img style={{width:"120px",height:"100px"}} src={plane} alt="" />

    <Stack flexDirection="column" gap="10px">
    <Typography color="darkgray">
    Economy
    </Typography>
    <Typography variant="h4">
    Emirates A380 Airbus
    </Typography>
<Stack alignItems="center" flexDirection="row" gap="5px">
<Box borderRadius="10%" border="1px solid #8DD3BB" padding="10px">
    4.2
</Box>
<Typography >
Very Good 54 reviews
    </Typography>
</Stack>

    </Stack>
</Stack>



<Box marginTop="10px" border="1px solid darkgray" width="97%">

</Box>

<Typography marginTop="10px" variant="h6">
Your booking is protected by golobe
</Typography>
<Box marginTop="10px" border="1px solid darkgray" width="97%">

</Box>


<Stack marginTop="10px" flexDirection="column" gap="10px">
    <Typography variant="h6">
    Price Details
    </Typography>
<Stack justifyContent="space-between" flexDirection="row" >
<Typography>
Base Fare
</Typography>
<Typography>
$400
</Typography>
</Stack>

<Stack justifyContent="space-between" flexDirection="row" >
<Typography>
Discount
</Typography>
<Typography>
$400
</Typography>
</Stack>

<Stack justifyContent="space-between" flexDirection="row" >
<Typography>
Taxes
</Typography>
<Typography>
$400
</Typography>
</Stack>

<Stack justifyContent="space-between" flexDirection="row" >
<Typography>
Service Fee
</Typography>
<Typography>
$400
</Typography>
</Stack>
<Box marginTop="10px" border="1px solid darkgray" width="97%">

</Box>
<Stack justifyContent="space-between" flexDirection="row" >
<Typography>
Total
</Typography>
<Typography>
$400
</Typography>
</Stack>
</Stack>
    </Stack>

</Box>
        </Stack>






        </Container>
        </Box>
        <Footer/>

        
        </>
    )
}
export default Bookingdetalone