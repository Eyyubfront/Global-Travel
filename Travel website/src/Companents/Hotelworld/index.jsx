import React, { useState } from 'react';
import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from '@mui/icons-material/Check';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';
import hotels from '../../data/hotel';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../features/favoritesSlice';
import './Hotelworld.css'; 
import { addOrder } from '../../features/ordersSlice';

const Hotelworld = ({ priceFilter, daysValue, starsValue }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const [message, setMessage] = useState(null);
    const [fadeOut, setFadeOut] = useState(false);

    // Filtreleme işlemleri
    const filteredHotels = hotels.filter(hotel => {
        const matchesPrice = priceFilter === 'all' ||
            (priceFilter === 'ucuz' && hotel.price <= 250) ||
            (priceFilter === 'bahali' && hotel.price > 250);
        const matchesDays = daysValue === '' || hotel.days === parseInt(daysValue);
        const matchesStars = starsValue === '' || hotel.stars === parseInt(starsValue);
        return matchesPrice && matchesDays && matchesStars;
    });

    // Favorilere ekle/çıkarma işlemi
    const handleAddToFavorites = (hotel) => {
        if (favorites.some(fav => fav.id === hotel.id)) {
            dispatch(removeFavorite(hotel.id));
            setMessage('Favorilerden çıkarıldı');
        } else {
            dispatch(addFavorite({ ...hotel, type: 'hotel' }));
            setMessage('Favorilere eklendi');
        }
        setFadeOut(false);
        setTimeout(() => setFadeOut(true), 3000);
    };

    // Sipariş ekleme işlemi
    const handleAddToOrders = (hotel) => {
        const order = {
            id: hotel.id,
            title: hotel.name,
            price: parseFloat(hotel.price),
            country: hotel.country,
            city: hotel.city || '',
            img: hotel.image,
            quantity: 1,
        };
        dispatch(addOrder(order)); // Sipariş ekleme
    };

    return (
        <Box className="hotelworld-container">
            {message && (
                <Box className={`notification ${fadeOut ? 'fade-out' : ''}`}>
                    <Stack flexDirection="row" alignItems="center">
                        <CheckIcon style={{ color: 'green', marginRight: '5px' }} />
                        <Typography variant="body2" color="green">{message}</Typography>
                    </Stack>
                </Box>
            )}
            <Typography className='hoteltop_name' variant="h4">Available Hotels</Typography>
            <Stack gap="20px" flexDirection="row" marginLeft="24px" flexWrap="wrap">
                {filteredHotels.map(hotel => (
                    <Box key={hotel.id} className="hotel-card">
                        <Stack direction="column" spacing={2} className="card-inner">
                            <Box className="hotel-image-container">
                                <img className="hotel-image" src={hotel.image} alt={hotel.name} />
                            </Box>
                            <Typography variant="h6" className="hotel-title">{hotel.name}</Typography>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Stack direction="row" spacing={1} alignItems="center">
                                  
                                  
                                    <Typography variant="body2">{hotel.location}</Typography>
                                </Stack>
                               
                                <Stack direction="column" alignItems="flex-end">
                                    <Typography variant="h6" color="error">${hotel.price}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {hotel.days} days
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack marginTop="20px" alignItems="center" flexDirection="row" gap="10px">
                                         <Stack alignItems="center" flexWrap="wrap" flexDirection="row" gap="10px" style={{ color: "orange" }}>
                                       {[...Array(hotel.stars)].map((_, starIndex) => (
                                                <StarBorderIcon key={starIndex} />
                                            ))}
                                        </Stack>
                                        <Typography>{hotel.stars} Star Hotel</Typography>
                                    </Stack>
                            <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                                <IconButton onClick={() => handleAddToFavorites(hotel)}>
                                    {favorites.some(fav => fav.id === hotel.id) ? (
                                        <FavoriteIcon style={{ color: 'red' }} />
                                    ) : (
                                        <FavoriteBorderIcon />
                                    )}
                                </IconButton>
                                <Link to={`/hotellistabout/${hotel.id}`} style={{ textDecoration: 'none' }}>
                                    <Button className="view-deals-button">View Deals</Button>
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
}
export default Hotelworld;
