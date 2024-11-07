// ordersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadOrdersFromLocalStorage = () => {
    const storedOrders = localStorage.getItem('orders');
    return storedOrders ? JSON.parse(storedOrders) : [];
};

const ordersSlice = createSlice({
    name: 'orders',
    initialState: loadOrdersFromLocalStorage(),
    reducers: {
        addOrder: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('orders', JSON.stringify(state)); // LocalStorage'a kaydet
        },
        removeOrder: (state, action) => {
            const updatedOrders = state.filter(order => order.id !== action.payload);
            localStorage.setItem('orders', JSON.stringify(updatedOrders)); // Güncellenmiş siparişleri kaydet
            return updatedOrders;
        },
    },
});

export const { addOrder, removeOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
