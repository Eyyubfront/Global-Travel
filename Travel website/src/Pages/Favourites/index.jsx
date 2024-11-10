import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Stack, Typography, IconButton, Button } from '@mui/material';
import Footer from "../../Companents/Footer";
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFavorite } from '../../features/favoritesSlice';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './favourites.css'; // CSS dosyasını ekliyoruz

const Favourites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const handleClickOpen = (id) => {
        setSelectedId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedId(null);
    };

    const handleRemoveFavorite = () => {
        if (selectedId !== null) {
            dispatch(removeFavorite(selectedId));
            handleClose();
        }
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
                                    <Stack gap="2px" flexDirection="column" style={{ flexGrow: 1,alignItems:"center"}}>
                                            <Typography variant="h6">{item.name || item.title}</Typography>
                                        <Stack justifyContent="center" alignItems="center" flexDirection="row">
                                            <Stack gap="10px" alignItems="center" flexDirection="row">
                                               
                                                <Typography className='pricesfavorite' color="red">${item.price}</Typography>
                                                <Box>
                                                    -
                                                </Box>
                                                <Typography width="100px">({item.days} days)</Typography>
                                            </Stack>
                                        </Stack>
                                        <Stack alignItems="center" flexDirection="row" gap="10px">
                                                <Typography className="rating-badge">{item.rating}</Typography>
                                                <Typography >Very Good {item.reviews} reviews</Typography>
                                            </Stack>
                                       <Stack alignItems="center" flexDirection="row">
                                       <Link style={{ textDecoration: "none" }} to={item.type === 'hotel' ? `/hotellistabout/${item.id}` : `/city/${item.id}`}>
                                            <Button sx={{ backgroundColor: "#8DD3BB", width: "220px", color: "black", borderRadius: "4px" }}>
                                                View Deals
                                            </Button>
                                        </Link>
                                        <IconButton onClick={() => handleClickOpen(item.id)} aria-label="remove from favorites">
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

            {/* Onay Pop-up'ı */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirm Removal</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to remove this item from your favorites?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleRemoveFavorite} color="primary">
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>

            <Footer />
        </>
    );
}

export default Favourites;
