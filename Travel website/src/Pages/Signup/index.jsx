import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import globlack from "../../assets/globblack.png"
import loginphoto from "../../assets/loginphoto.png"
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'
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
import Checkbox from '@mui/material/Checkbox';

const  Signup=()=>{
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
    return(
        <>








<Stack className="loginresp" flexDirection="row" gap="20%">

<Box marginLeft="20px" marginTop="30px">
    <img style={{width:"70%"}} src={loginphoto} alt="" />
</Box>

<Stack alignItems="center" margin="20px" flexDirection="column" gap="20px">

<img style={{width:"150px"}} src={globlack} alt="" />
<Typography  variant="h4">
Sign up
</Typography>
<Stack className="textscolumn" flexDirection="row" gap="30px">

<Box >

<TextField
          label="Email"
          id="outlined-start-adornment"
        style={{width:"270px"}}
          InputProps={{
            startAdornment: <InputAdornment position="start">john.doe@gmail.com</InputAdornment>,
          }}
        />
</Box>

<Box >

<TextField
          label="Email"
          id="outlined-start-adornment"
        style={{width:"270px"}}
          InputProps={{
            startAdornment: <InputAdornment position="start">john.doe@gmail.com</InputAdornment>,
          }}
        />
</Box>
</Stack>

<Stack className="textscolumn" marginTop="10px" flexDirection="row" gap="30px">

<Box >

<TextField
          label="Email"
          id="outlined-start-adornment"
        style={{width:"270px"}}
          InputProps={{
            startAdornment: <InputAdornment position="start">john.doe@gmail.com</InputAdornment>,
          }}
        />
</Box>

<Box >

<TextField
          label="Email"
          id="outlined-start-adornment"
        style={{width:"270px"}}
          InputProps={{
            startAdornment: <InputAdornment position="start">john.doe@gmail.com</InputAdornment>,
          }}
        />
</Box>
</Stack>


<Stack className="paswords" flexDirection="column" gap="10px">

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
</Stack>


<Stack className="agre" alignItems="center" flexDirection="row" gap="10px">
<Checkbox {...label} />
<Typography>
I agree to all the Terms and Privacy Policies
</Typography>
</Stack>


<Link className="creatbtun" style={{textDecoration:"none"}} to="/sucsesacaount">

<Button  className="contunilogin"  sx={{backgroundColor:"#8DD3BB",color:"black",width:"500px",textAlign:"center",marginTop:"10px"}}>
Create account
</Button>
</Link>
<Stack flexDirection="row" gap="3px">

<Typography >Already have an account? </Typography>
<Link to="/logins" style={{textDecoration:"none"}}>


<Typography color="red">Login</Typography>
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



</Stack>




        
        </>
    )
}
export default Signup