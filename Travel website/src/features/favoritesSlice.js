import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: JSON.parse(localStorage.getItem('favorites')) || [],
    reducers: {
        addFavorite: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('favorites', JSON.stringify(state)); 
        },
        removeFavorite: (state, action) => {
            const updatedFavorites = state.filter(fav => fav.id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        },
    },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
