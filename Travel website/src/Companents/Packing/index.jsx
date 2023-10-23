
import { Box, Container, Stack, Typography,Button } from "@mui/material"
import { Link } from 'react-router-dom'
import packone from "../../assets/packone.png"
import packtwo from "../../assets/packtwo.png"
import packthree from "../../assets/packthree.png"
import packfoor from "../../assets/packfoor.png"
const Packing=()=>{
    return(
        <>
        <Box className="packinghotel" marginTop="30px 20px" >

            <Stack margin="10px" flexDirection="row" gap="5%">




<Stack alignItems="center" flexDirection="row" gap="10px">
    



    <Stack flexDirection="column" gap="10px">

            <Typography className="faltext" variant="h4">
            Fall into travel
            </Typography>

<Typography className="faltext" variant="h6">
Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
</Typography>
    </Stack>

</Stack>
< Link className="linkbtuonsz" style={{color:"black",textDecoration:"none"}} to="/flightlist">


            <Box className="letsgosb">
              <Button  sx={{ border: "1px solid #8DD3BB",width:"100px", color: "black" }}>
                See All
              </Button>
            </Box>
</Link>

            </Stack>



<Stack className="packingsboxescolmn" marginTop="20px" marginLeft="20px" flexDirection="row" gap="2%">



<Box
className="backpaingcsboxs"
sx={{backgroundColor:"#8DD3BB",borderRadius:"20px",padding:"20px",width:"30%"}}
>

<Stack flexDirection="row"gap="35%">

<Typography width='200px' variant="h4">
Backpacking Sri Lanka
            </Typography>


            <Box 
            className="dolarssevens"
           sx={{ borderRadius:"8px",
           background: "white",width:"60px",textAlign:"center"}}
            
            >
                <Stack flexDirection="column"> 
<Typography>
From
</Typography>
<Typography variant="h5">
$700
</Typography>
                </Stack>
            </Box>
</Stack>




            <Typography width="70%">
            Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.
            </Typography>


            <Box   sx={{backgroundColor:"white",marginTop:"30px",borderRadius:"4px",textAlign:"center",width:"100%",height:"40px",color:"black"}}>
            Book Flight
            </Box>


</Box>



<Stack className="packingsboxescolmn" flexDirection="row" gap="2%">


<Stack className="boxwidt" flexDirection="column" gap="10px">
    <img src={packone} alt="" />
    <img src={packtwo} alt="" />
</Stack>


<Stack className="boxwidt" flexDirection="column" gap="10px">
    <img src={packthree} alt="" />
    <img src={packfoor} alt="" />
</Stack>
</Stack>

</Stack>














        </Box>



        
        
        
        </>
    )
}


export default Packing