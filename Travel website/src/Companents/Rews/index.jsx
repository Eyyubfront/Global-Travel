
import { Box, Button, Stack, Typography } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';
const Rews = ({ tittle, text, src, name, Studio }) => {
    return (
        <>



            <Box
            className="rewsbox"
maxWidth="350px"
marginTop="40px"
padding="10px"
sx={{ boxShadow:"30px 22px 10px  #8DD3BB66"
}}
              
          

            >


                
                <Box>
                    <Stack>

                        <Typography variant="h5">

                            {tittle}
                        </Typography>

                        <Typography >

                            {text}
                        </Typography>

                       <Typography color="darkgray" marginLeft="70%">
                        View more
                       </Typography>

                        <Stack flexDirection="row" gap='6px'>
                            <StarIcon sx={{ color: "yellow" }} />
                            <StarIcon sx={{ color: "yellow" }} />
                            <StarIcon sx={{ color: "yellow" }} />
                            <StarIcon sx={{ color: "yellow" }} />

                        </Stack>

                        <Stack flexDirection="column" gap="10px">
                            <Typography>
                                {name}
                            </Typography>

                            <Typography>
                                {Studio}
                            </Typography>
                        </Stack>
                        <Box padding="20px">
                            <img style={{width:"300px"}} src={src} alt="" />
                        </Box>


                    </Stack>
                </Box>

            </Box>
     
        

        </>
    )
}

export default Rews