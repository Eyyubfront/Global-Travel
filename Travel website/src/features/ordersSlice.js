import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('orders')) || [];  // Eğer localStorage'da veri varsa, onu alıyoruz.

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
      addOrder: (state, action) => {
        state.push(action.payload);  // Order verisini Redux store'ına ekliyoruz
        localStorage.setItem('orders', JSON.stringify(state));  // LocalStorage'a kaydediyoruz
      },
      removeOrder: (state, action) => {
        // Siparişi id'ye göre filtreliyoruz
        const updatedState = state.filter(order => order.id !== action.payload.id);  // Burada payload'ın id içermesi gerektiğini belirtiyoruz
        localStorage.setItem('orders', JSON.stringify(updatedState));  // Güncellenmiş state'i localStorage'a kaydediyoruz
        return updatedState;
      },
      increaseQuantity: (state, action) => {
        const order = state.find(order => order.id === action.payload);
        if (order) {
          order.quantity += 1;
          localStorage.setItem('orders', JSON.stringify(state));  // Quantity arttı, localStorage'ı güncelliyoruz
        }
      },
      decreaseQuantity: (state, action) => {
        const order = state.find(order => order.id === action.payload);
        if (order && order.quantity > 1) {
          order.quantity -= 1;
          localStorage.setItem('orders', JSON.stringify(state));  // Quantity azaldı, localStorage'ı güncelliyoruz
        }
      }
    }
  });
export const { addOrder, removeOrder, increaseQuantity, decreaseQuantity } = ordersSlice.actions;

export default ordersSlice.reducer;
