import { Box,Button,Stack,TextField,Typography ,MenuItem, Container,Grid} from "@mui/material"
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import logostwo from "../../assets/Group.png"
import emoji from "../../assets/emoji.png"


const Footer=()=>{
    return(
        <>
        
<Box
className="flightnows"
marginTop="10%"
sx={{background:"#8DD3BB",padding:"3%"}}
>
<Box


className="foterboxone"
marginTop="-70px"
marginLeft="100px"
borderRadius= "20px"
sx={{backgroundColor:"#CDEAE1",padding:"10px",width:"70%",height:"250px"}}

/* Cards Shadow */
boxShadow= 
"0px 4px 16px 0px rgba(17, 34, 17, 0.05)"





>
<Stack className="boxsdonescolumn" gap='10%' flexDirection="row">

  <Stack flexDirection="column" gap="10px">


  <Stack>
    <Typography width="130px" variant="h4" sx={{fontFamily: "TradeGothic LT Extended"}}>
    Subscribe Newsletter
    </Typography>
  </Stack>


  <Stack flexDirection="column" gap="10px">
    <Typography variant="h6">
    The Travel
    </Typography>
    <Typography>
    Get inspired! Receive travel discounts, tips and behind the scenes stories.
    </Typography>
  </Stack>

  <Stack flexDirection="row" alignItems="center" gap="5px">

  <TextField sx={{width:"300px"}} id="outlined-basic" label="Your email adres" variant="outlined" />
<Button
border-radius= 
"4px"

sx={{backgroundColor:"#121",width:"120px",height:"50px",color:"white"}}
>
Subscribe
</Button>

  </Stack>
  </Stack>
  <Box>
    <img className="emojisd" style={{width:"300px"}} src={emoji} alt="" />
  </Box>
</Stack>




</Box>

<Stack className="footerfinis" marginTop="40px" flexDirection="row" justifyContent="space-between">


<Stack flexDirection="column" gap="10px">
  <img style={{width:'100px'}} src={logostwo} alt="" />

<Stack flexDirection="row" gap="10px">
<YouTubeIcon/>
<WhatsAppIcon/>
</Stack>



</Stack>

<Stack flexDirection="column" gap="10px">
<Typography variant="h6">
Our Destinations
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Canada
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Alaksa
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
France
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Iceland
</Typography>

</Stack>


<Stack flexDirection="column" gap="10px">
<Typography variant="h6">
Our Activities
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Northern Lights
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Cruising & sailing
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Multi-activities
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Kayaing
</Typography>

</Stack>


<Stack flexDirection="column" gap="10px">
<Typography variant="h6">
Travel Blogs
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Bali Travel Guide
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Sri Lanks Travel Guide
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Peru Travel Guide
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Bali Travel Guide
</Typography>

</Stack>


<Stack flexDirection="column" gap="10px">
<Typography variant="h6">
About Us
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Our Story
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Work with us
</Typography>

</Stack>


<Stack flexDirection="column" gap="10px">
<Typography variant="h6">
Contact Us
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Our Story
</Typography>
<Typography sx={{color:"var(--Blackish-Green, #121)"}}>
Work with us
</Typography>

</Stack>
</Stack>



</Box>

        
        </>
    )
}

export default Footer