import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"
import globlack from "../../assets/globblack.png"
import FlightIcon from '@mui/icons-material/Flight';
import BedIcon from '@mui/icons-material/Bed';
import { Link } from 'react-router-dom'
import BurgerMenu from "../../Companents/Burgermenu";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import swap from "../../assets/swap.png"

import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import flyemirates from "../../assets/emirates.png"
import fly from "../../assets/fly.png"
  
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const curiens = [
    {
      id: 0,
      md: "Baku"
    },
    {
      id: 1,
      md: "Turkish"
    }
  ]

import personjon from "../../assets/personjon.png"
import Slider from '@mui/material/Slider';

import qatar from "../../assets/qatar.png"
import etihad from "../../assets/etihad.png"
import Worldtravel from "../../Companents/Worldtravel";
import Footer from "../../Companents/Footer";
import HeadNav from "../../Companents/HeadNav";
import Hoteltravel from "../../Companents/Hotelworld";
import Hotelworld from "../../Companents/Hotelworld";



const Hotellist=()=>{
    return(
        <>
        
       <HeadNav/>




<Box className="landingsmalboxc" sx={{ backgroundColor: 'white' }} boxShadow="0px 4px 16px 0px rgba(17, 34, 17, 0.05)"  position="absolute" top="20%" left="10%" width="67%" height="130px">



<Stack className="texttsfiledcolumna" padding="15px" marginTop="20px" flexDirection="row" gap="10px">


<Box position="relative">
<TextField
className="onestextsdfiled"


id="outlined-required"
label="From to"
defaultValue="Lahore - Karachi"
>
</TextField>



<img style={{ position: "absolute", right: "20px", top: "20px" }} src={swap} alt="" />

</Box>



<TextField
className="txtsdpbox"
id="filled-select-currency"
select
label="Trip*"

defaultValue="07 Nov 22 - 13 Nov 22"
sx={{ width: "200px" }}
variant="filled"
>
{curiens.map((option) => (
<MenuItem key={option.id} value={option.value}>
{option.md}
</MenuItem>
))}
</TextField>


<TextField
required
id="outlined-required"
label="Depart-return"
defaultValue="07 Nov 22 - 13 Nov 22"
/>


<TextField
required
id="outlined-required"
label="Passenger - Class"
defaultValue="1 Passenger, Economy"
/>


<Box sx={{backgroundColor:"#8DD3BB"}} border="1px solid" width="70x" padding="15px" height="24px">
<SearchIcon/>

</Box>




</Stack>





</Box>







<Stack className="listthrebox" marginTop="15%" flexDirection="row" gap="10%">


<Box marginLeft="30px" >
<Stack gap="14px">


<Typography variant="h4">
Filters
</Typography>

<Typography>
Price
</Typography>

<Slider sx={{width:"200px",color:"#8DD3BB"}} defaultValue={20} aria-label="Default" valueLabelDisplay="auto" />

<Box border="1px solid #121" width="200px">

</Box>




<Typography>
Rating
</Typography>

<Stack gap="10px" flexDirection="row">
<Box border="1px solid #8DD3BB" borderRadius="10%" padding="10px">
1+
</Box>

<Box border="1px solid #8DD3BB" borderRadius="10%" padding="10px">
2+
</Box>

<Box border="1px solid #8DD3BB" borderRadius="10%" padding="10px">
3+
</Box>

<Box border="1px solid #8DD3BB" borderRadius="10%" padding="10px">
4+
</Box>

</Stack>
<Box border="1px solid #121" width="200px">

</Box>

<Stack flexDirection="column">
<Typography>
Freebies
</Typography>

<Stack alignItems="center" flexDirection="row" gap="10px">
<Checkbox sx={{width:"40px"}} {...label} defaultChecked />
<Typography>
Free breakfast
</Typography>
</Stack>

<Stack alignItems="center" flexDirection="row" gap="10px">
<Checkbox sx={{width:"40px"}} {...label} defaultChecked />
<Typography>
Free parking



</Typography>
</Stack>


<Stack alignItems="center" flexDirection="row" gap="10px">
<Checkbox sx={{width:"40px"}} {...label} defaultChecked />
<Typography>
Free internet
</Typography>
</Stack>



<Stack alignItems="center" flexDirection="row" gap="10px">
<Checkbox sx={{width:"40px"}} {...label} defaultChecked />
<Typography>
Free airport shuttle
</Typography>
</Stack>


</Stack>


<Box border="1px solid #121" width="200px">

</Box>


<Stack flexDirection="column">
<Typography>
Trips
</Typography>

<Stack alignItems="center" flexDirection="row" gap="10px">
<Checkbox sx={{width:"40px"}} {...label} defaultChecked />
<Typography>
Round trip
</Typography>
</Stack>

<Stack alignItems="center" flexDirection="row" gap="10px">
<Checkbox sx={{width:"40px"}} {...label} defaultChecked />
<Typography>
On Way
</Typography>
</Stack>


<Stack alignItems="center" flexDirection="row" gap="10px">
<Checkbox sx={{width:"40px"}} {...label} defaultChecked />
<Typography>
Multi-City
</Typography>
</Stack>



<Stack alignItems="center" flexDirection="row" gap="10px">
<Checkbox sx={{width:"40px"}} {...label} defaultChecked />
<Typography>
My Dates Are Flexible
</Typography>
</Stack>


</Stack>

</Stack>

</Box>


<Box className="listslines" border="1px solid"  height="800px">

</Box>

<Hotelworld/>




</Stack>



<Footer/>

        
        </>
    )
}

export default Hotellist