import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Stack,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import Footer from "../../Companents/Footer";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFavorite } from "../../features/favoritesSlice";
import { Link } from "react-router-dom";
import "./favourites.css";

const Favourites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedFavoriteId, setSelectedFavoriteId] = useState(null);

  const handleRemoveFavorite = (id) => {
    dispatch(removeFavorite(id));
    setOpenDialog(false);
  };

  const handleOpenDialog = (id) => {
    setSelectedFavoriteId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedFavoriteId(null);
  };

  return (
    <>
     
      <Box className="favbox" padding="20px">
        <Typography className="topfavname" variant="h4">
          Your Favorites
        </Typography>
        {favorites.length === 0 ? (
          <Typography>No favorites added yet.</Typography>
        ) : (
          <Stack
            className="favorit_cards"
            gap="20px"
            flexDirection="row"
            alignItems="center"
            flexWrap="wrap"
          >
            {favorites.map((item) => (
              <Box key={item.id} className="favorite-item">
                <Stack flexDirection="column">
                  <Box>
                    <img
                      src={item.img}
                     
                    />
                  </Box>
                  <Stack
                    gap="2px"
                    flexDirection="column"
                    className="cards_container"
                  >
                    <Typography variant="h6">
                      {item.name || item.title}
                    </Typography>
                    <Stack className="fav_containers">
                      <Stack alignItems="center" flexDirection="row" gap="10px">
                        <Typography className="rating-badge">
                          {item.rating}
                        </Typography>
                        <Typography>
                          Very Good {item.reviews} reviews
                        </Typography>
                      </Stack>
                      <Stack
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="row"
                      >
                        <Stack
                          gap="10px"
                          alignItems="center"
                          flexDirection="column"
                        >
                          <Typography className="pricesfavorite">
                            ${item.price}
                          </Typography>
                          <Typography>({item.days} days)</Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                    <Stack
                      className="fav_butom"
                      alignItems="center"
                      flexDirection="row"
                    >
                      <IconButton
                        onClick={() => handleOpenDialog(item.id)}
                        aria-label="remove from favorites"
                      >
                        <DeleteIcon style={{ color: "red" }} />
                      </IconButton>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={
                          item.type === "hotel"
                            ? `/hotellistabout/${item.id}`
                            : `/city/${item.id}`
                        }
                      >
                        <Button
                          sx={{
                            backgroundColor: "#8DD3BB",
                            width: "220px",
                            color: "black",
                            borderRadius: "4px",
                          }}
                        >
                          View Deals
                        </Button>
                      </Link>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Stack>
        )}
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        className="custom-dialog"
      >
        <DialogTitle className="custom-dialog-title">
          Confirm Deletion
        </DialogTitle>
        <DialogContent className="custom-dialog-content">
          <Typography>
            Are you sure you want to remove this item from favorites?
          </Typography>
        </DialogContent>
        <DialogActions className="custom-dialog-actions">
          <Button
            onClick={handleCloseDialog}
            color="primary"
            className="cancel-button"
          >
            Cancel
          </Button>
          <Button
            onClick={() => handleRemoveFavorite(selectedFavoriteId)}
            color="secondary"
            className="delete-button"
          >
            Remove
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </>
  );
};

export default Favourites;
