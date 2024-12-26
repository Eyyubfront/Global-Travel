import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, IconButton, Stack, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';
import { removeOrder, increaseQuantity, decreaseQuantity } from '../../features/ordersSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from '../../Companents/Footer';
import './orders.css';

const Orders = () => {
  const orders = useSelector(state => state.orders);
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleDeleteOrder = (id) => {
    dispatch(removeOrder({ id }));
    setOpenDialog(false);
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleOpenDialog = (id) => {
    setSelectedOrderId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedOrderId(null);
  };

  return (
    <>
      <Box className="orders-container">
        <Typography variant="h4" align="center" className="orders-title">Orders</Typography>
        <Box component="ul" className="orders-list">
          {orders.length === 0 ? (
            <Typography>No orders yet.</Typography>
          ) : (
            orders.map(order => (
              <Box component="li" key={order.id} className="order-item">
                <Box className="order-card">
                  <img src={order.img} alt={order.title} className="order-image" />
                  <div className="order-info">
                    <Typography variant="h6" className="order-title">
                      {order.title}
                    </Typography>

                    <Stack flexDirection="row" alignItems="center" gap="10px">
                      <Typography>({order.country}) {order.city && `- ${order.city}`}</Typography>
                      <Typography variant="h6" color="red" component="span">
                        ${order.price}
                      </Typography>
                    </Stack>

                    <Stack marginBottom="5px" flexDirection="row" alignItems="center" gap="10px">
                      <Typography className="orderrating-box" variant="body2">
                        {order.rating}
                      </Typography>
                      <Typography variant="body2" style={{ fontSize: "16px" }}>
                        Very Good {order.reviews} reviews
                      </Typography>
                    </Stack>

                    <Stack flexDirection="row" alignItems="center" gap="10px">
                      <div className="quantity">
                        <IconButton
                          color="primary"
                          onClick={() => handleIncreaseQuantity(order.id)}
                          aria-label="increase"
                        >
                          +
                        </IconButton>
                        <Typography variant="body2">
                          Quantity: {order.quantity}
                        </Typography>
                        <IconButton
                          color="secondary"
                          onClick={() => handleDecreaseQuantity(order.id)}
                          aria-label="decrease"
                        >
                          -
                        </IconButton>
                      </div>
                      <IconButton
                        color="error"
                        onClick={() => handleOpenDialog(order.id)}
                        aria-label="delete"
                        style={{ color: 'red' }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </div>
                </Box>
              </Box>
            ))
          )}
        </Box>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog} className="custom-dialog">
        <DialogTitle className="custom-dialog-title">Confirm Deletion</DialogTitle>
        <DialogContent className="custom-dialog-content">
          <Typography>Are you sure you want to delete this order?</Typography>
        </DialogContent>
        <DialogActions className="custom-dialog-actions">
          <Button onClick={handleCloseDialog} color="primary" className="cancel-button">
            Cancel
          </Button>
          <Button onClick={() => handleDeleteOrder(selectedOrderId)} color="secondary" className="delete-button">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <Footer />
    </>
  );
};

export default Orders;
