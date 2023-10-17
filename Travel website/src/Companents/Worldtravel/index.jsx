import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import flyemirates from "../../assets/emirates.png"
import fly from "../../assets/fly.png"
import qatar from "../../assets/qatar.png"
import etihad from "../../assets/etihad.png"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from 'react-router-dom'

const Worldtravel=()=>{
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
className="bos"
borderRadius= "12px"
width="116%"
padding="5px"
height="30%"
boxShadow= "0px 4px 16px 0px rgba(17, 34, 17, 0.05)"

>
    <Stack className="flyemirtexts" gap="5%" flexDirection="row" >
    <img height="100px" width="200px" src={flyemirates} alt="" />
 
    <Stack gap="2px" flexDirection="column">

    <Stack className="flyemirtexts" alignItems="center" flexDirection="row" gap="20%">
        <Stack  flexDirection="row" gap="10px">
            <Typography height="20px" borderRadius="10%" border="1px solid #8DD3BB" padding="10px">
                4.2
            </Typography>
            <Typography width="200px">
            Very Good 54 reviews
            </Typography>
        </Stack>

        <Stack   gap="10px" flexDirection="column">
<Typography width="100px" >
starting from
</Typography>

<Typography color="red">
$104
</Typography>
        </Stack>

    </Stack>

<Stack className="flyemirtexts" gap="20px"   alignItems="center" flexDirection="row">
<Checkbox sx={{width:"40px"}}/>
<Typography>
12:00 pm-01:28 pm
</Typography>

<Typography>
non stop
</Typography>
<Stack alignItems="center" flexDirection="column" gap="10px">

<Typography>
2h 28m
</Typography>

<Typography color="darkgray">
EWR-BNA
</Typography>
</Stack>
</Stack>

<Stack className="flyemirtexts" gap="20px"   alignItems="center" flexDirection="row">
<Checkbox sx={{width:"40px"}}/>
<Typography>
12:00 pm-01:28 pm
</Typography>

<Typography>
non stop
</Typography>
<Stack alignItems="center" flexDirection="column" gap="10px">

<Typography>
2h 28m
</Typography>

<Typography color="darkgray">
EWR-BNA
</Typography>
</Stack>
</Stack>

    <Box className="flylines"  borderTop="1px solid" height="100px" >

    </Box>


<Stack marginTop="-30px" flexDirection="row" gap="20px">

    <Box width="30px" height="30px" border="1px solid #8DD3BB">
<FavoriteBorderIcon className="favrthov"/>
    </Box>


<Link style={{textDecoration:"none"}} to="/flyemirates">

    <Button   sx={{backgroundColor:"#8DD3BB",width:"200px",color:"black",borderRadius:"4px"}}>
    View Deals
    </Button>
</Link>
</Stack>




    </Stack>




    </Stack>


</Box>


<Box
className="bos"
borderRadius= "12px"
width="116%"
padding="5px"
height="30%"
boxShadow= "0px 4px 16px 0px rgba(17, 34, 17, 0.05)"

>
    <Stack className="flyemirtexts" gap="2%" flexDirection="row" >
    <img height="100px" width="200px" src={fly} alt="" />
 
    <Stack gap="2px" flexDirection="column">

    <Stack className="flyemirtexts" alignItems="center" flexDirection="row" gap="20%">
        <Stack  flexDirection="row" gap="10px">
            <Typography height="20px" borderRadius="10%" border="1px solid #8DD3BB" padding="10px">
                4.2
            </Typography>
            <Typography width="200px">
            Very Good 54 reviews
            </Typography>
        </Stack>

        <Stack   gap="10px" flexDirection="column">
<Typography width="100px">
starting from
</Typography>

<Typography color="red">
$104
</Typography>
        </Stack>

    </Stack>

<Stack className="flyemirtexts" gap="20px"   alignItems="center" flexDirection="row">
<Checkbox sx={{width:"40px"}}/>
<Typography>
12:00 pm-01:28 pm
</Typography>

<Typography>
non stop
</Typography>
<Stack alignItems="center" flexDirection="column" gap="10px">

<Typography>
2h 28m
</Typography>

<Typography color="darkgray">
EWR-BNA
</Typography>
</Stack>
</Stack>

<Stack className="flyemirtexts" gap="20px"   alignItems="center" flexDirection="row">
<Checkbox sx={{width:"40px"}}/>
<Typography>
12:00 pm-01:28 pm
</Typography>

<Typography>
non stop
</Typography>
<Stack alignItems="center" flexDirection="column" gap="10px">

<Typography>
2h 28m
</Typography>

<Typography color="darkgray">
EWR-BNA
</Typography>
</Stack>
</Stack>

    <Box  borderTop="1px solid" height="100px" >

    </Box>


<Stack className="flyemirtexts" marginTop="-30px" flexDirection="row" gap="20px">

    <Box width="30px" height="30px" border="1px solid #8DD3BB">
<FavoriteBorderIcon className="favrthov"/>
    </Box>
    <Link style={{textDecoration:"none"}} to="/flyemirates">

    <Button   sx={{backgroundColor:"#8DD3BB",width:"200px",color:"black",borderRadius:"4px"}}>
    View Deals
    </Button>
</Link>
</Stack>




    </Stack>




    </Stack>


</Box>

<Box
className="bos"
borderRadius= "12px"
width="116%"
padding="5px"
height="30%"
boxShadow= "0px 4px 16px 0px rgba(17, 34, 17, 0.05)"

>
    <Stack className="flyemirtexts" gap="2%" flexDirection="row" >
    <img height="100px" width="200px" src={qatar} alt="" />
 
    <Stack gap="2px" flexDirection="column">

    <Stack className="flyemirtexts" alignItems="center" flexDirection="row" gap="20%">
        <Stack  flexDirection="row" gap="10px">
            <Typography height="20px" borderRadius="10%" border="1px solid #8DD3BB" padding="10px">
                4.2
            </Typography>
            <Typography width="200px">
            Very Good 54 reviews
            </Typography>
        </Stack>

        <Stack   gap="10px" flexDirection="column">
<Typography width="100px">
starting from
</Typography>

<Typography color="red">
$104
</Typography>
        </Stack>

    </Stack>

<Stack className="flyemirtexts" gap="20px"   alignItems="center" flexDirection="row">
<Checkbox sx={{width:"40px"}}/>
<Typography>
12:00 pm-01:28 pm
</Typography>

<Typography>
non stop
</Typography>
<Stack alignItems="center" flexDirection="column" gap="10px">

<Typography>
2h 28m
</Typography>

<Typography color="darkgray">
EWR-BNA
</Typography>
</Stack>
</Stack>

<Stack className="flyemirtexts" gap="20px"   alignItems="center" flexDirection="row">
<Checkbox sx={{width:"40px"}}/>
<Typography>
12:00 pm-01:28 pm
</Typography>

<Typography>
non stop
</Typography>
<Stack alignItems="center" flexDirection="column" gap="10px">

<Typography>
2h 28m
</Typography>

<Typography color="darkgray">
EWR-BNA
</Typography>
</Stack>
</Stack>

    <Box  borderTop="1px solid" height="100px" >

    </Box>


<Stack className="flyemirtexts" marginTop="-30px" flexDirection="row" gap="20px">

    <Box width="30px" height="30px" border="1px solid #8DD3BB">
<FavoriteBorderIcon className="favrthov"/>
    </Box>

    <Link style={{textDecoration:"none"}} to="/flyemirates">

<Button   sx={{backgroundColor:"#8DD3BB",width:"200px",color:"black",borderRadius:"4px"}}>
View Deals
</Button>
</Link>
</Stack>




    </Stack>




    </Stack>


</Box>


<Box
className="bos"
borderRadius= "12px"
width="116%"
padding="5px"
height="30%"
boxShadow= "0px 4px 16px 0px rgba(17, 34, 17, 0.05)"

>
    <Stack className="flyemirtexts" gap="2%" flexDirection="row" >
    <img height="100px" width="200px" src={etihad} alt="" />
 
    <Stack gap="2px" flexDirection="column">

    <Stack className="flyemirtexts" alignItems="center" flexDirection="row" gap="20%">
        <Stack  flexDirection="row" gap="10px">
            <Typography height="20px" borderRadius="10%" border="1px solid #8DD3BB" padding="10px">
                4.2
            </Typography>
            <Typography width="200px">
            Very Good 54 reviews
            </Typography>
        </Stack>

        <Stack   gap="10px" flexDirection="column">
<Typography width="100px">
starting from
</Typography>

<Typography color="red">
$104
</Typography>
        </Stack>

    </Stack>

<Stack className="flyemirtexts" gap="20px"   alignItems="center" flexDirection="row">
<Checkbox sx={{width:"40px"}}/>
<Typography>
12:00 pm-01:28 pm
</Typography>

<Typography>
non stop
</Typography>
<Stack alignItems="center" flexDirection="column" gap="10px">

<Typography>
2h 28m
</Typography>

<Typography color="darkgray">
EWR-BNA
</Typography>
</Stack>
</Stack>

<Stack className="flyemirtexts" gap="20px"   alignItems="center" flexDirection="row">
<Checkbox sx={{width:"40px"}}/>
<Typography>
12:00 pm-01:28 pm
</Typography>

<Typography>
non stop
</Typography>
<Stack alignItems="center" flexDirection="column" gap="10px">

<Typography>
2h 28m
</Typography>

<Typography color="darkgray">
EWR-BNA
</Typography>
</Stack>
</Stack>

    <Box  borderTop="1px solid" height="100px" >

    </Box>


<Stack className="flyemirtexts" marginTop="-30px" flexDirection="row" gap="20px">

    <Box width="30px" height="30px" border="1px solid #8DD3BB">
<FavoriteBorderIcon className="favrthov"/>
    </Box>

    <Link style={{textDecoration:"none"}} to="/flyemirates">

<Button   sx={{backgroundColor:"#8DD3BB",width:"200px",color:"black",borderRadius:"4px"}}>
View Deals
</Button>
</Link>
</Stack>




    </Stack>




    </Stack>


</Box>
<Link style={{textDecoration:"none"}} to="/flyemirates">

  
<Button sx={{borderRadius:"4px",background:"#121",color:"white",width:"100%"}}>
Show more results
</Button>
</Link>




</Stack>




















</Box>

        
        </>
    )
}

export default Worldtravel