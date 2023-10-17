import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import { Box, Button, MenuItem, Stack, TextField, Typography,Container,Grid } from "@mui/material";
import swap from "../../assets/swap.png";
import { Link } from 'react-router-dom'
import HeadNav from "../../Companents/HeadNav/index";
import Packing from "../../Companents/Packing";
import hotels from "../../assets/hotelsonephoto.jpg";
import PersonIcon from '@mui/icons-material/Person';
import travelone from "../../assets/travelone.png"
import traveltwo from "../../assets/traveltwo.png"
import travelthree from "../../assets/travelthree.png"
import travelfoor from "../../assets/travelfoor.png"
import Travel from "../../Companents/Travel";
import Footer from '../../Companents/Footer';

import cityone from "../../assets/cityone.png"
import citytwo from "../../assets/citytwo.png"
import citythree from "../../assets/citythree.png"
import cityfoor from "../../assets/cityfoor.png"

const curiens = [
  {
    id: 0,
    md: "Baku"
  },
  {
    id: 1,
    md: "Turkish"
  }
]

const travel = [
  {
    id: 0,
    img: travelone,
    tittle: "Istanbul-turkiye",
    text: "Flights-Hotels-Resorts"
    , many: "$ 700"
  },
  {
    id: 1,
    img: traveltwo,
    tittle: "Istanbul-turkiye",
    text: "Flights-Hotels-Resorts"
    , many: "$ 700"
  },
  {
    id: 2,
    img: travelthree,
    tittle: "Istanbul-turkiye",
    text: "Flights-Hotels-Resorts"
    , many: "$ 700"
  },
  {
    id: 3,
    img: travelfoor,
    tittle: "Istanbul-turkiye",
    text: "Flights-Hotels-Resorts"
    , many: "$700"
  }

]


const Hotelflow = () => {
  return (
    <>
      <Box>
<HeadNav/>



        <Box >
          <Stack position="absolute" color='white' zIndex="999" top="15%" left="10%" >

            <Typography className="maketravel" variant="h3" width="44%">
              Make your travel whishlist, we’ll do the rest
            </Typography>
            <Typography color="darkgray" variant="h5">
              Special offers to suit your plan
            </Typography>
          </Stack>
          <img style={{ width: "100%", height: "300px", position: "relative" }} src={hotels} alt="" />



          <Box className="landingsmalboxb" sx={{ backgroundColor: 'white' }} border="1px solid" position="absolute" top="50%" left="10%" width="67%" height="220px">


            <Typography variant="h4" marginLeft="30px">
              Where are you flying?
            </Typography>

            <Stack className="texttsfiledcolumn" padding="15px" marginTop="20px" flexDirection="row" gap="10px">


              <Box position="relative">
                <TextField
                  className="onestextsdfiled"


                  id="outlined-required"
                  label="From to"
                  defaultValue="Lahore - Karachi"
                >
                </TextField>



                <img style={{ position: "absolute", right: "20px", top: "20px" }} src={swap} alt="" />

              </Box>



              <TextField
                className="txtsdpbox"
                id="filled-select-currency"
                select
                label="Trip*"

                defaultValue="07 Nov 22 - 13 Nov 22"
                sx={{ width: "200px" }}
                variant="filled"
              >
                {curiens.map((option) => (
                  <MenuItem key={option.id} value={option.value}>
                    {option.md}
                  </MenuItem>
                ))}
              </TextField>


              <TextField
                required
                id="outlined-required"
                label="Depart-return"
                defaultValue="07 Nov 22 - 13 Nov 22"
              />


              <TextField
                required
                id="outlined-required"
                label="Passenger - Class"
                defaultValue="1 Passenger, Economy"
              />
            </Stack>

            <Stack className="adpromo" marginLeft="50%" marginTop="20px" flexDirection="row" alignItems="center" gap="10px">

              <Stack flexDirection="row" alignItems="center" gap="10px">

                <Typography>
                  <AddIcon />
                </Typography>
                <Typography>
                  Add Promo Code
                </Typography>
              </Stack>



              <Button sx={{ width: "200px", height: "50px", backgroundColor: "#8DD3BB" }} border="1px solid" border-radius="4px">
                <Stack color="black" flexDirection="row" gap="10px">
                  <SendIcon />


                  <Typography  >
                    Show Flights
                  </Typography>
                </Stack>

              </Button>


            </Stack>



          </Box>







        </Box>



      </Box>

      <Box className="recentphotos" marginLeft="30px" marginTop="15%">
        <Container>
          <Typography variant='h3'>
          Your recent searches
          </Typography>
          <Stack className='recentboxs' marginTop="10px" flexDirection="row" alignItems="center" gap="20px">

        <Stack flexDirection="row" alignItems="center" gap="10px">
          <img style={{width:"100px"}} src={cityone} alt="" />
          <Stack flexDirection="column" gap="10px">
          <Typography>
          Istanbul, Turkey
          </Typography>
          <Typography color="darkgray">
          325 places
          </Typography>

          </Stack>
        </Stack>

        <Stack flexDirection="row" alignItems="center" gap="10px">
          <img style={{width:"100px"}} src={citytwo} alt="" />
          <Stack flexDirection="column" gap="10px">
          <Typography>
          Istanbul, Turkey
          </Typography>
          <Typography color="darkgray">
          325 places
          </Typography>

          </Stack>
        </Stack>

        <Stack flexDirection="row" alignItems="center" gap="10px">
          <img style={{width:"100px"}} src={citythree} alt="" />
          <Stack flexDirection="column" gap="10px">
          <Typography>
          Istanbul, Turkey
          </Typography>
          <Typography color="darkgray">
          325 places
          </Typography>

          </Stack>
        </Stack>

        <Stack flexDirection="row" alignItems="center" gap="10px">
          <img style={{width:"100px"}} src={cityfoor} alt="" />
          <Stack flexDirection="column" gap="10px">
          <Typography>
          Istanbul, Turkey
          </Typography>
          <Typography color="darkgray">
          325 places
          </Typography>

          </Stack>
        </Stack>
          </Stack>

        </Container>
      </Box>

   


      <Box  marginTop="10%">
        <Container>

        <Stack margin="10px" flexDirection="row" gap="5%">




<Stack alignItems="center" flexDirection="row" gap="10px">
    



    <Stack flexDirection="column" gap="10px">

            <Typography className="faltext" variant="h4">
            Hotel list travel
            </Typography>

<Typography className="faltext" variant="h6">
Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
</Typography>
    </Stack>

</Stack>
< Link style={{textDecoration:"none"}} to="/hotellist">


            <Box className="letsgosz">
              <Button className='es'  sx={{ border: "1px solid #8DD3BB",width:"100px", color: "black" }}>
                See All
              </Button>
            </Box>
</Link>

            </Stack>

          <Stack className="travelcardsd  hotesltravels" flexDirection='row' marginTop="30px" gap="10px">


            {

              travel.map((travels) => {
                return <Grid key={travels.id}>
                  <Travel tittle={travels.tittle} text={travels.text} many={travels.many} src={travels.img} />
                </Grid>
              })
            }
          </Stack>


        </Container>
      </Box>



      <Packing  />


<Footer/>



    </>
  )
}

export default Hotelflow