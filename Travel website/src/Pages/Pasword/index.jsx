
import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"

import globlack from "../../assets/globblack.png"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import loginphoto from "../../assets/loginphoto.png"
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import { Link } from 'react-router-dom'
import InputAdornment from '@mui/material/InputAdornment';

const Pasword=()=>{
   
    
    return(
        <>
        
<Link to="/logins" style={{textDecoration:"none"}}>

<Stack margin="10px 20px" flexDirection="row" gap="15px">
<KeyboardBackspaceIcon/>
<Typography>
Back to login
</Typography>
</Stack>
</Link>
<Stack className="loginresp" flexDirection="row" gap="20%">


<Stack alignItems="center" margin="20px" flexDirection="column" gap="20px">



<img style={{width:"150px"}} src={globlack} alt="" />
<Typography  variant="h4">
Forgot your password?
</Typography>
<Box >

<TextField
className="emailttext"
          label="Email"
          id="outlined-start-adornment"
        style={{width:"270px"}}
          InputProps={{
            startAdornment: <InputAdornment ></InputAdornment>,
          }}
        />
</Box>



<Link className="submitbutons" to="/paswordnews" style={{textDecoration:"none"}}>

<Button  className="contunilogin"  sx={{backgroundColor:"#8DD3BB",color:"black",width:"300px",textAlign:"center",marginTop:"10px"}}>
Submit
</Button>
</Link>

<Stack justifyContent="center" marginTop="10px" alignItems="center" flexDirection="row" gap="10px">
<Box className="orlin"  width="200px" borderBottom="2px solid">

</Box>
<Typography>
Or
</Typography>
<Box className="orlin"  width="200px" borderBottom="2px solid">
  
</Box>
</Stack>

<Stack flexDirection="row" gap="10px" >
    <Box className="lognboxicon"  height="40px" textAlign="center" width="150px" border="1px solid #8DD3BB">
<FacebookIcon sx={{color:"blue"}}/>
    </Box>

    <Box  className="lognboxicon"  height="40px" textAlign="center" width="150px" border="1px solid #8DD3BB">
<YouTubeIcon sx={{color:"red"}}/>
    </Box>


    <Box  className="lognboxicon"  height="40px" textAlign="center" width="150px" border="1px solid #8DD3BB">
<WhatsAppIcon sx={{color:"green"}}/>
    </Box>
</Stack>



</Stack>

<Box marginTop="30px">
    <img style={{width:"70%"}} src={loginphoto} alt="" />
</Box>

</Stack>

        
        </>
    )
}

export default  Pasword