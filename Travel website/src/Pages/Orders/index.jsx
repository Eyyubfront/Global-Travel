import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, IconButton, Stack } from '@mui/material';
import { removeOrder, increaseQuantity, decreaseQuantity } from '../../features/ordersSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import Footer from '../../Companents/Footer';
import './orders.css';

const Orders = () => {
  const orders = useSelector(state => state.orders); // Redux'tan siparişleri alıyoruz
  const dispatch = useDispatch();

  const handleDeleteOrder = (id) => {
    dispatch(removeOrder({ id })); // Siparişi id'ye göre silmek için
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id)); // Miktarı artır
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id)); // Miktarı azalt
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
                      <Typography className="orderrating-box" variant="body2"> {order.rating} </Typography>
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
                        onClick={() => handleDeleteOrder(order.id)} // id'yi doğru şekilde gönderiyoruz
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
      <Footer />
    </>
  );
};

export default Orders;
