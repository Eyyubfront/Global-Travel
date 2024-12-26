import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('orders')) || [];

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
      addOrder: (state, action) => {
        state.push(action.payload);
        localStorage.setItem('orders', JSON.stringify(state));
      },
      removeOrder: (state, action) => {
        const updatedState = state.filter(order => order.id !== action.payload.id);
        localStorage.setItem('orders', JSON.stringify(updatedState));
        return updatedState;
      },
      increaseQuantity: (state, action) => {
        const order = state.find(order => order.id === action.payload);
        if (order) {
          order.quantity += 1;
          localStorage.setItem('orders', JSON.stringify(state));
        }
      },
      decreaseQuantity: (state, action) => {
        const order = state.find(order => order.id === action.payload);
        if (order && order.quantity > 1) {
          order.quantity -= 1;
          localStorage.setItem('orders', JSON.stringify(state));
        }
      }
    }
});

export const { addOrder, removeOrder, increaseQuantity, decreaseQuantity } = ordersSlice.actions;

export default ordersSlice.reducer;
