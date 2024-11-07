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
import './Hotelworld.css'; // Import the CSS file

const Hotelworld = ({ priceFilter, daysValue, starsValue }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const [message, setMessage] = useState(null);
    const [fadeOut, setFadeOut] = useState(false);

    const filteredHotels = hotels.filter(hotel => {
        const matchesPrice = priceFilter === 'all' ||
            (priceFilter === 'ucuz' && hotel.price <= 250) ||
            (priceFilter === 'bahali' && hotel.price > 250);
        const matchesDays = daysValue === '' || hotel.days === parseInt(daysValue);
        const matchesStars = starsValue === '' || hotel.stars === parseInt(starsValue);
        return matchesPrice && matchesDays && matchesStars;
    });

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
            <Box sx={{ marginLeft: "23px" }}>
                <Typography className='hoteltop_name' variant="h4">Available Hotels</Typography>
                <Stack gap="20px" flexDirection="row" flexWrap="wrap">
                    {filteredHotels.map((hotel) => (
                        <Box key={hotel.id} className="hotel-card">
                            <Stack className="hotel-details" gap="5%" flexDirection="row">
                                <img className="hotel-images" src={hotel.image} alt={hotel.name} />
                                <Stack className="hotel-info" gap="2px" flexDirection="column">
                                    <Stack flexDirection="row" alignItems="center" gap="15px">
                                        <Typography variant="h5">{hotel.name}</Typography>
                                        <Stack alignItems="center" flexDirection="column" gap="5px">
                                            <Typography variant="h5" color="red">${hotel.price}</Typography>
                                            <Typography variant="body1" align="center">for {hotel.days} days</Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack marginTop='10px' alignItems="center" flexDirection="row" gap="10px">
                                        <AddLocationAltIcon />
                                        <Typography>{hotel.location}</Typography>
                                    </Stack>
                                    <Stack marginTop="20px" alignItems="center" flexDirection="row" gap="10px">
                                        <Stack alignItems="center" flexDirection="row" gap="10px" style={{ color: "orange" }}>
                                            {[...Array(hotel.stars)].map((_, starIndex) => (
                                                <StarBorderIcon key={starIndex} />
                                            ))}
                                        </Stack>
                                        <Typography>{hotel.stars} Star Hotel</Typography>
                                    </Stack>
                                    <Stack marginTop="5px" flexDirection="row" gap="20px">
                                        <IconButton onClick={() => handleAddToFavorites(hotel)} aria-label="toggle favorite">
                                            {favorites.some(fav => fav.id === hotel.id) ? (
                                                <FavoriteIcon style={{ color: 'red' }} />
                                            ) : (
                                                <FavoriteBorderIcon />
                                            )}
                                        </IconButton>
                                        <Link style={{ textDecoration: "none" }} to={`/hotellistabout/${hotel.id}`}>
                                            <Button className="view-deals-button">
                                                View Deals
                                            </Button>
                                        </Link>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
}

export default Hotelworld;
