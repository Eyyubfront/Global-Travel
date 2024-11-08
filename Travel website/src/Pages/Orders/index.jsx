import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../../Companents/Footer';
import { Box, Typography, IconButton } from '@mui/material';
import { removeOrder } from '../../features/ordersSlice'; 
import DeleteIcon from '@mui/icons-material/Delete'; // Importing the delete icon
import './orders.css'; // Importing the CSS file
import { Stack } from '@mui/material';

const Orders = () => {
  const orders = useSelector(state => state.orders);
  const dispatch = useDispatch();

  const handleDeleteOrder = (id) => {
    dispatch(removeOrder(id)); 
  };

  return (
    <>
      <Box className="orders-container">
        <Typography variant="h4">Orders</Typography>
        <Box component="ul" className="orders-list">
          {orders.length === 0 ? (
            <Typography >You have no orders yet.</Typography>
          ) : (
            orders.map(order => (
              <Box component="li" key={order.id} className="order-item">
                <Box>
                  <img src={order.img} alt={order.title} className="order-image" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography variant="h6">
                      {order.title} - 
                      <Typography variant="h6" color="red" component="span">
                        ${order.price}
                      </Typography>
                      ({order.country}) {order.city ? `- ${order.city}` : ''}
                    </Typography>
                    <Stack flexDirection="row" alignItems="center">
                      <Typography className='quantity' variant="body2">Quantity: {order.quantity}</Typography>
                      <IconButton 
                        color="error" 
                        onClick={() => handleDeleteOrder(order.id)} 
                        aria-label="delete"
                        sx={{ marginLeft: '10px' }} // Optional styling for spacing
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </Box>
                </Box>
              </Box>
            ))
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Orders;
