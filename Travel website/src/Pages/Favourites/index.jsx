import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Stack, Typography, IconButton, Button } from '@mui/material';
import Footer from "../../Companents/Footer";
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFavorite } from '../../features/favoritesSlice';
import { Link } from 'react-router-dom';
import './favourites.css'; // CSS dosyasını ekliyoruz

const Favourites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    const handleRemoveFavorite = (id) => {
        dispatch(removeFavorite(id));
    };

    return (
        <>
            <Box padding="20px">
                <Typography className='topfavname' variant="h4">Your Favorites</Typography>
                {favorites.length === 0 ? (
                    <Typography>No favorites added yet.</Typography>
                ) : (
                    <Stack gap="20px" flexDirection="row" alignItems="center" flexWrap="wrap">
                        {favorites.map(item => (
                            <Box key={item.id} className="favorite-item">
                                <Stack flexDirection="column">
                                  <Box>
                                    <img style={{ width:"316px" }} src={item.image || item.img} alt={item.name || item.title} />
                                  </Box>
                                  <Stack gap="2px" flexDirection="column" style={{ flexGrow: 1, alignItems:"center" }}>
                                        <Typography variant="h6">{item.name || item.title}</Typography>
                                    <Stack justifyContent="center" alignItems="center" flexDirection="row">
                                        <Stack gap="10px" alignItems="center" flexDirection="row">
                                            <Typography className='pricesfavorite' color="red">${item.price}</Typography>
                                            <Box>-</Box>
                                            <Typography width="100px">({item.days} days)</Typography>
                                        </Stack>
                                    </Stack>
                                    <Stack alignItems="center" flexDirection="row" gap="10px">
                                        <Typography className="rating-badge">{item.rating}</Typography>
                                        <Typography>Very Good {item.reviews} reviews</Typography>
                                    </Stack>
                                    <Stack alignItems="center" flexDirection="row">
                                        <Link style={{ textDecoration: "none" }} to={item.type === 'hotel' ? `/hotellistabout/${item.id}` : `/city/${item.id}`}>
                                            <Button sx={{ backgroundColor: "#8DD3BB", width: "220px", color: "black", borderRadius: "4px" }}>
                                                View Deals
                                            </Button>
                                        </Link>
                                        {/* Direct Remove */}
                                        <IconButton onClick={() => handleRemoveFavorite(item.id)} aria-label="remove from favorites">
                                            <DeleteIcon style={{ color: 'red' }} />
                                        </IconButton>
                                    </Stack>
                                  </Stack>
                                </Stack>
                            </Box>
                        ))}
                    </Stack>
                )}
            </Box>
            <Footer />
        </>
    );
}

export default Favourites;
