import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import flyemirates from "../../assets/emirates.png"
import fly from "../../assets/fly.png"
import qatar from "../../assets/qatar.png"
import etihad from "../../assets/etihad.png"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from 'react-router-dom'
import hotellistone from "../../assets/hotellistone.png"
import hoteltwo from "../../assets/hoteltwo.png"
import hotelthree from "../../assets/hotelthree.png"
import hotelfor from "../../assets/hotelfor.png"
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const Hotelworld=()=>{
    return(
        <>
<Box>






<Stack gap="20px" flexDirection="column">


<Box className="chaeapboxs" padding="10px" width="100%" borderRight="13px" boxShadow="0px 4px 16px 0px rgba(37, 34, 17, 0.05)">
    <Stack className="worldboxsone" justifyContent="space-between" flexDirection="row" gap="15px">

    <Stack flexDirection="column">
<Typography>
Cheapest
</Typography>
<Typography color="darkgray">
$99.2h 18m
</Typography>
    </Stack>

    <Box className="boxsoneslines"  height="44px" border="1px solid darkgray">

    </Box>

    <Stack flexDirection="column">
<Typography>
Best
</Typography>
<Typography color="darkgray">
$99.2h 18m
</Typography>
    </Stack>
    <Box  className="boxsoneslines"  height="44px" border="1px solid darkgray">

    </Box>


    <Stack flexDirection="column">
<Typography>
Quickest
</Typography>
<Typography color="darkgray">
$99.2h 18m
</Typography>
    </Stack>
    </Stack>


</Box>

<Stack className="sortbytxt" flexDirection="row" gap="30%" >
    <Stack flexDirection="row" gap="3px">

<Typography>
Showing 4 of 
</Typography>
<Typography color="red">
 257 places
</Typography>
    </Stack>

    <Stack flexDirection="row" gap="6px">
    Sort by Recommended <ArrowDownwardIcon/>
    </Stack >
</Stack>

<Box
className="hotelwordboxes"
borderRadius= "12px"
width="116%"
padding="5px"
height="30%"
boxShadow= "0px 4px 16px 0px rgba(17, 34, 17, 0.05)"

>
    <Stack className="flyemirtexts" gap="5%" flexDirection="row" >
    <img height="100%"src={hotellistone} alt="" />
 
    <Stack className="listsalign" gap="2px" flexDirection="column">

    <Stack className="flyemirtexts" alignItems="center" flexDirection="row" gap="20%">
      <Typography variant="h5">
        CVK Park Bosphurs Hotel
      </Typography>
      <Typography variant="h5" color="red">
      $240/night
      </Typography>

    </Stack>

    <Stack marginTop='10px' alignItems="center" flexDirection="row" gap="10px">
        <AddLocationAltIcon className="adloctn"/>
<Typography>
Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
</Typography>
    </Stack>

    <Stack  marginTop="20px" alignItems="center" flexDirection="row" gap="10px">
        <Stack alignItems="center" flexDirection="row" gap="10px" style={{color:"orange"}}>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
        </Stack>
        <Typography>
        5 Star Hotel
        </Typography>
    </Stack>



    <Box marginTop="30px" className="flylines"  borderTop="1px solid" height="100px" >

    </Box>


<Stack marginTop="-30px" flexDirection="row" gap="20px">

    <Box width="30px" height="30px" border="1px solid #8DD3BB">
<FavoriteBorderIcon className="favrthov"/>
    </Box>


<Link style={{textDecoration:"none"}} to="/hotellistabout">

    <Button   sx={{backgroundColor:"#8DD3BB",width:"200px",color:"black",borderRadius:"4px"}}>
    View Deals
    </Button>
</Link>
</Stack>




    </Stack>




    </Stack>


</Box>


<Box
className="hotelwordboxes"
borderRadius= "12px"
width="116%"
padding="5px"
height="30%"
boxShadow= "0px 4px 16px 0px rgba(17, 34, 17, 0.05)"

>
    <Stack className="flyemirtexts" gap="5%" flexDirection="row" >
    <img height="100%"src={hoteltwo} alt="" />
 
    <Stack className="listsalign" gap="2px" flexDirection="column">

    <Stack className="flyemirtexts" alignItems="center" flexDirection="row" gap="20%">
      <Typography variant="h5">
        CVK Park Bosphurs Hotel
      </Typography>
      <Typography variant="h5" color="red">
      $240/night
      </Typography>

    </Stack>

    <Stack marginTop='10px' alignItems="center" flexDirection="row" gap="10px">
        <AddLocationAltIcon className="adloctn"/>
<Typography>
Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
</Typography>
    </Stack>

    <Stack  marginTop="20px" alignItems="center" flexDirection="row" gap="10px">
        <Stack alignItems="center" flexDirection="row" gap="10px" style={{color:"orange"}}>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
        </Stack>
        <Typography>
        5 Star Hotel
        </Typography>
    </Stack>



    <Box marginTop="30px" className="flylines"  borderTop="1px solid" height="100px" >

    </Box>


<Stack marginTop="-30px" flexDirection="row" gap="20px">

    <Box width="30px" height="30px" border="1px solid #8DD3BB">
<FavoriteBorderIcon className="favrthov"/>
    </Box>


<Link style={{textDecoration:"none"}} to="/hotellistabout">

    <Button   sx={{backgroundColor:"#8DD3BB",width:"200px",color:"black",borderRadius:"4px"}}>
    View Deals
    </Button>
</Link>
</Stack>




    </Stack>




    </Stack>


</Box>
<Box
className="hotelwordboxes"
borderRadius= "12px"
width="116%"
padding="5px"
height="30%"
boxShadow= "0px 4px 16px 0px rgba(17, 34, 17, 0.05)"

>
    <Stack className="flyemirtexts" gap="5%" flexDirection="row" >
    <img height="100%"src={hotelthree} alt="" />
 
    <Stack  className="listsalign" gap="2px" flexDirection="column">

    <Stack className="flyemirtexts" alignItems="center" flexDirection="row" gap="20%">
      <Typography variant="h5">
        CVK Park Bosphurs Hotel
      </Typography>
      <Typography variant="h5" color="red">
      $240/night
      </Typography>

    </Stack>

    <Stack marginTop='10px' alignItems="center" flexDirection="row" gap="10px">
        <AddLocationAltIcon className="adloctn"/>
<Typography>
Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
</Typography>
    </Stack>

    <Stack  marginTop="20px" alignItems="center" flexDirection="row" gap="10px">
        <Stack alignItems="center" flexDirection="row" gap="10px" style={{color:"orange"}}>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
        </Stack>
        <Typography>
        5 Star Hotel
        </Typography>
    </Stack>



    <Box marginTop="30px" className="flylines"  borderTop="1px solid" height="100px" >

    </Box>


<Stack marginTop="-30px" flexDirection="row" gap="20px">

    <Box width="30px" height="30px" border="1px solid #8DD3BB">
<FavoriteBorderIcon className="favrthov"/>
    </Box>


<Link style={{textDecoration:"none"}} to="/hotellistabout">

    <Button   sx={{backgroundColor:"#8DD3BB",width:"200px",color:"black",borderRadius:"4px"}}>
    View Deals
    </Button>
</Link>
</Stack>




    </Stack>




    </Stack>


</Box>
<Box
className="hotelwordboxes"
borderRadius= "12px"
width="116%"
padding="5px"
height="30%"
boxShadow= "0px 4px 16px 0px rgba(17, 34, 17, 0.05)"

>
    <Stack className="flyemirtexts" gap="5%" flexDirection="row" >
    <img height="100%"src={hotelfor} alt="" />
 
    <Stack className="listsalign" gap="2px" flexDirection="column">

    <Stack className="flyemirtexts" alignItems="center" flexDirection="row" gap="20%">
      <Typography variant="h5">
        CVK Park Bosphurs Hotel
      </Typography>
      <Typography variant="h5" color="red">
      $240/night
      </Typography>

    </Stack>

    <Stack marginTop='10px' alignItems="center" flexDirection="row" gap="10px">
        <AddLocationAltIcon className="adloctn"/>
<Typography>
Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
</Typography>
    </Stack>

    <Stack  marginTop="20px" alignItems="center" flexDirection="row" gap="10px">
        <Stack alignItems="center" flexDirection="row" gap="10px" style={{color:"orange"}}>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
        </Stack>
        <Typography>
        5 Star Hotel
        </Typography>
    </Stack>



    <Box marginTop="30px" className="flylines"  borderTop="1px solid" height="100px" >

    </Box>


<Stack marginTop="-30px" flexDirection="row" gap="20px">

    <Box width="30px" height="30px" border="1px solid #8DD3BB">
<FavoriteBorderIcon className="favrthov"/>
    </Box>


<Link style={{textDecoration:"none"}} to="/hotellistabout">

    <Button   sx={{backgroundColor:"#8DD3BB",width:"200px",color:"black",borderRadius:"4px"}}>
    View Deals
    </Button>
</Link>
</Stack>




    </Stack>




    </Stack>


</Box>
<Link style={{textDecoration:"none"}} to="/hotellistabout">

  
<Button sx={{borderRadius:"4px",background:"#121",color:"white",width:"100%"}}>
Show more results
</Button>
</Link>




</Stack>




















</Box>

        
        </>
    )
}

export default Hotelworld