
import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import globlack from "../../assets/globblack.png"
import loginphoto from "../../assets/loginphoto.png"
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import { Link } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';
const Loginspage=()=>{
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
    return(
        <>








<Stack className="loginresp" flexDirection="row" gap="20%">


<Stack alignItems="center" margin="20px" flexDirection="column" gap="20px">

<img style={{width:"150px"}} src={globlack} alt="" />
<Typography  variant="h4">
Login
</Typography>
<Box    >

<TextField  style={{width:"270px"}} id="outlined-basic" label="Email" variant="outlined" />
</Box>

<Box>
    
<FormControl style={{width:"300px"}} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
</Box>
<Stack alignItems="center" flexDirection="row" gap="40px">

<Stack alignItems="center" flexDirection="row" gap="10px">
<Checkbox {...label} />
<Typography>
Remember me
</Typography>
</Stack>
<Link style={{textDecoration:"none"}} to="/pasword">

<Typography color="red">
Forgot Password
</Typography>
</Link>
</Stack>
<Link className="logclas" style={{textDecoration:"none"}} to="/sucsesacaount">

<Button  className="contunilogin"  sx={{backgroundColor:"#8DD3BB",color:"black",width:"300px",textAlign:"center",marginTop:"10px"}}>
Login
</Button>
</Link>
<Stack flexDirection="row" gap="3px">

<Typography >Don’t have an account? </Typography>
<Link to="/signs" style={{textDecoration:"none"}}>

<Typography color="red">Sign up</Typography>
</Link>
</Stack>
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

export default Loginspage