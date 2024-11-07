import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './features/favoritesSlice';
import ordersReducer from './features/ordersSlice';

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    orders: ordersReducer,
  },
});

export default store;
