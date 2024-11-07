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
import OrderModal from '../../Companents/OrderModal'; // Modal'ı içe aktar
import './CityDetail.css'; // CSS dosyasını ekliyoruz

const CityDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const city = cities.find(city => city.id === Number(id));

    const [message, setMessage] = useState(null);
    const [fadeOut, setFadeOut] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    if (!city) {
        return <Typography variant="h6">Şehir bulunamadı.</Typography>;
    }

    const isFavorite = favorites.some(fav => fav.id === city.id);

    const handleToggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(city.id));
            setMessage('Favorilerden çıkarıldı');
        } else {
            dispatch(addFavorite({ ...city }));
            setMessage('Favorilere eklendi');
        }
        setFadeOut(false);
        setTimeout(() => setFadeOut(true), 3000);
    };

    const handleOrderClick = () => {
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
            img: city.img, // Add the city image to the order data
        };
    
        dispatch(addOrder(orderData));
        setModalOpen(false);
        setQuantity(1);
    };
    

    return (
        <>
            <Box sx={{ padding: "30px" }}>
                {message && (
                    <Box className={`notification ${fadeOut ? 'fade-out' : ''}`}>
                        <Stack flexDirection="row" alignItems="center">
                            <CheckIcon style={{ color: 'green', marginRight: '5px' }} />
                            <Typography variant="body2" color="green">{message}</Typography>
                        </Stack>
                    </Box>
                )}

                <Stack alignItems="center" flexDirection="row" justifyContent="space-between">
                    <Stack flexDirection="column" gap="10px">
                        <Stack alignItems="center" flexDirection="row">
                            <Typography variant="h4">{city.title}</Typography>
                            <ArrowRightAltIcon />
                            <Typography variant="h4">{city.citycountry}</Typography>
                            <ArrowRightAltIcon />
                            <Typography color="red" variant="h6">Days: {city.days}</Typography>
                        </Stack>
                        <Stack flexDirection="row" alignItems="center" gap="10px">
                            <Box className="rating-badge">{city.rating}</Box>
                            <Typography variant="h6">Very Good {city.reviews} reviews</Typography>
                        </Stack>
                    </Stack>
                    <Stack alignItems="self-end" flexDirection="column">
                        <Typography color="red" variant="h4">${city.price}</Typography>
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
                
                <Stack alignItems="center" flexDirection="row">
                    {city.airplanes.map((plane, index) => (
                        <img key={index} src={plane} className="plane-image" alt={`Room ${index + 1}`} />
                    ))}
                </Stack>
                
                <Box marginTop="20px">
                    <Typography variant='h4'>Information</Typography>
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
