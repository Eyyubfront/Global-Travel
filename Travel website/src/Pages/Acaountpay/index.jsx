import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"
import HeadNav from "../../Companents/HeadNav"
import personback from "../../assets/personback.png"
import personjon from "../../assets/personjon.png"
import * as React from 'react';
import { Link } from "react-router-dom";
import visa from "../../assets/visa.png"
import Footer from "../../Companents/Footer";
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "30%",
    height:"54%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const AcaountPay=()=>{
    const [open, setOpen] = React.useState(false);
    const [close, setClose] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
              <Box>
            <HeadNav/>
        </Box>

        <Box>
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

        <Link style={{textDecoration:"none",color:"black"}} to="/myacount">
        
<Typography>
Account
</Typography>
        </Link>

   
<Box className="manylinz" borderRight='1px solid' height="48px" width='1px'>

</Box>
<Link style={{textDecoration:"none",color:"black"}} to="/acaounthistory"> 

<Typography>
History
</Typography>
</Link>
<Box className="manylinz" borderRight='1px solid' height="48px" width='1px'>

</Box>
<Stack flexDirection="column" alignItems="center" gap="14px">

<Link style={{textDecoration:"none",color:"black"}} to="/acaountpay">

<Typography  className="acountcolor">
Payment methods
</Typography>
</Link>
<Box className="manylin" width="250px" border="1px solid #8DD3BB">

</Box>
</Stack>
</Stack>
</Box>

<Box marginTop="15px" >
<Typography variant="h4">
Payment methods
</Typography>


<Box  padding="15px" borderRadius="24px" sx={{boxShadow:" 0px 4px 16px 0px rgba(17, 34, 17, 0.05)"}}>
<Stack className="paymentboxsd"  flexDirection="row" gap="20px">
<Box className="payboxone" padding="15px" borderRadius="8px" sx={{background:"#8DD3BB",color:"black",width:"30%"}}>
    <Stack flexDirection="row" alignItems="center" gap="15%">
    <Stack  flexDirection="column" gap="30px">
<Stack  flexDirection="column" gap="10px">
<Typography variant="h4">
    ********
</Typography>
<Typography variant="h4">
    4321
</Typography>
</Stack>
<Stack flexDirection="column" gap="10px">
<Typography>
Valid Thru
</Typography>
<Typography variant="h4">
02/27
</Typography>
</Stack>

    </Stack>
    <Box marginTop="30%" marginLeft="30px">
        <img style={{width:"80px"}} src={visa} alt="" />
    </Box>

    </Stack>
</Box>

<Button sx={{width:"100%",background:"white"}} onClick={handleOpen}>


<Box  width="100%" className="bordercustm" >
<Stack marginTop="15%" flexDirection="column" gap="10px" alignItems="center">
<Box padding="20px" textAlign="center" width="20px" border="1px solid #8DD3BB" borderRadius="50%">
    +
</Box>
<Typography>
    Add New Card
</Typography>

</Stack>
</Box>

</Button>

<Modal

        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalcards" sx={style}>
            <Stack justifyContent="center" flexDirection="row" gap="10%">
          <Typography  id="modal-modal-title" variant="h6" component="h2">
          Add a new Card
          </Typography>
     <Button sx={{color:"black"}}  onClick={() => setOpen(false)}>
        x
        </Button>

            </Stack>
            <TextField sx={{width:"100%",marginTop:"20px"}} id="outlined-basic" label="Card Number" variant="outlined" />
        
        <Stack flexDirection="row" gap="10px">
        <TextField sx={{width:"50%",marginTop:"20px"}} id="outlined-basic" label="Exp. Date" variant="outlined" />
        <TextField sx={{width:"50%",marginTop:"20px"}} id="outlined-basic" label="CvC" variant="outlined" />
        </Stack>
        <TextField sx={{width:"100%",marginTop:"20px"}} id="outlined-basic" label="Name on Card" variant="outlined" />
       <Stack  marginTop="10px" flexDirection="row" gap="10px" >
       <Checkbox {...label} />
       <Typography width="120%">
       Securely save my information for 1-click checkout
       </Typography>
       </Stack>
       <Button sx={{borderRadius:"4px",background:"#8DD3BB",color:"black",width:"100%"}}>
       Add Card
       </Button>
        </Box>
      </Modal>

</Stack>
</Box>


</Box>
  
            </Container>
        </Box>

        <Footer/>
        
        </>
    )
}

export default AcaountPay