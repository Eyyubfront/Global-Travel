import { Stack, Typography ,Box} from "@mui/material"

const Perfecttrip=({src,tittle,text})=>{
    return(
        <>
        <Box       
   
        border-radius= "16px"
width="300px"
padding="20px"
boxShadow=" 0px 4px 16px 0px rgba(17, 34, 17, 0.05);" 
                margin="10px"   
        >

            <Stack flexWrap="wrap" flexDirection="row" alignItems="center" gap="10px">


<Box>
    <img src={src} alt="" />
</Box>

<Stack flexDirection="column" gap="10px"> 
<Typography sx={{fontFamily: "Montserrat"}}>
    {tittle}
</Typography>
<Typography>
    {text}
</Typography>

</Stack>
            </Stack>


        </Box>
        
        </>
    )
}

export default Perfecttrip