import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"
import landingone from "../../assets/landingone.png"
import FlightIcon from '@mui/icons-material/Flight';
import BedIcon from '@mui/icons-material/Bed';
import logos from "../../assets/logosglob.png"
import AddIcon from '@mui/icons-material/Add';
import swap from "../../assets/swap.png"
import { Link } from 'react-router-dom'
import BurgerMenu from "../../Companents/Burgermenu";
import globlack from "../../assets/globblack.png"
import airplan from "../../assets/airplan.jpg"
import SendIcon from '@mui/icons-material/Send';
import Footer from "../../Companents/Footer";

import frame from "../../assets/frame.png"


import travelone from "../../assets/travelone.png"
import traveltwo from "../../assets/traveltwo.png"
import travelthree from "../../assets/travelthree.png"
import travelfoor from "../../assets/travelfoor.png"
import Travel from "../../Companents/Travel";
import Packing from "../../Companents/Packing";
import HeadNav from "../../Companents/HeadNav";


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



const FlightNow = () => {
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
          <img style={{ width: "100%", height: "300px", position: "relative" }} src={airplan} alt="" />



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




      <Box marginTop="14%">
        <Container>
          <Stack className="letsgobtnsds" flexDirection="row" justifyContent="space-between">


            <Stack className="placego" flexDirection="column">


              <Typography variant="h4">
                Let's go places together
              </Typography>

              <Typography variant="h7">
                Discover the latest offers and news and start planning your next trip with us.
              </Typography>
            </Stack>
< Link style={{color:"black",textDecoration:"none"}} to="/flightlist">


            <Box className="letsgos">
              <Button className="letsgoseal" sx={{ border: "1px solid #8DD3BB", color: "black" }}>
                See All
              </Button>
            </Box>
</Link>
          </Stack>






        </Container>
      </Box>

      <Box className="photosloctresp" marginTop="30px">
        <img style={{ width: '100%' }} src={frame} alt="" />
      </Box>





      <Box marginTop="14%">
        <Container>
          <Stack flexDirection="row" justifyContent="space-between">


            <Stack flexDirection="column">


              <Typography  variant="h4">
                Fall into travel
              </Typography>

              <Typography className="goingtexts" variant="h7">
                Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.
              </Typography>
            </Stack>

            < Link className="linkbtuon" style={{color:"black",textDecoration:"none"}} to="/flightlist">


<Box className="letsgos">
  <Button className="letsgoseal" sx={{ border: "1px solid #8DD3BB", color: "black" }}>
    See All
  </Button>
</Box>
</Link>
          </Stack>






        </Container>
      </Box>


      <Box>
        <Container>

          <Stack className="travelcardsd" flexDirection='row' marginTop="30px" gap="10px">


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



      <Box>
        <Container>
          <Packing />
        </Container>
      </Box>




      <Footer className="fots" />



    </>
  )
}

export default FlightNow