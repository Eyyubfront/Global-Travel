
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
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PaswordNew=()=>{
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
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
Set a password
</Typography>
<Typography color="darkgray">
Your previous password has been reseted. Please set a new password for your account.
</Typography>

<Box>
    
<FormControl className="pasword" style={{width:"500px"}} variant="outlined">
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

<Box>
    
<FormControl className="pasword" style={{width:"500px"}} variant="outlined">
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


<Link to="/sucsesacaount" style={{textDecoration:"none",color:"black"}}>

<Button  className="contunilogin"  sx={{backgroundColor:"#8DD3BB",color:"black",width:"300px",textAlign:"center",marginTop:"10px"}}>
Set password
</Button>
</Link>




</Stack>

<Box marginTop="30px">
    <img style={{width:"70%"}} src={loginphoto} alt="" />
</Box>

</Stack>

        
        </>
    )
}
export default PaswordNew