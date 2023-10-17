import HeadNav from "../../Companents/HeadNav"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom'
import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"
import hotellistone from "../../assets/hotellistone.png"
import hoteltwo from "../../assets/hoteltwo.png"
import hotelthree from "../../assets/hotelthree.png"
import hotelfor from "../../assets/hotelfor.png"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import loc from "../../assets/loct.png"
import Footer from "../../Companents/Footer";
const Hotellistabout=()=>{
    return(
        <>
<Box>
    <HeadNav/>
</Box>
<Box>
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
            CVK Park Bosphorus Hotel Istanbul
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
<Link style={{textDecoration:"none"}} to="/hotelbook">

<Box borderRadius="4px" sx={{background:"#8DD3BB",color:"black"}} padding="15px" height="20px" width="70px">
Book now
</Box>
</Link>
</Stack>

        </Stack>
</Stack>
        <Stack className="hotelslistphotsrows" marginTop="20px" justifyContent="space-between"  flexDirection="row" alignItems="center">
     
<Box>
    <img className="bigonehotels"  style={{width:"140%"}} src={hotellistone} alt="" />
</Box>
<Stack flexDirection="column" gap="30px">
<Stack className="hotelslistphotsrows" flexDirection="row" gap="15px">
    <img style={{width:'200px'}} src={hotelthree}  alt="" />
    <img style={{width:'200px'}} src={hotelfor} alt="" />
</Stack>

<Stack className="hotelslistphotsrows" flexDirection="row" gap="15px">
    <img  style={{width:'200px'}} src={hotelthree}  alt="" />
    <img  style={{width:'200px'}} src={hoteltwo} alt="" />
</Stack>

</Stack>


        </Stack>

<Typography className="textcentrs" variant="h5">
Overview
</Typography>
<Typography className="textcentrs">
Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park Bosphorus Hotel Istanbul has risen from the ashes of the historic Park Hotel, which also served as Foreign Affairs Palace 120 years ago and is hosting its guests by assuming this hospitality mission. With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness area, 18 meeting rooms including 4 dividable ones and 3 terraces with Bosphorus view, Istanbuls largest terrace with Bosphorus view (4500 m2) and latest technology infrastructure, CVK Park Bosphorus Hotel Istanbul is destined to be the popular attraction point of the city. Room and suite categories at various sizes with city and Bosphorus view, as well as 68 separate luxury suites, are offered to its special guests as a wide variety of selection.
</Typography>

<Stack className="hotelslistcardscolmmn" marginTop="10px" flexDirection="row" gap="5%">


<Box
borderRadius="12px"
sx={{background:"#8DD3BB",padding:"15px",width:"100px"}}
>
    <Stack  flexDirection="column" gap="5%"> 
        <Typography variant="h5">
            4.2
        </Typography>

        <Stack flexDirection="column" gap="5px">
        <Typography variant="h6">
        Very good
        </Typography>
        <Typography variant="p">
        371 reviews
        </Typography>
    </Stack>

    </Stack>
</Box>

<Box borderRadius="12px" width='100px' border="1px solid #8DD3BB" padding="20px">
<Stack flexDirection="column" gap="15px">
    <AutoAwesomeIcon/>
    <Typography variant="p">
    Near park
    </Typography>
</Stack>
</Box>

<Box borderRadius="12px" width='100px' border="1px solid #8DD3BB" padding="20px">
<Stack flexDirection="column" gap="15px">
    <AutoAwesomeIcon/>
    <Typography variant="p">
    Near nightlife
    </Typography>
</Stack>
</Box>

<Box borderRadius="12px" width='100px' border="1px solid #8DD3BB" padding="20px">
<Stack flexDirection="column" gap="15px">
    <AutoAwesomeIcon/>
    <Typography variant="p">
    Near theater
    </Typography>
</Stack>
</Box>

<Box borderRadius="12px" width='100px' border="1px solid #8DD3BB" padding="20px">
<Stack flexDirection="column" gap="15px">
    <AutoAwesomeIcon/>
    <Typography variant="p">
    Clean Hotel
    </Typography>
</Stack>
</Box>
</Stack>

<Box marginTop="15px" border="1px solid darkgrey">

</Box>
<Typography variant="h4" marginTop="15px">
Available Rooms
</Typography>


<Stack className="roomscards" flexDirection="row" justifyContent="space-between" >
    <Stack flexDirection="row" alignItems="center" gap="10px">

    <img style={{width:"50px"}} src={hotellistone} alt="" />
    <Typography>
    Superior room - 1 double bed or 2 twin beds
    </Typography>
    </Stack>

    <Stack flexDirection="row" alignItems="center" gap="10px">
<Typography variant="h5">
$240/night
</Typography>


<Box borderRadius="4px" sx={{background:"#8DD3BB",width:"150px",color:"black"}} >
    <Button sx={{color:"black"}}>
        Book now
    </Button>
</Box>
</Stack>


</Stack>


<Box marginTop="15px" border="1px solid darkgrey">

</Box>

<Stack className="roomscards" marginTop="10px" flexDirection="row" justifyContent="space-between" >
    <Stack flexDirection="row" alignItems="center" gap="10px">

    <img style={{width:"50px"}} src={hoteltwo} alt="" />
    <Typography>
    Superior room - 1 double bed or 2 twin beds
    </Typography>
    </Stack>

    <Stack flexDirection="row" alignItems="center" gap="10px">
<Typography variant="h5">
$240/night
</Typography>


<Box borderRadius="4px" sx={{background:"#8DD3BB",width:"150px",color:"black"}} >
    <Button sx={{color:"black"}}>
        Book now
    </Button>
</Box>
</Stack>


</Stack>
<Box marginTop="15px" border="1px solid darkgrey">

</Box>

<Stack className="roomscards" marginTop="10px" flexDirection="row" justifyContent="space-between" >
    <Stack flexDirection="row" alignItems="center" gap="10px">

    <img style={{width:"50px"}} src={hotelthree} alt="" />
    <Typography>
    Superior room - 1 double bed or 2 twin beds
    </Typography>
    </Stack>

    <Stack flexDirection="row" alignItems="center" gap="10px">
<Typography variant="h5">
$240/night
</Typography>


<Box borderRadius="4px" sx={{background:"#8DD3BB",width:"150px",color:"black"}} >
    <Button sx={{color:"black"}}>
        Book now
    </Button>
</Box>
</Stack>


</Stack>

<Box marginTop="35px" border="1px solid darkgrey">

</Box>

<Stack  className="mapsbutons" marginTop="10px" flexDirection="row" justifyContent="space-between">
    <Typography variant="h4">
    Location/Map
    </Typography>
    
<Box  borderRadius="2px" sx={{background:"#8DD3BB",width:"220px",color:"black"}} >
    <Button sx={{color:"black",fontSize:"15px"}}>
    View on google maps
    </Button>
</Box>
</Stack>


<Box  marginTop="15px">
    <img className="locationphotos"  src={loc} alt="" />
</Box>

<Box marginTop="35px" border="1px solid darkgrey">

</Box>



    </Container>
</Box>
      
<Footer />  
        
        
        
        
        
        </>
    )
}

export default Hotellistabout