import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Stack, Typography, Container, IconButton } from "@mui/material";
import hotels from '../../data/hotel';
import Footer from "../../Companents/Footer";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from '@mui/icons-material/Check';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../features/favoritesSlice';
import { addOrder } from '../../features/ordersSlice';
import OrderModal from '../../Companents/OrderModal'; // Modal'ı içe aktar
import './hotellistabout.css'; // CSS dosyasını ekliyoruz

const Hotellistabout = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const selectedHotel = hotels.find(h => h.id === parseInt(id));
    const [message, setMessage] = useState(null);
    const [fadeOut, setFadeOut] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1); // Miktar için state ekle

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
            price: selectedHotel.price * quantity, // Miktar ile çarp
            quantity: quantity,
            country: selectedHotel.country,
            city: selectedHotel.city // Şehir bilgisini ekle
        };
        dispatch(addOrder(orderData)); // Siparişi ekle
        setModalOpen(false); // Modalı kapat
        setQuantity(1); // Miktarı sıfırla
    };

    return (
        <>
            <Box>
                <Container>
                    {/* Favorilere eklenme mesajı */}
                    {message && (
                        <Box className={`notification ${fadeOut ? 'fade-out' : ''}`}>
                            <Stack flexDirection="row" alignItems="center">
                                <CheckIcon style={{ color: 'green', marginRight: '5px' }} />
                                <Typography variant="body2" color="green">{message}</Typography>
                            </Stack>
                        </Box>
                    )}

                    <Stack flexDirection="row" gap="15px">
                        <Typography sx={{ fontFamily: "Montserrat" }} color="red">
                            {selectedHotel.country}
                        </Typography>
                        <ArrowRightAltIcon />
                        <Typography sx={{ fontFamily: "Montserrat" }} color="red">
                            {selectedHotel.city}
                        </Typography>
                        <ArrowRightAltIcon />
                        <Typography>
                            {selectedHotel.name}
                        </Typography>
                    </Stack>
                    <Stack className="hotel-details" flexDirection="row" justifyContent="space-between">
                        <Stack gap="10px" flexDirection="column">
                            <Typography variant="h4">
                                {selectedHotel.name}
                            </Typography>
                            <Stack alignItems="center" flexDirection="row" gap="10px">
                                <AddLocationAltIcon />
                                <Typography>{selectedHotel.location}</Typography>
                                <ArrowRightAltIcon />
                                <Box className="rating-box">
                                    {selectedHotel.rating}
                                </Box>
                                <Typography>
                                    Very Good {selectedHotel.reviews} reviews
                                </Typography>
                            </Stack>
                        </Stack>
                        <Stack alignItems="self-end" flexDirection="column">
                            <Typography color="red" variant="h4">
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
                                <Box 
                                    className="order-button" 
                                    onClick={handleOrderClick}
                                >
                                    Order
                                </Box>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Box marginTop="10px">
                        <img className="hotel-image" src={selectedHotel.image} alt={selectedHotel.name} />
                    </Box>
                    <Stack flexDirection="row">
                        {selectedHotel.rooms.map((room, index) => (
                            <img key={index} src={room} className="room-image" alt={`Room ${index + 1}`} />
                        ))}
                    </Stack>

                    <Stack>
                        <Typography className="textcentrs" variant="h5">
                            Overview
                        </Typography>
                        <Typography className="textcentrs">
                            {selectedHotel.description}
                        </Typography>
                    </Stack>
                 
                </Container>
            </Box>
            <Footer />
            <OrderModal 
                open={modalOpen} 
                onClose={() => setModalOpen(false)} 
                onConfirm={handleConfirmOrder} 
                quantity={quantity} // Miktarı geç
                setQuantity={setQuantity} // Miktar setter'ı geç
            />
        </>
    );
}

export default Hotellistabout;
