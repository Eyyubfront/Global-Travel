import { Box, Button, Stack, TextField, Typography, MenuItem, Container, Grid } from "@mui/material"
import landingone from "../../assets/landingone.png"
import FlightIcon from '@mui/icons-material/Flight';
import BedIcon from '@mui/icons-material/Bed';
import logos from "../../assets/logosglob.png"
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import swap from "../../assets/swap.png"
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


import hotelsone from "../../assets/hotelsone.png"
import hotelstwo from "../../assets/hotelstwo.png"
import SendIcon from '@mui/icons-material/Send';

import cityone from "../../assets/cityone.png"
import citytwo from "../../assets/citytwo.png"
import citythree from "../../assets/citythree.png"
import cityfoor from "../../assets/cityfoor.png"
import citysix from "../../assets/citysix.png"
import cityseven from "../../assets/cityseven.png"
import cityeight from "../../assets/cityeight.png"
import cityteen from "../../assets/cityteen.png"
import cityeleven from "../../assets/cityeleven.png"

import Perfecttrip from "../../Companents/Perfectrip";



import rewone from "../../assets/rewone.png"
import rewtwo from "../../assets/rewtwo.png"
import rewthree from "../../assets/rewthree.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Rews from "../../Companents/Rews/index";

import emoji from "../../assets/emoji.png"

import logostwo from "../../assets/Group.png"
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Footer from "../../Companents/Footer";
import BurgerMenu from "../../Companents/Burgermenu";
import { redirect } from "react-router";
const city = [
  {
    id: 0,
    img: cityone,
    tittle: "Istanbul-turkiye",
    text: "Flights-Hotels-Resorts"
  },
  {
    id: 1,
    img: citytwo,
    tittle: "Istanbul-turkiye",
    text: "Flights-Hotels-Resorts"
  },
  {
    id: 2,
    img: citythree,
    tittle: "Istanbul-turkiye",
    text: "Flights-Hotels-Resorts"
  },
  {
    id: 3,
    img: cityfoor,
    tittle: "Istanbul-turkiye",
    text: "Flights-Hotels-Resorts"
  },
  {
    id: 4,
    img: citysix,
    tittle: "Istanbul-turkiye",
    text: "Flights-Hotels-Resorts"
  },
  {
    id: 5,
    img: cityseven,
    tittle: "Istanbul-turkiye",
    text: "Flights-Hotels-Resorts"
  },
  {
    id: 6,
    img: cityeight,
    tittle: "Istanbul-turkiye",
    text: "Flights-Hotels-Resorts"
  },
  {
    id: 7,
    img: cityteen,
    tittle: "Istanbul-turkiye",
    text: "Flights-Hotels-Resorts"
  },
  {
    id: 8,
    img: cityeleven,
    tittle: "Istanbul-turkiye",
    text: "Flights-Hotels-Resorts"
  }

]

const rewies = [
  {
    id: 0,
    tittle: "“A real sense of community, nurtured”",
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    name: "Olga",
    Studio: "Weave Studios – Kai Tak",
    img: rewtwo
  },
  {
    id: 1,
    tittle: "“The facilities are superb. Clean, slick, bright.”",
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    name: "Thomas",
    Studio: "Weave Studios – Olympic",
    img: rewone
  },

  {
    id: 2,
    tittle: "“A real sense of community, nurtured”",
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    name: "Eliot",
    Studio: "Weave Studios – Kai Tak",
    img: rewthree
  },
  {
    id: 3,
    tittle: "“A real sense of community, nurtured”",
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    name: "Eliot",
    Studio: "Weave Studios – Kai Tak",
    img: rewthree
  },

]





