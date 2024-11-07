import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import './OrderModal.css'; // Importing CSS file

const OrderModal = ({ open, onClose, onConfirm, quantity, setQuantity }) => {
    if (!open) return null;

    const handleConfirm = () => {
        onConfirm(quantity); // Send quantity
        setQuantity(1); // Reset quantity
    };

    return (
        <Box className="modal-container">
            <Typography variant="h6" textAlign="center">Place Order</Typography>
            <Stack gap="5px" flexDirection="row" alignItems="center">
                <Button  className='decresebtn' onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</Button>
                <Typography variant="body1">Quantity: {quantity}</Typography>
                <Button className='reducebtn' onClick={() => setQuantity(quantity + 1)}>+</Button>
            </Stack>
            <Box sx={{ marginTop: '20px' }}>
                <Stack flexDirection="row" alignItems="center" gap="10px">
                    <Button className='yesbtn' variant="contained" onClick={handleConfirm}>Place Order</Button>
                    <Button className='notbtn' variant="outlined" onClick={onClose}>Close</Button>
                </Stack>
            </Box>
        </Box>
    );
};

export default OrderModal;
