import { Stack, Typography,Button } from "@mui/material"
import loginphoto from "../../assets/loginphoto.png"
import { Link } from "react-router-dom"

const SucsesAcaunt=()=>{
    return(
        <>

        <Stack className="sucses" gap="20px" marginTop="30px" justifyContent="center" flexDirection="row" alignItems="center">
            <img style={{width:"300px"}} src={loginphoto} alt="" />

<Stack className="sucsesbtn" flexDirection="column" gap="10px">

            <Typography fontFamily=" TradeGothic LT Extended" color="green" variant="h3">
                Succsess Acaount
            </Typography>
<Link  style={{textDecoration:"none",width:"200px",textAlign:"center",border:"1px solid",background:"#8DD3BB",color:"white"}} to="/flightnow">

            <Button sx={{color:"white"}}>
                Next
            </Button>
</Link>
</Stack>
        </Stack>
        
        </>
    )
}
export default SucsesAcaunt