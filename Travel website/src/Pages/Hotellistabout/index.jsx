import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Typography, Container, IconButton } from '@mui/material';
import hotels from '../../data/hotel';
import Footer from '../../Companents/Footer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from '@mui/icons-material/Check';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../features/favoritesSlice';
import { addOrder } from '../../features/ordersSlice';
import OrderModal from '../../Companents/OrderModal';
import './hotellistabout.css';

const Hotellistabout = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const selectedHotel = hotels.find(h => h.id === parseInt(id));
    const [message, setMessage] = useState(null);
    const [fadeOut, setFadeOut] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    if (!selectedHotel) {
        return <Typography>No hotel found!</Typography>;
    }

    const handleToggleFavorite = () => {
        if (favorites.some(fav => fav.id === selectedHotel.id)) {
            dispatch(removeFavorite(selectedHotel.id));
            setMessage('Favorilerden çıkarıldı');
        } else {
            dispatch(addFavorite({ ...selectedHotel, type: 'hotel' }));
            setMessage('Favorilere eklendi');
        }
        setFadeOut(false);
        setTimeout(() => setFadeOut(true), 3000);
    };

    const handleOrderClick = () => {
        setModalOpen(true);
    };

    const handleConfirmOrder = (quantity) => {
        const orderData = {
            id: selectedHotel.id,
            title: selectedHotel.name,
            img: selectedHotel.image,
            price: selectedHotel.price * quantity,
            quantity: quantity,
            country: selectedHotel.country,
            city: selectedHotel.city,
            rating: selectedHotel.rating,
            reviews: selectedHotel.reviews
        };
        dispatch(addOrder(orderData));
        setModalOpen(false);
        setQuantity(1);
    };

    return (
        <>
            <Box sx={{ padding: "30px 10px",background:"#f7f7f7",boxShadow:"0 4px 12px rgb(0 0 0 / 10%)" }}>
                {/* Favorilere eklenme mesajı */}
                {message && (
                    <Box className={`notification ${fadeOut ? 'fade-out' : ''}`}>
                        <Stack flexDirection="row" alignItems="center">
                            <CheckIcon style={{ color: 'green', marginRight: '5px' }} />
                            <Typography variant="body2" color="green">{message}</Typography>
                        </Stack>
                    </Box>
                )}

                <Stack flexDirection="row" gap="15px" sx={{ marginBottom: "20px" }}>
                    <Typography sx={{ fontFamily: "Montserrat", fontWeight: "bold" }} color="red">
                        {selectedHotel.country}
                    </Typography>
                    <ArrowRightAltIcon sx={{ color: "#8DD3BB" }} />
                    <Typography sx={{ fontFamily: "Montserrat", fontWeight: "bold" }} color="red">
                        {selectedHotel.city}
                    </Typography>
                    <ArrowRightAltIcon sx={{ color: "#8DD3BB" }} />
                    <Typography sx={{ fontFamily: "Montserrat", fontWeight: "bold" }}>
                        {selectedHotel.name}
                    </Typography>
                </Stack>

                <Stack className="hotel-details" flexDirection="row" justifyContent="space-between" sx={{ marginBottom: "30px" }}>
                    <Stack gap="10px" flexDirection="column">
                        <Typography variant="h4" sx={{ fontWeight: "bold", fontFamily: "Montserrat" }}>
                            {selectedHotel.name}
                        </Typography>
                        <Stack alignItems="center" flexDirection="row" gap="10px">
                            <AddLocationAltIcon sx={{ color: "#8DD3BB" }} />
                            <Typography>{selectedHotel.location}</Typography>
                            <ArrowRightAltIcon sx={{ color: "#8DD3BB" }} />
                            <Box className="rating-box">
                                {selectedHotel.rating}
                            </Box>
                            <Typography>
                                Very Good {selectedHotel.reviews} reviews
                            </Typography>
                        </Stack>
                    </Stack>

                    <Stack alignItems="self-end" flexDirection="column">
                        <Typography color="red" variant="h4" sx={{ fontWeight: "bold" }}>
                            ${selectedHotel.price}
                        </Typography>
                        <Stack flexDirection="row" gap="5px">
                            <IconButton onClick={handleToggleFavorite} aria-label="toggle favorite">
                                {favorites.some(fav => fav.id === selectedHotel.id) ? (
                                    <FavoriteIcon style={{ color: 'red' }} />
                                ) : (
                                    <FavoriteBorderIcon />
                                )}
                            </IconButton>
                            <Box className="order-button" onClick={handleOrderClick}>
                                Order
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>

                <Box sx={{ marginBottom: "30px" }}>
                    <img className="hotel-image" src={selectedHotel.image} alt={selectedHotel.name} />
                </Box>

                <Stack flexDirection="row" flexWrap="wrap" justifyContent="center" sx={{ marginTop: "30px" }}>
                    {selectedHotel.rooms.map((room, index) => (
                        <img key={index} src={room} className="room-image" alt={`Room ${index + 1}`} />
                    ))}
                </Stack>

                <Stack sx={{ marginTop: "40px" }}>
                    <Typography className="textcentrs" variant="h5" sx={{ fontWeight: "bold" }}>
                        Overview
                    </Typography>
                    <Typography className="textcentrs">
                        {selectedHotel.description}
                    </Typography>
                </Stack>

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

export default Hotellistabout;
