import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './features/ordersSlice';
import favoritesReducer from './features/favoritesSlice';
import userReducer from './features/userSlice'; 

const store = configureStore({
  reducer: {
    orders: ordersReducer,
    favorites: favoritesReducer,
    user: userReducer, 
  },
});

export default store;
