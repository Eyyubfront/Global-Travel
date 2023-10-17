
import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"
import BurgerMenu from "../../Companents/Burgermenu";

import FlightIcon from '@mui/icons-material/Flight';
import BedIcon from '@mui/icons-material/Bed';
import globlack from "../../assets/globblack.png"
import personjon from "../../assets/personjon.png"

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import plane from "../../assets/emiratesplane.png"
import featureone from "../../assets/featureone.png"

import featuretwo from "../../assets/featuretwo.png"
import featurethree from "../../assets/featurethree.png"
import featurefoor from "../../assets/featurefoor.png"
import Checkbox from '@mui/material/Checkbox';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import flyemirates from "../../assets/emirates.png"
import WifiIcon from '@mui/icons-material/Wifi';
import PersonIcon from '@mui/icons-material/Person';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import Footer from "../../Companents/Footer"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import { Link } from 'react-router-dom'
import 'swiper/css/pagination';
import HeadNav from "../../Companents/HeadNav";

const Flyemirates=()=>{
    return(
        <>


<HeadNav/>

<Box marginTop="30px">
    <Container>

        <Stack flexDirection="row" gap="15px">

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



<Stack className="boks" flexDirection="row" justifyContent="space-between"> 


        <Stack gap="5px" flexDirection="column">
            <Typography variant="h4">
            Emirates A380 Airbus
            </Typography>

            <Stack alignItems="center" flexDirection="row" gap="10px">
<AddLocationAltIcon/>
<Typography>
Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
</Typography>
            </Stack>

            <Stack alignItems="center" flexDirection="row" gap="10px">
<Box border="1px solid #8DD3BB" borderRadius="10%" padding="10px">
    4.2
</Box>
<Typography>
Very Good 54 reviews
</Typography>
            </Stack>


        </Stack>



        <Stack flexDirection="column">
<Typography color="red" variant="h4">
$240
</Typography>

<Stack flexDirection="row" gap="5px"> 

<Box className="favrthova" width="30px" border="1px solid #8DD3BB" padding="10px">
    <FavoriteBorderIcon/>
</Box>
<Link style={{textDecoration:"none"}} to="/bookone">

<Box borderRadius="4px" sx={{background:"#8DD3BB",color:"black"}} padding="15px" height="20px" width="70px">
Book now
</Box>
</Link>
</Stack>

        </Stack>
</Stack>




<Box  marginTop="30px">
    <img className="planephosts" src={plane} alt="" />
</Box>




<Box marginTop="20px">
    <Stack  alignItems="center" flexDirection='row' justifyContent="space-between">  

    <Typography variant="h4">
    Basic Economy Features
    </Typography>


<Stack className="chechsboxs" alignItems="center" flexDirection='row' gap="10px">
    <Stack alignItems="center"  flexDirection="row" gap="2px">

    <Checkbox/>
    <Typography>
    Economy
    </Typography>
    </Stack>

    <Stack alignItems="center"  flexDirection="row" gap="2px">

<Checkbox/>
<Typography>
    First Class
    </Typography>
</Stack>


<Stack alignItems="center"  flexDirection="row" gap="2px">

<Checkbox/>
<Typography>
    Busines Class
    </Typography>
</Stack>
  
  
  
</Stack>

    </Stack>




<Swiper
      breakpoints={{
         
        320: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      }}
      modules={[ Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={4}

      pagination={{ clickable: true }}

      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img src={featureone} alt="" /></SwiperSlide>
      <SwiperSlide><img src={featuretwo} alt="" /></SwiperSlide>
      <SwiperSlide><img src={featurethree} alt="" /></SwiperSlide>
      <SwiperSlide><img src={featurefoor} alt="" /></SwiperSlide>
      <SwiperSlide><img src={featureone} alt="" /></SwiperSlide>
     
     
    </Swiper>

</Box>




<Box marginTop="20px" borderRadius="8px " padding="20px" sx={{backgroundColor:"rgba(141, 211, 187, 0.60)",color:"black"}}>
    <Typography variant="h4">
    Emirates Airlines Policies
    </Typography>

<Stack gap="10px" flexDirection="row" justifyContent="space-between">

    <Stack flexDirection="row" gap="10px">
        <AccessAlarmIcon/>
        <Typography>
        Pre-flight cleaning, installation of cabin HEPA filters.
        </Typography>
    </Stack>

    <Stack flexDirection="row" gap="10px">
        <AccessAlarmIcon/>
        <Typography>
        Pre-flight cleaning, installation of cabin HEPA filters.
        </Typography>
    </Stack>
</Stack>
</Box>



<Box marginTop="20px" padding="15px" borderRadius="12px" sx={{boxShadow:"0px 4px 16px 0px rgba(17, 34, 17, 0.05)"}}>

    <Stack className="returntexts" flexDirection="row" justifyContent="space-between">
 <Typography variant="h5">
 Return Wed, Dec 8
 </Typography>
 <Typography variant="h5">
 2h 28m
 </Typography>

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




<Box marginTop="20px" padding="15px" borderRadius="12px" sx={{boxShadow:"0px 4px 16px 0px rgba(17, 34, 17, 0.05)"}}>

    <Stack className="returntexts" flexDirection="row" justifyContent="space-between">
 <Typography variant="h5">
 Return Wed, Dec 8
 </Typography>
 <Typography variant="h5">
 2h 28m
 </Typography>

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
























    </Container>
</Box>


<Footer/>

        
        
        </>
    )
}

export default Flyemirates