import { Box,Button,Stack, Typography } from "@mui/material"

const Travel=({tittle,many,text,src})=>{
console.log(src);

    return(
        <>

<Stack flexDirection="row">

        <Box className="travelsboxsd"
        
        sx={{backgroundImage:`url(${src})`,backgroundRepeat:"no-repeat",height:"360px",width:"300px",position:"relative"}}
        >


<Stack color="white" position="absolute" top="50%" marginLeft="30px"  gap="10px" flexDirection="row">

    <Stack  gap="10px" flexDirection="column">
<Typography   variant="h5">
{tittle}
</Typography>
<Typography>
{text}
</Typography>
    </Stack>

    <Typography className="travelmany" sx={{display:'flex',flexDirection:"row"}} variant="h5">
    {many}
    </Typography>

</Stack>


<Box>
    <Button sx={{border:"1px solid",backgroundColor:"#8DD3BB",color:"black",position:"absolute",top:"80%",left:"20%"}}>
    Book Fligh
    </Button>
</Box>


        </Box>
</Stack>
        
        
        </>
    )
}

export default Travel