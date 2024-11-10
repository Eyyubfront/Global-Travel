import React, { useState } from 'react';
import { Box, Button, Stack, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';
import { cities } from '../../data/cities';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../features/favoritesSlice';
import './Worldtravel.css'; // Import the CSS file

const Worldtravel = ({ priceFilter, priceValue, daysValue }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const [message, setMessage] = useState(null);
    const [fadeOut, setFadeOut] = useState(false);

    const filteredCities = cities.filter(city => {
        const priceCondition = priceFilter === 'all' ||
            (priceFilter === 'ucuz' && city.price < 200) ||
            (priceFilter === 'bahali' && city.price >= 200);

        const daysCondition = !daysValue || city.days === Number(daysValue);
        const priceValueCondition = city.price <= priceValue;

        return priceCondition && daysCondition && priceValueCondition;
    });

    const handleAddToFavorites = (city) => {
        if (favorites.some(fav => fav.id === city.id)) {
            dispatch(removeFavorite(city.id));
            setMessage('Favorilerden çıkarıldı');
        } else {
            dispatch(addFavorite({ ...city, type: 'city' }));
            setMessage('Favorilere eklendi');
        }
        setFadeOut(false);
        setTimeout(() => setFadeOut(true), 3000);
    };

    return (
        <Box className="worldtravel-container">
            {message && (
                <Box className={`notification ${fadeOut ? 'fade-out' : ''}`}>
                    <Stack flexDirection="row" alignItems="center">
                        <CheckIcon style={{ color: 'green', marginRight: '5px' }} />
                        <Typography variant="body2" color="green">{message}</Typography>
                    </Stack>
                </Box>
            )}
            <Typography className='topflight_name' variant="h4">Available Flight</Typography>
            <Stack gap="20px" flexDirection="row" marginLeft="24px" flexWrap="wrap">
                {filteredCities.map(city => (
                    <Box key={city.id} className="city-card">
                        <Stack direction="column" spacing={2} className="card-inner">
                            <Box className="city-image-container">
                                <img className="city-image" src={city.img} alt={city.title} />
                            </Box>
                            <Typography variant="h6" className="city-title">{city.title}</Typography>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <Typography className="rating">{city.rating}</Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {city.reviews} reviews
                                    </Typography>
                                </Stack>
                                <Stack direction="column" alignItems="flex-end">
                                    <Typography variant="h6" color="error">${city.price}</Typography>
                                    <Typography variant="body2">{city.days} days</Typography>
                                </Stack>
                            </Stack>
                            <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
                                <IconButton onClick={() => handleAddToFavorites(city)}>
                                    {favorites.some(fav => fav.id === city.id) ? (
                                        <FavoriteIcon style={{ color: 'red' }} />
                                    ) : (
                                        <FavoriteBorderIcon />
                                    )}
                                </IconButton>
                                <Link to={`/city/${city.id}`} style={{ textDecoration: 'none' }}>
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

export default Worldtravel;
