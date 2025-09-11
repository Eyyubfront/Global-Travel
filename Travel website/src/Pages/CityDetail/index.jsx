import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import { cities } from '../../data/cities';
import Footer from "../../Companents/Footer";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../features/favoritesSlice';
import CheckIcon from '@mui/icons-material/Check';
import { addOrder } from '../../features/ordersSlice';
import OrderModal from '../../Companents/OrderModal';
import './CityDetail.css';

import { useUser } from "@clerk/clerk-react"; 
const CityDetail = () => {
    const { id } = useParams();
    const { isSignedIn } = useUser();
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const user = useSelector(state => state.user); 
    console.log("us",user);
    const city = cities.find(city => city.id === Number(id));

    const [message, setMessage] = useState(null);
    const [fadeOut, setFadeOut] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    if (!city) {
        return <Typography variant="h6">City not found.</Typography>;
    }

    const isFavorite = favorites.some(fav => fav.id === city.id);
    const handleToggleFavorite = () => {
        if (!isSignedIn) {
            setMessage('Please log in to add to favorites');
            setFadeOut(false);
            setTimeout(() => setFadeOut(true), 3000);
            return;
        }

        if (isFavorite) {
            dispatch(removeFavorite(city.id));
            setMessage('Removed from favorites');
        } else {
            dispatch(addFavorite({ ...city, type: 'city' }));
            setMessage('Added to favorites');
        }
        setFadeOut(false);
        setTimeout(() => setFadeOut(true), 3000);
    };

    const handleOrderClick = () => {
        if (!isSignedIn) {
            setMessage('Please log in to place an order');
            setFadeOut(false);
            setTimeout(() => setFadeOut(true), 3000);
            return;
        }
        setModalOpen(true);
    };

    const handleConfirmOrder = () => {
        const orderData = {
            id: city.id,
            title: city.title,
            price: city.price * quantity,
            country: city.citycountry,
            city: city.name,
            quantity: quantity,
            img: city.img,
            rating: city.rating,
            reviews: city.reviews
        };
        dispatch(addOrder(orderData));
        setModalOpen(false);
        setQuantity(1);
    };

    return (
        <>
            <Box sx={{ padding: "30px", backgroundColor: "#f7f7f7", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
                {message && (
                    <Box className={`notification ${fadeOut ? 'fade-out' : ''}`}>
                        <Stack flexDirection="row" alignItems="center">
                            <CheckIcon style={{ color: 'green', marginRight: '5px' }} />
                            <Typography variant="body2" color="green">{message}</Typography>
                        </Stack>
                    </Box>
                )}

               
                <Stack className='top_citydata' alignItems="center" flexDirection="row" justifyContent="space-between">
                    <Stack flexDirection="column" gap="10px">
                        <Stack className='city_boxtop' alignItems="center" flexDirection="row">
                            <Typography variant="h3" fontWeight="bold">{city.title}</Typography>
                            <ArrowRightAltIcon sx={{ color: '#8DD3BB' }} />
                            <Typography variant="h4" color="textSecondary">{city.citycountry}</Typography>
                            <ArrowRightAltIcon sx={{ color: '#8DD3BB' }} />
                            <Typography color="red" variant="h6">Days: {city.days}</Typography>
                        </Stack>
                        <Stack flexDirection="row" alignItems="center" gap="10px">
                            <Box className="rating-badge">{city.rating}</Box>
                            <Typography variant="h6" color="textSecondary">Very Good {city.reviews} reviews</Typography>
                        </Stack>
                    </Stack>
                    <Stack alignItems="self-end" flexDirection="column" textAlign="right">
                        <Typography color="red" variant="h4" fontWeight="bold">${city.price}</Typography>
                        <Stack flexDirection="row" gap="5px">
                            <IconButton onClick={handleToggleFavorite} aria-label="toggle favorite">
                                {isFavorite ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon />}
                            </IconButton>
                            <Box className="order-button" onClick={handleOrderClick}>
                                Order
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>

                <Box sx={{ marginTop: "15px", marginBottom: "10px" }}>
                    <img src={city.img} className="city-images" alt={city.title} />
                </Box>

          
                <Stack className='cityairpalne_photo' alignItems="center" sx={{gap:"3px"}} flexDirection="row" justifyContent="center" flexWrap="wrap">
                    {city.airplanes.map((plane, index) => (
                        <img key={index} src={plane} className="planeimage" alt={`Plane ${index + 1}`} />
                    ))}
                </Stack>

        
                <Box marginTop="20px">
                    <Typography variant='h4' fontWeight="bold" marginBottom="10px">Information</Typography>
                    <Box component="ul" sx={{ marginTop: "20px", paddingLeft: "20px" }}>
                        {city.details.map((detail, index) => (
                            <Typography component="li" variant="h6" key={index}>{detail}</Typography>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Footer />
            <OrderModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={handleConfirmOrder}
                quantity={quantity}
                setQuantity={setQuantity}
            />
        </>
    );
};


export default CityDetail;