const LandingPages = () => {


  return (



    <>
      <Box >

        <Box sx={{ backgroundImage: `url(${landingone})`, backgroundRepeat: "no-repeat", height: "800px", position: "relative" }}  >
          {/* <Container> */}



          <Stack padding="20px" flexDirection="row" justifyContent="space-between">

            <Stack className="iconsonesd" flexDirection="row" alignItems="center" gap="10px">

              <Stack color="white" flexDirection="row" alignItems="center" gap="10px">
                <FlightIcon />
                <Typography>
                  Find Flight
                </Typography>

              </Stack>

              <Stack color="white" flexDirection="row" alignItems="center" gap="10px">
                <BedIcon />
                <Typography>
                  Find Stays
                </Typography>

              </Stack>
            </Stack>


            <Box>
              <img src={logos} alt="" />
            </Box>

            <Stack className="iconsonesd" flexDirection="row" alignItems="center" gap="10px" >
              <Link style={{textDecoration:"none"}} to="/logins">
              
              <Button sx={{ color: "white", width: "50px" }} variant="text">
                Login
              </Button>
              </Link>

              <Link style={{textDecoration:"none"}}  to="/signs">

              <Button variant="text" sx={{ width: "100px", color: "black", backgroundColor: "white" }}>
                Sign up
              </Button>
 </Link>
            </Stack>

            <BurgerMenu />
          </Stack>



          <Stack gap="10px" textAlign="center" flexDirection="column">
            <Typography color="white" variant="h5">
              Helping Others
            </Typography>
            <Typography color="white" variant="h2">
              Live & Travel
            </Typography>

            <Typography color="white">
              Special offers to suit your plan
            </Typography>
          </Stack>

          <Box className="landingsmalbox" sx={{ backgroundColor: 'white' }} border="1px solid" position="absolute" top="60%" left="10%" width="67%" height="220px">


            <Stack className="boxicons" flexDirection="row" alignItems="center" gap="10px">



              <Stack gap="10px" alignItems="center" flexDirection="column">

                <Stack color="black" flexDirection="row" alignItems="center" gap="10px">
                  <FlightIcon />
                  <Typography>
                    Find Flight
                  </Typography>

                </Stack>

                <Box border="2px solid green" width="100px">

                </Box>

              </Stack>



              <Box className="borderlins" borderRight="1px solid #D7E2EE" width="21px " height="35px">

              </Box>


              <Stack color="black" flexDirection="row" alignItems="center" gap="10px">
                <BedIcon />
                <Typography>
                  Find Stays
                </Typography>

              </Stack>

            </Stack>


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

              <Link style={{color:"black",textDecoration:"none"}} to='/flightnow'>
                <Button sx={{ width: "200px", height: "50px", backgroundColor: "#8DD3BB" }} border="1px solid" border-radius="4px">
                  <Stack color="black" flexDirection="row" gap="10px">
                    <SendIcon />


                    <Typography  >
                      Show Flights
                    </Typography>
                  </Stack>

                </Button>

              </Link>
            </Stack>



          </Box>

          {/* </Container> */}
        </Box>

      </Box >

      <Box>
        <Stack className="plantrip" flexDirection="row" padding="20px" justifyContent="space-between">


          <Stack flexDirection="column" gap="10px">
            <Typography  className="acountcent" variant="h4">
              Plan your perfect trip
            </Typography>
            <Typography  className="acountcent">
              Search Flights & Places Hire to our most popular destinations
            </Typography>
          </Stack>

<Link style={{textDecoration:"none"}} to="/hotelflow">

          <Box className="seamorbtn">
            <Button sx={{ border: "1px solid #8DD3BB", color: "black" }}>
              Sea more place
            </Button>
          </Box>
</Link>
        </Stack>

      </Box>


      <Box>
        <Stack justifyContent="center" gap="30px" flexDirection="row" flexWrap="wrap">

          {city.map((citys) => {
            return (
              <Grid key={citys.id} item xs={12} sm={4} md={4}>
                <Perfecttrip
                  tittle={citys.tittle}
                  text={citys.text}
                  src={citys.img}
                />
              </Grid>
            );
          })}
        </Stack>

      </Box>

      <Stack className="twoboxs" flexDirection="row" marginTop="40px" justifyContent="center" gap="20%">



        <Box className="hoteslsd" sx={{ backgroundImage: `url(${hotelsone})`, position: "relative", backgroundRepeat: "no-repeat", width: "500px", height: "400px" }}>
          <Stack flexDirection="column" position="absolute" left="140px" top="200px">
            <Typography sx={{ fontFamily: "TradeGothic LT Extended" }} color='white' variant="h3">
              Flights
            </Typography>
            <Typography className="hotesltextsd" width="300px" color='white'>
              Search Flights & Places Hire to our most popular destinations
            </Typography>
<Link style={{textDecoration:"none"}} to="/flightnow">

            <Button sx={{ width: "200px", height: "50px", backgroundColor: "#8DD3BB" }} border="1px solid" border-radius="4px">
              <Stack color="black" flexDirection="row" gap="10px">
                <SendIcon />
                <Typography >
                  Show Flights
                </Typography>
              </Stack>

            </Button>
</Link>
          </Stack>
        </Box>

        <Box className="hoteslsd" sx={{ backgroundImage: `url(${hotelstwo})`, position: "relative", backgroundRepeat: "no-repeat", width: "500px", height: "400px" }}>
          <Stack flexDirection="column" position="absolute" left="140px" top="200px">
            <Typography sx={{ fontFamily: "TradeGothic LT Extended" }} color='white' variant="h3">
              Hotels
            </Typography>
            <Typography className="hotesltextsd" width="300px" color='white'>
              Search Flights & Places Hire to our most popular destinations
            </Typography>
            <Link style={{textDecoration:"none"}} to="/hotelflow">

            <Button sx={{ width: "200px", height: "50px", backgroundColor: "#8DD3BB" }} border="1px solid" border-radius="4px">
              <Stack color="black" flexDirection="row" gap="10px">
                <SendIcon />
                <Typography>
                  Show Flights
                </Typography>
              </Stack>

            </Button>
</Link>
          </Stack>
        </Box>

      </Stack>




      <Box>

        <Container>

          <Stack className="rewies" marginTop="40px" flexDirection="row" justifyContent="space-between">


            <Stack flexDirection="column">
              <Typography variant="h4">
                Reviews
              </Typography>

              <Typography>
                What people says about Golobe facilities
              </Typography>

            </Stack>

            <Box className="sealsbtn">
            <Link style={{textDecoration:"none"}} to="/hotelflow">

              <Button sx={{ border: "1px solid #8DD3BB", color: "black" }}>
                Sea all
              </Button>
</Link>
            </Box>
          </Stack>




          <Swiper
            padding="20px"
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}

            pagination={{ clickable: true }}

            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}

          >
            {rewies.map(({ tittle, text, img, name, Studio }) => (
              <SwiperSlide>
                <Grid >
                  <Rews tittle={tittle} name={name} Studio={Studio} text={text} src={img} />
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </Box>







      <Footer />



    </>
  )
}

export default LandingPages