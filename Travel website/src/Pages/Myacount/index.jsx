import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"
import HeadNav from "../../Companents/HeadNav"
import personback from "../../assets/personback.png"
import personjon from "../../assets/personjon.png"
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Footer from "../../Companents/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const changeData = (question,state,setState) => {
    let newData = prompt(question,state)
    setState(newData)
}
const Myacaount =()=>{
    const [name,setName] = useState('John Doe');
    const [email,setEmail] = useState('JohnDoe@gmail.com');
    const [pasword,setpasword] = useState('********');
    const [number,setnumber] = useState('+1 000-000-0000')
    const [adres,setadres] = useState('St 32 main downtown, Los Angeles, California, USA')
    const [birth,setbirth] = useState('01-01-1992')
    return(
        <>
        <Box>
            <HeadNav/>
        </Box>

<Box marginTop="15px">
    <Container>
        <Stack>
        <Box className="personjonphot" sx={{position:"absolute",zIndex:999,left:"50%",top:"68%"}}>
            <img  style={{height:"92px"}} src={personjon} alt="" />
        </Box>
<Typography className="jonabouttexts" variant="h4" sx={{position:"absolute",zIndex:999,fontFamily:"Montserrat",left:"48%",top:"84%"}}>
John Doe.
</Typography>
<Typography className="jonabouttextsz" sx={{position:"absolute",zIndex:999,fontFamily:"Montserrat",left:"48%",top:"90%"}}>
john.doe@gmail.com
</Typography>
        </Stack>
        <img className="persondback" style={{position:"relative"}} src={personback} alt="" />



<Box  className="manytripsbox" marginTop="15%" borderRadius='12px ' padding="13px" width="100%" sx={{boxShadow:"0px 4px 16px 0px rgba(17, 34, 17, 0.05)"}}>
<Stack className="manytrips" justifyContent="space-between" flexDirection="row" alignItems="center">
    <Stack flexDirection="column" gap="20px">
<Typography className="acountcolor">
Account
</Typography>
<Box className="manylin" width="250px" border="1px solid #8DD3BB">

</Box>
    </Stack>
<Box className="manylinz" borderRight='1px solid' height="48px" width='1px'>

</Box>
<Link style={{textDecoration:"none",color:"black"}} to="/acaounthistory">


<Typography>
History
</Typography>
</Link>
<Box className="manylinz" borderRight='1px solid' height="48px" width='1px'>

</Box>
<Link style={{textDecoration:"none",color:"black"}} to="/acaountpay"> 
<Typography>
Payment methods
</Typography>
</Link>
</Stack>
</Box>

<Typography className="acountcent" variant="h4" marginTop="15px">
    Accaount
</Typography>

<Box padding="20px" borderRadius="16px" sx={{boxShadow:"0px 4px 16px 0px rgba(17, 34, 17, 0.05)"}}>
<Stack className="acaountchagng"  flexDirection="row" justifyContent="space-between" alignItems="center">
    <Stack flexDirection="column" gap="10px">
<Typography variant="p" color="darkgray">
Name
</Typography>
<Typography variant="h5">
{name}
</Typography>
    </Stack>
    <Stack width="100px" padding="15px" borderRadius="4px" border="1px solid #8DD3BB" alignItems="center" flexDirection="row" gap="10px" style={{cursor:'pointer'}} 
        onClick = {() => {
            changeData('adinizi deyisin...',name,setName)
        }}
    
    >

<Box >
    <BorderColorIcon/> 
</Box>
<Typography>Change</Typography>
    </Stack>



</Stack>

<Stack className="acaountchagng"  marginTop="10px" flexDirection="row" justifyContent="space-between" alignItems="center">
    <Stack flexDirection="column" gap="10px">
<Typography variant="p" color="darkgray">
Email
</Typography>
<Typography variant="h5">
        {email}
</Typography>
    </Stack>
    <Stack width="100px" padding="15px" borderRadius="4px" border="1px solid #8DD3BB" alignItems="center" flexDirection="row" gap="10px" style={{cursor:'pointer'}}    onClick = {() => {
            changeData('emaili deyisin...',email,setEmail)
        }}>

<Box>
    <BorderColorIcon/> 
</Box>
<Typography>Change</Typography>
    </Stack>



</Stack>

<Stack className="acaountchagng"  marginTop="10px" flexDirection="row" justifyContent="space-between" alignItems="center">
    <Stack flexDirection="column" gap="10px">
<Typography variant="p" color="darkgray">
{pasword}
</Typography>
<Typography variant="h5">
********
</Typography>
    </Stack>
    <Stack width="100px" padding="15px" borderRadius="4px" border="1px solid #8DD3BB" alignItems="center" flexDirection="row" gap="10px"
    sx={{cursor:"pointer"}}
     onClick = {() => {
        changeData('pasword new...',pasword,setpasword)
    }}
    >

<Box  >
    <BorderColorIcon/> 
</Box>
<Typography>Change</Typography>
    </Stack>



</Stack>

<Stack  className="acaountchagng" marginTop="10px" flexDirection="row" justifyContent="space-between" alignItems="center">
    <Stack flexDirection="column" gap="10px">
<Typography variant="p" color="darkgray">
Phone number
</Typography>
<Typography variant="h5">
{number}
</Typography>
    </Stack>
    <Stack width="100px" padding="15px" borderRadius="4px" border="1px solid #8DD3BB" alignItems="center" flexDirection="row" gap="10px"
        sx={{cursor:"pointer"}}
        onClick = {() => {
           changeData('number new...',number,setnumber)
       }}
    >

<Box  >
    <BorderColorIcon/> 
</Box>
<Typography>Change</Typography>
    </Stack>



</Stack>

<Stack className="acaountchagng" marginTop="10px" flexDirection="row" justifyContent="space-between" alignItems="center">
    <Stack flexDirection="column" gap="10px">
<Typography variant="p" color="darkgray">
Addres
</Typography>
<Typography variant="h5">
{adres}
</Typography>
    </Stack>
    <Stack width="100px" padding="15px" borderRadius="4px" border="1px solid #8DD3BB" alignItems="center" flexDirection="row" gap="10px"
     sx={{cursor:"pointer"}}
     onClick = {() => {
        changeData('number new...',adres,setadres)
    }}
    >

<Box  >
    <BorderColorIcon/> 
</Box>
<Typography>Change</Typography>
    </Stack>



</Stack>

<Stack className="acaountchagng" marginTop="10px" flexDirection="row" justifyContent="space-between" alignItems="center">
    <Stack flexDirection="column" gap="10px">
<Typography variant="p" color="darkgray">
Date of birth
</Typography>
<Typography variant="h5">
{birth}
</Typography>
    </Stack>
    <Stack width="100px" padding="15px" borderRadius="4px" border="1px solid #8DD3BB" alignItems="center" flexDirection="row" gap="10px"    sx={{cursor:"pointer"}}
    style={{cursor:"pointer"}}
     onClick = {() => {
        changeData('number new...',birth,setbirth)
    }}
    >

<Box  >
    <BorderColorIcon/> 
</Box>
<Typography>Change</Typography>
    </Stack>



</Stack>
</Box>



    </Container>

</Box>

<Footer/>

        
        </>
    )
}
export default Myacaount