// store.js veya store setup dosyanız
import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './features/ordersSlice'; // ordersSlice'ı import ediyoruz
import favoritesReducer from './features/favoritesSlice'; // favoritesSlice'ı da import ediyoruz

const store = configureStore({
  reducer: {
    orders: ordersReducer,    // ordersReducer'ı buraya dahil ediyoruz
    favorites: favoritesReducer,  // favoritesReducer'ı buraya dahil ediyoruz
  },
});

export default store;
